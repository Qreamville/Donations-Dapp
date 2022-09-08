import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { ethers } from "ethers";
import artifacts from "../data/Donate.json";
import truncateEthAddress from "truncate-eth-address";

declare var window: any;

type childrenProps = {
  children: ReactNode;
};

type DonationType = {
  connectWallet: () => void;
  isConnected: boolean;
  amountToDonate: (amount: number) => void;
  donate: () => void;
  donors: any[];
};

const DonationsContext = createContext({} as DonationType);

const AppContextProvider = ({ children }: childrenProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [amount, setAmount] = useState(0);
  const [donors, setDonors] = useState([]);

  const gettingDonor = async () => {
    if (typeof window.ethereum != "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x1C89D3e5C78fcBE10E2277Bd2BDa4302720DE599",
        artifacts.abi,
        signer
      );
      try {
        const getDonators = await contract.getDonors();
        const donations = getDonators.map((element: any) => [
          truncateEthAddress(element[0]),
          element[1].toString(),
        ]);
        setDonors(donations);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    gettingDonor();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum != "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
    } else {
      alert("Please install Metamask");
    }
  };

  const amountToDonate = (amount: number) => {
    setAmount(amount);
  };

  const donate = async () => {
    if (typeof window.ethereum != "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x1C89D3e5C78fcBE10E2277Bd2BDa4302720DE599",
        artifacts.abi,
        signer
      );
      try {
        await signer.sendTransaction({
          to: contract.address,
          value: amount,
        });
      } catch (error) {
        console.log(error);
      }
    }
    gettingDonor();
  };

  return (
    <DonationsContext.Provider
      value={{ connectWallet, isConnected, amountToDonate, donate, donors }}
    >
      {children}
    </DonationsContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DonationsContext);
};

export default AppContextProvider;

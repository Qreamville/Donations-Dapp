import React from "react";
import { useGlobalContext } from "../context/DonationsContext";

type amountProps = {
  amounts: number;
};

const PriceFeed = ({ amounts }: amountProps) => {
  const { amountToDonate } = useGlobalContext();
  return (
    <div
      className="border border-[#100e34] px-2 py-1 rounded-xl  hover:bg-white hover:text-[#100e34] cursor-pointer"
      onClick={() => amountToDonate(amounts)}
    >
      <span className="text-sm md:text-base font-bold">{amounts} WEI</span>
    </div>
  );
};

export default PriceFeed;

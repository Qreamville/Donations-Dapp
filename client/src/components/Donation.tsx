import { useGlobalContext } from "../context/DonationsContext";
import PriceFeed from "./PriceFeed";

const Donation = () => {
  const { donate } = useGlobalContext();

  const amounts = [10, 50, 20, 60].map((amount, _index) => {
    return <PriceFeed amounts={amount} key={_index} />;
  });

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-lg font-semibold">Select amount(in Wei)</p>
      <div className="flex gap-x-4">{amounts}</div>
      <button
        className="bg-red-700 py-3 font-bold hover:bg-red-600"
        onClick={donate}
      >
        Donate Now
      </button>
    </div>
  );
};

export default Donation;

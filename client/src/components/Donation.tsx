import PriceFeed from "./PriceFeed";

const Donation = () => {
  const amounts = [0.1, 0.5, 1, 2].map((amount, _index) => {
    return <PriceFeed amounts={amount} key={_index} />;
  });

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-lg font-semibold">Select amount(in ETH)</p>
      <div className="flex gap-x-4">{amounts}</div>
      <button className="bg-red-700 py-3 font-bold hover:bg-red-600">
        Donate Now
      </button>
    </div>
  );
};

export default Donation;

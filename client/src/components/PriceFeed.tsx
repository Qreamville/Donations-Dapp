import React from "react";

type amountProps = {
  amounts: number;
};

const PriceFeed = ({ amounts }: amountProps) => {
  return (
    <div className="border border-[#100e34] px-2 py-1 rounded-xl  hover:bg-white hover:text-[#100e34] cursor-pointer">
      <span className="text-sm md:text-base font-bold">{amounts} ETH</span>
    </div>
  );
};

export default PriceFeed;

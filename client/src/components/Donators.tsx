import React from "react";
import SingleDonors from "./SingleDonors";

const Donators = () => {
  const donors = [
    [3, "0x334477yFRwwrhnmC4"],
    [3, "0x334477yFRwwrhnmC4"],
    [3, "0x334477yFRwwrhnmC4"],
    [3, "0x334477yFRwwrhnmC4"],
    [3, "0x334477yFRwwrhnmC4"],
  ].map(([amount, addr], _index) => {
    return <SingleDonors ethPaid={amount} address={addr} />;
  });

  return <div>{donors}</div>;
};

export default Donators;

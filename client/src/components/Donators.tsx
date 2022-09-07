import React from "react";
import { useGlobalContext } from "../context/DonationsContext";
import SingleDonors from "./SingleDonors";

const Donators = () => {
  const { donors } = useGlobalContext();

  return (
    <div>
      <ul>
        {donors.map(([addr, amount], _index) => {
          return <SingleDonors ethPaid={amount} address={addr} key={_index} />;
        })}
      </ul>
    </div>
  );
};

export default Donators;

import React from "react";

type DonorProps = {
  ethPaid: number | string;
  address: string | number;
};
const SingleDonors = ({ ethPaid, address }: DonorProps) => {
  return (
    <div>
      ❤ {ethPaid} ETH by {address}
    </div>
  );
};

export default SingleDonors;

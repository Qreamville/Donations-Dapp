import React from "react";

type DonorProps = {
  ethPaid: number | string;
  address: string | number;
};
const SingleDonors = ({ address, ethPaid }: DonorProps) => {
  return (
    <li>
      ❤ {ethPaid} WEI by {address}
    </li>
  );
};

export default SingleDonors;

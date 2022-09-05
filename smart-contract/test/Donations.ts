import { assert } from "chai";
import { ethers } from "hardhat";
import { Donate, Donate__factory } from "../typechain-types";

describe("Donations", () => {
  let Donations: Donate__factory;
  let donations: Donate;

  beforeEach(async () => {
    const [owner] = await ethers.getSigners();
    Donations = await ethers.getContractFactory("Donate", owner);
    donations = await Donations.deploy();
  });

  it("transfers ether to the contract", async () => {
    const [owner, signer1] = await ethers.getSigners();
    await signer1.sendTransaction({
      to: donations.address,
      value: "100",
    });
    const balance = await ethers.provider.getBalance(donations.address);
    assert.equal(balance.toString(), "100");
  });

  it("returns total donations", async () => {
    const [owner, signer1, signer2, signer3] = await ethers.getSigners();

    await signer1.sendTransaction({
      to: donations.address,
      value: "100",
    });

    await signer2.sendTransaction({
      to: donations.address,
      value: "100",
    });

    await signer3.sendTransaction({
      to: donations.address,
      value: "100",
    });
    const totalDonations = await donations.getTotalDonations();
    assert.equal(totalDonations.toNumber(), 300);
  });

  it("returns array of all donator", async () => {
    const [owner, signer1, signer2, signer3] = await ethers.getSigners();

    await signer1.sendTransaction({
      to: donations.address,
      value: "100",
    });

    await signer2.sendTransaction({
      to: donations.address,
      value: "200",
    });

    await signer3.sendTransaction({
      to: donations.address,
      value: "300",
    });

    const donorArray = await donations.getDonors();

    assert.equal(donorArray[0].donor, signer1.address);
    assert.equal(donorArray[0].amount.toString(), "100");

    assert.equal(donorArray[1].donor, signer2.address);
    assert.equal(donorArray[1].amount.toString(), "200");

    assert.equal(donorArray[2].donor, signer3.address);
    assert.equal(donorArray[2].amount.toString(), "300");
  });
});

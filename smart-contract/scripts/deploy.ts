import { ethers, run } from "hardhat";

const verify = async (contractAddress: string, args: any[]) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

async function main() {
  const [owner, signer1, signer2, signer3] = await ethers.getSigners();

  const Donate = await ethers.getContractFactory("Donate", owner);
  const donate = await Donate.deploy();
  await donate.deployed();
  // await verify(donate.address, []);
  console.log(`deployed to ${donate.address} by ${owner.address}`);
  // owner: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  // contract.address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

  await signer1.sendTransaction({
    to: donate.address,
    value: ethers.utils.parseUnits("0.1", 18),
  });

  await signer1.sendTransaction({
    to: donate.address,
    value: ethers.utils.parseUnits("0.1", 18),
  });

  await signer1.sendTransaction({
    to: donate.address,
    value: ethers.utils.parseUnits("0.1", 18),
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

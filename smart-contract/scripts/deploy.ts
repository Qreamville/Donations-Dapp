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
  const [owner] = await ethers.getSigners();

  const Donate = await ethers.getContractFactory("Donate", owner);
  const donate = await Donate.deploy();
  await donate.deployed();
  await verify(donate.address, []);
  console.log(`deployed to ${donate.address} by ${owner.address}`);
  // contract.address: 0x1C89D3e5C78fcBE10E2277Bd2BDa4302720DE599
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

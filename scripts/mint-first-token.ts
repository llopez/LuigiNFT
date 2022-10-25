// DO NOT RUN THIS FILE MORE THAN ONCE
// YOU NEED TO MINT PASSING A NEW URI PARAM

import { ethers } from "hardhat";

async function main() {
  const luigi = await ethers.getContractAt(
    "Luigi",
    "0xE63F2eD9267c44e74C49f709DC4E5b7e9650E06A"
  );

  const owner = await luigi.owner();
  const uri =
    "https://bafybeibdbxgtmtzsoxq2kqy6k33u52imlkb2n3wpr3ryqjzswasit7zvii.ipfs.dweb.link";

  const result = await luigi.safeMint(owner, uri);
  console.log(result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Luigi", () => {
  const deployFixture = async () => {
    const [owner, otherAccount] = await ethers.getSigners();

    const Luigi = await ethers.getContractFactory("Luigi");

    const luigi = await Luigi.deploy();

    return { luigi, owner, otherAccount };
  };

  describe("Minting", () => {
    it("mints to user", async () => {
      const { luigi, otherAccount } = await loadFixture(deployFixture);

      await luigi.safeMint(otherAccount.address, "ipfs://token-metadata-url");

      expect(await luigi.balanceOf(otherAccount.address)).to.be.equal(1);

      expect(await luigi.ownerOf(0)).to.be.equal(otherAccount.address);

      expect(await luigi.tokenURI(0)).to.be.equal("ipfs://token-metadata-url");
    });
  });
});

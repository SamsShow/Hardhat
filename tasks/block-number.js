const { task } = require("hardhat/config");

task("block-number", "print the current block number").setAction(
  async (taskArgs, hre) => {
    const blocknumber = await hre.ethers.provider.getBlockNumber();
    console.log("Current block number: ", blocknumber);
  }
);module.exports = {};

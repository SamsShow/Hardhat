const hre = require("hardhat");

// Importing hardhat

async function main() {
  // Getting the contract factory
  const SimpleStorageFactory = await hre.ethers.getContractFactory(
    "SimpleStorage"
  );

  // Deploying the contract and waiting for it to be mined
  const simpleStorage = await SimpleStorageFactory.deploy();
  //   await simpleStorage.deployed(); -> This is not needed in the higher versions of ethers.js

  console.log("MyContract deployed to:", simpleStorage.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

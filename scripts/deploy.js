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
  console.log(hre.network.config);

//   await verify(simpleStorage.target, []);

  const currentvalue = await simpleStorage.retrieve();
  console.log("Current value of the contract is:", currentvalue);

  //Update Current value
  const transaction = await simpleStorage.store(100);
  await transaction.wait(1);
  const updatedvalue = await simpleStorage.retrieve();
  console.log(updatedvalue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

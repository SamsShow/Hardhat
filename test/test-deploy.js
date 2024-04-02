// In Hardhat, tests are used to verify the behavior of your smart contracts. They can help you ensure that your contracts work as expected, and they can prevent regressions when you make changes to your code.

const hre = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await hre.ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a faviourite number of 0", async function () {
    const currentvalue = await simpleStorage.retrieve();
    const expectedValue = 0;
    //assert
    //expect
    assert.equal(
      currentvalue,
      expectedValue,
      "The current value does not match the expected value"
    );
  });
  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transaction = await simpleStorage.store(expectedValue);
    await transaction.wait(1);

    currentvalue = await simpleStorage.retrieve();
    assert.equal(
      currentvalue,
      expectedValue,
      "The current value does not match the expected value"
    );
  });
});

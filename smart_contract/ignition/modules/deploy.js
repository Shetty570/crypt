const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  // Deploy the contract
  const transactions = await Transactions.deploy();
  await transactions.waitForDeployment();

  // Use getAddress() to retrieve the contract address
  const address = await transactions.getAddress();
  console.log("Transactions contract deployed to:", address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);  // Exit process with success code
  } catch (error) {
    console.error(error);
    process.exit(1);  // Exit process with error code
  }
};

runMain();

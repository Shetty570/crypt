require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",  // Update solidity version as per your project requirement
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ACCO_wJ-5YNry5ZaL6S4AHXXQNXEwHHP", 
      accounts: [`${process.env.PRIVATE_KEY}`] 
    }
  }
};

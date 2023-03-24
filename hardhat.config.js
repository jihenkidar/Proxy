require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");// fo rupgrating 
//require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const {
  MUMBAI_API_URL,
  PRIVATE_KEY,
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
 
};
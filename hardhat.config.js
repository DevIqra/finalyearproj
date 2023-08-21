require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
hardhat:{
  polygon_mumbai:{
    url:"https://polygon-mumbai.g.alchemy.com/v2/lzlUC4XMQFrscoNRNP9qZxXdCON7vDkw",
    accounts:[
      '0x${44780fa1fc3fb22fba33ceb3235bccaec611ea3149b1417f6019c1e03050e31a}'
    ],
  },
},
  },



};

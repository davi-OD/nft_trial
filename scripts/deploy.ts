// Import the Hardhat package
const hre = require("hardhat")

async function main() {
    // Using `hre` - Hardhat Runtime Environment - we find and deploy
    // a contract named `NFT33`

    const nftContract = await hre.ethers.deployContract("NFT33");

    // We wait for the contract to finish deploying
    await nftContract.waitForDeployment();

    // We print the address of the deployed contract to our console
    console.log("NFT Contract Address:", nftContract.target);

}

// Call the main function and catch if there is any error

main().then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1)
    
});
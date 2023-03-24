async function main() {
    const proxyAddress = "0xd52257b80eAFc27Dd5D2187819583B0fCb5a29a9"
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    console.log("Preparing upgrade...")
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2)
    console.log("BoxV2 at:", boxV2Address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let box = await upgrades.upgradeProxy("0xd52257b80eAFc27Dd5D2187819583B0fCb5a29a9", BoxV2)
    console.log("Your upgraded proxy is done!", box.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
async function main() {
    const gnosisSafe = " 0x13DBcD9B4Af49be83FCD4938E3A7AC533C2EbAac"

    console.log("Transferring ownership of ProxyAdmin...")
    // The owner of the ProxyAdmin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe)
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
var eth;
var isTestnet = 'false';
async function addNetwork(type) {

    if (type === 'web3') {
        if (typeof ethereum !== 'undefined') {
            eth = new Web3Eth(ethereum);
        } else if (typeof web3 !== 'undefined') {
            eth = new Web3Eth(web3.givenProvider);
        } else {
            eth = new Web3Eth(ethereum);
        }
    }
    if (typeof eth !== 'undefined') {
        var network = 0;
        network = await eth.net.getId();
        netID = network.toString();
        var params;
        if (isTestnet == "false") {
            if (netID == "268") {
                alert("Renloi Mainnet has already been added to Metamask.");
                return;
            } else {
                params = [{
                    chainId: '0x10C',
                    chainName: 'Renloi Mainnet',
                    nativeCurrency: {
                        name: 'Renloi',
                        symbol: 'Renloi',
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc.renloi.org'],
                    blockExplorerUrls: ['https://explorer.renloi.org']
                }]
            }
        }

        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params
        }).then(()=>console.log('Success')).catch((error)=>console.log("Error", error.message));
    } else {
        alert('Unable to locate a compatible web3 browser!');
    }
}

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rebel stereo pulse grace infant equal gather'; 
let testAccounts = [
"0x07e196bda3251de2d2dcd958f2bde70a75aa86c6c454140d9369e4f4b7d9dacb",
"0xfa1a98621943ad47daf997285c1416088aef4fb654f38850f8875cd9ce3ec9a7",
"0xe762f8130d2400f3ebc883d9d05955b009634ccbb5b278dd151359f3430678ce",
"0x29e85a987e5313341758cd357750c57ce02410dd6a42e4b803107b2e0d41dd62",
"0xecf8f03925fcfd0952424fc283bf1259ced39a31e516e1247d6fb34beed8d617",
"0x6e39fbca9024a2b9ff93627020ad7d744a8c5c69c75707d0f52260247c7996a7",
"0x9275761065c50663938095c31e45b0175e2c7e6e154493f928c1a90531006fab",
"0x843dc9245ae22d37163fe8e90b8970195eca86d64ee1a4ff62f14702ab39c8ab",
"0x00cf228ec88b12b127b4c74685a3b47a4a6f04312b3b3ee3df5c7874d15128f3",
"0x5e9c305b2fe871cb70309327d1044bbad7fb59cf811f4da96a9c52d6103f3250"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


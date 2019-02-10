const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//ganache network port 8545
const web3 = new Web3(Web3.providers.HttpProvider(
"http://localhost:8545"));

const { interface, bytyecode } = require('../compile');

let accounts;
let inbox;
beforeEach( async () => {
//Get a list of all accounts
    accounts = await web3.eth.getAccounts();

//Use one of those accounts to deploy 
//the contract
    inbox = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode, arguments: ['cyka blyat'] })
    .send({ gas: '1000000', from: accounts[0] });
    /*await new web3.eth.Contract(JSON.parse(interface))
        .deploy(   {data: bytecode, arguments: ['cyka blyat'] })
        .send({ from: accounts[0], gas: '1000000' })*/

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    } );
});
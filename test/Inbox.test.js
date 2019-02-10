const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//ganache network port 8545
const web3 = new Web3(Web3.providers.HttpProvider(
"http://localhost:8545"));

const { interface, bytyecode } = require('../compile');

let accounts;
beforeEach( async () => {
//Get a list of all accounts
    accounts = await web3.eth.getAccounts();

//Use one of those accounts to deploy 
//the contract

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    } );
});
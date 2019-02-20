const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//ganache network port 8545
const web3 = new Web3(new Web3.providers.HttpProvider(
"http://localhost:8545"));

const { abi, evm } = require('../compile');

let accounts;
let inbox;

console.log(abi);

beforeEach( async () => {
//Get a list of all accounts
    accounts = await web3.eth.getAccounts();

//Use one of those accounts to deploy 
//the contract
    inbox = await new web3.eth.Contract(abi)
        .deploy(   {data:  evm.bytecode.object, arguments: ['cyka blyat'] })
        .send({ from: accounts[0], gas: '1000000' })


});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    } );
    it('has a default message', async () => {
            const message = await inbox.methods.message().call();
            assert.equal(message, 'cyka blyat');
    });
    it ('can change the message', async () => {
        await inbox.methods.setMessage('blin').send({ from: accounts[0],gas: '1000000' });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'blin');
    });
});
var DappToken = artifacts.require("./DappToken.sol");

contract('DappToken', function(accounts) {

  it('initializes the contract with the correct values', async ()=> {
    let tokenInstance = await DappToken.deployed();
    let name = await tokenInstance.name();
    assert.equal(name, 'DApp Token', 'has the correct name');
    let symbol = await tokenInstance.symbol();
    assert.equal(symbol, 'DAPP', 'has the correct symbol');
    let standard = await tokenInstance.standard();
    assert.equal(standard, 'DApp Token v1.0', 'has the correct standard');
  })


  it('sets the total supply upon deployment', async () => {
    let tokenInstance = await DappToken.deployed();
    let totalSupply = await tokenInstance.totalSupply();
    assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
    let  adminBalance = await tokenInstance.balanceOf(accounts[0]);
    assert.equal(adminBalance.toNumber(), 1000000 , 'it allocates the initial supply to the admin account');
    
    // return DappToken.deployed().then(function(instance) {
    //   tokenInstance = instance;
    //   return tokenInstance.totalSupply();
    // }).then(function(totalSupply) {
    //   assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
    //   return tokenInstance.balanceOf(accounts[0]);
    // }).then( function(adminBalance) { 
    //   assert.equal(adminBalance.toNumber(), 1000000 , 'it allocates the initial supply to the admin account');
    // } )
  });
})
 
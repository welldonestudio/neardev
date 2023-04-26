import React from 'react';

const sendTransaction = async () => {
  // get accounts first
  const accounts = await window.dapp.request('ethereum', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['ethereum'].address,
    to: '0x08505F42D5666225d5d73B842dAdB87CCA44d1AE', //allthatnode
    value: '0x00',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try {
    const response = await dapp.request('ethereum', {
      method: 'dapp:signAndSendTransaction',
      params: [transactionParameters],
    });
    const txHash = response[0];
  } catch (error) {
    /* 
      {
        message: 'User denied transaction signature',
        code: 4001,
      }
    */
  }
};

const UniswapForm = () => {
  return (
    <div className="uniswap-form">
      <h3>Uniswap V3</h3>
      <div className="input-group mb-3">
        <input type="number" className="form-control" placeholder="From amount" value={1} />
        <select className="custom-select">
          <option value="NEAR">ETH</option>
          {/* Add more token options here */}
        </select>
      </div>
      <div className="input-group mb-3">
        <input type="number" className="form-control" placeholder="To amount" value={2100} />
        <select className="custom-select">
          <option value="USDT">DAI</option>
          {/* Add more token options here */}
        </select>
      </div>
      <button className="btn btn-primary swap-btn" onClick={sendTransaction}>Swap</button>
    </div>
  );
};

export default UniswapForm;

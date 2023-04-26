import React from 'react';
import { providers, transactions, utils } from 'near-api-js';

const getSerializedTransaction = async (accounts) => {
  const rpc = 'https://rpc.testnet.near.org';
  const provider = new providers.JsonRpcProvider(rpc);
  const accountLocal = 'dsrv-kms.testnet';
  const publicKey = "ed25519:AW35EZSB4SjwqcTBVE2fMXyeVVj6zoPCzLpy1PXeXPxH";
  const signerId = accountLocal;
  const accessKey = await provider.query(`access_key/${signerId}/${publicKey}`, '');
  const actions = [transactions.transfer(10)];
  const recentBlockHash = utils.serialize.base_decode(accessKey.block_hash);

  const transaction = transactions.createTransaction(
    accountLocal,
    utils.PublicKey.fromString(publicKey),
    '9bfd12934cd6fdd09199e2e267803c70bd7c6cb40832ac6f29811948dde2b723',
    accessKey.nonce + 1,
    actions,
    recentBlockHash,
  );

  const bytes = transaction.encode();

  return Buffer.from(bytes).toString('hex');
};

const sendTransaction = async () => {
  // get accounts first
  const accounts = await window.dapp.request('near', { method: 'dapp:accounts' });
  const HEX_STRING_TX_DATA = await getSerializedTransaction(accounts);
  // sending a transaction
  try {
    const response = await window.dapp.request('near', {
      method: 'dapp:signAndSendTransaction',
      params: [
        // use serialized transaction
        [`0x${HEX_STRING_TX_DATA}`]
      ]
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
}

const RefFinanceForm = () => {
  return (
    <div className="ref-finance-form">
      <h3>Ref.Finance</h3>
      <div className="input-group mb-3">
        <input type="number" className="form-control" placeholder="From amount" value={1} />
        <select className="custom-select">
          <option value="NEAR">NEAR</option>
          {/* Add more token options here */}
        </select>
      </div>
      <div className="input-group mb-3">
        <input type="number" className="form-control" placeholder="To amount" value={20} />
        <select className="custom-select">
          <option value="USDT">REF</option>
          {/* Add more token options here */}
        </select>
      </div>
      <button className="btn btn-primary swap-btn" style={{ backgroundColor: '#00ba98' }} onClick={sendTransaction}>Swap</button>
    </div>
  );
};

export default RefFinanceForm;

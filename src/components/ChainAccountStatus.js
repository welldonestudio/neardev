import React, { useState, useEffect } from 'react';
import UniswapForm from './UniswapForm';
import RefFinanceForm from './RefFinanceForm';

const ChainAccountStatus = ({ accountStatus, dappProvider }) => {
  const [balances, setBalances] = useState({});
  const [selectedChain, setSelectedChain] = useState('');

  const truncate = (str, startLength = 6, endLength = 4) => {
    if (str.length <= startLength + endLength) {
      return str;
    }
    return str.substring(0, startLength) + '...' + str.substring(str.length - endLength);
  };

  const handleSwapClick = (chain) => {
    setSelectedChain(chain);
  };

  const renderSwapForm = () => {
    if (selectedChain === 'ethereum') {
      return <UniswapForm />;
    } else if (selectedChain === 'near') {
      return <RefFinanceForm />;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const fetchBalances = async () => {
      console.log(accountStatus)
      const balancePromises = Object.entries(accountStatus).map(async ([chain, data]) => {
        const balance = await dappProvider.request(chain, {
          method: 'dapp:getBalance',
          params: [data.account.address],
        });
        return { chain, balance };
      });

      const fetchedBalances = await Promise.all(balancePromises);
      const newBalances = fetchedBalances.reduce((balances, { chain, balance }) => {
        if (chain === 'ethereum') {
          balances[chain] = (balance / 1e18).toFixed(1);
        } else if (chain === 'near') {
          balances[chain] = (balance / 1e24).toFixed(1);
        } else if (chain === 'aptos') {
          balances[chain] = (balance / 1e10).toFixed(1);
        } else if (chain === 'sui') {
          balances[chain] = (balance / 1e9).toFixed(1);
        }
        return balances;
      }, {});

      setBalances(newBalances);
    };

    fetchBalances();
  }, [accountStatus, dappProvider]);

  return (
    <div className="chain-account-status-container">
      <div className="chain-account-status-left">
        <h3>Chain Account Status</h3>
        <table>
          <thead>
            <tr>
              <th>Chain</th>
              <th>Address</th>
              <th>Balance</th>
              <th>Public Key</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(accountStatus).map(([chain, data]) => (
              <tr key={chain}>
                <td>{chain}</td>
                <td>{truncate(data.account.address)}</td>
                <td>{balances[chain] || 'Loading...'}</td>
                <td>{truncate(data.account.pubKey)}</td>
                <td>
                  {/* <button className="btn btn-outline-primary btn-sm">Send</button> */}
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleSwapClick(chain)}
                  >
                    Swap
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chain-account-status-right">
        {renderSwapForm()}
      </div>
    </div>
  );
};

export default ChainAccountStatus;
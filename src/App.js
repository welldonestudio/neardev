import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import APIPage from './pages/APIPage';
import GameNearPage from './pages/GameNearPage';
import GameSuiPage from './pages/GameSuiPage';

function App() {
  const [account, setAccount] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState('')
  const [dapp, setDapp] = useState()

  const dappProvider = window.dapp;

  useEffect(() => {
    const connect = async () => {
      if (active) {
        try {
          if (dappProvider) {
            dappProvider.on('dapp:chainChanged', (provider) => {
              window.location.reload();
            });

            dappProvider.on('dapp:accountsChanged', (provider) => {
              window.location.reload();
            });

            if (Object.keys(dappProvider.networks).length === 0) {
              setAccount('');
              setBalance('');
              setActive(false);
              setError('Unlock your WELLDONE Wallet OR Create Account')
            } else {
              await dappProvider.request('near', {
                method: 'dapp:accounts',
              })
              setDapp(dappProvider)
              setActive(true);
            }

          } else {
            setAccount('');
            setBalance('');
            setActive(false);
            setError('Please Install WELLDONE Wallet http://abit.ly/install-welldone-wallet . If you have installed it, please press the refresh button.');
          }
        } catch (e) {
          console.error(e);
          setError(e.message)
          setActive(false);
        }
      }
    }
    connect();
  }, [active, dappProvider])

  return (
    <div className="App">
      <Router>
        <Header active={active} setActive={setActive} error={error} setError={setError} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/universal-serializer" component={APIPage} />
          <Route path="/game-near" component={GameNearPage} />
          <Route path="/game-sui" component={GameSuiPage} />
          {/* Add more routes here */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
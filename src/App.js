import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import CardList from './components/CardList';
import ChainAccountStatus from './components/ChainAccountStatus';
import videoFile from './assets/videos/gateway.mp4';

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
        <div>
          <Banner />
        </div>
        <div className="intro-text">
          WELLDONE Gateway is an onboarding platform for multi-chain developers. Start your multi-chain journey with minimal tools. By connecting to the WELLDONE Wallet and selecting a chain, you can access services such as Swap, Lending, Aggregator, and NFT for the respective chain.
        </div>
        {/* {
          dapp ?
            <ChainAccountStatus accountStatus={dappProvider.networks} dappProvider={dappProvider} /> : false
        } */}

        <CardList />
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            width="60%"
            height="100%"
          >
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
        <Switch>
          {/* <Route path="/" exact component={CardList} /> */}
          {/* Add more routes here */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
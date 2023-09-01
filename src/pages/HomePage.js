import React from 'react';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
// import ChainAccountStatus from '../components/ChainAccountStatus';
import videoFile from '../assets/videos/gateway.mp4';

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;

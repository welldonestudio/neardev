import React from 'react';
import Card from './Card';

function CardList() {
  // Replace with your data or fetch data from an API
  const cardsData = [
    { id: 1, title: 'WELLDONE Wallet', description: 'Multichain Wallet', link: 'https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf' },
    { id: 2, title: 'WELLDONE Code', description: 'Remix IDE for NEAR', link: 'https://medium.com/nearprotocol/welldone-code-1-remix-ide-plugin-for-multichain-4b5228419ce5' },
    { id: 3, title: 'Verification API', description: "Don't trust, verify.", link: 'https://medium.com/nearprotocol/welldone-code-2-dont-trust-verify-92a7ae2fe0b2' },
  ];

  return (

    <section className="container" style={{ marginBottom: "50px" }}>
      <div className="row gy-4">
        {cardsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
}

export default CardList;

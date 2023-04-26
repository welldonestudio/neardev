import React from 'react';
import Card from './Card';

function CardList() {
  // Replace with your data or fetch data from an API
  const cardsData = [
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' },
  ];

  return (

    <section className="container">
      <div className="card-title">
        WELLDONE Wallet
      </div>
      <div className="row gy-4">
        {cardsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
}

export default CardList;

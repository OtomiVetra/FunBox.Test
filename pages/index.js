import { useState } from 'react';
import Card from '../components/Card';
const IndexPage = () => {
  const [cards, setCards] = useState([
    {
      active: true,
      ingred: 'с фуа-гра',
    },
    {
      active: false,
      ingred: 'с курой',
    },
    {
      active: false,
      ingred: 'с фуа-гра',
    },
  ]);
  const handleClick = (i) => {
    setCards(
      cards.map((card, j) => {
        if (i !== j) return card;
        return { ...card, active: !card.active };
      })
    );
  };

  return (
    <div className="background page">
      <div className="page__content">
        <h1 className="header">Ты сегодня покормил кота?</h1>
        <div className="cards">
          {cards.map((card, i) => {
            return <Card key={i} card={card} onClick={() => handleClick(i)} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

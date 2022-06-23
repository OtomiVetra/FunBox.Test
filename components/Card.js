const Card = ({ card, onClick }) => {
  const { ingred, active } = card;
  const cardClasses = ['card'];
  if (active) {
    cardClasses.push('card_active');
  }
  return (
    <div className={cardClasses.join(' ')} onClick={onClick}>
      <img className="card__bg" src="/image/card-bg.png" />
      <div className="card__content">
        <p className="card__text">Сказочное заморское явство</p>
        <h3 className="card__product-name">Нямушка</h3>
        <p className="card__product-ingred">{ingred}</p>
        <p className="card__product-amount">10 порций</p>
        <p className="card__product-stock">мышь в подарок</p>
        <div className="card__circle"></div>
      </div>
    </div>
  );
};

export default Card;

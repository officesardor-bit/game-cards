function GameCard({ name, emoji, rating }) {
  return (
    <div className="game-card">
      <div className="game-emoji">{emoji}</div>
      <h2 className="game-name">{name}</h2>
      <p className="game-rating">⭐ {rating} / 10</p>
    </div>
  );
}

export default GameCard;
import GameCard from "./GameCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Sevimli O'yinlarim</h1>
      <div className="card-list">
        <GameCard name="FIFA 17" emoji="⚽" rating={9.2} />
        <GameCard name="F1 2016" emoji="🏎️" rating={8.9} />
        <GameCard name="Minecraft" emoji="⛏️" rating={9.5} />
      </div>
    </div>
  );
}

export default App;
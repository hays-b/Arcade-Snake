import "../style/App.css";
import GameProvider from "./context/GameContext";
import Board from "./Board";
import PlayAgain from "./PlayAgain";
import ScoreDisplay from "./ScoreDisplay";
import StartGame from "./StartGame";

function App() {

  return (
    <div className="App">
      <GameProvider>
        <StartGame />
        <ScoreDisplay />
        <PlayAgain />
        <Board />
      </GameProvider>
    </div>
  );
}

export default App;

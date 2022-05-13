import "../style/App.css";
import GameProvider from "./context/GameContext";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <GameProvider>
        <Main />
      </GameProvider>
    </div>
  );
}

export default App;

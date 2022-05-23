import "../style/App.css";
import GameProvider from "./context/GameContext";
import Main from "./Main";
import background from "../images/arcade-background.png"
import foreground from "../images/arcade-foreground.png"

function App() {
  return (
    <div className="app">
      <img
          className="background"
          src={background}
          width="2000px"
          height="2000px"
          alt="background"
        />

<img
          className="foreground"
          src={foreground}
          width="2000px"
          height="2000px"
          alt="foreground"
        />
      <GameProvider>
        <Main />
      </GameProvider>
    </div>
  );
}

export default App;

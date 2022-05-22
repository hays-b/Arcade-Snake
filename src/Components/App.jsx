import "../style/App.css";
import GameProvider from "./context/GameContext";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <img
          className="background"
          src="https://res.cloudinary.com/dezxd4zbm/image/upload/v1653257845/EliteWebServices/arcade-snake/arcade-background_yt4l6t.png"
          width="2000px"
          height="2000px"
          alt="background"
        />

<img
          className="foreground"
          src="https://res.cloudinary.com/dezxd4zbm/image/upload/v1653257869/EliteWebServices/arcade-snake/arcade-foreground_s5fkvu.png"
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

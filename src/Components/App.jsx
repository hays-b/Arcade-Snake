import "../style/App.css";
import GameProvider from "./context/GameContext";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <img
          className="background"
          src="https://res.cloudinary.com/dezxd4zbm/image/upload/v1653181753/EliteWebServices/arcade-snake/Untitled_Artwork_sbeb52.png"
          width="2000px"
          height="2000px"
          alt="background"
        />

<img
          className="foreground"
          src="https://res.cloudinary.com/dezxd4zbm/image/upload/v1653182813/EliteWebServices/arcade-snake/screen-cover_o6ma4e.png"
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

import useGame from "./hooks/useGame";
import Board from "./Board";
import PlayAgain from "./PlayAgain";
import Menu from "./Menu";
import ScoreDisplay from "./ScoreDisplay";
import Settings from "./Settings";
import NewHighScore from "./NewHighScore";
import AllHighScores from "./AllHighScores";
import Buttons from "./Buttons";

function Main() {
  const { gameState, route, newHighScore } = useGame();

  return (
    <div className="main">
      <ScoreDisplay />
      <Buttons />
      {route === "menu" ? <Menu /> : null}
      {route === "settings" ? <Settings /> : null}
      {route === "game" ? (
        <>
          {gameState.gameOver ? (
            <div className="play-again-container">
              {newHighScore ? <NewHighScore /> : null}
              <PlayAgain />
            </div>
          ) : null}
        </>
      ) : null}
      {route === "allhighscores" ? <AllHighScores /> : null}
      {/* Board is always visible. It's just in the background if not being played */}
      <Board />
    </div>
  );
}

export default Main;

import useGame from "./hooks/useGame";
import Board from "./Board";
import PlayAgain from "./PlayAgain";
import Menu from "./Menu";
import ScoreDisplay from "./ScoreDisplay";
import Settings from "./Settings";
import NewHighScore from "./NewHighScore";

function Main() {
  const { gameState, route } = useGame();

  return (
    <div className="main">
      {route === 'menu' ? <Menu />: null}
      {route === 'settings' ? <Settings />: null}
      {route === 'game' ?
        <>
          {gameState.gameOver ? <PlayAgain /> : null}
          {gameState.newHighScore && gameState.gameOver ? <NewHighScore /> : null}
        </>
        : null
      }
    {/* Board is always visible. It's just in the background if not being played */}
      <ScoreDisplay />
      <Board />
    </div>
  );
}

export default Main;

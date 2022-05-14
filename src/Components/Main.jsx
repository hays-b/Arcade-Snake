import useGame from "./hooks/useGame";
import Board from "./Board";
import PlayAgain from "./PlayAgain";
import StartGame from "./StartGame";
import ScoreDisplay from "./ScoreDisplay";

function Main() {
  const { gameState } = useGame();

  return (
    <div className="main">
      {gameState.menu ? (
        <StartGame />
      ) : (
        <>
          {gameState.gameOver ? <PlayAgain /> : null}
        </>
      )}
    {/* Board is always visible. It's just in the background if not being played */}
      <ScoreDisplay />
      <Board />
    </div>
  );
}

export default Main;

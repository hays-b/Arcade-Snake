import React from "react";
import useGame from "./hooks/useGame";

const PlayAgain = () => {
  const { boardState, gameState, setGameState, setRoute, newHighScore, setNewHighScore } = useGame();

  return (
      <div className={newHighScore ? "play-again-container play-again-conditional": "play-again-container"}>
    <button
      className="play-again"
      onClick={(e) => {
        e.preventDefault();
        setGameState({ ...gameState, score: 0, gameOver: false })
        setNewHighScore(false);
      }}
    >
      PLAY AGAIN
    </button>
    <button
      className="play-again"
      onClick={(e) => {
        e.preventDefault();
        setRoute('menu')
        setNewHighScore(false);
        boardState.ctx.fillStyle = "black";
        boardState.ctx.fillRect(0, 0, board.width, board.height);
      }}
    >
      MENU
    </button>

    </div>
  );
};

export default PlayAgain;

import React from "react";
import useGame from "./hooks/useGame";

const PlayAgain = () => {
  const { boardState, gameState, setGameState } = useGame();

  return (
      <div className="play-again-container">
    <button
      className="play-again"
      onClick={(e) => {
        e.preventDefault();
        setGameState({ ...gameState, score: 0, gameOver: false });
      }}
    >
      PLAY AGAIN
    </button>
    <button
      className="play-again"
      onClick={(e) => {
        e.preventDefault();
        setGameState({ ...gameState, score: 0, menu: true });
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

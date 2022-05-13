import React from "react";
import useGame from "./hooks/useGame";

const PlayAgain = () => {
  const { gameState, setGameState } = useGame();

  return (
      <div className="play-again-container">
    <button
      className="play-again"
      onClick={(e) => {
        e.preventDefault();
        setGameState({ ...gameState, score: 0, gameOver: false });
      }}
    >
      Play Again
    </button>
    <button
      className="play-again"
    >
      Menu
    </button>

    </div>
  );
};

export default PlayAgain;

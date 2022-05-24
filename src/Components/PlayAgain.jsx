import React from "react";
import useGame from "./hooks/useGame";

const PlayAgain = () => {
  const {
    boardState,
    gameState,
    setGameState,
    setRoute,
    newHighScore,
    setNewHighScore,
  } = useGame();

  return (
    <>
      <button
        className="play-again"
        onClick={(e) => {
          e.preventDefault();
          setGameState({ ...gameState, score: 0, gameOver: false });
          setNewHighScore(false);
        }}
      >
        PLAY AGAIN
      </button>
      <button
        className="play-again"
        onClick={(e) => {
          e.preventDefault();
          setRoute("menu");
          setNewHighScore(false);
          boardState.ctx.fillStyle = "black";
          boardState.ctx.fillRect(0, 0, board.width, board.height);
        }}
      >
        MENU
      </button>
    </>
  );
};

export default PlayAgain;

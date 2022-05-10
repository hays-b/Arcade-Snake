import React, { useState } from "react";
import useGame from "./hooks/useGame";

const PlayAgain = () => {
  const { gameState, setGameState } = useGame();

  const handlePlayAgain = () => {
    setGameState({ ...gameState, score: 0 });

    // snake.headX = Math.floor(squareCount / 2);
    // snake.headY = Math.floor(squareCount / 2);

    // apple.x = Math.floor(squareCount / 2);
    // apple.y = Math.floor(squareCount / 4);

    // snake.velocityX = 0;
    // snake.velocityY = 0;

    // snake.body = []
    // snake.limit = 2;

    setGameState({ ...gameState, gameOver: false });
  };

  return (
    <>
      {gameState.gameOver ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            handlePlayAgain();
          }}
        >
          Play Again
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setGameState({ ...gameState, gameOver: true });
          }}
        >End Game</button>
      )}
    </>
  );
};

export default PlayAgain;

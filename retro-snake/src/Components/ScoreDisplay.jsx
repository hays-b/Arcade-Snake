import React from "react";
import useGame from "./hooks/useGame";

const ScoreDisplay = () => {
  const { gameState, setGameState } = useGame();

  return (
    <div>
      <div>{gameState.score}</div>
      <div>{gameState.highScore}</div>
    </div>
  );
};

export default ScoreDisplay;

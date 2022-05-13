import React from "react";
import useGame from "./hooks/useGame";

const ScoreDisplay = () => {
  const { gameState, setGameState } = useGame();

  return (
    <div className='score-container'>
      <div className='score'>Score: {gameState.score}</div>
      <div className='score'>HighScore: {gameState.highScore}</div>
    </div>
  );
};

export default ScoreDisplay;

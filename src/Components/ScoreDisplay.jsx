import React from "react";
import useGame from "./hooks/useGame";

const ScoreDisplay = () => {
  const { gameState, setGameState, highScores } = useGame();

  return (
    <div className="score-container">
      {gameState.menu && Array.isArray(highScores) && highScores.length ? (
        <div className="score">
          TOP SCORE: {highScores[0].score} -{highScores[0].name}-
        </div>
      ) : (
        <>
          <div className="score">SCORE: {gameState.score}</div>
          <div className="score">BEST: {gameState.highScore}</div>
        </>
      )}
    </div>
  );
};

export default ScoreDisplay;

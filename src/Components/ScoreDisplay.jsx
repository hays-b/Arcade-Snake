import React from "react";
import useGame from "./hooks/useGame";

const ScoreDisplay = () => {
  const { boardState, gameState, setGameState, highScores, route } = useGame();

  const isDefault =
    boardState.tileCount === 25 &&
    gameState.speed === 10 &&
    gameState.numAddedForApple === 1;

  return (
      <div className="score-container">
        {route === "menu" && Array.isArray(highScores) && highScores.length ? (
          <div className="scroll-container">
            <div className="scroll-text">
              {" "}
              TOP SCORE: {highScores[0].score} - {highScores[0].name}
            </div>
          </div>
        ) : null}
        {route === "game" ? (
          <>
            <div className="score">SCORE: {gameState.score}</div>
            {isDefault ? (
              <div className="score">BEST: {gameState.highScore}</div>
            ) : (
              <div className="score">CUSTOM SETTINGS</div>
            )}
          </>
        ) : null}
      </div>
  );
};

export default ScoreDisplay;

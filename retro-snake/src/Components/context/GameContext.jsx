import React, { useState, useEffect } from "react";
import {
  initializeGame,
  moveSnake,
  renderNewFrame,
  checkForApple,
  checkForCollision,
  updateScore,
} from "./helperFunctions";
// import {
// something
// } from '../../axios-services';

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState({
    resolution: "500", // pixels
    ctx: null,
    tileCount: 31, // adjustable
  });

  const [gameState, setGameState] = useState({
    score: 0,
    highScore: 0,
    gameOver: true,
    speed: 10, // Adjustable
  });

  let gameInterval;

  useEffect(() => {
    if (!gameState.gameOver) {
        // reset all game values
      initializeGame(boardState);
      // start game interval
      gameInterval = setInterval(() => {
        if (!gameState.gameOver) {
            console.log()
          moveSnake();
          // update useStates if an apple is hit
          if (checkForApple()) {
            setGameState({ ...gameState, score: updateScore() });
          }
          renderNewFrame();
          if (checkForCollision()) {
              // clear interval and update all states
              clearInterval(gameInterval);
              setGameState({
                ...gameState,
                score: updateScore(),
                gameOver: true,
              });
          }
        }
      }, 1000 / gameState.speed);
    }
    // update highScore if necessary
    if (gameState.score > gameState.highScore) {
        setGameState({ ...gameState, highScore: updateScore() });
      }
  }, [gameState.gameOver]);

  return (
    <GameContext.Provider
      value={{
        boardState,
        setBoardState,
        gameState,
        setGameState,
        // playGame,
        // changeDirection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

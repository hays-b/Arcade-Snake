import React, { useState, useEffect } from "react";
import {
  initializeGame,
  moveSnake,
  renderNewFrame,
  checkForApple,
  checkForCollision,
} from "./helperFunctions";
// import {
// something
// } from '../../axios-services';

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState({
    resolution: "500", //needed in component
    ctx: null, //needed in component
    tileCount: 31, // adjustable
  }); //us

  const [gameState, setGameState] = useState({
    score: 0,
    highScore: 0,
    gameOver: true,
    speed: 8, // Adjustable
  });

  let gameInterval;

  useEffect(() => {
    if (!gameState.gameOver) {
      initializeGame(boardState);
      gameInterval = setInterval(() => {
        if (!gameState.gameOver) {
          console.log("are we here?", gameState);
          moveSnake();
          if (checkForApple()) {
            setGameState({ ...gameState, score: gameState.score + 10 });
          }
          //   displayScore();
          renderNewFrame();
          if (checkForCollision()) {
              setGameState({ ...gameState, gameOver: true });
              clearInterval(gameInterval);
            // return;
          }
        }
      }, 1000 / gameState.speed);
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

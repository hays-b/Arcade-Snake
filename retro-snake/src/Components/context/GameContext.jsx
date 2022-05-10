import React, { useState, useEffect } from "react";
import { moveSnake, renderNewFrame } from './helperFunctions'
// import {
// something
// } from '../../axios-services';

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(500);
  const [boardCtx, setBoardCtx] = useState(null);
  const [squareCount, setSquareCount] = useState(31);
  const [squareSize, setSquareSize] = useState(boardState / squareCount);

  const [gameState, setGameState] = useState({
    score: 0,
    highScore: 0,
    gameOver: true,
    speed: 10, // Adjustable
  });

  const [snake, setSnake] = useState({
    headX: Math.floor(squareCount / 2),
    headY: Math.floor(squareCount / 2),
    velocityX: 0,
    velocityY: 0,
    body: [],
    limit: 2,
  });

  const [apple, setApple] = useState({
    x: Math.floor(squareCount / 2),
    y: Math.floor(squareCount / 4),
    points: 5, // Adjustable
  });

  useEffect(() => {
    const playGame = () => {
      setInterval(function () {
        if (!gameState.gameOver) {
            moveSnake(snake);
          //   checkForApple();
          //   displayScore();
          renderNewFrame(boardCtx, snake, apple, squareSize);
          //   checkForCollision();
          console.log('in it', gameState.gameOver)
        } else {
          return;
        }
      }, 1000 / gameState.speed);
    };

    if (!gameState.gameOver) {
      playGame();
    } else {
        return;
    }
    console.log('out', gameState.gameOver)
  }, [gameState.gameOver]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        boardState,
        setBoardState,
        setBoardCtx,
        boardCtx,
        squareCount,
        setSquareCount,
        squareSize,
        setSquareSize,
        snake,
        setSnake,
        apple,
        setApple,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

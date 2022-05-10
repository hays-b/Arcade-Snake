import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const useGame = () => {
  const {
      gameState,
      setGameState,
      boardState,
      setBoardState,
      boardCtx,
      setBoardCtx,
      squareCount,
      setSquareCount,
      squareSize,
      setSquareSize,
      snake,
      setSnake,
      apple,
      setApple,
  } = useContext(GameContext);

  return {
    gameState,
    setGameState,
    boardState,
    setBoardState,
    boardCtx,
      setBoardCtx,
    squareCount,
    setSquareCount,
    squareSize,
    setSquareSize,
    snake,
    setSnake,
    apple,
    setApple,
  };
};

export default useGame;
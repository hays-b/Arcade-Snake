import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const useGame = () => {
  const {
    boardState,
    setBoardState,
    gameState,
    setGameState,
    velocity,
    setVelocity,
    playGame, 
    // changeDirection,
  } = useContext(GameContext);

  return {
    boardState,
    setBoardState,
    gameState,
    setGameState,
    velocity,
    setVelocity,
    playGame, 
    // changeDirection,
  };
};

export default useGame;
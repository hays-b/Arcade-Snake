import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const useGame = () => {
  const {
    boardState,
    setBoardState,
    gameState,
    setGameState,
    highScores,
    setHighScores,
  } = useContext(GameContext);

  return {
    boardState,
    setBoardState,
    gameState,
    setGameState,
    highScores,
    setHighScores,
  };
};

export default useGame;

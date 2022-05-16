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
    route,
    setRoute,
    newHighScore, 
    setNewHighScore,
  } = useContext(GameContext);

  return {
    boardState,
    setBoardState,
    gameState,
    setGameState,
    highScores,
    setHighScores,
    route,
    setRoute,
    newHighScore,
    setNewHighScore
  };
};

export default useGame;

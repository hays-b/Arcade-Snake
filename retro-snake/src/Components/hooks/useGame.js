import { GameContext } from "../context/GameContext";
import { useContext } from "react";

const useGame = () => {
  const {
      gameState,
      setGameState,
  } = useContext(GameContext);

  return {
    gameState,
    setGameState,
  };
};

export default useGame;
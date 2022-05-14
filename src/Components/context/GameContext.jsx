import React, { useState, useEffect } from "react";
import {
  initializeGame,
  moveSnake,
  renderNewFrame,
  checkForApple,
  checkForCollision,
  updateScore,
  changeDirection,
} from "./helperFunctions";
import { getAllScores } from "../../axios-services";

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState({
    resolution: "500", // pixels
    ctx: null,
    tileCount: 25, // adjustable
  });

  const [gameState, setGameState] = useState({
    score: 0,
    highScore: 0,
    gameOver: true,
    menu: true,
    speed: 10, // Adjustable
  });

  const [highScores, setHighScores] = useState([]);

  // get highscores
  useEffect(() => {
    const displayAllScores = async () => {
      const data = await getAllScores();
      setHighScores(data);
    };
    displayAllScores();
  }, []);

  //   useEffect(() => {
  //     const keyPressHandler = (e) => {
  //         changeDirection(e, gameState)
  //       };
  //       document.addEventListener('keydown', keyPressHandler)

  //   }, [])

  useEffect(() => {
    if (!gameState.gameOver) {
      // reset all game values
      initializeGame(boardState, gameState);
      // start game interval
      const gameInterval = setInterval(() => {
        if (!gameState.gameOver) {
          console.log();
          moveSnake();
          // update useStates if an apple is hit
          if (checkForApple()) {
            setGameState({ ...gameState, score: updateScore() });
          }
          renderNewFrame();
          if (checkForCollision()) {
            // clear interval and update states
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
        highScores,
        setHighScores,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

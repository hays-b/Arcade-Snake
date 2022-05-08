import React, { useState, useEffect } from 'react';
// import {
// something
// } from '../../axios-services';

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {

  const [GameState, setGameState] = useState({
    score: 0,
    highScore: 0,
    gameOver: false,
    speed: 10, // Adjustable
  });

//   let squareCount = 31; //Adjustable
// let squareSize = board.width / squareCount;

// let snake = {
//   headX: Math.floor(squareCount / 2),
//   headY: Math.floor(squareCount / 2),
//   velocityX: 0,
//   velocityY: 0,
//   body: [],
//   limit: 2
// }
// let apple = {
//   x: Math.floor(squareCount / 2),
//   y: Math.floor(squareCount / 4)
// }

// let numAddedForApple = 5 // Adjustable


  return (
    <GameContext.Provider
      value={{
        GameState,
        setGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
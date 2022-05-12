import React from "react";
import useGame from "./hooks/useGame";

const PlayAgain = () => {
  const { boardState, gameState, setGameState, playGame } = useGame();

//   const handlePlayAgain = () => {
//     setGameState({ ...gameState, score: 0, gameOver: false });
//     playGame();
//   };

  return (
    <>
      {/* {gameState.gameOver ? ( */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setGameState({ ...gameState, score: 0, gameOver: false });
        //   playGame();
        }}
      >
        Play Again
      </button>
      {/* ) : (
        // <button
          onClick={(e) => {
            e.preventDefault();
            setGameState({ ...gameState, gameOver: true });
          }}
        >End Game</button>
      )} */}
    </>
  );
};

export default PlayAgain;

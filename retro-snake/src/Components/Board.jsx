import React, { useRef, useEffect } from "react";
import useGame from "./hooks/useGame";
import { changeDirection } from "./context/helperFunctions"

const Board = () => {
  const {
    boardState,
    setBoardState,
    gameState,
    setGameState,
    velocity,
    setVelocity,
    // changeDirection,
  } = useGame();

  const canvasRef = useRef(null);

  useEffect(() => {
    const board = canvasRef.current;
    board.width = boardState.resolution;
    board.height = boardState.resolution;

    setBoardState({ ...boardState, ctx: board.getContext("2d") });
    console.log('are we in the useEffect')
  }, []);


  console.log(boardState.ctx);

  return (
    <canvas
      id="board"
      // {...boardState} // <-- Is it needed?
      style={{
        width: '80vmin',
        height: '80vmin',
        backgroundColor: "black",
        border: "1px solid black",
      }}
      ref={canvasRef}
      onKeyDown={(event) => changeDirection(event, gameState)}
      tabIndex="0"
    ></canvas>
  );
};

export default Board;

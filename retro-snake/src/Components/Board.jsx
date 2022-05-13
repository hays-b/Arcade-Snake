import React, { useRef, useEffect } from "react";
import useGame from "./hooks/useGame";
import { changeDirection } from "./context/helperFunctions"

const Board = () => {
  const {
    boardState,
    setBoardState,
    gameState,
  } = useGame();

  const canvasRef = useRef(null);

  useEffect(() => {
    const board = canvasRef.current;
    board.width = boardState.resolution;
    board.height = boardState.resolution;

    setBoardState({ ...boardState, ctx: board.getContext("2d") });
  }, []);

  return (
    <canvas
      id="board"
      // {...boardState} // <-- Is it needed?
      style={{
        backgroundColor: "black",
      }}
      ref={canvasRef}
      onKeyDown={(event) => changeDirection(event, gameState)}
      tabIndex="-1"
    ></canvas>
  );
};

export default Board;

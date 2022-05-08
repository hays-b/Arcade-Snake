import React, { useRef, useEffect } from "react";
import useGame from './hooks/useGame';

const Board = () => {
  const {gameState, setGameState} = useGame()
  const canvasRef = useRef(null);

  let resolution = "90vmin"; //in pixels

  useEffect(() => {
    const board = canvasRef.current;
    const context = board.getContext("2d");
    //Our first draw
    context.fillStyle = "black";
    context.fillRect(0, 0, context.width, context.height);
  }, []);

  return (
    <canvas
      id="board"
      ref={canvasRef}
      // {...props} // <-- Is it needed?
      style={{
        border: ".1rem solid black",
        width: resolution,
        height: resolution,
      }}
    ></canvas>
  );
};

export default Board;

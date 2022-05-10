import React, { useRef, useEffect } from "react";
import useGame from "./hooks/useGame";
import { playGame, changeDirection } from "./context/helperFunctions"

const Board = () => {
  const {
    boardState,
    setBoardState,
    boardCtx,
    setBoardCtx,
    gameState,
    setGameState,
    squareCount,
    setSquareCount,
    squareSize,
    setSquareSize,
    apple,
    snake,
    setSnake,
  } = useGame();

  const canvasRef = useRef(null);
  // let boardCtx
  


  useEffect(() => {
    const board = canvasRef.current;
    setBoardCtx(board.getContext("2d"))
    board.width = boardState
    board.height = boardState

    // boardCtx.fillStyle = "black";
    // boardCtx.fillRect(0, 0, boardState, boardState);
    // playGame(boardCtx)
  }, [gameState.gameOver]);
  
  console.log(boardCtx)

  const changeDirection = (event) => {
    console.log("here")
    console.log(event.keyCode)
    //ArrowUp
    if (event.keyCode === 38) {
      if (snake.body[1][1] < snake.headY) {
        return;
      } else {
        setSnake({...snake, velocityX: 0})
        setSnake({...snake, velocityY: -1})
      }
    }
  
    //ArrowDown
    if (event.keyCode === 40) {
      if (snake.body[1][1] > snake.headY) {
        return;
      } else {
        setSnake({...snake, velocityX: 0})
        setSnake({...snake, velocityY: 1})
      }
    }
  
    //ArrowLeft
    if (event.keyCode === 37) {
      if (snake.body[1][0] < snake.headX) {
        return;
      } else {
        setSnake({...snake, velocityX: -1})
        setSnake({...snake, velocityY: 0})
      }
    }
  
    //ArrowRight
    if (event.keyCode === 39) {
      if (snake.body[1][0] > snake.headX) {
        return;
      } else {
        setSnake({...snake, velocityX: 1})
        setSnake({...snake, velocityY: 0})
      }
    }
  }

  // if (!gameState.gameOver) {
  //   setInterval( () => {
  //     if (gameState.gameOver === false) {
  //     playGame(boardCtx)
  //     }
    
  //     if (gameState.gameOver === true) {
  //       return;
  //     }
  //   }, 1000 / gameState.speed);
  // }

  return (
    <canvas
      id="board"
      // {...boardState} // <-- Is it needed?
      style={{
        width: boardState,
        height: boardState,
        border: "1px solid black",
      }}
      ref={canvasRef}
      onKeyDown={(event)=>changeDirection(event)}
    tabIndex='0'
    ></canvas>
  );
};

export default Board;

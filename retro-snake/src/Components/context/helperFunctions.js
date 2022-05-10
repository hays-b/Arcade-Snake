export const moveSnake = (setSnake, snake) => {
  setSnake({...snake, headX: snake.headX += snake.velocityX})
  setSnake({...snake, headX: snake.headY += snake.velocityY})
};

export const checkForApple = () => {
  if (snake.headX === apple.x && snake.headY === apple.y) {
    apple.x = Math.floor(Math.random() * squareCount);
    apple.y = Math.floor(Math.random() * squareCount);

    // make sure that apple doesn't spawn on a snake square
    for (let i = 0; i < snake.body.length; i++) {
      if (apple.x === snake.body[i][0] && apple.y === snake.body[i][1]) {
        apple.x = Math.floor(Math.random() * (squareCount + 0.9));
        apple.y = Math.floor(Math.random() * (squareCount + 0.9));
        i = 0;
      }
    }

    game.score += numAddedForApple * 10;
    snake.limit += numAddedForApple;
  }
};

// export const displayScore = () => {
//     scoreDisplay.innerText = `SCORE: ${game.score}`;

//     if (game.highScore < game.score) {
//       game.highScore = game.score
//     }
//     highScoreDisplay.innerText = `HIGH SCORE: ${game.highScore}`
//   }

export const renderNewFrame = (boardCtx, snake, apple, squareSize) => {
  //clear the entire board before before the next frame
  boardCtx.fillStyle = "black";
  boardCtx.fillRect(0, 0, board.width, board.height);

  //colors in apple square
  boardCtx.fillStyle = "white";
  boardCtx.fillRect(
    apple.x * squareSize,
    apple.y * squareSize,
    squareSize - 2,
    squareSize - 2
  );

  //colors in snake head
  boardCtx.fillStyle = "lime";
  boardCtx.fillRect(
    snake.headX * squareSize,
    snake.headY * squareSize,
    squareSize - 2, // -2 to add some space between squares
    squareSize - 2
  );

  //adds current head position to body array at [0] every frame
  snake.body.unshift([snake.headX, snake.headY]);

  //takes away last body square every frame if length is too long
  if (snake.body.length > snake.limit) {
    snake.body.pop();
  }

  // colors in all of the snake squares in the array
  boardCtx.fillStyle = "lime";
  for (let i = 0; i < snake.body.length; i++) {
    boardCtx.fillRect(
      snake.body[i][0] * squareSize,
      snake.body[i][1] * squareSize,
      squareSize - 2,
      squareSize - 2
    );
  }
};

export const checkForCollision = () => {
  //Check if snake hits a wall
  if (
    snake.headX < 0 ||
    snake.headX >= squareCount ||
    snake.headY < 0 ||
    snake.headY >= squareCount
  ) {
    game.gameOver = true;
  }

  //Check if snakes hits itself
  for (let i = 2; i < snake.body.length; i++) {
    if (snake.headX === snake.body[i][0] && snake.headY === snake.body[i][1]) {
      game.gameOver = true;
    }
  }
};

// export const playGame = (boardCtx) => {
//   //   moveSnake();
//   //   checkForApple();
//   //   displayScore();
//   renderNewFrame(boardCtx);
//   //   checkForCollision();
// };

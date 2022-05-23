let squareSize, squareCount, boardCtx, score;

const snake = {
  x: 0,
  x: 0,
  body: [],
  limit: 2,
  limitAddedForApple: 1,
};

const apple = {
  x: 0,
  y: 0,
};

const velocity = {
  x: 0,
  y: 0,
};

let gameOver = true;

export const initializeGame = (boardState, gameState) => {
  gameOver = false;
  score = 0;
  boardCtx = boardState.ctx;
  squareCount = boardState.tileCount;
  squareSize = boardState.resolution / squareCount;

  snake.x = Math.floor(squareCount / 2);
  snake.y = Math.floor(squareCount / 2);

  apple.x = Math.floor(squareCount / 2);
  apple.y = Math.floor(squareCount / 4);

  velocity.x = 0;
  velocity.y = 0;

  snake.body = [];
  snake.limit = 2;
  snake.limitAddedForApple = gameState.numAddedForApple;
};

export const changeDirection = (event) => {
  if (!gameOver) {
    //ArrowUp
    if (event.keyCode === 38 || event.target.matches(".up")) {
      if (snake.body[1][1] < snake.y) {
        return;
      } else {
        velocity.x = 0;
        velocity.y = -1;
      }
    }

    //ArrowDown
    if (event.keyCode === 40 || event.target.matches(".down")) {
      if (snake.body[1][1] > snake.y) {
        return;
      } else {
        velocity.x = 0;
        velocity.y = 1;
      }
    }

    //ArrowLeft
    if (event.keyCode === 37 || event.target.matches(".left")) {
      if (snake.body[1][0] < snake.x) {
        return;
      } else {
        velocity.x = -1;
        velocity.y = 0;
      }
    }

    //ArrowRight
    if (event.keyCode === 39 || event.target.matches(".right")) {
      if (snake.body[1][0] > snake.x) {
        return;
      } else {
        velocity.x = 1;
        velocity.y = 0;
      }
    }
    // console.log(event.keyCode, velocity.x, velocity.y);
  }
};

document.addEventListener("keydown", changeDirection);

export const moveSnake = () => {
  snake.x += velocity.x;
  snake.y += velocity.y;
};

export const checkForApple = () => {
  if (snake.x === apple.x && snake.y === apple.y) {
    apple.x = Math.floor(Math.random() * (squareCount - 0.1));
    apple.y = Math.floor(Math.random() * (squareCount - 0.1));

    // make sure that apple doesn't spawn back on the snake's head
    if (snake.x === apple.x && snake.y === apple.y) {
      apple.x = Math.floor(Math.random() * (squareCount - 0.1));
      apple.y = Math.floor(Math.random() * (squareCount - 0.1));
    }

    // make sure that apple doesn't spawn on a snake square
    for (let i = 0; i < snake.body.length; i++) {
      if (apple.x === snake.body[i][0] && apple.y === snake.body[i][1]) {
        apple.x = Math.floor(Math.random() * (squareCount - 0.1));
        apple.y = Math.floor(Math.random() * (squareCount - 0.1));
        i = 0;
      }
    }

    score += snake.limitAddedForApple * 10;
    snake.limit += snake.limitAddedForApple;
    return true;
  }
};

export const updateScore = () => {
  return score;
};

export const renderNewFrame = () => {
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
    snake.x * squareSize,
    snake.y * squareSize,
    squareSize - 2, // -2 to add some space between squares
    squareSize - 2
  );

  //adds current head position to body array at [0] every frame
  snake.body.unshift([snake.x, snake.y]);

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
    snake.x < 0 ||
    snake.x >= squareCount ||
    snake.y < 0 ||
    snake.y >= squareCount
  ) {
    gameOver = true;
    return true;
  }

  // Check if snakes hits itself
  for (let i = 2; i < snake.body.length; i++) {
    if (snake.x === snake.body[i][0] && snake.y === snake.body[i][1]) {
      gameOver = true;
      return true;
    }
  }
  return false;
};

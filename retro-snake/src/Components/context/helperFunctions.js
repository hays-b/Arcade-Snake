let squareSize, squareCount, boardCtx, score;

const snake = {
  x: 0,
  x: 0,
  body: [],
  limit: 2,
};

const apple = {
  x: 0,
  y: 0,
};

const velocity = {
  x: 0,
  y: 0,
};

export const initializeGame = (boardState) => {
  console.log('boardState')
  score = 0
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
};

export const changeDirection = (event, gameState) => {
  if (!gameState.gameOver) {
  //ArrowUp
  if (event.keyCode === 38) {
    if (snake.body[1][1] < snake.y) {
      return;
    } else {
      velocity.x = 0;
      velocity.y = -1;
    }
  }

  //ArrowDown
  if (event.keyCode === 40) {
    if (snake.body[1][1] > snake.y) {
      return;
    } else {
      velocity.x = 0;
      velocity.y = 1;
    }
  }

  //ArrowLeft
  if (event.keyCode === 37) {
    if (snake.body[1][0] < snake.x) {
      return;
    } else {
      velocity.x = -1;
      velocity.y = 0;
    }
  }

  //ArrowRight
  if (event.keyCode === 39) {
    if (snake.body[1][0] > snake.x) {
      return;
    } else {
      velocity.x = 1;
      velocity.y = 0;
    }
  }
}
  console.log(event.keyCode, velocity.x, velocity.y)
};

export const moveSnake = () => {
  snake.x += velocity.x;
  snake.y += velocity.y;
};

export const checkForApple = () => {
  if (snake.x === apple.x && snake.y === apple.y) {
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

    score += 10
    snake.limit += 1;
    return true
  }
};

export const updateScore = () => {
  return score
  }

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
  console.log(snake.body)
};

export const checkForCollision = () => {
  //Check if snake hits a wall
  if (
    snake.x < 0 ||
    snake.x >= squareCount ||
    snake.y < 0 ||
    snake.y >= squareCount
  ) {
    return true;
  }

  // Check if snakes hits itself
  for (let i = 2; i < snake.body.length; i++) {
    if (snake.x === snake.body[i][0] && snake.y === snake.body[i][1]) {
      return true
    }
  }
  return false;
};

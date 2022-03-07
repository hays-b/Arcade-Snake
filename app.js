const board = document.getElementById("board");
let resolution = 1000; //in pixels
board.height = resolution;
board.width = resolution;

const boardCtx = board.getContext("2d");
boardCtx.fillStyle = "black";
boardCtx.fillRect(0, 0, board.width, board.height);

const displayBox = document.createElement("div");
document.body.appendChild(displayBox);

const scoreDisplay = document.createElement("span");
displayBox.appendChild(scoreDisplay);

const highScoreDisplay = document.createElement("span");
displayBox.appendChild(highScoreDisplay);

const playAgainDisplay = document.createElement("button");
document.body.appendChild(playAgainDisplay);
playAgainDisplay.innerText = `PLAY AGAIN`;
playAgainDisplay.style.display = "none" //play again button is hidden by default

const startGameDisplay = document.createElement("button");
document.body.appendChild(startGameDisplay);
startGameDisplay.innerText = `START GAME`;


let squareCount = 31; //Adjustable
let squareSize = board.width / squareCount;

let game = {
  score: 0,
  highScore: 0,
  gameOver: false,
  speed: 10, // Adjustable
}
let snake = {
  headX: Math.floor(squareCount / 2),
  headY: Math.floor(squareCount / 2),
  velocityX: 0,
  velocityY: 0,
  body: [],
  limit: 2
}
let apple = {
  x: Math.floor(squareCount / 2),
  y: Math.floor(squareCount / 4)
}

let numAddedForApple = 5 // Adjustable


function changeDirection(event) {
  //ArrowUp
  if (event.keyCode === 38) {
    if (snake.body[1][1] < snake.headY) {
      return;
    } else {
      snake.velocityX = 0;
      snake.velocityY = -1;
    }
  }

  //ArrowDown
  if (event.keyCode === 40) {
    if (snake.body[1][1] > snake.headY) {
      return;
    } else {
      snake.velocityX = 0;
      snake.velocityY = 1;
    }
  }

  //ArrowLeft
  if (event.keyCode === 37) {
    if (snake.body[1][0] < snake.headX) {
      return;
    } else {
      snake.velocityX = -1;
      snake.velocityY = 0;
    }
  }

  //ArrowRight
  if (event.keyCode === 39) {
    if (snake.body[1][0] > snake.headX) {
      return;
    } else {
      snake.velocityX = 1;
      snake.velocityY = 0;
    }
  }
}

document.addEventListener("keydown", changeDirection);

function moveSnake() {
  snake.headX += snake.velocityX;
  snake.headY += snake.velocityY;
}

function checkForApple() {
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
    snake.limit += numAddedForApple
  }
}

function displayScore() {
  scoreDisplay.innerText = `SCORE: ${game.score}`;

  if (game.highScore < game.score) {
    game.highScore = game.score
  }
  highScoreDisplay.innerText = `HIGH SCORE: ${game.highScore}`
}

function renderNewFrame() {
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
}

function checkForCollision() {
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
}

function playAgain() {
  game.score = 0;

  snake.headX = Math.floor(squareCount / 2);
  snake.headY = Math.floor(squareCount / 2);

  apple.x = Math.floor(squareCount / 2);
  apple.y = Math.floor(squareCount / 4);

  snake.velocityX = 0;
  snake.velocityY = 0;

  snake.body = []
  snake.limit = 2;

  game.gameOver = false;
  playAgainDisplay.style.display = "none"
}

playAgainDisplay.addEventListener("click", playAgain);


//putting it all together
function playGame() {
  startGameDisplay.style.display = "none"
  setInterval(function () {
  if (game.gameOver === false) {
    moveSnake();
    checkForApple();
    displayScore();
    renderNewFrame();
    checkForCollision();
  }

  if (game.gameOver === true) {
    playAgainDisplay.style.display = "inline-block"
    return;
  }
}, 1000 / game.speed);
}

startGameDisplay.addEventListener("click", playGame);
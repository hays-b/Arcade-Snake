const board = document.getElementById("board");
let resolution = 1000; //in pixels
board.height = resolution;
board.width = resolution;
const boardCtx = board.getContext("2d");
boardCtx.fillStyle = "black";
boardCtx.fillRect(0, 0, board.width, board.height);

const scoreDisplay = document.createElement("div");
document.body.appendChild(scoreDisplay);

const playAgainDisplay = document.createElement("button");
document.body.appendChild(playAgainDisplay);
playAgainDisplay.innerText = `PLAY AGAIN?`;
playAgainDisplay.style.display = "none" //play again button is hidden by default

const startGameDisplay = document.createElement("button");
document.body.appendChild(startGameDisplay);
startGameDisplay.innerText = `START GAME`;

let score = 0;
let gameOver = false;

let squareCount = 31; //Adjustable
let squareSize = board.width / squareCount;

let snakeHeadX = Math.floor(squareCount / 2);
let snakeHeadY = Math.floor(squareCount / 2);

let appleX = Math.floor(squareCount / 2);
let appleY = Math.floor(squareCount / 4);

let velocityX = 0;
let velocityY = 0;

let snakeSpeed = 10; // Adjustable

let bodySquares = [];
let bodyLength = 2;
let numAddedForApple = 5 // Adjustable

function changeDirection(event) {
  //ArrowUp
  if (event.keyCode === 38) {
    if (bodySquares[1][1] < snakeHeadY) {
      return;
    } else {
      velocityX = 0;
      velocityY = -1;
    }
  }

  //ArrowDown
  if (event.keyCode === 40) {
    if (bodySquares[1][1] > snakeHeadY) {
      return;
    } else {
      velocityX = 0;
      velocityY = 1;
    }
  }

  //ArrowLeft
  if (event.keyCode === 37) {
    if (bodySquares[1][0] < snakeHeadX) {
      return;
    } else {
      velocityX = -1;
      velocityY = 0;
    }
  }

  //ArrowRight
  if (event.keyCode === 39) {
    if (bodySquares[1][0] > snakeHeadX) {
      return;
    } else {
      velocityX = 1;
      velocityY = 0;
    }
  }
}

document.addEventListener("keydown", changeDirection);

function moveSnake() {
  snakeHeadX += velocityX;
  snakeHeadY += velocityY;
}

function checkForApple() {
  if (snakeHeadX === appleX && snakeHeadY === appleY) {
    appleX = Math.floor(Math.random() * squareCount);
    appleY = Math.floor(Math.random() * squareCount);

    // make sure that apple doesn't spawn on a snake square
    for (let i = 0; i < bodySquares.length; i++) {
      if (appleX === bodySquares[i][0] && appleY === bodySquares[i][1]) {
        appleX = Math.floor(Math.random() * (squareCount + 0.9));
        appleY = Math.floor(Math.random() * (squareCount + 0.9));
        i = 0;
      }
    }

    score += numAddedForApple * 10;
    bodyLength += numAddedForApple
  }
}

function displayScore() {
  scoreDisplay.innerText = `SCORE: ${score}`;
}

function renderNewFrame() {
  //clear the entire board before before the next frame
  boardCtx.fillStyle = "black";
  boardCtx.fillRect(0, 0, board.width, board.height);

  //colors in apple square
  boardCtx.fillStyle = "white";
  boardCtx.fillRect(
    appleX * squareSize,
    appleY * squareSize,
    squareSize - 2,
    squareSize - 2
  );

  //colors in snake head
  boardCtx.fillStyle = "lime";
  boardCtx.fillRect(
    snakeHeadX * squareSize,
    snakeHeadY * squareSize,
    squareSize - 2, // -2 to add some space between squares
    squareSize - 2
  );

  //adds current head position to body array at [0] every frame
  bodySquares.unshift([snakeHeadX, snakeHeadY]);

  //takes away last body square every frame if length is too long
  if (bodySquares.length > bodyLength) {
    bodySquares.pop();
  }

  // colors in all of the snake squares in the array
  boardCtx.fillStyle = "lime";
  for (let i = 0; i < bodySquares.length; i++) {
    boardCtx.fillRect(
      bodySquares[i][0] * squareSize,
      bodySquares[i][1] * squareSize,
      squareSize - 2,
      squareSize - 2
    );
  }
}

function checkForCollision() {
  //Check if snake hits a wall
  if (
    snakeHeadX < 0 ||
    snakeHeadX >= squareCount ||
    snakeHeadY < 0 ||
    snakeHeadY >= squareCount
  ) {
    gameOver = true;
  }

  //Check if snakes hits itself
  for (let i = 2; i < bodySquares.length; i++) {
    if (snakeHeadX === bodySquares[i][0] && snakeHeadY === bodySquares[i][1]) {
      gameOver = true;
    }
  }
}

// game-over mechanics start here
function playAgain() {
  score = 0;

  snakeHeadX = Math.floor(squareCount / 2);
  snakeHeadY = Math.floor(squareCount / 2);

  appleX = Math.floor(squareCount / 2);
  appleY = Math.floor(squareCount / 4);

  velocityX = 0;
  velocityY = 0;

  bodySquares = []
  bodyLength = 2;

  gameOver = false;
  playAgainDisplay.style.display = "none"
}

playAgainDisplay.addEventListener("click", playAgain);


//putting it all together now
function playGame() {
  startGameDisplay.style.display = "none"
  setInterval(function () {
  if (gameOver === false) {
    moveSnake();
    checkForApple();
    displayScore();
    renderNewFrame();
    checkForCollision();
  }

  if (gameOver === true) {
    playAgainDisplay.style.display = "inline-block"
    return;
  }
}, 1000 / snakeSpeed);
}

startGameDisplay.addEventListener("click", playGame);
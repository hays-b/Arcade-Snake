const board = document.getElementById("board");
let resolution = 1000; //in pixels
board.height = resolution;
board.width = resolution;

const boardCtx = board.getContext("2d");

let score = 0;
let gameOver = false;

let squareCount = 31; //Change in settings
let squareSize = board.width / squareCount;

let snakeHeadX = Math.floor(squareCount / 2);
let snakeHeadY = Math.floor(squareCount / 2);

let appleX = Math.floor(squareCount / 2);
let appleY = Math.floor(squareCount / 4);

let velocityX = 0;
let velocityY = 0;

let snakeSpeed = 10; // also frames per second

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

function moveSnake() {
  snakeHeadX += velocityX;
  snakeHeadY += velocityY;
}

function checkForApple() {
  if (snakeHeadX === appleX && snakeHeadY === appleY) {
    score += 100;
    appleX = Math.floor(Math.random() * squareCount);
    appleY = Math.floor(Math.random() * squareCount);

    // make sure that apple didn't spawn on a snake square
    for (let i = 0; i < bodySquares.length; i++) {
      if (appleX === bodySquares[i][0] && appleY === bodySquares[i][1]) {
        appleX = Math.floor(Math.random() * squareCount);
        appleY = Math.floor(Math.random() * squareCount);
        i = 0;
      }
    }
    bodyLength += 5; //Adjustable?
  }
}

function checkForCollision() {
  if (
    snakeHeadX < 0 ||
    snakeHeadX >= squareCount ||
    snakeHeadY < 0 ||
    snakeHeadY >= squareCount
  ) {
    gameOver = true;
    console.log(gameOver);
  }
  for (let i = 2; i < bodySquares.length; i++) {
    if (snakeHeadX === bodySquares[i][0] && snakeHeadY === bodySquares[i][1]) {
      gameOver = true;
      console.log(gameOver);
    }
  }
}

const bodySquares = [];
let bodyLength = 2;

function renderNewFrame() {
  //clear the entire board
  boardCtx.fillStyle = "black";
  boardCtx.fillRect(0, 0, board.width, board.height);

  //render apple
  boardCtx.fillStyle = "white";
  boardCtx.fillRect(
    appleX * squareSize,
    appleY * squareSize,
    squareSize,
    squareSize
  );

  //render snake
  boardCtx.fillStyle = "lime";
  boardCtx.fillRect(
    snakeHeadX * squareSize,
    snakeHeadY * squareSize,
    squareSize - 2, // -2 to add some space between squares
    squareSize - 2
  );

  //adds current head position to body array every frame
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

function displayScore() {
  boardCtx.fillStyle = "lime";
  boardCtx.font = "100px sans-serif";
  boardCtx.fillText = ("score", 400, 10);
}

function newGameFrame() {
  checkForCollision();
  if (gameOver === true) {
    return;
  }
  moveSnake();
  checkForApple();
  renderNewFrame();
  displayScore();
}

document.addEventListener("keydown", changeDirection);

setInterval(function () {
  newGameFrame();
}, 1000 / snakeSpeed);

/*


// General Strategies 

// state
let initialState;

function buildInitialState() {

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc

// add to above
function tick() {
    // this is an incremental change that happens to the state every time you update...
  
    renderState()
  }
  
  setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible
})
  


// Game Strategies 

let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
}

let gameState = {
    apple: [11, 8],
    snake: snake // from above
}

let gameState = {
    currentScore: 0,
    goal: some very high number probably,
    gameStatus: 'playing',
}

let freeSpace = any space that is not occupied by snake
let tick = a length of time (adjust for speed and difficulty)
let travelDistance = a relative measurement unit (something shorter than a grid block)

function moveSnake(dist) {
    add head to snake
    remove tail from snake
}

add.eventListener to #board (keydown) {
    set snake.nextDirection
    If keydown is opposite of direction of snake {
        break;
    }
}

function tick () {
    moveSnake(travelDistance)
    if snakeHead is on apple, {
        apple move to freeSpace
        score goes up by num 
        snake tail does not get removed for tick(num)
    }
    if snakeHead hits wall or himself {
        gameState.gameStatus: 'game over
        clearInterval
        displays score
    }
    renderState()
}

*/

const board = document.getElementById('board');
const boardCtx = board.getContext('2d');
// let apple = [math.random] // random position
// function createSquares () {
//     for (let i = 0; i < 400; i++) {

//     }
// }
// const snakeHead = [snakeHeadX, SnakeHeadY]

let squareCount = 40 //Make adjustable in settings
let squareSize = board.width / squareCount

let snakeHeadX = board.width / 2
let snakeHeadY = board.width / 2
let xVelocity = 0
let yVelocity = 0

let snakeSpeed = 10 // frames per second

function changeDirection (event) {
    //ArrowUp
    if (event.keyCode === 38) {
        if (yVelocity === squareSize) {
            return;
        } else {
        yVelocity = -squareSize;
        xVelocity = 0;
        }
    }

    //ArrowDown
    if (event.keyCode === 40) { 
        if (yVelocity === -squareSize) {
            return;
        } else {
        yVelocity = squareSize;
        xVelocity = 0;
        }
    }

    //ArrowLeft
    if (event.keyCode === 37) { 
        if (xVelocity === squareSize) {
            return;
        } else {
        yVelocity = 0;
        xVelocity = -squareSize;
        }
    }

    //ArrowRight
    if (event.keyCode === 39) {
        if (xVelocity === -squareSize) {
            return;
        } else {
        yVelocity = 0;
        xVelocity = squareSize;
        }
    }
}

function moveSnake() {
    snakeHeadX += xVelocity
    snakeHeadY += yVelocity
}

function renderNewFrame() {
    //Render board
    boardCtx.fillStyle = 'black'
    boardCtx.fillRect(0, 0, board.width, board.height);

    //Render snake
    boardCtx.fillStyle = 'lime'
    boardCtx.fillRect (snakeHeadX, snakeHeadY, squareSize, squareSize)
}


function gameFrame() {
    moveSnake()
    renderNewFrame ()
    // checkAppleCollision()
    // checkSnakeCollision()
}



document.addEventListener('keydown', changeDirection);

setInterval (function () {
    gameFrame()
}, 1000 / snakeSpeed);

/*

function checkAppleCollision () {
    if (appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random() * gridCount);
        appleY = Math.floor(Math.random() * gridCount);

        snake tail 
    }
}

// setInterval(tick, 1000 / speed);





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
  
  // now you might have things like
  document.addEventListener('keydown', function (event) {
    // here you might read which key was pressed and update the state accordingly
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
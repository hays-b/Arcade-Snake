import useGame from "./hooks/useGame";
import Board from "./Board";
import PlayAgain from "./PlayAgain";
import ScoreDisplay from "./ScoreDisplay";  

function Main() {
    const { gameState } = useGame();

    return (
        <div className='main'>
       {/* <StartGame /> */}
        <ScoreDisplay />
        {gameState.gameOver ? <PlayAgain />: null}
        <Board />
        </div>
    )
}

export default Main;

import React from "react";
import useGame from "./hooks/useGame";

const StartGame = () => {
  const { gameState, setGameState, highScores } = useGame();

  return (
    <div className="play-again-container">
      <button
        className="play-again"
        onClick={(e) => {
          e.preventDefault();
          setGameState({
            ...gameState,
            score: 0,
            menu: false,
            gameOver: false,
          });
        }}
      >
        START
      </button>
      <div className='high-scores-title'>- TOP 10 -</div>
      {Array.isArray(highScores) && highScores.length ? (
        <table className="highscores">
          <thead className='score-row'>
            <tr>
              <th scope="col" className='score-row'></th>
              <th scope="col" className='score-row'>SCORE</th>
              <th scope="col" className='score-row'>NAME</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((score, index) => (
              <tr key={`scoresTable: ${score.id}`}>
                <td className='score-row'>
                  {index === 0
                    ? "1ST"
                    : index === 1
                    ? "2ND"
                    : index === 2
                    ? "3RD"
                    : `${index + 1}TH`}
                </td>
                <td className='score-row'>{score.score}</td>
                <td className='score-row'>{score.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default StartGame;

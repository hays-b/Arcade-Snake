import React from "react";
import useGame from "./hooks/useGame";

const AllHighScores = () => {
  const { gameState, setGameState, highScores, setRoute } = useGame();

  return (
    <>
      <div className="play-again-container overflow-scroll">
           <div className="back-button-container">
      <button
        className="settings-btn"
        onClick={() => {
          setRoute("menu");
        }}
      >
        BACK
      </button>
      </div>
      <div className="high-scores-title">- TOP 50 -</div>
        {Array.isArray(highScores) && highScores.length ? (
          <table className="highscores">
            <thead className="score-row">
              <tr>
                <th scope="col" className="score-row"></th>
                <th scope="col" className="score-row">
                  SCORE
                </th>
                <th scope="col" className="score-row">
                  NAME
                </th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((score, index) => (
                <tr key={`scoresTable: ${score.id}`}>
                  <td className="score-row">
                    {index === 0
                      ? "1ST"
                      : index === 1
                      ? "2ND"
                      : index === 2
                      ? "3RD"
                      : `${index + 1}TH`}
                  </td>
                  <td className="score-row lightblue">{score.score}</td>
                  <td className="score-row red">{score.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
};

export default AllHighScores;

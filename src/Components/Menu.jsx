import React from "react";
import useGame from "./hooks/useGame";

const Menu = () => {
  const { gameState, setGameState, highScores, setRoute } = useGame();

  return (
    <>
      <div className="settings-cog-container">
        <img
          className="settings-cog"
          src="https://res.cloudinary.com/dezxd4zbm/image/upload/v1652566342/EliteWebServices/arcade-snake/lime-cog_la6eel.png"
          width="100px"
          height="100px"
          alt="SETTINGS"
          onClick={() => {
            setRoute("settings");
          }}
        />
      </div>
      <div className="play-again-container">
        <button
          className="play-again"
          onClick={(e) => {
            e.preventDefault();
            setRoute("game");
            setGameState({
              ...gameState,
              score: 0,
              gameOver: false,
            });
          }}
        >
          START
        </button>
        <div className="high-scores-title">- TOP 10 -</div>
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
                  <td className="score-row">{score.score}</td>
                  <td className="score-row">{score.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
};

export default Menu;

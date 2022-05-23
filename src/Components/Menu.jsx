import React from "react";
import useGame from "./hooks/useGame";
import settingsCog from "../images/lime-cog.png"

const Menu = () => {
  const { gameState, setGameState, highScores, setRoute } = useGame();
  const top5 = highScores.slice(0, 5);

  return (
    <>
      <div className="settings-cog-container">
        <img
          className="settings-cog"
          src={settingsCog}
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
          className="start-game"
          onClick={(e) => {
            e.preventDefault();
            setRoute("game");
            setGameState({
              ...gameState,
              score: 0,
              gameOver: false,
              newHighScore: false,
            });
          }}
        >
          START
        </button>
        <div className="high-scores-title">- TOP 5 -</div>
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
              {top5.map((score, index) => (
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
        <button className='new-highscore-submit' onClick={()=>{
          setRoute('allhighscores')
        }}>SEE ALL HIGHSCORES</button>
      </div>
    </>
  );
};

export default Menu;

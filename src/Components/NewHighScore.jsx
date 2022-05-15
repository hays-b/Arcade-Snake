import React, { useState} from "react";
import useGame from "./hooks/useGame";

const NewHighScore = () => {
  const { boardState, gameState, setGameState, setRoute } = useGame();

  const [formState, setFormState] = useState({
      score: gameState.score,
      name: ''
  })

  return (
      <div className="play-again-container">
          <div className="settings-title">NEW HIGHSCORE!</div>
    <form
      className="play-again"
      onSubmit={(e) => {
        e.preventDefault();
        
      }}
      >
          <div className="settings-title">{gameState.score}</div>
        <input
        className="play-again"
        type="text"
        value={formState.name.toUpperCase()}
        onChange={(event) => setFormState({...formState, name: event.target.value })}
        required
        maxLength="3"
        ></input>
        <button className="play-again" type="submit">SUBMIT</button>
        </form>
    </div>
  );
};

export default NewHighScore;

import React, { useState } from "react";
import useGame from "./hooks/useGame";
import { createScore, getAllScores, deleteScore } from "../axios-services";

const NewHighScore = () => {
  const {
    gameState,
    highScores,
    setHighScores,
    setNewHighScore,
  } = useGame();

  const [formState, setFormState] = useState({
    name: "",
  });

  const handleSubmit = async () => {
    setNewHighScore(false);
    const result = await createScore(gameState.score, formState.name.toUpperCase());
    if (highScores[49]) {
      await deleteScore(highScores[49].id);
    }
    const data = await getAllScores();
    setHighScores(data);

  };

  return (
    <div className="new-highscore-container">
      <div className="new-highscore-title rainbow">NEW HIGHSCORE!</div>
      <form
        className="new-highscore-form"
        onSubmit={async (e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="row">
          <div className="new-highscore-text">ENTER YOUR NAME HERE:</div>
          <input
            type="text"
            value={formState.name.toUpperCase()}
            onChange={(event) => setFormState({ name: event.target.value })}
            required
            maxLength="3"
          ></input>
        </div>
        <button className="new-highscore-submit" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewHighScore;

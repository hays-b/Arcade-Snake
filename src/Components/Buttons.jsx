import React from "react";
import useGame from "./hooks/useGame";
import { changeDirection } from "./context/helperFunctions";

const Buttons = () => {
  const { gameState, setGameState, highScores, setRoute } = useGame();

  return (
    <>
      <div className="buttons-container-up">
        <div
          className="red-button up"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
      </div>
      <div className="buttons-container-down">
        <div
          className="red-button down"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
      </div>
      <div className="buttons-container-leftright">
        <div
          className="red-button left"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
        <div
          className="red-button right"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
      </div>
    </>
  );
};

export default Buttons;

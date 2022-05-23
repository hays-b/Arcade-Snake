import React from "react";
import useGame from "./hooks/useGame";
import { changeDirection } from "./context/helperFunctions";

const Buttons = () => {
  const { gameState, setGameState, highScores, setRoute } = useGame();

  return (
    <>
      <div className="buttons-container-up">
        <button
          className="red-button up"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
      </div>
      <div className="buttons-container-down">
        <button
          className="red-button down"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
      </div>
      <div className="buttons-container-left">
        <button
          className="red-button left"
          onClick={(event) => {
            changeDirection(event);
          }}
        />
        </div>
        <div className="buttons-container-right">
        <button
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

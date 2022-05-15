import React from "react";
import useGame from "./hooks/useGame";

const Settings = () => {
  const {
    setBoardState,
    boardState,
    gameState,
    setGameState,
    highScores,
    setRoute,
  } = useGame();

  return (
      <div className='play-again-container'>
    <div className="back-button-container">
      <button
        className="settings-btn"
        onClick={() => {
          setRoute("menu");
        }}
      >
        BACK
      </button>
      <button
        className={
            boardState.tileCount === 25 && gameState.speed === 10 && gameState.numAddedForApple === 1 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setBoardState({ ...boardState, tileCount: 25 });
            setGameState({ ...gameState, speed: 10, numAddedForApple: 1 });
          }}
      >
        DEFAULT SETTINGS
      </button>
      </div>
      <div className="settings-title" style={{color: 'orange'}}>WARNING: YOU CANNOT SET A NEW HIGHSCORE WHILE USING CUSTOM SETTINGS</div>

      <div className="settings-title">BOARD SIZE</div>
      <div className="settings-row">
        <button
          className={
            boardState.tileCount === 15 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setBoardState({ ...boardState, tileCount: 15 });
          }}
        >
          SMALL
        </button>
        <button
          className={
            boardState.tileCount === 25 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setBoardState({ ...boardState, tileCount: 25 });
          }}
        >
          MEDIUM
        </button>
        <button
          className={
            boardState.tileCount === 41 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setBoardState({ ...boardState, tileCount: 41 });
          }}
        >
          BIG
        </button>
      </div>
      <div className="settings-title">SPEED</div>
      <div className="settings-row">
        <button
          className={
            gameState.speed === 5 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setGameState({ ...gameState, speed: 5 });
          }}
        >
          SLOW
        </button>
        <button
          className={
            gameState.speed === 10 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setGameState({ ...gameState, speed: 10 });
          }}
        >
          NORMAL
        </button>
        <button
          className={
            gameState.speed === 20 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setGameState({ ...gameState, speed: 20 });
          }}
        >
          FAST
        </button>
      </div>
      <div className="settings-title">SNAKE ADDED FOR EATING APPLE</div>
      <div className="settings-row">
      <button
          className={
            gameState.numAddedForApple === 1 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setGameState({ ...gameState, numAddedForApple: 1 });
          }}
        >
          NORMAL
        </button>
        <button
          className={
            gameState.numAddedForApple === 5 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setGameState({ ...gameState, numAddedForApple: 5 });
          }}
        >
          MORE
        </button>
        <button
          className={
            gameState.numAddedForApple === 15 ? "settings-btn selected" : "settings-btn"
          }
          onClick={() => {
            setGameState({ ...gameState, numAddedForApple: 15 });
          }}
        >
          TOO MUCH
        </button>
      </div>
    </div>
  );
};

export default Settings;

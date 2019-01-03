import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const GameModeBtn = ({ gameMode, onModeChange }) => (
  <button
    data-game-mode={gameMode}
    className="gameModeBtn"
    onClick={() => onModeChange(gameMode)}
  >
    {_.capitalize(gameMode)}
  </button>
);

GameModeBtn.propTypes = {
  onModeChange: PropTypes.func.isRequired,
  gameMode: PropTypes.string.isRequired
};

export default GameModeBtn;

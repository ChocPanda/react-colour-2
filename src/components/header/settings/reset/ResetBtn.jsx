import React from "react";
import PropTypes from "prop-types";

const ResetBtn = ({ mode, onReset, isGameOver }) => (
  <button id="reset" onClick={() => onReset(mode)}>
    {isGameOver ? "Play Again?" : "New Colours"}
  </button>
);

ResetBtn.propTypes = {
  mode: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired
};

export default ResetBtn;

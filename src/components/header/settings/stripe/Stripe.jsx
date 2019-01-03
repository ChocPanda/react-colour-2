import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GameModeBtn from "../game-mode/GameModeBtnComponent";
import ResetBtn from "../reset/ResetBtnComponent";
import { getGameOver, getUserHasGuessed } from "reducers/root";

import { GameMode } from "utils/const";
const StripeStyle = {
  backgroundColor: "white",
  textAlign: "center",
  height: "30px"
};

const Stripe = ({ isGameOver, hasGuessed }) => (
  <div style={StripeStyle}>
    <ResetBtn style={{ alignItems: "flex-start" }} />
    <span style={{display: "inline-block", width: "20%"}}>
      {isGameOver
        ? "Correct, Well Done!"
        : hasGuessed
        ? "Unlucky, try again"
        : ""}
    </span>
    {Object.values(GameMode).map(mode => (
      <GameModeBtn key={mode.string} gameMode={mode} />
    ))}
  </div>
);

Stripe.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  hasGuessed: PropTypes.bool
};
Stripe.defaultProps = { hasGuessed: false };

const mapStateToProps = state => ({
  isGameOver: getGameOver(state),
  hasGuessed: getUserHasGuessed(state)
});

export default connect(mapStateToProps)(Stripe);

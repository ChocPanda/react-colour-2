import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameModeBtn from '../game-mode/GameModeBtnComponent';
import ResetBtn from '../reset/ResetBtnComponent';
import { getGameOver, getUserHasGuessed } from 'reducers/root';

import { GameMode } from 'utils/const';

const Stripe = ({ isGameOver, hasGuessed }) => (
  <div id="stripe" className="flexContainer">
    <ResetBtn style={{ "justify-self": "start" }} />
    <span style={{ justifySelf: "center" }}>
      {isGameOver
        ? "Correct, Well Done!"
        : hasGuessed
        ? "Unlucky, try again"
        : ""}
    </span>
    {Object.values(GameMode).map(({ mode }) => { return (
      <GameModeBtn key={mode} gameMode={mode} style={{ justifySelf: "right" }}/>
    )})}
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

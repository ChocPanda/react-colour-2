import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import Stripe from './settings/stripe/Stripe';
import { getAnswer } from 'reducers/answer';
import { getColour } from 'reducers/colours';
import { getGameOver } from 'reducers/root';

const GameHeader = ({ answer, isGameOver }) => {
  const headerStyle = isGameOver ? { backgroundColor: answer } : {};
  return (
    <div>
      <h1 style={headerStyle}>
        The great
        <br />
        <span style={{ fontSize: "200%" }}>{answer.toUpperCase()}</span>
        <br />
        colour game
      </h1>
      <Stripe />
    </div>
  );
};

GameHeader.propTypes = {
  answer: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool
};

GameHeader.defaultProps = {
  isGameOver: false
};

const mapStateToProps = state => ({
  answer: getColour(getAnswer(state)),
  isGameOver: getGameOver(state)
});

export default connect(mapStateToProps)(GameHeader);

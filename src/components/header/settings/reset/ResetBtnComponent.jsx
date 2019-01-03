import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getGameOver } from 'reducers/root';
import { getMode } from 'reducers/mode';
import { getAnswer } from 'reducers/answer';
import { getColour } from 'reducers/colours';
import { resetGame } from 'action-creators/actionCreators';
import { defaultTextColour } from 'utils/const';

const ResetBtn = ({ mode, onReset, isGameOver, answerColour }) => (
  <button
    style={{ color: isGameOver ? answerColour : defaultTextColour }}
    onClick={() => onReset(mode)}
  >
    {isGameOver ? "Play Again?" : "New Colours"}
  </button>
);

ResetBtn.propTypes = {
  mode: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  answerColour: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  mode: getMode(state),
  isGameOver: getGameOver(state),
  answerColour: getColour(getAnswer(state)),
});

const mapDispatchToProps = dispatch => ({
  onReset: mode => {
    dispatch(resetGame(mode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetBtn);

import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { changeGameMode } from 'action-creators/actionCreators';
import { getMode } from 'reducers/mode';
import { getAnswer } from 'reducers/answer';
import { getColour } from 'reducers/colours';
import { getGameOver } from 'reducers/root';
import { defaultTextColour } from 'utils/const'

const GameModeBtn = ({
  gameMode,
  onModeChange,
  currentMode,
  isGameOver,
  answer
}) => {
  const ButtonStyle =
    currentMode === gameMode
      ? {
          backgroundColor: isGameOver ? answer : defaultTextColour,
          color: "white"
        }
      : { color: isGameOver ? answer : "" };

  return (
    <button
      onClick={() => onModeChange(gameMode)}
      style={ButtonStyle}
    >
      {_.capitalize(gameMode.string)}
    </button>
  );
};

GameModeBtn.propTypes = {
  onModeChange: PropTypes.func.isRequired,
  gameMode: PropTypes.object.isRequired,
  currentMode: PropTypes.object.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  answer: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentMode: getMode(state),
  answer: getColour(getAnswer(state)),
  isGameOver: getGameOver(state)
});

const mapDispatchToProps = dispatch => ({
  onModeChange: mode => {
    dispatch(changeGameMode(mode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameModeBtn);

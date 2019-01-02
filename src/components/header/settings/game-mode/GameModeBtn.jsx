import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import _ from 'lodash';

import { changeGameMode } from '../../../../reducers/mode'


class GameModeButton extends Component {
  render() {
    const { gameMode, dispatch } = this.props;
    
    return (
      <button
        data-game-mode={gameMode}
        className="gameModeBtn"
        onClick={() => dispatch(changeGameMode(gameMode))}
      >
        {_.capitalize(gameMode)}
      </button>
    );
  }
}

GameModeButton.propTypes = {
  gameMode: PropTypes.string.isRequired
};

export default connect()(GameModeButton);

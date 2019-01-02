import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";

import Square from "../square/Square";

import { getGameBoardSize, getGameMode } from "../../reducers/root";

class Game extends Component {
  render() {
    const { mode, colours } = this.props;

    return (
      <div>
        {Array.from({ length: getGameBoardSize(mode) }, (_, i) => (
          <Square key={i} colour={colours[i]} />
        ))}
      </div>
    );
  }
}

Game.propTypes = {
  mode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ mode: getGameMode(state) })

export default connect(mapStateToProps)(Game);

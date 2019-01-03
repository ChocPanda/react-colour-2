import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Square from '../square/SquareComponent';

import { getMode } from 'reducers/mode';
import { getColours } from 'reducers/colours';
import { getAnswer } from 'reducers/answer';

const BoardStyle = {
  margin: "20px auto",
  maxWidth: "700px"
}

class Game extends Component {
  render() {
    const { colours } = this.props;

    return (
      <div style={BoardStyle}>
        {colours.map((colour, key) => (
          <Square key={key} colour={colour} />
        ))}
      </div>
    );
  }
}

Game.propTypes = {
  mode: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mode: getMode(state),
  answer: getAnswer(state),
  colours: getColours(state)
});

export default connect(mapStateToProps)(Game);

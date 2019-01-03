import React, { Component } from 'react';

const SquareStyle = {
  width: "25%",
  paddingBottom: "30%",
  margin: "1.6%",
  borderRadius: "25px",
  transition: "background-color 500ms",
  "--webkit-transition": "background-color 500ms",
  "--moz-transition": "background-color 500ms",
  display: "inline-block"
};

class Square extends Component {
  render() {
    const { gameOver, answer, colour, onGuess } = this.props;

    if (gameOver) {
      return <div style={{ ...SquareStyle, backgroundColor: answer.colour }} />;
    } else if (colour.isGuessed) {
      return <div style={{ ...SquareStyle, backgroundColor: "transparent" }} />;
    } else {
      return (
        <div
          style={{ ...SquareStyle, backgroundColor: colour.colour }}
          onClick={() => onGuess(colour, answer === colour)}
        />
      );
    }
  }
}

export default Square;

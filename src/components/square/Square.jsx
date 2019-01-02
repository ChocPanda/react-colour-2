import React, { Component } from "react";

const SquareStyle = {
  width: "30%",
  paddingBottom: "30%",
  float: "left",
  margin: "1.6%",
  borderRadius: "25px",
  transition: "background-color 500ms",
  "--webkit-transition": "background-color 500ms",
  "--moz-transition": "background-color 500ms",
  'borderStyle': 'solid'
};

class Square extends Component {
  render() {
    const { colour } = this.props

    return <div style={{...SquareStyle, backgroundColor: colour}} />;
  }
}

export default Square;

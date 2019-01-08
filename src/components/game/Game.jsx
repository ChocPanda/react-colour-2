import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getColours } from "./selectors";
import Square from "components/square";

const BoardStyle = {
  margin: "20px auto",
  maxWidth: "700px"
};

const Game = ({ colours }) => (
  <div style={BoardStyle}>
    {colours.map((colour, key) => (
      <Square key={key} colour={colour} />
    ))}
  </div>
);

Game.propTypes = {
  colours: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  colours: getColours(state)
});

export default connect(mapStateToProps)(Game);

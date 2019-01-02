import React, { Component } from 'react';

import { resetGame } from "../../../../reducers/root";

class ResetBtn extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <button id="reset" onClick={() => dispatch(resetGame())}>
        New Colours
      </button>
    );
  }
}

export default ResetBtn;

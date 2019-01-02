import React, { Component } from "react";

import GameModeBtn from "../game-mode/GameModeBtn.jsx";
import ResetBtn from "../reset/Reset.jsx";

import { GameMode } from "../../../../const";

class Stripe extends Component {
  render() {
    return (
      <div id="stripe">
        <ResetBtn />
        <span id="messageDisplay" />
        <GameModeBtn gameMode={GameMode.Easy} />
        <GameModeBtn gameMode={GameMode.Normal} />
        <GameModeBtn gameMode={GameMode.Hard} />
      </div>
    );
  }
}

export default Stripe;

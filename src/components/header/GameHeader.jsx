import React, { Component } from 'react';

import Stripe from './settings/stripe/Stripe.jsx'

import "./GameHeader.css";

class GameHeader extends Component {
  render() {
    return (<div>
      <h1>
        The great
        <br />
        <span id="colourDisplay">RGB</span>
        <br />
        colour game
      </h1>
      <Stripe />
      </div>
    );
  }
}

export default GameHeader;

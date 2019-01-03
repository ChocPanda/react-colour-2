import React from 'react';
import { connect } from 'react-redux';

import Stripe from './settings/stripe/Stripe';
import { getAnswer } from 'reducers/answer';
import { getColour } from 'reducers/colours';

const GameHeader = ({ answer }) => (
  <div>
    <h1>
      The great
      <br />
      <span id="colourDisplay">{answer.toUpperCase()}</span>
      <br />
      colour game
    </h1>
    <Stripe />
  </div>
);

const mapStateToProps = state => ({
  answer: getColour(getAnswer(state))
});

export default connect(mapStateToProps)(GameHeader);

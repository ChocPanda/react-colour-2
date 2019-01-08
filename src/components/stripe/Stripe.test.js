import React from 'react';
import ReactDOM from 'react-dom';
import Stripe from './Stripe';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stripe />, div);
  ReactDOM.unmountComponentAtNode(div);
});

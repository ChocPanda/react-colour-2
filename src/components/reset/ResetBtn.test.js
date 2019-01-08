import React from 'react';
import ReactDOM from 'react-dom';
import ResetBtn from './Reset';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResetBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});

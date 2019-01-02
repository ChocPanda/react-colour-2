import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Square />, div);
  ReactDOM.unmountComponentAtNode(div);
});

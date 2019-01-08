import React from 'react';
import ReactDOM from 'react-dom';
import GameModeBtn from './GameModeBtn';
import { GameModes } from 'utils/const';
import each from 'jest-each';

each(Object.values(GameModes)).test('renders without crashing', mode => {
  const div = document.createElement('div');
  ReactDOM.render(<GameModeBtn gameMode={mode} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import each from 'jest-each';

import Game from './Game';

import { GameMode } from 'const';

each(Object.values(GameMode)).test("renders without crashing", mode => {
  const div = document.createElement("div");
  ReactDOM.render(<Game mode={mode} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

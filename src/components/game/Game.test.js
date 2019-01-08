import React from 'react';
import ReactDOM from 'react-dom';
import each from 'jest-each';

import Game from './Game';

import { GameModes } from 'const';

each(Object.values(GameModes)).test("renders without crashing", mode => {
  const div = document.createElement("div");
  ReactDOM.render(<Game mode={mode} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

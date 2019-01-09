import React from "react";
import renderer from "react-test-renderer";
import each from "jest-each";
import { Provider } from "react-redux";

import Game from "./Game";
import { configureTestStore } from "utils/test-tools";
import { GameModes } from "utils/const";

each(Object.values(GameModes)).test("renders without crashing", mode => {
  renderer.create(
    <Provider store={configureTestStore()}>
      <Game mode={mode} />
    </Provider>
  );
});

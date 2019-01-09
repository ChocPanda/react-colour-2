import React from "react";
import renderer from "react-test-renderer";
import each from "jest-each";

import { Provider } from "react-redux";
import { configureTestStore } from "utils/test-tools";

import Square from "./Square";

describe("Component", () => {
  each([true, false]).test("renders without crashing", isGuessed => {
    renderer.create(
      <Provider store={configureTestStore()}>
        <Square colour={{ string: "rgb(255, 255, 255)", isGuessed }} />
      </Provider>
    );
  });
});

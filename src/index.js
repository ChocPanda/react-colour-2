import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App, { Actions } from "./components/app";

import configureStore from "./store/configure-store";

const store = configureStore();
store.dispatch(Actions.initialiseGame());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

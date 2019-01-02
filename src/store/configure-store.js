import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers/root";

const configureStore = initState => {
  const middleWare = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middleWare.push(logger);
  }

  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(...middleWare)
  );
  
  return store;
};

export default configureStore;

import { combineReducers } from "redux";
import { createSelector } from "reselect";

import modeReducer from "./mode";
import coloursReducer, * as fromColours from "./colours";
import answerIndexReducer, * as fromAnswers from "./answer";

export default combineReducers({
  mode: modeReducer,
  colours: coloursReducer,
  answerIndex: answerIndexReducer
});

export const getGameOver = createSelector(
  [fromAnswers.getAnswer],
  answer => fromColours.getHasBeenGuessed(answer)
);

export const getUserHasGuessed = createSelector(
  fromColours.getColours,
  colours => colours.some(fromColours.getHasBeenGuessed)
);

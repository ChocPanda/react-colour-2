import { createSelector } from "reselect";
import { selectors as squareSelectors } from "components/square";

export const getColours = state => state.game.squares;

export const getAnswerIndex = state => state.game.answerIndex;

export const getAnswer = createSelector(
  [getAnswerIndex, getColours],
  (index, colours) => colours[index]
);

export const getGameOver = createSelector(
  getAnswer,
  answer => squareSelectors.getIsGuessed(answer)
);

export const getUserHasGuessed = createSelector(
  getColours,
  colours => colours.some(squareSelectors.getIsGuessed)
);

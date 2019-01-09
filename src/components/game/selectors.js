import { createSelector } from "reselect";
import { selectors as squareSelectors } from "components/square";
import * as appSelectors from "components/app/selectors";

export const getColours = createSelector(
  appSelectors.getGame,
  game => game.squares
);

export const getAnswerIndex = createSelector(
  appSelectors.getGame,
  game => game.answerIndex
);

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

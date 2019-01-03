import { createSelector } from 'reselect'

import * as Actions from 'action-creators/actions'
import { getColours } from 'reducers/colours'

export const generateAnswer = length => Math.floor(Math.random() * length);

export default (state = generateAnswer(6), action) => {
  switch (action.type) {
    case Actions.CHANGE_GAME_MODE:
    case Actions.RESET_GAME:
      return action.answer;
    default:
      return state;
  }
};

/********** Selectors **********/

export const getAnswerIndex = state => state.answerIndex;

export const getAnswer = createSelector(
  [getAnswerIndex, getColours],
  (index, colours) => colours[index]
);
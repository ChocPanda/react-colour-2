import { GameMode } from 'utils/const';
import * as Actions from 'action-creators/actions'
import { createSelector } from 'reselect';

export default (state = GameMode.Normal, action) => {
  switch (action.type) {
    case Actions.CHANGE_GAME_MODE:
      return action.mode;
    default:
      return state;
  }
};

/********** Selectors **********/

export const getMode = state => state.mode || GameMode.Normal;
export const getModeString = createSelector(getMode, mode => mode.modeString);

export const getBoardSize = mode => mode.boardSize;

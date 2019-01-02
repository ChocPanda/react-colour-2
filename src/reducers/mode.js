import { GameMode } from "../const";

/********** Actions **********/

const CHANGE_GAME_MODE = "mode/CHANGE_MODE";
const RESET_GAME = "mode/RESET_GAME"

export const reducer = (state = GameMode.Normal, action = {}) => {
  switch (action.type) {
    case CHANGE_GAME_MODE:
      return action.mode;
    default:
      return state;
  }
};

/********** Selectors **********/

export const getGameMode = state => state.mode || GameMode.Normal;
export const getGameBoardSize = state => {
  switch (getGameMode(state)) {
    case GameMode.Easy:
      return 3;
    case GameMode.Hard:
      return 9;
    case GameMode.Normal:
    default:
      return 6;
  }
};


/********** Action Creators **********/

export const changeGameMode = state => ({ type: CHANGE_GAME_MODE, mode: state });
export const resetGame = { type: RESET_GAME }

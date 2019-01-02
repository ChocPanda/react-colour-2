import { combineReducers } from "redux";
import * as fromModes from "./mode";

const modeReducer = fromModes.reducer

const rootReducer = combineReducers({ mode: modeReducer });

export default rootReducer;


/********** Selectors **********/

export const getGameMode = fromModes.getGameMode
export const getGameBoardSize = fromModes.getGameBoardSize


/********** Action Creators **********/

export const resetGame = fromModes.resetGame


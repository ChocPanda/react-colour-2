import { combineReducers } from "redux";

import { reducer as modeReducer } from 'components/stripe';
import { reducer as gameReducer } from "components/game";

export default combineReducers({
  mode: modeReducer,
  game: gameReducer
});

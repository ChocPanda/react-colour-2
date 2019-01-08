import { GameModes } from "utils/const";
import * as Types from "./types";

export const InitialState = GameModes.Normal;

export default (state = InitialState, action) => {
  switch (action.type) {
    case Types.CHANGE_GAME_MODE:
      return action.mode;
    default:
      return state;
  }
};

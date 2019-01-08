import * as Types from "./types";
import { selectors as modeSelectors } from "components/game-mode";
import { newGame } from "utils/lib";

export const changeGameMode = mode => ({
  type: Types.CHANGE_GAME_MODE,
  mode,
  ...newGame(modeSelectors.getBoardSize(mode))
});

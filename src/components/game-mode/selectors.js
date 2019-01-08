import { GameModes } from "utils/const";

export const getBoardSize = mode => {
  switch (mode) {
    case GameModes.Easy:
      return 3;
    case GameModes.Hard:
      return 9;
    default:
      return 6;
  }
};

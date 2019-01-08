import * as Types from "./types";

export const InitialState = { string: "rgb(255,255,255)", isGuessed: false };

export default (
  state = InitialState,
  action
) => {
  switch (action.type) {
    case Types.GuessSquare:
      return state.string === action.colour
        ? { ...state, isGuessed: true }
        : state;
    default:
      return state;
  }
};

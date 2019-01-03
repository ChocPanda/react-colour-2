import * as Actions from 'action-creators/actions';

const zeroFilled = (n, str) => {
  return "0".repeat(n - str.length) + str;
};

const hexToRgb = hex => {
  const colour = hex
    .replace(
      /^#?([a-fd])([a-fd])([a-fd])$/i,
      (_, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

  if (colour.length === 2) {
    console.log(`WTF! + ${hex} + ${colour}`);
  }
  return `rgb(${colour.join(", ")})`;
};

export const generateColours = length => {
  const maxColour = parseInt("FFFFFF", 16);
  return Array.from({ length: length }, () => {
    const randColour = Math.floor(Math.random() * maxColour);
    const colourStr =
      "#" + zeroFilled(6, randColour.toString(16).toUpperCase());

    return { colour: hexToRgb(colourStr), isGuessed: false };
  });
};

export default (state = generateColours(6), action) => {
  switch (action.type) {
    case Actions.CHANGE_GAME_MODE:
    case Actions.RESET_GAME:
      return action.colours;
    case Actions.GUESS_SQUARE:
      return state.map(option =>
        option === action.colour ? { ...option, isGuessed: true } : option
      );
    default:
      return state;
  }
};

/********** Selectors **********/

export const getColours = state => state.colours;
export const getColour = answer => answer.colour;
export const getHasBeenGuessed = answer => answer.isGuessed;

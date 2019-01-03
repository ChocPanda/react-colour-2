import * as Actions from './actions';
import { generateColours } from 'reducers/colours';
import { generateAnswer } from 'reducers/answer';
import { getBoardSize } from 'reducers/mode';

const newGame = boardSize => ({
  colours: generateColours(boardSize),
  answer: generateAnswer(boardSize)
});

export const changeGameMode = mode => { console.log(mode); return ({
  type: Actions.CHANGE_GAME_MODE,
  mode,
  ...newGame(getBoardSize(mode))
}); }

export const resetGame = mode => ({
  type: Actions.RESET_GAME,
  ...newGame(getBoardSize(mode))
});

export const guessSquare = (colour, isCorrect) => ({
  type: Actions.GUESS_SQUARE,
  colour,
  isCorrect
});
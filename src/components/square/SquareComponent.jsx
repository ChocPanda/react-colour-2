import { connect } from 'react-redux'

import Square from './Square';
import { guessSquare } from 'action-creators/actionCreators';
import { getGameOver } from 'reducers/root';
import { getAnswer } from 'reducers/answer'

const mapStateToProps = state => ({
  answer: getAnswer(state),
  gameOver: getGameOver(state)
});

const mapDispatchToProps = dispatch => ({
  onGuess: (colour, isCorrect) => {
      dispatch(guessSquare(colour, isCorrect));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);

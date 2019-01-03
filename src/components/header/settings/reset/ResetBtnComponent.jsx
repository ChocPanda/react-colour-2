import { connect } from 'react-redux'

import Reset from "./ResetBtn";

import { getGameOver } from "reducers/root";
import { getMode } from 'reducers/mode';
import { resetGame } from 'action-creators/actionCreators'

const mapStateToProps = state => ({
  mode: getMode(state),
  isGameOver: getGameOver(state)
})

const mapDispatchToProps = dispatch => ({
  onReset: mode => {
      dispatch(resetGame(mode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);

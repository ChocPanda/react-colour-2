import { connect } from 'react-redux'

import GameModeBtn from "./GameModeBtn";

import { changeGameMode } from "action-creators/actionCreators";

const mapDispatchToProps = dispatch => ({
  onModeChange: mode => {
    dispatch(changeGameMode(mode));
  }
});

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameModeBtn);
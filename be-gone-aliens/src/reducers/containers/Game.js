import { connect } from 'react-redux';

import App from '/Users/smdanziger/Code/react-game/be-gone-aliens/src/App';

const mapStateToProps = state => ({
  message: state.message,
});

const Game = connect(
  mapStateToProps,
)(App);

export default Game;
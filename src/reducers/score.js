import { COMPUTER_SCORE_INCREASE, PLAYER_SCORE_INCREASE, RESET_SCORE } from '../actions/score';

const initialState = {
  player: 0,
  computer: 0
};
export const score = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_SCORE_INCREASE:
      return { ...state, player: state.player + 1 };
    case COMPUTER_SCORE_INCREASE:
      return { ...state, computer: state.computer + 1 };
    case RESET_SCORE:
      return { player: 0, computer: 0 };
    default:
      return state;
  }
};

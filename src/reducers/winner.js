import { SET_WINNER, RESET_WINNER } from '../actions/winner';

const initialState = '';

export const winner = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNER:
      return action.payload;
    case RESET_WINNER:
      return initialState;
    default:
      return state;
  }
};

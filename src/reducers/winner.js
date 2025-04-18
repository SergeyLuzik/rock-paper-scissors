import { SET_WINNER } from '../actions/winner';
export const winner = (state = '', action) => {
  switch (action.type) {
    case SET_WINNER:
      return action.payload;
    default:
      return state;
  }
};

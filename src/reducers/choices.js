import { SET_COMPUTER_CHOICE, SET_PLAYER_CHOICE, RESET_CHOICES } from '../actions/choices';

const initialState = {
  player: null,
  computer: null
};
export const choices = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_CHOICE:
      return { ...state, player: action.payload };
    case SET_COMPUTER_CHOICE:
      return { ...state, computer: action.payload };
    case RESET_CHOICES:
      return initialState;
    default:
      return state;
  }
};

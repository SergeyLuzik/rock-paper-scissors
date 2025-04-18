import { SWITCH_MODE } from '../actions/mode';

export const mode = (state = 'greeting', action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return state === 'greeting' ? 'game' : 'greeting';
    default:
      return state;
  }
};

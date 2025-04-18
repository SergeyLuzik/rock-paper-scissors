import { SWITCH_THEME } from '../actions/theme';

export const theme = (state = 'light', action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

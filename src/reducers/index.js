import { combineReducers } from 'redux';
import { theme } from './theme';
import { mode } from './mode';
import { score } from './score';
import { winner } from './winner';
import { choices } from './choices';

export const rootReducer = combineReducers({
  theme,
  mode,
  choices,
  score,
  winner
});

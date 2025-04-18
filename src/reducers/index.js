import { combineReducers } from 'redux';
import { theme } from './theme';
import { mode } from './mode';
import { score } from './score';
import { winner } from './winner';

export const rootReducer = combineReducers({
  theme,
  mode,
  score,
  winner
});

import { combineReducers } from 'redux';
import { theme } from './theme';
import { mode } from './mode';

export const rootReducer = combineReducers({
  theme,
  mode
});

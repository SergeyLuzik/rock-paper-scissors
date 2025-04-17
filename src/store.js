import { createStore } from 'redux';
import { combineReducers } from 'redux';

export let store = createStore(combineReducers({}));

import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers, createStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import currentMatchReducer from './currentMatchSlice';
import fetchingDataRuder from './fetchingData';

const rootReducer = combineReducers({
  user: userReducer,
  match: currentMatchReducer,
  fetching: fetchingDataRuder,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);
export default store;

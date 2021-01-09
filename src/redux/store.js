import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers, createStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);
export default store;

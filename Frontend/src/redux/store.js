// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';    // ✅ correct way with modern redux-thunk
import rootReducer from './reducers.js';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)               // ✅ use thunk directly
);

export default store;

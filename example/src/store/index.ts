/* eslint-disable max-depth */
import { combineReducers, createStore } from 'redux';

// REDUCERS
import cart from './cart';
import orders from './orders';

const reducer = combineReducers({
  cart,
  orders,
});

// STORE
const store = createStore(reducer);

export default store;

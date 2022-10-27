/* eslint-disable max-depth */
import { configureStore } from '@reduxjs/toolkit';

// REDUCERS
import cart from './cart';
import orders from './orders';

const store = configureStore({
  reducer: {
    cart,
    orders,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

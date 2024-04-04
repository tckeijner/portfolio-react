import { configureStore } from '@reduxjs/toolkit';
import navReducer from './state/navSlice';

export const store = configureStore(
  {
    reducer: {
      nav: navReducer,
    },
    devTools: true
  },
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
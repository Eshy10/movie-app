import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {movieReducer} from "./features/movieSlice";
import { movieApi } from './services/movie';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: movieReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
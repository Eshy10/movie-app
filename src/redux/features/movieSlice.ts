import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// const initialState: {
//     movies: any[],
//     filter: ''
// }

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        filter: ''
    },
    reducers: {
        filterMovies: (state, action) => {
            state.filter = action.payload;
        }
    },
  });

  export const movieReducer = movieSlice.reducer;

  export const getAllMovies = (state: RootState) => state.movies;
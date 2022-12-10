/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesProps } from './types';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://www.omdbapi.com/?i=tt3896198&apikey=f4d1759b'
	}),
	endpoints: (builder) => ({
		getAllMovies: builder.query<MoviesProps, void>({
			query: () => '',
		}),
		getMovieByname: builder.query<MoviesProps, string>({
			query: (movie) => `http://www.omdbapi.com/?s=${movie}&apikey=f4d1759b`,
		}),
	}),
});

export const { useGetAllMoviesQuery, useGetMovieBynameQuery } = movieApi;
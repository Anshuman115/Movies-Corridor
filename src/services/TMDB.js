import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const page = 1;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => (
    {
      // get genres
      getGenres: builder.query({
        query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
      }),

      //* get movies by [type]
      getMovies: builder.query({
        query: ({ genreIdOrCategoryName, page, searchQuery }) => {
          // search movies get
          if (searchQuery) {
            return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
          }
          if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
            return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
          }
          if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
            return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
          }
          return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
        },
      }),
      // get movie
      getMovie: builder.query({
        query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
      }),

      // get user spedific list
      getlist: builder.query({
        query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
      }),

      getRecommendations: builder.query({
        query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
      }),

      // get actor's details
      getActorsDetails: builder.query({
        query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
      }),

      // get movies by actor
      getMoviesByActor: builder.query({
        query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
      }),
    }
  ),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorsDetailsQuery,
  useGetMoviesByActorQuery,
  useGetlistQuery,
} = tmdbApi;

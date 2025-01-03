import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies, getTrendingMovies } from '../utils/api';
import api  from '../utils/api';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async () => {
    const response = await getPopularMovies();
    return response.data.results;
  }
);
export const searchMoviesAsync = createAsyncThunk(
    'movies/search',
    async (query) => {
      const response = await api.get(`/search/movie?query=${query}`);
      return response.data.results;
    }
  );
  export const fetchGenres = createAsyncThunk(
    'movies/fetchGenres',
    async () => {
      const response = await api.get('/genre/movie/list');
      return response.data.genres;
    }
  );
  
  // Thunk to fetch movies by selected genre
  export const fetchMoviesByGenre = createAsyncThunk(
    'movies/fetchMoviesByGenre',
    async (genreId) => {
      const response = await api.get(`/discover/movie?with_genres=${genreId}`);
      return response.data.results;
    }
  );

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrending',
  async () => {
    const response = await getTrendingMovies();
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    popular: [],
    trending: [],
    watchlist: [],
    searchResults: [],
    loading: false,
    genres: [],
    selectedGenre: null,
    genreMovies: [],
    error: null,
  },
  reducers: {
    addToWatchlist: (state, action) => {
        state.watchlist.push(action.payload);
      },
      removeFromWatchlist: (state, action) => {
        state.watchlist = state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        );
        
      },
      setSelectedGenre: (state, action) => {
        state.selectedGenre = action.payload;
      },
      clearSelectedGenre: (state) => {
        state.selectedGenre = null;
        state.genreMovies = [];
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      builder.addCase(searchMoviesAsync.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending = action.payload;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.genreMovies = action.payload;
      })
      .addCase(fetchMoviesByGenre.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const {
    addToWatchlist,
    setSelectedGenre,
    clearSelectedGenre,
    removeFromWatchlist,
  } = movieSlice.actions;
  
export default movieSlice.reducer;
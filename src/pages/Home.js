import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import { fetchPopularMovies, fetchTrendingMovies } from '../redux/movieSlice';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Home() {
  const dispatch = useDispatch();
  const { popular, trending, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  if (loading) {
    return <Loading message="Fetching movies..." />;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Popular Movies
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
  {popular.slice(0, 6).map((movie) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
      <MovieCard movie={movie} />
    </Grid>
  ))}
</Grid>


      <Typography variant="h4" gutterBottom>
        Trending Now
      </Typography>
      <Grid container spacing={3}>
  {trending.slice(0, 6).map((movie) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
      <MovieCard movie={movie} />
    </Grid>
  ))}
</Grid>
    </Container>
  );
}

export default Home;
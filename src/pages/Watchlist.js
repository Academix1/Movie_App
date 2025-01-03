import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@mui/material';
import MovieCard from '../components/MovieCard'; // Ensure the path to MovieCard is correct

function Watchlist() {
  const watchlist = useSelector((state) => state.movies.watchlist);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Watchlist
      </Typography>
      <Grid container spacing={3}>
        {watchlist.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Watchlist;
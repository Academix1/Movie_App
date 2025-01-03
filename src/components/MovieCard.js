import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Assuming poster_path is the key in your movie object
        alt={movie.title}
        sx={{
          height: 300,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;

import React from 'react';
import {
Card,
CardContent,
Typography,
CardMedia,
IconButton,
} from '@mui/material';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../redux/movieSlice';

function MovieCard({ movie }) {
const dispatch = useDispatch();

const watchlist = useSelector((state) => state.movies.watchlist);
const isInWatchlist = watchlist.some((m) => m.id === movie.id);

const handleWatchlistClick = (e) => {
  e.stopPropagation();
  if (isInWatchlist) {
    dispatch(removeFromWatchlist(movie));
  } else {
    dispatch(addToWatchlist(movie));
  }
};


return (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      borderRadius: 2,
      boxShadow: 3,
      position: 'relative', // Ensure the IconButton is positioned correctly
    }}
  >
    <CardMedia
      component="img"
      height="250"
      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Use the movie poster URL
      alt={movie.title}
      sx={{ objectFit: 'cover', borderRadius: 2 }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h6" component="div">
        {movie.title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'} {/* Display release year */}
      </Typography>
    </CardContent>
    <IconButton
      onClick={handleWatchlistClick}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        color: isInWatchlist ? 'primary.main' : 'text.secondary', // Change icon color based on watchlist status
      }}
    >
      {isInWatchlist ? <Bookmark /> : <BookmarkBorder />}
    </IconButton>
  </Card>
);
}

export default MovieCard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  // State to store movies, loading status, and error
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get the TMDB Access Token from .env
  const getAccessToken = () => process.env.REACT_APP_TMDB_ACCESS_TOKEN;

  // Fetching popular movies using the access token in the URL
  useEffect(() => {
    const fetchMovies = async () => {
      const accessToken = getAccessToken();
      if (!accessToken) {
        setError('API Key is missing');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  // Show loading state while movies are being fetched
  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  // Show error message if fetch failed
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
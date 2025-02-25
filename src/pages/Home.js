import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get the TMDB Access Token from .env
  const getAccessToken = () => process.env.REACT_APP_TMDB_ACCESS_TOKEN;

  useEffect(() => {
    const fetchMovies = async () => {
      const accessToken = getAccessToken();
      if (!accessToken) {
        setError("API Key is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <h2>Loading movies...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
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

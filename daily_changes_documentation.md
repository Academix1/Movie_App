# Movie App Development Progress
Generated on 01/03/2025 14:30:59

This document tracks the daily changes and progress in the Movie App development.


## Changes from Day1 to Day2

### Files Changed:
```
M	Pre-Assignment.md
M	src/App.js
A	src/pages/Home.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index 856970e..102c288 100644
--- a/src/App.js
+++ b/src/App.js
@@ -1,2 +1,3 @@
 import React from 'react';
+import Home from './pages/Home';
 
@@ -4,5 +5,3 @@ function App() {
   return (
-    <div style={{ textAlign: 'center', marginTop: '50px' }}>
-      <h1>Hello World</h1>
-    </div>
+    <Home/>
   );
diff --git a/src/pages/Home.js b/src/pages/Home.js
new file mode 100644
index 0000000..49053de
--- /dev/null
+++ b/src/pages/Home.js
@@ -0,0 +1,7 @@
+import React from 'react';
+
+function Home() {
+  return <h2>Home Page</h2>;
+}
+
+export default Home;
\ No newline at end of file
```

---


## Changes from Day2 to Day3

### Files Changed:
```
M	Pre-Assignment.md
M	package-lock.json
M	package.json
M	src/App.js
A	src/components/NavBar.js
A	src/styles/theme.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index 102c288..ac29e83 100644
--- a/src/App.js
+++ b/src/App.js
@@ -1,7 +1,19 @@
 import React from 'react';
+import { ThemeProvider, CssBaseline, Box } from '@mui/material';
+import theme from './styles/theme';
+import Navbar from './components/NavBar';
 import Home from './pages/Home';
 
+
 function App() {
   return (
-    <Home/>
+    <ThemeProvider theme={theme}>
+      <CssBaseline />
+   
+        <Navbar />
+        <Box sx={{ mt: 8 }}>
+          <Home/>
+        </Box>
+    
+    </ThemeProvider>
   );
diff --git a/src/components/NavBar.js b/src/components/NavBar.js
new file mode 100644
index 0000000..9f633ac
--- /dev/null
+++ b/src/components/NavBar.js
@@ -0,0 +1,16 @@
+import React from 'react';
+import { AppBar, Toolbar, Typography } from '@mui/material';
+
+function Navbar() {
+  return (
+    <AppBar position="fixed">
+      <Toolbar>
+        <Typography variant="h6" component="div">
+          Movie App
+        </Typography>
+      </Toolbar>
+    </AppBar>
+  );
+}
+
+export default Navbar;
\ No newline at end of file
diff --git a/src/styles/theme.js b/src/styles/theme.js
new file mode 100644
index 0000000..eb8058f
--- /dev/null
+++ b/src/styles/theme.js
@@ -0,0 +1,24 @@
+import { createTheme } from '@mui/material/styles';
+
+const theme = createTheme({
+  palette: {
+    mode: 'dark',
+    primary: {
+      main: '#e50914', // Netflix-like red
+    },
+    background: {
+      default: '#141414',
+      paper: '#1f1f1f',
+    },
+  },
+  typography: {
+    fontFamily: [
+      'Roboto',
+      '"Helvetica Neue"',
+      'Arial',
+      'sans-serif',
+    ].join(','),
+  },
+});
+
+export default theme;
\ No newline at end of file
```

---


## Changes from Day3 to Day4

### Files Changed:
```
M	Pre-Assignment.md
M	package-lock.json
M	package.json
M	src/App.js
M	src/pages/Home.js
A	src/redux/movieSlice.js
A	src/redux/store.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index ac29e83..64856c1 100644
--- a/src/App.js
+++ b/src/App.js
@@ -2,6 +2,9 @@ import React from 'react';
 import { ThemeProvider, CssBaseline, Box } from '@mui/material';
+import { Provider } from 'react-redux';
 import theme from './styles/theme';
 import Navbar from './components/NavBar';
-import Home from './pages/Home';
+import { store } from './redux/store';
 
+// Pages
+import Home from './pages/Home';
 
@@ -9,11 +12,11 @@ function App() {
   return (
-    <ThemeProvider theme={theme}>
-      <CssBaseline />
-   
-        <Navbar />
-        <Box sx={{ mt: 8 }}>
-          <Home/>
-        </Box>
-    
-    </ThemeProvider>
+    <Provider store={store}>
+      <ThemeProvider theme={theme}>
+        <CssBaseline />
+          <Navbar />
+          <Box sx={{ mt: 8 }}>
+            <Home/>
+          </Box>
+      </ThemeProvider>
+    </Provider>
   );
diff --git a/src/pages/Home.js b/src/pages/Home.js
index 49053de..d96a0d8 100644
--- a/src/pages/Home.js
+++ b/src/pages/Home.js
@@ -1,5 +1,7 @@
 import React from 'react';
+import { useSelector } from 'react-redux';
 
 function Home() {
-  return <h2>Home Page</h2>;
+const select=useSelector(state=>state.movies.placeholder);
+  return <h2>Home Page {select}</h2>;
 }
diff --git a/src/redux/movieSlice.js b/src/redux/movieSlice.js
new file mode 100644
index 0000000..485d1ce
--- /dev/null
+++ b/src/redux/movieSlice.js
@@ -0,0 +1,15 @@
+import { createSlice } from '@reduxjs/toolkit';
+
+const initialState = {
+  placeholder: 'Redux is working!',
+};
+
+const movieSlice = createSlice({
+  name: 'movies',
+  initialState,
+  reducers: {
+    // Add actions here in the future
+  },
+});
+
+export default movieSlice.reducer;
\ No newline at end of file
diff --git a/src/redux/store.js b/src/redux/store.js
new file mode 100644
index 0000000..7bf3b7f
--- /dev/null
+++ b/src/redux/store.js
@@ -0,0 +1,10 @@
+import { configureStore } from '@reduxjs/toolkit';
+import movieReducer from './movieSlice';
+
+export const store = configureStore({
+  reducer: {
+    movies: movieReducer,
+  },
+});
+
+export default store;
\ No newline at end of file
```

---


## Changes from Day4 to Day5

### Files Changed:
```
M	.gitignore
A	Assignment.md
M	Pre-Assignment.md
M	package-lock.json
M	package.json
M	src/pages/Home.js
```

### Key Code Changes:
```javascript
diff --git a/src/pages/Home.js b/src/pages/Home.js
index d96a0d8..97cf7d4 100644
--- a/src/pages/Home.js
+++ b/src/pages/Home.js
@@ -1,7 +1,60 @@
-import React from 'react';
-import { useSelector } from 'react-redux';
+import React, { useEffect, useState } from 'react';
+import axios from 'axios';
 
 function Home() {
-const select=useSelector(state=>state.movies.placeholder);
-  return <h2>Home Page {select}</h2>;
+  // State to store movies, loading status, and error
+  const [movies, setMovies] = useState([]);
+  const [loading, setLoading] = useState(true);
+  const [error, setError] = useState(null);
+
+  // Helper function to get the TMDB Access Token from .env
+  const getAccessToken = () => process.env.REACT_APP_TMDB_ACCESS_TOKEN;
+
+  // Fetching popular movies using the access token in the URL
+  useEffect(() => {
+    const fetchMovies = async () => {
+      const accessToken = getAccessToken();
+      if (!accessToken) {
+        setError('API Key is missing');
+        setLoading(false);
+        return;
+      }
+
+      try {
+        const response = await axios.get(
+          `https://api.themoviedb.org/3/movie/popular`
+        );
+        setMovies(response.data.results);
+        setLoading(false);
+      } catch (error) {
+        setError('Failed to fetch movies');
+        setLoading(false);
+      }
+    };
+
+    fetchMovies();
+  }, []); // Empty dependency array means this effect runs only once, when the component mounts
+
+  // Show loading state while movies are being fetched
+  if (loading) {
+    return <h2>Loading movies...</h2>;
+  }
+
+  // Show error message if fetch failed
+  if (error) {
+    return <h2>{error}</h2>;
+  }
+
+  return (
+    <div style={{ padding: '20px' }}>
+      <h2>Popular Movies</h2>
+      <ul>
+        {movies.map((movie) => (
+          <li key={movie.id}>
+            <h3>{movie.title}</h3>
+          </li>
+        ))}
+      </ul>
+    </div>
+  );
 }
```

---


## Changes from Day5 to Day6

### Files Changed:
```
D	Assignment.md
D	Pre-Assignment.md
M	src/pages/Home.js
M	src/redux/movieSlice.js
A	src/utils/api.js
```

### Key Code Changes:
```javascript
diff --git a/src/pages/Home.js b/src/pages/Home.js
index 97cf7d4..6082f4d 100644
--- a/src/pages/Home.js
+++ b/src/pages/Home.js
@@ -1,46 +1,16 @@
-import React, { useEffect, useState } from 'react';
-import axios from 'axios';
+import React, { useEffect } from 'react';
+import { useDispatch, useSelector } from 'react-redux';
+import { fetchPopularMovies, fetchTrendingMovies } from '../redux/movieSlice';
 
 function Home() {
-  // State to store movies, loading status, and error
-  const [movies, setMovies] = useState([]);
-  const [loading, setLoading] = useState(true);
-  const [error, setError] = useState(null);
+  const dispatch = useDispatch();
+  const { popular, trending, loading } = useSelector((state) => state.movies);
 
-  // Helper function to get the TMDB Access Token from .env
-  const getAccessToken = () => process.env.REACT_APP_TMDB_ACCESS_TOKEN;
-
-  // Fetching popular movies using the access token in the URL
   useEffect(() => {
-    const fetchMovies = async () => {
-      const accessToken = getAccessToken();
-      if (!accessToken) {
-        setError('API Key is missing');
-        setLoading(false);
-        return;
-      }
-
-      try {
-        const response = await axios.get(
-          `https://api.themoviedb.org/3/movie/popular`
-        );
-        setMovies(response.data.results);
-        setLoading(false);
-      } catch (error) {
-        setError('Failed to fetch movies');
-        setLoading(false);
-      }
-    };
-
-    fetchMovies();
-  }, []); // Empty dependency array means this effect runs only once, when the component mounts
+    dispatch(fetchPopularMovies());
+    dispatch(fetchTrendingMovies());
+  }, [dispatch]);
 
-  // Show loading state while movies are being fetched
   if (loading) {
-    return <h2>Loading movies...</h2>;
-  }
-
-  // Show error message if fetch failed
-  if (error) {
-    return <h2>{error}</h2>;
+    return <h2>Loading...</h2>;
   }
@@ -51,6 +21,11 @@ function Home() {
       <ul>
-        {movies.map((movie) => (
-          <li key={movie.id}>
-            <h3>{movie.title}</h3>
-          </li>
+        {popular.map((movie) => (
+          <li key={movie.id}>{movie.title}</li>
+        ))}
+      </ul>
+
+      <h2>Trending Movies</h2>
+      <ul>
+        {trending.map((movie) => (
+          <li key={movie.id}>{movie.title}</li>
         ))}
diff --git a/src/redux/movieSlice.js b/src/redux/movieSlice.js
index 485d1ce..3f744e8 100644
--- a/src/redux/movieSlice.js
+++ b/src/redux/movieSlice.js
@@ -1,6 +1,19 @@
-import { createSlice } from '@reduxjs/toolkit';
+import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
+import { getPopularMovies, getTrendingMovies } from '../utils/api';
 
-const initialState = {
-  placeholder: 'Redux is working!',
-};
+export const fetchPopularMovies = createAsyncThunk(
+  'movies/fetchPopular',
+  async () => {
+    const response = await getPopularMovies();
+    return response.data.results;
+  }
+);
+
+export const fetchTrendingMovies = createAsyncThunk(
+  'movies/fetchTrending',
+  async () => {
+    const response = await getTrendingMovies();
+    return response.data.results;
+  }
+);
 
@@ -8,5 +21,25 @@ const movieSlice = createSlice({
   name: 'movies',
-  initialState,
-  reducers: {
-    // Add actions here in the future
+  initialState: {
+    popular: [],
+    trending: [],
+    loading: false,
+    error: null,
+  },
+  reducers: {},
+  extraReducers: (builder) => {
+    builder
+      .addCase(fetchPopularMovies.pending, (state) => {
+        state.loading = true;
+      })
+      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
+        state.loading = false;
+        state.popular = action.payload;
+      })
+      .addCase(fetchPopularMovies.rejected, (state, action) => {
+        state.loading = false;
+        state.error = action.error.message;
+      })
+      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
+        state.trending = action.payload;
+      });
   },
diff --git a/src/utils/api.js b/src/utils/api.js
new file mode 100644
index 0000000..72976a5
--- /dev/null
+++ b/src/utils/api.js
@@ -0,0 +1,14 @@
+import axios from 'axios';
+
+const api = axios.create({
+  baseURL: 'https://api.themoviedb.org/3',
+  headers: {
+    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
+    'Content-Type': 'application/json',
+  },
+});
+
+export const getPopularMovies = () => api.get('/movie/popular');
+export const getTrendingMovies = () => api.get('/trending/movie/day');
+
+export default api;
\ No newline at end of file
```

---


## Changes from Day6 to Day7

### Files Changed:
```
A	src/components/Loading.js
A	src/components/MovieCard.js
M	src/pages/Home.js
```

### Key Code Changes:
```javascript
diff --git a/src/components/Loading.js b/src/components/Loading.js
new file mode 100644
index 0000000..67dd9e3
--- /dev/null
+++ b/src/components/Loading.js
@@ -0,0 +1,21 @@
+import React from 'react';
+import { Box, CircularProgress, Typography } from '@mui/material';
+
+function Loading({ message = 'Loading...' }) {
+  return (
+    <Box
+      sx={{
+        display: 'flex',
+        flexDirection: 'column',
+        alignItems: 'center',
+        justifyContent: 'center',
+        minHeight: '50vh',
+      }}
+    >
+      <CircularProgress size={40} sx={{ mb: 2 }} />
+      <Typography color="text.secondary">{message}</Typography>
+    </Box>
+  );
+}
+
+export default Loading;
\ No newline at end of file
diff --git a/src/components/MovieCard.js b/src/components/MovieCard.js
new file mode 100644
index 0000000..2fb9380
--- /dev/null
+++ b/src/components/MovieCard.js
@@ -0,0 +1,35 @@
+import React from 'react';
+import { Card, CardContent, Typography, CardMedia } from '@mui/material';
+
+function MovieCard({ movie }) {
+  return (
+    <Card
+      sx={{
+        height: '100%',
+        display: 'flex',
+        flexDirection: 'column',
+        cursor: 'pointer',
+      }}
+    >
+      <CardMedia
+        component="img"
+        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Assuming poster_path is the key in your movie object
+        alt={movie.title}
+        sx={{
+          height: 300,
+          objectFit: 'cover',
+        }}
+      />
+      <CardContent sx={{ flexGrow: 1 }}>
+        <Typography gutterBottom variant="h6" component="div">
+          {movie.title}
+        </Typography>
+        <Typography variant="body2" color="text.secondary">
+          Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10
+        </Typography>
+      </CardContent>
+    </Card>
+  );
+}
+
+export default MovieCard;
diff --git a/src/pages/Home.js b/src/pages/Home.js
index 6082f4d..ce5d8f0 100644
--- a/src/pages/Home.js
+++ b/src/pages/Home.js
@@ -2,3 +2,8 @@ import React, { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
+import { Container, Grid, Typography } from '@mui/material';
 import { fetchPopularMovies, fetchTrendingMovies } from '../redux/movieSlice';
+import Loading from '../components/Loading';
+import MovieCard from '../components/MovieCard';
+
+const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
 
@@ -14,3 +19,3 @@ function Home() {
   if (loading) {
-    return <h2>Loading...</h2>;
+    return <Loading message="Fetching movies..." />;
   }
@@ -18,17 +23,26 @@ function Home() {
   return (
-    <div style={{ padding: '20px' }}>
-      <h2>Popular Movies</h2>
-      <ul>
-        {popular.map((movie) => (
-          <li key={movie.id}>{movie.title}</li>
-        ))}
-      </ul>
-
-      <h2>Trending Movies</h2>
-      <ul>
-        {trending.map((movie) => (
-          <li key={movie.id}>{movie.title}</li>
-        ))}
-      </ul>
-    </div>
+    <Container sx={{ py: 4 }}>
+      <Typography variant="h4" gutterBottom>
+        Popular Movies
+      </Typography>
+      <Grid container spacing={3} sx={{ mb: 4 }}>
+  {popular.slice(0, 6).map((movie) => (
+    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
+      <MovieCard movie={movie} />
+    </Grid>
+  ))}
+</Grid>
+
+
+      <Typography variant="h4" gutterBottom>
+        Trending Now
+      </Typography>
+      <Grid container spacing={3}>
+  {trending.slice(0, 6).map((movie) => (
+    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
+      <MovieCard movie={movie} />
+    </Grid>
+  ))}
+</Grid>
+    </Container>
   );
```

---


## Changes from Day7 to Day8

### Files Changed:
```
M	package-lock.json
M	package.json
M	src/App.js
M	src/components/NavBar.js
A	src/pages/Search.js
M	src/redux/movieSlice.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index 64856c1..ccd5e34 100644
--- a/src/App.js
+++ b/src/App.js
@@ -1,2 +1,3 @@
 import React from 'react';
+import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import { ThemeProvider, CssBaseline, Box } from '@mui/material';
@@ -9,2 +10,3 @@ import { store } from './redux/store';
 import Home from './pages/Home';
+import Search from './pages/Search';
 
@@ -15,6 +17,11 @@ function App() {
         <CssBaseline />
+        <Router>
           <Navbar />
           <Box sx={{ mt: 8 }}>
-            <Home/>
+            <Routes>
+              <Route path="/" element={<Home />} />
+              <Route path="/search" element={<Search />} />
+            </Routes>
           </Box>
+        </Router>
       </ThemeProvider>
diff --git a/src/components/NavBar.js b/src/components/NavBar.js
index 9f633ac..453ba1f 100644
--- a/src/components/NavBar.js
+++ b/src/components/NavBar.js
@@ -1,5 +1,54 @@
-import React from 'react';
-import { AppBar, Toolbar, Typography } from '@mui/material';
+// Add a search form
+import React, { useState } from 'react';
+import { useNavigate } from 'react-router-dom';
+import { AppBar, Toolbar, Typography, Box, InputBase, IconButton } from '@mui/material';
+import { styled, alpha } from '@mui/material/styles';
+import SearchIcon from '@mui/icons-material/Search';
+
+const Search = styled('div')(({ theme }) => ({
+  position: 'relative',
+  borderRadius: theme.shape.borderRadius,
+  backgroundColor: alpha(theme.palette.common.white, 0.15),
+  '&:hover': {
+    backgroundColor: alpha(theme.palette.common.white, 0.25),
+  },
+  marginLeft: theme.spacing(2),
+  width: 'auto',
+}));
+
+const SearchIconWrapper = styled('div')(({ theme }) => ({
+  padding: theme.spacing(0, 2),
+  height: '100%',
+  position: 'absolute',
+  pointerEvents: 'none',
+  display: 'flex',
+  alignItems: 'center',
+  justifyContent: 'center',
+}));
+
+const StyledInputBase = styled(InputBase)(({ theme }) => ({
+  color: 'inherit',
+  '& .MuiInputBase-input': {
+    padding: theme.spacing(1, 1, 1, 0),
+    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
+    transition: theme.transitions.create('width'),
+    width: '12ch',
+    [theme.breakpoints.up('md')]: {
+      width: '20ch',
+    },
+  },
+}));
 
 function Navbar() {
+  const [searchQuery, setSearchQuery] = useState('');
+  const navigate = useNavigate();
+
+  const handleSearch = (e) => {
+    e.preventDefault();
+    if (searchQuery.trim()) {
+      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
+      setSearchQuery('');
+    }
+  };
+
   return (
@@ -10,2 +59,15 @@ function Navbar() {
         </Typography>
+        <Box component="form" onSubmit={handleSearch} sx={{ ml: 'auto' }}>
+          <Search>
+            <SearchIconWrapper>
+              <SearchIcon />
+            </SearchIconWrapper>
+            <StyledInputBase
+              placeholder="Search..."
+              inputProps={{ 'aria-label': 'search' }}
+              value={searchQuery}
+              onChange={(e) => setSearchQuery(e.target.value)}
+            />
+          </Search>
+        </Box>
       </Toolbar>
diff --git a/src/pages/Search.js b/src/pages/Search.js
new file mode 100644
index 0000000..b487b84
--- /dev/null
+++ b/src/pages/Search.js
@@ -0,0 +1,45 @@
+import React, { useEffect } from 'react';
+import { useDispatch, useSelector } from 'react-redux';
+import { useLocation } from 'react-router-dom';
+import { Container, Typography, Grid } from '@mui/material';
+import { searchMoviesAsync } from '../redux/movieSlice';
+import MovieCard from '../components/MovieCard';
+import Loading from '../components/Loading';
+
+function useQuery() {
+  return new URLSearchParams(useLocation().search);
+}
+
+function Search() {
+  const query = useQuery();
+  const searchQuery = query.get('q');
+  const dispatch = useDispatch();
+  const { searchResults, loading } = useSelector((state) => state.movies);
+
+  useEffect(() => {
+    if (searchQuery) {
+      dispatch(searchMoviesAsync(searchQuery));
+    }
+  }, [dispatch, searchQuery]);
+
+  if (loading) {
+    return <Loading message="Searching movies..." />;
+  }
+
+  return (
+    <Container sx={{ py: 4 }}>
+      <Typography variant="h4" gutterBottom>
+        Search Results for "{searchQuery}"
+      </Typography>
+      <Grid container spacing={3}>
+        {searchResults.map((movie) => (
+          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
+            <MovieCard movie={movie} />
+          </Grid>
+        ))}
+      </Grid>
+    </Container>
+  );
+}
+
+export default Search;
\ No newline at end of file
diff --git a/src/redux/movieSlice.js b/src/redux/movieSlice.js
index 3f744e8..d021350 100644
--- a/src/redux/movieSlice.js
+++ b/src/redux/movieSlice.js
@@ -2,2 +2,3 @@ import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { getPopularMovies, getTrendingMovies } from '../utils/api';
+import api  from '../utils/api';
 
@@ -10,2 +11,9 @@ export const fetchPopularMovies = createAsyncThunk(
 );
+export const searchMoviesAsync = createAsyncThunk(
+    'movies/search',
+    async (query) => {
+      const response = await api.get(`/search/movie?query=${query}`);
+      return response.data.results;
+    }
+  );
 
@@ -24,2 +32,3 @@ const movieSlice = createSlice({
     trending: [],
+    searchResults: [],
     loading: false,
@@ -27,3 +36,5 @@ const movieSlice = createSlice({
   },
-  reducers: {},
+  reducers: {
+    
+  },
   extraReducers: (builder) => {
@@ -41,2 +52,5 @@ const movieSlice = createSlice({
       })
+      builder.addCase(searchMoviesAsync.fulfilled, (state, action) => {
+        state.searchResults = action.payload;
+      })
       .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
@@ -45,4 +59,3 @@ const movieSlice = createSlice({
   },
-});
-
+});  
 export default movieSlice.reducer;
\ No newline at end of file
```

---


## Changes from Day8 to Day9

### Files Changed:
```
M	src/App.js
M	src/components/MovieCard.js
M	src/components/NavBar.js
A	src/pages/Watchlist.js
M	src/redux/movieSlice.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index ccd5e34..58fcd35 100644
--- a/src/App.js
+++ b/src/App.js
@@ -2,3 +2,3 @@ import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
-import { ThemeProvider, CssBaseline, Box } from '@mui/material';
+import { ThemeProvider, CssBaseline, Box, Grid } from '@mui/material';
 import { Provider } from 'react-redux';
@@ -7,6 +7,5 @@ import Navbar from './components/NavBar';
 import { store } from './redux/store';
-
-// Pages
 import Home from './pages/Home';
 import Search from './pages/Search';
+import Watchlist from './pages/Watchlist';
 
@@ -19,8 +18,12 @@ function App() {
           <Navbar />
-          <Box sx={{ mt: 8 }}>
-            <Routes>
-              <Route path="/" element={<Home />} />
-              <Route path="/search" element={<Search />} />
-            </Routes>
-          </Box>
+          <Box sx={{ display: 'flex', mt: 8 }}>
+            {/* Sidebar */}
+         
+
+              <Routes>
+                <Route path="/" element={<Home />} />
+                <Route path="/search" element={<Search />} />
+                <Route path="/watchlist" element={<Watchlist />} />
+              </Routes>
+            </Box>
         </Router>
diff --git a/src/components/MovieCard.js b/src/components/MovieCard.js
index 2fb9380..dcdae99 100644
--- a/src/components/MovieCard.js
+++ b/src/components/MovieCard.js
@@ -1,35 +1,71 @@
 import React from 'react';
-import { Card, CardContent, Typography, CardMedia } from '@mui/material';
+import {
+Card,
+CardContent,
+Typography,
+CardMedia,
+IconButton,
+} from '@mui/material';
+import { Bookmark, BookmarkBorder } from '@mui/icons-material';
+import { useDispatch, useSelector } from 'react-redux';
+import { addToWatchlist, removeFromWatchlist } from '../redux/movieSlice';
 
 function MovieCard({ movie }) {
-  return (
-    <Card
+const dispatch = useDispatch();
+
+const watchlist = useSelector((state) => state.movies.watchlist);
+const isInWatchlist = watchlist.some((m) => m.id === movie.id);
+
+const handleWatchlistClick = (e) => {
+  e.stopPropagation();
+  if (isInWatchlist) {
+    dispatch(removeFromWatchlist(movie));
+  } else {
+    dispatch(addToWatchlist(movie));
+  }
+};
+
+
+return (
+  <Card
+    sx={{
+      height: '100%',
+      display: 'flex',
+      flexDirection: 'column',
+      cursor: 'pointer',
+      borderRadius: 2,
+      boxShadow: 3,
+      position: 'relative', // Ensure the IconButton is positioned correctly
+    }}
+  >
+    <CardMedia
+      component="img"
+      height="250"
+      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Use the movie poster URL
+      alt={movie.title}
+      sx={{ objectFit: 'cover', borderRadius: 2 }}
+    />
+    <CardContent sx={{ flexGrow: 1 }}>
+      <Typography gutterBottom variant="h6" component="div">
+        {movie.title}
+      </Typography>
+      <Typography variant="body2" color="textSecondary">
+        {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'} {/* Display release year */}
+      </Typography>
+    </CardContent>
+    <IconButton
+      onClick={handleWatchlistClick}
       sx={{
-        height: '100%',
-        display: 'flex',
-        flexDirection: 'column',
-        cursor: 'pointer',
+        position: 'absolute',
+        top: 8,
+        right: 8,
+        color: isInWatchlist ? 'primary.main' : 'text.secondary', // Change icon color based on watchlist status
       }}
     >
-      <CardMedia
-        component="img"
-        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Assuming poster_path is the key in your movie object
-        alt={movie.title}
-        sx={{
-          height: 300,
-          objectFit: 'cover',
-        }}
-      />
-      <CardContent sx={{ flexGrow: 1 }}>
-        <Typography gutterBottom variant="h6" component="div">
-          {movie.title}
-        </Typography>
-        <Typography variant="body2" color="text.secondary">
-          Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10
-        </Typography>
-      </CardContent>
-    </Card>
-  );
+      {isInWatchlist ? <Bookmark /> : <BookmarkBorder />}
+    </IconButton>
+  </Card>
+);
 }
 
-export default MovieCard;
+export default MovieCard;
\ No newline at end of file
diff --git a/src/components/NavBar.js b/src/components/NavBar.js
index 453ba1f..5abd74e 100644
--- a/src/components/NavBar.js
+++ b/src/components/NavBar.js
@@ -1,17 +1,17 @@
-// Add a search form
 import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
-import { AppBar, Toolbar, Typography, Box, InputBase, IconButton } from '@mui/material';
+import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Button } from '@mui/material';
 import { styled, alpha } from '@mui/material/styles';
 import SearchIcon from '@mui/icons-material/Search';
+import BookmarkIcon from '@mui/icons-material/Bookmark';
 
 const Search = styled('div')(({ theme }) => ({
-  position: 'relative',
-  borderRadius: theme.shape.borderRadius,
-  backgroundColor: alpha(theme.palette.common.white, 0.15),
-  '&:hover': {
-    backgroundColor: alpha(theme.palette.common.white, 0.25),
-  },
-  marginLeft: theme.spacing(2),
-  width: 'auto',
+position: 'relative',
+borderRadius: theme.shape.borderRadius,
+backgroundColor: alpha(theme.palette.common.white, 0.15),
+'&:hover': {
+  backgroundColor: alpha(theme.palette.common.white, 0.25),
+},
+marginLeft: theme.spacing(2),
+width: 'auto',
 }));
@@ -19,9 +19,9 @@ const Search = styled('div')(({ theme }) => ({
 const SearchIconWrapper = styled('div')(({ theme }) => ({
-  padding: theme.spacing(0, 2),
-  height: '100%',
-  position: 'absolute',
-  pointerEvents: 'none',
-  display: 'flex',
-  alignItems: 'center',
-  justifyContent: 'center',
+padding: theme.spacing(0, 2),
+height: '100%',
+position: 'absolute',
+pointerEvents: 'none',
+display: 'flex',
+alignItems: 'center',
+justifyContent: 'center',
 }));
@@ -29,12 +29,12 @@ const SearchIconWrapper = styled('div')(({ theme }) => ({
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
-  color: 'inherit',
-  '& .MuiInputBase-input': {
-    padding: theme.spacing(1, 1, 1, 0),
-    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
-    transition: theme.transitions.create('width'),
-    width: '12ch',
-    [theme.breakpoints.up('md')]: {
-      width: '20ch',
-    },
+color: 'inherit',
+'& .MuiInputBase-input': {
+  padding: theme.spacing(1, 1, 1, 0),
+  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
+  transition: theme.transitions.create('width'),
+  width: '12ch',
+  [theme.breakpoints.up('md')]: {
+    width: '20ch',
   },
+},
 }));
@@ -42,37 +42,51 @@ const StyledInputBase = styled(InputBase)(({ theme }) => ({
 function Navbar() {
-  const [searchQuery, setSearchQuery] = useState('');
-  const navigate = useNavigate();
+const [searchQuery, setSearchQuery] = useState('');
+const navigate = useNavigate();
+
+const handleSearch = (e) => {
+  e.preventDefault();
+  if (searchQuery.trim()) {
+    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
+    setSearchQuery('');
+  }
+};
 
-  const handleSearch = (e) => {
-    e.preventDefault();
-    if (searchQuery.trim()) {
-      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
-      setSearchQuery('');
-    }
-  };
+const handleWatchlistClick = () => {
+  navigate('/watchlist');
+};
 
-  return (
-    <AppBar position="fixed">
-      <Toolbar>
-        <Typography variant="h6" component="div">
-          Movie App
-        </Typography>
-        <Box component="form" onSubmit={handleSearch} sx={{ ml: 'auto' }}>
-          <Search>
-            <SearchIconWrapper>
-              <SearchIcon />
-            </SearchIconWrapper>
-            <StyledInputBase
-              placeholder="Search..."
-              inputProps={{ 'aria-label': 'search' }}
-              value={searchQuery}
-              onChange={(e) => setSearchQuery(e.target.value)}
-            />
-          </Search>
-        </Box>
-      </Toolbar>
-    </AppBar>
-  );
+return (
+  <AppBar position="fixed">
+    <Toolbar>
+      <Typography variant="h6" component="div">
+        Movie App
+      </Typography>
+      <Box component="form" onSubmit={handleSearch} sx={{ ml: 'auto' }}>
+        <Search>
+          <SearchIconWrapper>
+            <SearchIcon />
+          </SearchIconWrapper>
+          <StyledInputBase
+            placeholder="Search..."
+            inputProps={{ 'aria-label': 'search' }}
+            value={searchQuery}
+            onChange={(e) => setSearchQuery(e.target.value)}
+          />
+        </Search>
+      </Box>
+      <IconButton color="inherit" onClick={handleWatchlistClick}>
+        <BookmarkIcon />
+      </IconButton>
+      <Button
+        color="inherit"
+        onClick={handleWatchlistClick}
+        sx={{ display: { xs: 'none', md: 'block' } }}
+      >
+        Watchlist
+      </Button>
+    </Toolbar>
+  </AppBar>
+);
 }
 
-export default Navbar;
\ No newline at end of file
+export default Navbar;
diff --git a/src/pages/Watchlist.js b/src/pages/Watchlist.js
new file mode 100644
index 0000000..917b134
--- /dev/null
+++ b/src/pages/Watchlist.js
@@ -0,0 +1,25 @@
+import React from 'react';
+import { useSelector } from 'react-redux';
+import { Container, Typography, Grid } from '@mui/material';
+import MovieCard from '../components/MovieCard'; // Ensure the path to MovieCard is correct
+
+function Watchlist() {
+  const watchlist = useSelector((state) => state.movies.watchlist);
+
+  return (
+    <Container>
+      <Typography variant="h4" gutterBottom>
+        My Watchlist
+      </Typography>
+      <Grid container spacing={3}>
+        {watchlist.map((movie) => (
+          <Grid item xs={12} sm={6} md={4} key={movie.id}>
+            <MovieCard movie={movie} />
+          </Grid>
+        ))}
+      </Grid>
+    </Container>
+  );
+}
+
+export default Watchlist;
\ No newline at end of file
diff --git a/src/redux/movieSlice.js b/src/redux/movieSlice.js
index d021350..cc8d97f 100644
--- a/src/redux/movieSlice.js
+++ b/src/redux/movieSlice.js
@@ -19,2 +19,3 @@ export const searchMoviesAsync = createAsyncThunk(
 
+
 export const fetchTrendingMovies = createAsyncThunk(
@@ -32,2 +33,3 @@ const movieSlice = createSlice({
     trending: [],
+    watchlist: [],
     searchResults: [],
@@ -37,3 +39,11 @@ const movieSlice = createSlice({
   reducers: {
-    
+    addToWatchlist: (state, action) => {
+        state.watchlist.push(action.payload);
+      },
+      removeFromWatchlist: (state, action) => {
+        state.watchlist = state.watchlist.filter(
+          (movie) => movie.id !== action.payload.id
+        );
+        
+      },
   },
@@ -59,3 +69,8 @@ const movieSlice = createSlice({
   },
-});  
+});
+export const {
+    addToWatchlist,
+    removeFromWatchlist,
+  } = movieSlice.actions;
+  
 export default movieSlice.reducer;
\ No newline at end of file
```

---


## Changes from Day9 to Day10

### Files Changed:
```
M	src/App.js
A	src/components/GenreDrawer.js
M	src/pages/Home.js
M	src/redux/movieSlice.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index 58fcd35..5843d0b 100644
--- a/src/App.js
+++ b/src/App.js
@@ -2,3 +2,3 @@ import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
-import { ThemeProvider, CssBaseline, Box, Grid } from '@mui/material';
+import { ThemeProvider, CssBaseline, Box } from '@mui/material';
 import { Provider } from 'react-redux';
@@ -7,2 +7,4 @@ import Navbar from './components/NavBar';
 import { store } from './redux/store';
+
+import GenreDrawer from './components/GenreDrawer';
 import Home from './pages/Home';
@@ -19,11 +21,35 @@ function App() {
           <Box sx={{ display: 'flex', mt: 8 }}>
-            {/* Sidebar */}
-         
+          {/* Sidebar */}
+          <Box
+            component="aside"
+            sx={{
+              width: { xs: '100%', sm: '240px' }, // Full width on small screens, fixed on larger
+              flexShrink: 0,
+              position: 'fixed',
+              height: 'calc(100vh - 64px)', // Subtract Navbar height
+              overflowY: 'auto',
+              overflowX:'hidden',
+              borderRight: '1px solid #e0e0e0',
+              bgcolor: 'background.paper',
+            }}
+          >
+            <GenreDrawer />
+          </Box>
 
-              <Routes>
-                <Route path="/" element={<Home />} />
-                <Route path="/search" element={<Search />} />
-                <Route path="/watchlist" element={<Watchlist />} />
-              </Routes>
-            </Box>
+          {/* Main Content */}
+          <Box
+            component="main"
+            sx={{
+              flexGrow: 1,
+              ml: { sm: '240px' }, // Leave space for the sidebar on larger screens
+              p: 3,
+            }}
+          >
+            <Routes>
+              <Route path="/" element={<Home />} />
+              <Route path="/search" element={<Search />} />
+              <Route path="/watchlist" element={<Watchlist />} />
+            </Routes>
+          </Box>
+        </Box>
         </Router>
diff --git a/src/components/GenreDrawer.js b/src/components/GenreDrawer.js
new file mode 100644
index 0000000..25faad1
--- /dev/null
+++ b/src/components/GenreDrawer.js
@@ -0,0 +1,100 @@
+import React, { useEffect } from 'react';
+import { useDispatch, useSelector } from 'react-redux';
+import {
+  Drawer,
+  List,
+  ListItem,
+  ListItemText,
+  ListItemButton,
+  Typography,
+  useTheme,
+  useMediaQuery,
+  Box,
+} from '@mui/material';
+import { fetchGenres, setSelectedGenre } from '../redux/movieSlice';
+
+const DRAWER_WIDTH = 240;
+
+function GenreDrawer() {
+  const dispatch = useDispatch();
+  const theme = useTheme();
+  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
+  
+  const genres = useSelector((state) => state.movies.genres);
+  const selectedGenre = useSelector((state) => state.movies.selectedGenre);
+
+  useEffect(() => {
+    dispatch(fetchGenres());
+  }, [dispatch]);
+
+  const handleGenreClick = (genre) => {
+      dispatch(setSelectedGenre(genre));
+  };
+
+  const drawer = (
+    <>
+      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
+        <Typography variant="h6" component="div">
+          Genres
+        </Typography>
+      </Box>
+      <List>
+        {genres.map((genre) => (
+          <ListItem key={genre.id} disablePadding>
+            <ListItemButton
+              selected={selectedGenre?.id === genre.id}
+              onClick={() => handleGenreClick(genre)}
+            >
+              <ListItemText primary={genre.name} />
+            </ListItemButton>
+          </ListItem>
+        ))}
+      </List>
+    </>
+  );
+
+  return (
+    <Box
+      component="nav"
+      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
+    >
+      {isMobile ? (
+        <Drawer
+          variant="temporary"
+          open={false} // This will be controlled by a state in the parent component
+          ModalProps={{
+            keepMounted: true, // Better open performance on mobile
+          }}
+          sx={{
+            display: { xs: 'block', sm: 'none' },
+            '& .MuiDrawer-paper': {
+              boxSizing: 'border-box',
+              width: DRAWER_WIDTH,
+            },
+          }}
+        >
+          {drawer}
+        </Drawer>
+      ) : (
+        <Drawer
+          variant="permanent"
+          sx={{
+            display: { xs: 'none', sm: 'block' },
+            '& .MuiDrawer-paper': {
+              boxSizing: 'border-box',
+              width: DRAWER_WIDTH,
+              borderRight: '1px solid rgba(0, 0, 0, 0.12)',
+              position: 'relative',
+              height: '100vh',
+            },
+          }}
+          open
+        >
+          {drawer}
+        </Drawer>
+      )}
+    </Box>
+  );
+}
+
+export default GenreDrawer;
\ No newline at end of file
diff --git a/src/pages/Home.js b/src/pages/Home.js
index ce5d8f0..916e29b 100644
--- a/src/pages/Home.js
+++ b/src/pages/Home.js
@@ -3,3 +3,3 @@ import { useDispatch, useSelector } from 'react-redux';
 import { Container, Grid, Typography } from '@mui/material';
-import { fetchPopularMovies, fetchTrendingMovies } from '../redux/movieSlice';
+import { fetchPopularMovies, fetchTrendingMovies,fetchMoviesByGenre } from '../redux/movieSlice';
 import Loading from '../components/Loading';
@@ -7,12 +7,20 @@ import MovieCard from '../components/MovieCard';
 
-const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
-
 function Home() {
-  const dispatch = useDispatch();
-  const { popular, trending, loading } = useSelector((state) => state.movies);
-
-  useEffect(() => {
-    dispatch(fetchPopularMovies());
-    dispatch(fetchTrendingMovies());
-  }, [dispatch]);
+    const dispatch = useDispatch();
+    const {
+      popular,
+      trending,
+      genreMovies,
+      selectedGenre,
+      loading,
+    } = useSelector((state) => state.movies);
+  
+    useEffect(() => {
+      if (selectedGenre) {
+        dispatch(fetchMoviesByGenre(selectedGenre.id));
+      } else {
+        dispatch(fetchPopularMovies());
+        dispatch(fetchTrendingMovies());
+      }
+    }, [dispatch, selectedGenre]);
 
@@ -21,2 +29,18 @@ function Home() {
   }
+  if (selectedGenre) {
+    return (
+      <Container sx={{ py: 4 }}>
+        <Typography variant="h4" gutterBottom>
+          {selectedGenre.name} Movies
+        </Typography>
+        <Grid container spacing={3}>
+          {genreMovies.map((movie) => (
+            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
+              <MovieCard movie={movie} />
+            </Grid>
+          ))}
+        </Grid>
+      </Container>
+    );
+  }
 
@@ -28,9 +52,8 @@ function Home() {
       <Grid container spacing={3} sx={{ mb: 4 }}>
-  {popular.slice(0, 6).map((movie) => (
-    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
-      <MovieCard movie={movie} />
-    </Grid>
-  ))}
-</Grid>
-
+        {popular.slice(0, 6).map((movie) => (
+          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
+            <MovieCard movie={movie} />
+          </Grid>
+        ))}
+      </Grid>
 
@@ -40,8 +63,8 @@ function Home() {
       <Grid container spacing={3}>
-  {trending.slice(0, 6).map((movie) => (
-    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
-      <MovieCard movie={movie} />
-    </Grid>
-  ))}
-</Grid>
+        {trending.slice(0, 6).map((movie) => (
+          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
+            <MovieCard movie={movie} />
+          </Grid>
+        ))}
+      </Grid>
     </Container>
diff --git a/src/redux/movieSlice.js b/src/redux/movieSlice.js
index cc8d97f..c30d30f 100644
--- a/src/redux/movieSlice.js
+++ b/src/redux/movieSlice.js
@@ -18,3 +18,18 @@ export const searchMoviesAsync = createAsyncThunk(
   );
-
+  export const fetchGenres = createAsyncThunk(
+    'movies/fetchGenres',
+    async () => {
+      const response = await api.get('/genre/movie/list');
+      return response.data.genres;
+    }
+  );
+  
+  // Thunk to fetch movies by selected genre
+  export const fetchMoviesByGenre = createAsyncThunk(
+    'movies/fetchMoviesByGenre',
+    async (genreId) => {
+      const response = await api.get(`/discover/movie?with_genres=${genreId}`);
+      return response.data.results;
+    }
+  );
 
@@ -36,2 +51,5 @@ const movieSlice = createSlice({
     loading: false,
+    genres: [],
+    selectedGenre: null,
+    genreMovies: [],
     error: null,
@@ -48,2 +66,9 @@ const movieSlice = createSlice({
       },
+      setSelectedGenre: (state, action) => {
+        state.selectedGenre = action.payload;
+      },
+      clearSelectedGenre: (state) => {
+        state.selectedGenre = null;
+        state.genreMovies = [];
+      },
   },
@@ -67,2 +92,14 @@ const movieSlice = createSlice({
         state.trending = action.payload;
+      })
+      .addCase(fetchGenres.fulfilled, (state, action) => {
+        state.genres = action.payload;
+      })
+      .addCase(fetchGenres.rejected, (state, action) => {
+        state.error = action.error.message;
+      })
+      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
+        state.genreMovies = action.payload;
+      })
+      .addCase(fetchMoviesByGenre.rejected, (state, action) => {
+        state.error = action.error.message;
       });
@@ -72,2 +109,4 @@ export const {
     addToWatchlist,
+    setSelectedGenre,
+    clearSelectedGenre,
     removeFromWatchlist,
```

---


## Changes from Day10 to Day11

### Files Changed:
```
M	src/App.js
M	src/components/MovieCard.js
A	src/pages/MovieDetails.js
```

### Key Code Changes:
```javascript
diff --git a/src/App.js b/src/App.js
index 5843d0b..4029a91 100644
--- a/src/App.js
+++ b/src/App.js
@@ -12,2 +12,3 @@ import Search from './pages/Search';
 import Watchlist from './pages/Watchlist';
+import MovieDetails from './pages/MovieDetails';
 
@@ -50,2 +51,3 @@ function App() {
               <Route path="/search" element={<Search />} />
+              <Route path='/movie/:id' element={<MovieDetails />} />
               <Route path="/watchlist" element={<Watchlist />} />
diff --git a/src/components/MovieCard.js b/src/components/MovieCard.js
index dcdae99..1453abb 100644
--- a/src/components/MovieCard.js
+++ b/src/components/MovieCard.js
@@ -1,71 +1,67 @@
 import React from 'react';
-import {
-Card,
-CardContent,
-Typography,
-CardMedia,
-IconButton,
-} from '@mui/material';
-import { Bookmark, BookmarkBorder } from '@mui/icons-material';
-import { useDispatch, useSelector } from 'react-redux';
+import { Card, CardContent, Typography, CardMedia } from '@mui/material';
 import { addToWatchlist, removeFromWatchlist } from '../redux/movieSlice';
+import { useDispatch, useSelector } from 'react-redux';
+import {BookmarkBorder,Bookmark} from '@mui/icons-material';
+import {IconButton} from '@mui/material';
+import { useNavigate } from 'react-router-dom';
 
 function MovieCard({ movie }) {
-const dispatch = useDispatch();
-
-const watchlist = useSelector((state) => state.movies.watchlist);
-const isInWatchlist = watchlist.some((m) => m.id === movie.id);
-
-const handleWatchlistClick = (e) => {
-  e.stopPropagation();
-  if (isInWatchlist) {
-    dispatch(removeFromWatchlist(movie));
-  } else {
-    dispatch(addToWatchlist(movie));
-  }
-};
-
-
-return (
-  <Card
-    sx={{
-      height: '100%',
-      display: 'flex',
-      flexDirection: 'column',
-      cursor: 'pointer',
-      borderRadius: 2,
-      boxShadow: 3,
-      position: 'relative', // Ensure the IconButton is positioned correctly
-    }}
-  >
-    <CardMedia
-      component="img"
-      height="250"
-      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Use the movie poster URL
-      alt={movie.title}
-      sx={{ objectFit: 'cover', borderRadius: 2 }}
-    />
-    <CardContent sx={{ flexGrow: 1 }}>
-      <Typography gutterBottom variant="h6" component="div">
-        {movie.title}
-      </Typography>
-      <Typography variant="body2" color="textSecondary">
-        {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'} {/* Display release year */}
-      </Typography>
-    </CardContent>
-    <IconButton
-      onClick={handleWatchlistClick}
+    const dispatch = useDispatch();
+    const watchlist = useSelector((state) => state.movies.watchlist);
+    const isInWatchlist = watchlist.some((m) => m.id === movie.id);
+    const navigate = useNavigate();
+    const handleCardClick = () => {
+      navigate(`/movie/${movie.id}`); 
+    };
+    const handleWatchlistClick = (e) => {
+        e.stopPropagation();
+        if (isInWatchlist) {
+          dispatch(removeFromWatchlist(movie));
+        } else {
+          dispatch(addToWatchlist(movie));
+        }
+      };  
+  return (
+    <Card onClick={handleCardClick}
       sx={{
-        position: 'absolute',
-        top: 8,
-        right: 8,
-        color: isInWatchlist ? 'primary.main' : 'text.secondary', // Change icon color based on watchlist status
+        height: '100%',
+        display: 'flex',
+        flexDirection: 'column',
+        cursor: 'pointer',
+        borderRadius: 2,
+        boxShadow: 3,
+        position: 'relative', // Ensure the IconButton is positioned correctly
       }}
     >
-      {isInWatchlist ? <Bookmark /> : <BookmarkBorder />}
-    </IconButton>
-  </Card>
-);
+      <CardMedia
+        component="img"
+        height="250"
+        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Use the movie poster URL
+        alt={movie.title}
+        sx={{ objectFit: 'cover', borderRadius: 2 }}
+      />
+      <CardContent sx={{ flexGrow: 1 }}>
+        <Typography gutterBottom variant="h6" component="div">
+          {movie.title}
+        </Typography>
+        <Typography variant="body2" color="textSecondary">
+          {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'} {/* Display release year */}
+        </Typography>
+      </CardContent>
+      <IconButton
+        onClick={handleWatchlistClick}
+        sx={{
+          position: 'absolute',
+          top: 8,
+          right: 8,
+          color: isInWatchlist ? 'primary.main' : 'text.secondary', // Change icon color based on watchlist status
+        }}
+      >
+        {isInWatchlist ? <Bookmark /> : <BookmarkBorder />}
+      </IconButton>
+    </Card>
+  );
 }
 
-export default MovieCard;
\ No newline at end of file
+export default MovieCard;
diff --git a/src/pages/MovieDetails.js b/src/pages/MovieDetails.js
new file mode 100644
index 0000000..3ce78c0
--- /dev/null
+++ b/src/pages/MovieDetails.js
@@ -0,0 +1,67 @@
+import React, { useState, useEffect } from 'react';
+import { useParams } from 'react-router-dom';
+
+import { useDispatch } from 'react-redux';
+import { Container, Grid, Typography, Box, Chip, Rating } from '@mui/material';
+import api from '../utils/api'; // Ensure this points to your API utility
+import Loading from '../components/Loading'; // Ensure this component exists and is correctly implemented
+
+function MovieDetails() {
+  const { id } = useParams();
+  const [movie, setMovie] = useState(null);
+  const [cast, setCast] = useState([]);
+  const dispatch = useDispatch();
+
+  useEffect(() => {
+    const fetchData = async () => {
+      try {
+        const [movieRes, creditsRes] = await Promise.all([
+          api.get(`/movie/${id}`),
+          api.get(`/movie/${id}/credits`),
+        ]);
+        setMovie(movieRes.data);
+        setCast(creditsRes.data.cast.slice(0, 10));
+      } catch (error) {
+        console.error('Failed to fetch movie details:', error);
+      }
+    };
+    fetchData();
+  }, [id]);
+
+  if (!movie) {
+    return <Loading />;
+  }
+
+  return (
+    <Container>
+      <Grid container spacing={4}>
+        <Grid item xs={12} md={4}>
+          <img
+            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
+            alt={movie.title}
+            style={{ width: '100%', borderRadius: '8px' }}
+          />
+        </Grid>
+        <Grid item xs={12} md={8}>
+          <Typography variant="h3" gutterBottom>
+            {movie.title}
+          </Typography>
+          <Rating value={movie.vote_average / 2} readOnly />
+          <Typography paragraph>{movie.overview}</Typography>
+          <Typography>Release Date: {movie.release_date}</Typography>
+          <Box mt={2}>
+            {cast.map((actor) => (
+              <Chip
+                key={actor.id}
+                label={actor.name}
+                sx={{ margin: '4px' }}
+              />
+            ))}
+          </Box>
+        </Grid>
+      </Grid>
+    </Container>
+  );
+}
+
+export default MovieDetails;
```

---


## **Day 1**

### **Q1: Create a basic React component.**

#### **Q1a:** Write the code to import `React` and create a functional component named `App`.  
**Answer:**
```jsx
import React from 'react';

function App() {
  return null; // Placeholder
}

export default App;
```

#### **Q1b:** Write the JSX code to render "Hello World" inside the `App` component.  
**Answer:**
```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

---

### **Q2: Use inline styling in JSX.**

#### **Q2a:** Write the inline styles for centering text and adding margin.  
**Answer:**
```jsx
const styles = { textAlign: 'center', marginTop: '50px' };
```

#### **Q2b:** Apply the inline styles to the `<h1>` element in the `App` component.  
**Answer:**
```jsx
function App() {
  return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Hello World</h1>;
}
```
### **Q3: Understanding React.StrictMode**

#### **Q3a:** What is the purpose of the `React.StrictMode` wrapper in the `src/index.js` file?  
**Answer:**  

React.StrictMode is a development mode feature in React that helps identify potential problems in the application. It activates additional checks and warnings for its child components during development. It does not impact the production build or runtime behavior.

#### **Q3b:** Create a root element in React 18 using ReactDOM.createRoot ?
**Answer:**

```js
  const root = ReactDOM.createRoot(document.getElementById('root'));
```
#### Q3c: How to Render the App component inside the root element using React.StrictMode?
**Answer:**
```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
#### **Q3d:** Write the JSX code to import React and ReactDOM in a React application?
**Answer:**

```js
- import React from 'react';
- import ReactDOM from 'react-dom/client';
```
---

## **Day 2**

### **Q3: Create and use a `Home` component.**

#### **Q3a:** Write the `Home` component that displays "Welcome to the Homepage."  
**Answer:**
```jsx
function Home() {
  return <h2>Welcome to the Homepage</h2>;
}

export default Home;
```

#### **Q3b:** Import the `Home` component into `App.js`.  
**Answer:**
```jsx
import Home from './Home';
```

#### **Q3c:** Render the `Home` component in `App.js`.  
**Answer:**
```jsx
function App() {
  return <Home />;
}
```
#### **Q3d:** What does the export default Home; statement in Home.js do?
```txt
This allows the Home component to be used in other files. export default makes the Home component the default export of this file, so it can be imported easily in App.js
```

---

## **Day 3**

### **Q4: Integrate Material-UI for theming and styling.**

#### **Q4a:** Wrap the `App` component with Material-UI's `ThemeProvider`.  
**Answer:**
```jsx
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* App content */}
    </ThemeProvider>
  );
}

export default App;
```

#### **Q4b:** Add `CssBaseline` for consistent styling.  
**Answer:**
```jsx
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* App content */}
    </ThemeProvider>
  );
}
```
#### **Q4c:** What is the purpose of the Box component in App.js?
**Answer:**

The Box component is a utility component in Material-UI that provides a wrapper for layout control. It can be used for spacing, positioning, and aligning elements easily. In this case, it is used to add margin to the Home component by applying sx={{ mt: 8 }} to provide a top margin.

#### **Q4d:** What is the significance of the palette property in the theme.js file?
**Answer:**

The palette property defines the color scheme of the application, including primary, secondary, and background colors. In this case, it sets the theme to dark mode with a custom red color for the primary palette and custom background colors for the app.

#### **Q4e** Modify the theme.js file to change the primary color to blue and remaining should be constant?

````js
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',  // Blue color
      },
      background: {
        default: '#141414',
        paper: '#1f1f1f',
      },
    },
    typography: {
      fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    },
  });
````
---

### **Q5: Create a `NavBar` component.**

#### **Q5a:** Write the code for a Material-UI `AppBar` with `Toolbar`.  
**Answer:**
```jsx
import { AppBar, Toolbar } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Toolbar content */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
```

#### **Q5b:** Add a `Typography` element inside the `Toolbar` for the title.  
**Answer:**
```jsx
<Typography variant="h6">Movie App</Typography>
```

#### **Q5c:** What are the required installations to `install MUI` Packages ? 
```txt
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

---

## **Day 4**

### **Q6: Set up Redux Toolkit.**

#### **Q6a:** Write the code to define an initial state for the movieSlice with a placeholder key set to "Redux is working!".
**Answer:**
```jsx
const initialState = {
  placeholder: 'Redux is working!',
};
```
#### **Q6b:**  Write the code to create a slice using createSlice with the name movies and the initial state defined above ? 
```jsx
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // Add actions here in the future
  },
});

export default movieSlice.reducer;
```
#### **Q6c:** Write the code to configure a Redux store and include the movies slice reducer in it using configureStore ?
**Answer:**
```js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
```
#### **Q6d:** Write the code to use the useSelector hook to access the placeholder value from the Redux store in a component called Home?
```js
import { useSelector } from 'react-redux';

function Home() {
  const placeholderText = useSelector((state) => state.movies.placeholder);
  return <h2>Home Page {placeholderText}</h2>;
}

export default Home;
```

#### **Q6e:** Wrap the `App` component with Redux's `Provider`.  
**Answer:**
```jsx
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* App content */}
    </Provider>
  );
}

export default App;
```
#### **Q6f:** Write the command to install Redux Toolkit and React-Redux dependencies for the project?
**Answer:**
```
npm install @reduxjs/toolkit react-redux
```
---

## **Day 5**

### **Q7: Fetch movies using Axios.**

#### **Q7a:** Write the code to import Axios and make an API call.  
**Answer:**
```jsx
import axios from 'axios';

async function fetchMovies() {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular');
  console.log(response.data.results);
}
```

#### **Q7b:** Use `useEffect` to fetch movies when the component loads.  
**Answer:**
```jsx
import React, { useEffect } from 'react';

function Component() {
  useEffect(() => {
    fetchMovies();
  }, []);
}
```


#### **Q7c:** Manage the fetched data using `useState`.  
**Answer:**
```jsx
const [movies, setMovies] = useState([]);
useEffect(() => {
  axios.get('https://api.themoviedb.org/3/movie/popular').then((response) => {
    setMovies(response.data.results);
  });
}, []);
```
#### **Q7d**: Write the code to retrieve the TMDB API access token from the .env file ?
**Answer:**
```js
const getAccessToken = () => process.env.REACT_APP_TMDB_ACCESS_TOKEN;
```
#### **Q7e**: Write the command to install axios as a dependency in your project?
**Answer:**
```cmd
npm install axios
```
#### **Q7f**: What is the purpose of the useState hook in React?
**Answer:**

The useState hook allows functional components in React to manage state. It provides a way to store and update values that change over time, such as form inputs, user interactions, or fetched data.

#### **Q7g**: How does the useState hook return values, and what are its two main elements?
**Answer:**

The useState hook returns an array with two elements:
- The state variable (current value).
- A function to update the state variable.

```js
const [state, setState] = useState(initialValue);
```
---

## **Day 6**

### **Q8: Centralize API logic.**

#### **Q8a:** Create a `utils/api.js` file for API requests.  
**Answer:**
```jsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },
});

export const getPopularMovies = () => api.get('/movie/popular');
export default api;
```

#### **Q8b:** Use the centralized API method in your component.  
**Answer:**
```jsx
useEffect(() => {
  getPopularMovies().then((response) => setMovies(response.data.results));
}, []);
```
#### **Q8c:** How would you modify the Redux slice to handle the loading, success, and error states for fetching movies?
**Answer:**
````js
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    popular: [],
    loading: false,
    error: null,
  },
  reducers: {},
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
      });
  },
});
````

---

## **Day 7**

### **Q9: Create reusable components.**

#### **Q9a:** Write the code for a reusable `Loading` component.  
**Answer:**
```jsx
import { CircularProgress, Typography } from '@mui/material';

function Loading({ message }) {
  return (
    <div>
      <CircularProgress />
      <Typography>{message}</Typography>
    </div>
  );
}

export default Loading;
```
#### **Q9b:** What component is used to display the movie poster in MovieCard and how is it styled?
**Answer:** 

The CardMedia component is used to display the movie poster. It is styled with a fixed height of 300px and objectFit: 'cover' to ensure the image fills the 

#### **Q9c:** How does the MovieCard component dynamically render the movie poster based on the poster_path from the movie object?
**Answer:**

````jsx
<CardMedia
  component="img"
  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt={movie.title}
  sx={{ height: 300, objectFit: 'cover' }}
/>
````
---

### **Day 8**

### **Q10: Set up React Router.**

#### **Q10a:** Install `react-router-dom` and write the imports for routing.  
**Answer:**
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
```

#### **Q10b:** Wrap the `App` component with `Router`.  
**Answer:**
```jsx
function App() {
  return (
    <Router>
      {/* Add routes here */}
    </Router>
  );
}
```

#### **Q10c:** Add routes for `Home` and `Search` pages.  
**Answer:**
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/search" element={<Search />} />
</Routes>
```

---

### **Q11: Implement query parameters.**

#### **Q11a:** Write a utility hook to get query parameters from the URL.  
**Answer:**
```jsx
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
```

#### **Q11b:** Retrieve the query parameter in the `Search` page component.  
**Answer:**
```jsx
const query = useQuery();
const searchQuery = query.get('q');
```

---

### **Q12: Add a search bar.**

#### **Q12a:** Write the JSX code for a search input field in the `NavBar` component.  
**Answer:**
```jsx
<InputBase placeholder="Search..." />
```

#### **Q12b:** Write the `onSubmit` handler to navigate to the search results page.  
**Answer:**
```jsx
const handleSearch = (e) => {
  e.preventDefault();
  navigate(`/search?q=${searchQuery}`);
};
```

#### **Q12c:** Wrap the input in a form and connect it to the `handleSearch` function.  
**Answer:**
```jsx
<form onSubmit={handleSearch}>
  <InputBase placeholder="Search..." />
</form>
```

---

### **Day 9**

---

### **Q13: Add a watchlist feature.**

#### **Q13a:** Write a Redux action to add/remove movies from the watchlist.  
**Answer:**
```jsx
addToWatchlist: (state, action) => {
  state.watchlist.push(action.payload);
},
removeFromWatchlist: (state, action) => {
  state.watchlist = state.watchlist.filter(
    (movie) => movie.id !== action.payload.id
  );
},
```

#### **Q13b:** Write the JSX code to toggle between filled and unfilled bookmark icons in `MovieCard`.  
**Answer:**
```jsx
<IconButton onClick={handleWatchlistClick}>
  {isInWatchlist ? <Bookmark /> : <BookmarkBorder />}
</IconButton>
```

#### **Q13c:** Write the `handleWatchlistClick` function to dispatch add/remove actions.  
**Answer:**
```jsx
const handleWatchlistClick = (e) => {
  e.stopPropagation();
  if (isInWatchlist) {
    dispatch(removeFromWatchlist(movie));
  } else {
    dispatch(addToWatchlist(movie));
  }
};
```

---

### **Q14: Create a `Watchlist` page.**

#### **Q14a:** Fetch the watchlist from Redux state using `useSelector`.  
**Answer:**
```jsx
const watchlist = useSelector((state) => state.movies.watchlist);
```

#### **Q14b:** Map over the watchlist to display each movie in a `MovieCard`.  
**Answer:**
```jsx
<Grid container spacing={3}>
  {watchlist.map((movie) => (
    <Grid item key={movie.id}>
      <MovieCard movie={movie} />
    </Grid>
  ))}
</Grid>
```
#### **Q14c:** What is the purpose of useSelector and useDispatch hooks in React-Redux? Explain how they are used in your MovieCard and Watchlist components ?

**Answer:** 

useSelector is used to access the Redux store’s state, and useDispatch is used to dispatch actions to the Redux store. In the MovieCard component, useSelector is used to check if a movie is in the watchlist, while useDispatch is used to add or remove the movie from the watchlist. In the Watchlist component, useSelector is used to fetch all movies in the watchlist and display them.

---

### **Day 10**

---

### **Q15: Create a genre drawer.**

#### **Q15a:** Write the code to fetch genres from an API and store them in Redux.  
**Answer:**
```jsx
export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const response = await api.get('/genre/movie/list');
  return response.data.genres;
});
```

#### **Q15b:** Write the JSX code to display genres in a Material-UI drawer.  
**Answer:**
```jsx
<List>
  {genres.map((genre) => (
    <ListItem key={genre.id}>
      <ListItemButton onClick={() => handleGenreClick(genre)}>
        {genre.name}
      </ListItemButton>
    </ListItem>
  ))}
</List>
```

---

### **Q16: Add a responsive sidebar.**

#### **Q16a:** Write the code to create a Material-UI `Drawer` for the sidebar.  
**Answer:**
```jsx
<Drawer variant="permanent">
  {/* Drawer content */}
</Drawer>
```

#### **Q16b:** Use `useMediaQuery` to make the sidebar responsive.  
**Answer:**
```jsx
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
<Drawer variant={isMobile ? 'temporary' : 'permanent'}>{drawerContent}</Drawer>;
```
#### **Q16b:** How would you implement a basic GenreDrawer component using Material UI?
**Answer:**

```jsx
<Drawer>
  <List>
    {genres.map(genre => (
      <ListItemButton key={genre.id}>
        <ListItemText primary={genre.name} />
      </ListItemButton>
    ))}
  </List>
</Drawer>
```
#### **Q16b:** How would you make the GenreDrawer responsive based on screen size?
**Answer:**

```jsx
const isSmallScreen = useMediaQuery('(max-width:600px)');
<Drawer variant={isSmallScreen ? 'temporary' : 'permanent'}>
```
#### **Q16c:** How do you manage genre selection in the GenreDrawer?
**Answer:**
```jsx
const [selectedGenre, setSelectedGenre] = useState(null);
<ListItemButton selected={selectedGenre === genre.id} onClick={() => setSelectedGenre(genre.id)} />
```
#### **Q16d:** How would you implement a toggle to open and close GenreDrawer on mobile screens?
**Answer:**

```jsx
const [open, setOpen] = useState(false);
<IconButton onClick={() => setOpen(!open)}>
  <MenuIcon />
</IconButton>
<Drawer open={open} onClose={() => setOpen(false)} />
```
---

### **Day 11**

---

### **Q17: Create a dynamic movie details page.**

#### **Q17a:** Write the code to get the `id` parameter from the URL using `useParams`.  
**Answer:**
```jsx
const { id } = useParams();
```

#### **Q17b:** Write the code to fetch the movie details and cast using the `id`.  
**Answer:**
```jsx
useEffect(() => {
  const fetchMovieDetails = async () => {
    const [movieRes, creditsRes] = await Promise.all([
      api.get(`/movie/${id}`),
      api.get(`/movie/${id}/credits`),
    ]);
    setMovie(movieRes.data);
    setCast(creditsRes.data.cast.slice(0, 10));
  };
  fetchMovieDetails();
}, [id]);
```

#### **Q17c:** Display the movie's poster, title, and cast.  
**Answer:**
```jsx
<Typography variant="h3">{movie.title}</Typography>
<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
<Box>
  {cast.map((actor) => (
    <Chip key={actor.id} label={actor.name} />
  ))}
</Box>
```



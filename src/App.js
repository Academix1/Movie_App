import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './styles/theme';
import Navbar from './components/NavBar';
import { store } from './redux/store';

import GenreDrawer from './components/GenreDrawer';
import Home from './pages/Home';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Box sx={{ display: 'flex', mt: 8 }}>
          {/* Sidebar */}
          <Box
            component="aside"
            sx={{
              width: { xs: '100%', sm: '240px' }, // Full width on small screens, fixed on larger
              flexShrink: 0,
              position: 'fixed',
              height: 'calc(100vh - 64px)', // Subtract Navbar height
              overflowY: 'auto',
              overflowX:'hidden',
              borderRight: '1px solid #e0e0e0',
              bgcolor: 'background.paper',
            }}
          >
            <GenreDrawer />
          </Box>

          {/* Main Content */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              ml: { sm: '240px' }, // Leave space for the sidebar on larger screens
              p: 3,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path='/movie/:id' element={<MovieDetails />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </Box>
        </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
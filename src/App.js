import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './styles/theme';
import Navbar from './components/NavBar';
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
   
        <Navbar />
        <Box sx={{ mt: 8 }}>
          <Home/>
        </Box>
    
    </ThemeProvider>
  );
}

export default App;
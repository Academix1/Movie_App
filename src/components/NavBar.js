import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          Movie App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
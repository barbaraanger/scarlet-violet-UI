import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppBarComponent = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#8B0000' }}>
      <Toolbar>
        <Typography variant="h6">Scarlet & Violet Team Builder</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;


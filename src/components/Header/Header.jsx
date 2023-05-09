import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';

import { DrawerAppBar } from './Drawer';
import { ToolBar } from './Toolbar';

export const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#4682B4',
        }}
      >
        <Toolbar>
          <ToolBar onClick />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <DrawerAppBar onClose open />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;

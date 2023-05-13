import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';

import { DrawerAppBar } from './Drawer';
import { ToolBar } from './ToolbBar';

import { useState } from 'react';

export const Header = props => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log('yes');
    setMobileOpen((prevState )=> !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <
      Box 
     sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#4682B4',
        }}
      >
        <Toolbar>
          <ToolBar onClick={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Box>
        <DrawerAppBar
          onClose={handleDrawerToggle}
          open={mobileOpen}
          container={container}
        />
      </Box>
    
   
    </
     Box
    >
  );
};

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;

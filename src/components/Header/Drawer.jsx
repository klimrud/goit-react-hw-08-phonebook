import * as React from 'react';
// import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Sing Up', 'Log in', 'Contacts'];

export const DrawerAppBar = ({handleDrawerToggle,mobileOpen, container,onClick}) => {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   console.log('yes')
  //   setMobileOpen(prevState => !prevState);
  // };

  const drawer = (
    <Box onClick={onClick} sx={{ textAlign: 'center' }}>
      {/* <NavLink variant="h6" to="/" sx={{ my: 2 }}> */}
      <Typography variant="h6" sx={{ my: 2 }}>
        HOME
        </Typography>
      {/* </NavLink> */}
      <Divider />
      <List >
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '&& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  );
};

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

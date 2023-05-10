import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink} from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

// const navItems = ['Sing Up', 'Log in', 'Contacts'];
export const ToolBar = ({ onClick }) => {
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   console.log(mobileOpen);
  //   setMobileOpen(prevState => !prevState);
  // };

  return (
    <>
      {' '}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClick}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        <NavLink className="nav-link" to="/" end>
          HOME
        </NavLink>
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {/* {navItems.map(item => (
          <Button key={item} sx={{ color: '#fff' }}>
            <NavLink>
            {item}
            </NavLink>
          </Button>
        ))} */}

        <Button sx={{ color: '#fff' }}>
          {/* <Link to="contacts"  sx={{ color: '#FFD700' }}  > */}
          Contacts
          {/* </Link> */}
        </Button>

        <Button sx={{ color: '#fff' }}>
          <NavLink to="register">Sing Up</NavLink>
        </Button>
        <Button sx={{ color: '#fff' }}>
          <NavLink to="login">Log in</NavLink>
        </Button>
        <UserMenu />
      </Box>
    </>
  );
};

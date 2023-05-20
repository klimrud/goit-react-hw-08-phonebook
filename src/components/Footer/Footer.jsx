import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#fff',
  },
  activeLink: {
    color: '#FFD700',
  },
};

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        borderTop: '1px solid #eaeaea',
        backgroundColor: '#4682B4',
        marginTop: 20,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            color: '#fff',
          }}
        >
          <NavLink
            to="https://github.com/klimrud"
            style={styles.link}
            // activeStyle={styles.activeLink}
          >
            {new Date().getFullYear()}@ruda
          </NavLink>
        </Typography>
      </Container>
    </Box>
  );
};

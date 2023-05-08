import { Box, Container, Typography } from '@mui/material'
import React from 'react'



export const Footer = () => {
  return (
    
    <Box
    component="footer"
    sx={{
      py: 2,
      borderTop: '1px solid #eaeaea',
      backgroundColor: '#4682B4',
    }}
  >
    <Container maxWidth="xl">
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          fontWeight: 500,
          color: '#fff'
        }}
      >
        {new Date().getFullYear()} © Contacts App
        @ruda
      </Typography>
    </Container>
  </Box>
  )
}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogActions, Button } from '@mui/material';

export const LoginForm = () => {

  console.error('error');
  return (
  
    <Box component="form"
      sx={{
        display: 'block',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="User name"
        variant="outlined"
        // fullWidth
        // margin="normal"
        // error={!!errors.name}
        // helperText={errors?.name?.message}
      />
      <TextField
        helperText="Please enter your password"
        id="demo-helper-text-aligned"
        label="password"
      />

<DialogActions>
        <Button type="sabmit">Cancel</Button>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </DialogActions>
    </Box>
    
   
  );
}
import {FC, useEffect} from 'react';
import styled from 'styled-components';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { shadows } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      main: "#21B95C"
    },
    secondary: {
      main: "#919699"
    }
  },
}

);
theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export const Settings:FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'
      >
          <CssBaseline />
          <Box>
            <Typography component='h1' variant='h5'>
              Set up your profile and settings
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                id='first_name'
                label='First Name'
                name='firstName'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                id='last_name'
                label='Last Name'
                name='lastName'
              />
              <TextField
                margin='normal'
                required
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
              <TextField
                margin='normal'
                required
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
                <Box
                  sx={{
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'left',
                    justifyContent: "space-around",
                  }}
                >
                <Button
                  type='submit'
                  variant='contained'
                  color='success'
                  sx={{ mt: 3, mb: 2,
                  borderRadius:'20px'}}
                >
                  Submit
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Cancel
                </Button>
                </Box>
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />

              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

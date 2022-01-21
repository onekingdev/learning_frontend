import {FC, useEffect} from 'react';
import styled from 'styled-components';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStyles, CFormLabel, CFromContainer, CButtonGroup, CGridRow, CTextField, CFormTitle} from './Style';
import {dictionary} from './dictionary';

// const theme = createTheme();

export const Settings:FC = () => {
  const classes = useStyles();
  const language = 'en';

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
    // <ThemeProvider theme={theme}>
      // <Container component='main' maxWidth='xs' >
        // <CssBaseline />
        <CFromContainer component='main'>
          <CFormTitle>
            {dictionary[language].title}
          </CFormTitle>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
            <CGridRow container>
              <Grid item lg={4} sm={12}>
                <CFormLabel variant='body1'>
                {dictionary[language].firstName}
                </CFormLabel>
              </Grid>
              <Grid item lg={8} sm={12}>
                <CTextField
                margin='normal'
                required
                id='first_name'
                label={dictionary[language].firstName}
                name='firstName'
                autoFocus
                />
              </Grid>
            </CGridRow>
            <CGridRow container>
              <Grid item lg={4} sm={12}>
                <CFormLabel variant='body1'>
                {dictionary[language].lastName}
                </CFormLabel>
              </Grid>
              <Grid item lg={8} sm={12}>
                <CTextField
                margin='normal'
                required
                variant='outlined'
                id='last_name'
                label={dictionary[language].lastName}
                name='lastName'
                />
              </Grid>
            </CGridRow>
            <CGridRow container>
              <Grid item lg={4} sm={12}>
                <CFormLabel variant='body1'>
                {dictionary[language].tEurrentEmail}
                </CFormLabel>
              </Grid>
              <Grid item lg={8} sm={12}>
                <Typography variant='subtitle1'>
                {dictionary[language].emailValue}
                </Typography>
              </Grid>
            </CGridRow>
            <CGridRow container>
              <Grid item lg={4} sm={12}>
                <CFormLabel variant='body1'>
                {dictionary[language].tEmail}
                </CFormLabel>
              </Grid>
              <Grid item lg={8} sm={12}>
                <CTextField
                margin='normal'
                required
                id='email'
                label={dictionary[language].tEmail}
                name='email'
                autoComplete='email'
                />
              </Grid>
            </CGridRow>
            <CGridRow container>
              <Grid item lg={4} sm={12}>
                <CFormLabel variant='body1'>
                {dictionary[language].password}
                </CFormLabel>
              </Grid>
              <Grid item lg={8} sm={12}>
                <Link href='#' variant='body2'>
                {dictionary[language].changePassword}
                </Link>
              </Grid>
            </CGridRow>
            <CButtonGroup>
              <Button
                type='submit'
                variant='contained'
                className={classes.submitButton}
              >
                {dictionary[language].submit}
              </Button>
              <Button
                // type = ''
                variant = 'contained'
                className = {classes.cancelButton}
              >
              {dictionary[language].cancel}
              </Button>
            </CButtonGroup>
          </Box>
        </CFromContainer>
      // </Container>
    // </ThemeProvider>
  );
}


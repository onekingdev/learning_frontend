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

export const MembershipDetail:FC = () => {
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
    <CFromContainer component='main'>
      <CFormTitle>
        {dictionary[language].mTitle}
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
      </Box>
    </CFromContainer>
  );
}


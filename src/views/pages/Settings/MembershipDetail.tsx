import {FC, useEffect} from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CLink, MLinkBold, CLabel, MemContainer, CText, MGridRow, CTitle} from './Style';
import {dictionary} from './dictionary';
import { PlanList } from './PlanList';
import { FormDialog } from './DialogCancelMembership';

export const MembershipDetail:FC = () => {
  const language = 'en';
  const words = dictionary[language].membership

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
  <Box>
    <MemContainer >
      <CTitle>
        {words.title}
      </CTitle>
      <CText>
        {words.expiration + 'March 15, 2022'}
      </CText>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
        <MGridRow container>
          <Grid item lg={3} >
            <CLabel>
            {'Plan'}
            </CLabel>
          </Grid>
          <Grid item lg={5} >
            <CText>
            {'Monthly'}
            </CText>
            <CText>
              {words.yearIncentive}
            </CText>
          </Grid>
          <Grid item lg={4} >
            <CLink href='#' >
            {'Change to Yearly'}
            </CLink>
          </Grid>
        </MGridRow>
        <MGridRow container>
          <Grid item lg={3} >
            <CLabel>
            {'Children'}
            </CLabel>
          </Grid>
          <Grid container lg={9} >
            <PlanList/>
          </Grid>
        </MGridRow>
        <Box sx={{display:'flex', justifyContent:'center', margin:2}}>
          <MLinkBold href='#'>
            {'Add a Plan'}
          </MLinkBold>
        </Box>
        <MGridRow container>
          <Grid item lg={3} >
            <CLabel>
            {'Price'}
            </CLabel>
          </Grid>
          <Grid item lg={9} >
            <CText>
            {'$9.96 Monthly'}
            </CText>
          </Grid>
        </MGridRow>
        <FormDialog />
        {/* <MLinkBold>
          {'Cancel Membership'}
        </MLinkBold> */}
      </Box>
    </MemContainer>
  </Box>
  );
}


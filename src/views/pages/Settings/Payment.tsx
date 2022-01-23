import {FC, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { MasterCardImg, ShadowContainer, CGridRow, CTitle, CText, MLinkBold} from './Style';
import masterCard from './MasterCard.svg';

export const Payment:FC = () => {

  return (
    <ShadowContainer>
      <CTitle>
        {'Your payment method'}
      </CTitle>
        <CGridRow container>
          <Grid item lg={2} sm={12}>
            <MasterCardImg src={masterCard}/>
          </Grid>
          <Grid item lg={10} sm={12}>
            <CText>
              {'Mastercard ending in 4583'}
            </CText>
            <CText>
              {'Expires 3/25 Josie Turner'}
            </CText>
          </Grid>
        </CGridRow>
        <CGridRow container>
          <Grid item lg={2} sm={12}>
            <MLinkBold href='#'>{'Add new'}</MLinkBold>
          </Grid>
          <Grid item lg={10} sm={12}>
            <MLinkBold href='#'>{'Edit'}</MLinkBold>
          </Grid>
        </CGridRow>
    </ShadowContainer>
  );
}


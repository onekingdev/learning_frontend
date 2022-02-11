import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ScreenSize } from '../../../screenSize';
import styled from 'styled-components';

import { Grid, Paper, Box } from '@mui/material';

import { StudentMenu } from '../../../templates/StudentMenu';
import { Title } from '../../../atoms/Text/Title';
import background from '../../../assets/colored-shapes-bg.svg';
import ribbon from '../../../assets/ribbon.svg';
// import { CardTitle } from './Style';
// import CardTitle
import { BasicColor } from '../../../Color';
import Cartera from '../../../assets/Cartera.svg'

import { AccountBalance } from '../../../molecules/StudentBank/AccountBalance';
import { TxBox } from '../../../molecules/StudentBank/TxBox';
import { TxHistoryTable } from '../../../molecules/StudentBank/TxHistoryTable';
import { Interest } from '../../../molecules/StudentBank/Interest';

export const Bank: FC = () => {
  const history = useHistory();


  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    // get(
    //   // `collectibleById(id:"${collectibleId}")`,
    //   // COLLECTIBLE_QUERY,
    //   // handleData,
    //   // handleError
    // );
  }, []);

  return (
    <Wrapper>
      <StudentMenu>
        <BankTitle>
          <Title>Bank</Title>
        </BankTitle>
        <div >
          <Grid container >
            <Grid container item xs={12} md={6} sx={{'&.MuiGrid-root': {alignContent: 'flex-start'}}}>
              <GridItem item md={12} xs={4}>
                <Img src={Cartera} />
              </GridItem>
              <GridItem item md={12} xs={8}>
                <AccountBalance balance={2000} />
              </GridItem>
              <GridItem item md={12} xs={12}>
                <TxBox />
              </GridItem>
            </Grid>
            <GridItem container item xs={12} md={6} align='start'>
              <Grid item >
                <TxHistoryTable />
              </Grid>
              <Grid item >
                <Interest />
              </Grid>
            </GridItem>
          </Grid>
        </div>
      </StudentMenu>
    </Wrapper>
  );
};

const GridItem = styled(Grid) <{
  align?: string
}>`
&.MuiGrid-root {
  display: flex;
  justify-content: center;
  align-items: ${p => p.align ? p.align : 'center'};
  flex-direction: column;
  padding: 15px;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    padding: 10px 0 10px 0;
    align-items: center;
  }
  }
`;

const Img = styled.img`
@media screen and (max-width: ${ScreenSize.tablet}) {
    width: 30vw;
    margin-left: 5vw;
  }
`;
const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const BankTitle = styled.div`
  margin-top: 3vh;
  text-align: center;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: url(${ribbon}) center no-repeat;
  background-size: contain;
  margin-bottom: 20px;
`;


import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Grid, Paper, Box } from '@mui/material';

import { StudentMenu } from '../../../templates/StudentMenu';
import { Title } from '../../../atoms/Text/Title';
import { CardTitle, Wrapper } from './Style';
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

        <CardTitle>
          <Title>Bank</Title>
        </CardTitle>
        <Container >
          <Grid container >
            <GridItem item md={6} xs={12} >
              <img src={Cartera} />
              <AccountBalance balance={2000} />
              <TxBox />
            </GridItem>
            <GridItem item md={6} xs={12} align='start'>
              <Interest />
              <TxHistoryTable />
            </GridItem>
          </Grid>
        </Container>
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
  }
`;

const Container = styled.div`
`;


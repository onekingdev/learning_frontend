import { FC, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { LoadingContext } from 'react-router-loading';

import { StudentMenu } from 'views/templates/StudentMenu';
import { Title } from 'views/atoms/Text/Title';
import background from 'views/assets/colored-shapes-bg.svg';
import ribbon from 'views/assets/ribbon.svg';
import Cartera from 'views/assets/Cartera.svg';

import { ScreenSize } from 'views/screenSize';

import { AccountBalance } from 'views/molecules/StudentBank/AccountBalance';
import { TxBox } from 'views/molecules/StudentBank/TxBox';
import { TxHistoryTable } from 'views/molecules/StudentBank/TxHistoryTable';
import { Interest } from 'views/molecules/StudentBank/Interest';
import { PageTitle } from 'views/molecules/PageTitle';

export const Bank: FC = () => {

  const student = useSelector((state: any) =>state.student)
  const interests = useSelector((state: any) => state.interests.interests)
  const loadingContext = useContext(LoadingContext);
  const bankMovement = student.bankWallet.bankmovementSet

  useEffect(() => {
    loadingContext.done();
  }, []);

  return (
    <Wrapper>
      <StudentMenu>
        {/* <BankTitle> */}
          <PageTitle title='BANK'/>
          {/* <Title>Bank</Title> */}
        {/* </BankTitle> */}
        <div >
          <Grid container >
            <Grid container item xs={12} md={6} sx={{'&.MuiGrid-root': {alignContent: 'space-evenly'}}}>
              <GridItem item md={12} xs={4}>
                <Img src={Cartera} />
              </GridItem>
              <GridItem item md={12} xs={8}>
                <AccountBalance balance={student.bankWallet.balance} />
              </GridItem>
              <GridItem item md={12} xs={12}>
                <TxBox />
              </GridItem>
            </Grid>
            <GridItem container item xs={12} md={6} align="start">
              <Grid item>
                <TxHistoryTable movement={bankMovement}/>
              </Grid>
              <Grid item>
                <Interest interests={interests} />
              </Grid>
            </GridItem>
          </Grid>
        </div>
      </StudentMenu>
    </Wrapper>
  );
};

const GridItem = styled(Grid)<{
  align?: string;
}>`
  &.MuiGrid-root {
    display: flex;
    justify-content: center;
    align-items: ${p => (p.align ? p.align : 'center')};
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

import {FC, useEffect, useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

import {Grid} from '@mui/material';

import {StudentMenu} from '../../../templates/StudentMenu';
import {Title} from '../../../atoms/Text/Title';
import background from '../../../assets/colored-shapes-bg.svg';
import ribbon from '../../../assets/ribbon.svg';
import Cartera from '../../../assets/Cartera.svg';

import {ScreenSize} from '../../../screenSize';

import {AccountBalance} from '../../../molecules/StudentBank/AccountBalance';
import {TxBox} from '../../../molecules/StudentBank/TxBox';
import {TxHistoryTable} from '../../../molecules/StudentBank/TxHistoryTable';
import {Interest} from '../../../molecules/StudentBank/Interest';
import {LoadingContext} from 'react-router-loading';

import mutation from 'api/mutations/get';
import query from 'api/queries/get';

export const Bank: FC = () => {
  // const loadingContext = useContext(LoadingContext);

  // state to store current account balance
  const [balance, setBalance] = useState(0)
  const store = useSelector((state: any) => state)
  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) =>state.student)
  const interests = useSelector((state: any) => state.interests.interests)
  const bankMovement = student.bankWallet.bankmovementSet
  // const fetchData = async () => {
  //   try {

  //     const res: any = await query(
  //       `studentBankBalanceById(student: ${9})`,
  //       '{balance}',
  //       user.token
  //     ).catch(e => ({success: false}));

  //     const result = await res.json();
  //     setBalance(result.data.studentBankBalanceById.balance)
  //   } catch(e) {
  //     setBalance(100)
  //   }
  // }
  useEffect(() => {
    // fetchData().catch(console.error)
  }, []);

  return (
    <Wrapper>
      <StudentMenu>
        <BankTitle>
          <Title>Bank</Title>
        </BankTitle>
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

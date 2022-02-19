import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

import { Grid } from '@mui/material';

import { GridItem, Input } from './Style';
import { LSWhiteTextButton } from '../Setting/utils/Style';
import { BasicColor } from '../../Color';

export const TxBox: FC = () => {

  const [depositAmount, setDepositAmount] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState(0)

  const onDepositChange = (x: string) => {

    // to make sure only number is input
    if (isNaN(+x))
      setDepositAmount(depositAmount)
    else setDepositAmount(+x)
  }

  const onWithdrawChange = (x: string) => {

    // to make sure only number is input
    if (isNaN(+x))
      setWithdrawAmount(withdrawAmount)
    else setWithdrawAmount(+x)
  }

  const onDepositBtnClicked = () => {

    console.log(depositAmount)
  }

  const onWithdrawBtnClicked = () => {

    console.log(withdrawAmount)
  }

  useEffect(() => {
    // get(
    //   // `collectibleById(id:"${collectibleId}")`,
    //   // COLLECTIBLE_QUERY,
    //   // handleData,
    //   // handleError
    // );
  }, []);

  return (
    <BankPaper flex_direction='column' bg_color={BasicColor.green} width={450}>
      <Grid container >
        <GridItem item md={8} xs={8}>
          <Input
            onChange={(e) => onDepositChange(e.target.value)}
            value={depositAmount}
          />
        </GridItem>
        <GridItem item md={4} xs={4} align='start'>
          <LSWhiteTextButton
            onClick={onDepositBtnClicked}
          >Deposit</LSWhiteTextButton>
        </GridItem>
      </Grid>
      <Grid container >
        <GridItem item md={8} xs={8}>
          <Input
            onChange={(e) => onWithdrawChange(e.target.value)}
            value={withdrawAmount}
          />
        </GridItem>
        <GridItem item md={4} xs={4} align='start'>
          <LSWhiteTextButton
            onClick={onWithdrawBtnClicked}
          >Withdraw</LSWhiteTextButton>
        </GridItem>
      </Grid>
    </BankPaper>
  );
};

const BankPaper = styled.div<{
  flex_direction: string;
  bg_color: string;
  width?: number;
}>`
  margin-top: 0;
  padding: 30px 20px 30px 20px;
  width: ${p => (p.width ? p.width + 'px;' : 'auto;')}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${p => p.flex_direction};
  color: white;
  background-color: ${BasicColor.blue};
  background-color: ${p => p.bg_color};
  border-radius: 20px;

  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 85vw;
    padding: 15px;
  }

  @media screen and (min-width: ${ScreenSize.tablet}) (max-width: ${ScreenSize.desktop}) {
    // width: 400px;
    padding: 20px 35px 20px 35px;
  }
`;

import { FC, useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import { BankPaper, GridItem, Input } from './Style';
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
    <BankPaper flex_direction='column' bg_color={BasicColor.green} width={500}>
      <Grid container >
        <GridItem item md={8}>
          <Input
            onChange={(e) => onDepositChange(e.target.value)}
            value={depositAmount}
          />
        </GridItem>
        <GridItem item md={4} align='start'>
          <LSWhiteTextButton
            onClick={onDepositBtnClicked}
          >Deposit</LSWhiteTextButton>
        </GridItem>
      </Grid>
      <Grid container >
        <GridItem item md={8}>
          <Input
            onChange={(e) => onWithdrawChange(e.target.value)}
            value={withdrawAmount}
          />
        </GridItem>
        <GridItem item md={4} align='start'>
          <LSWhiteTextButton
            onClick={onWithdrawBtnClicked}
          >Withdraw</LSWhiteTextButton>
        </GridItem>
      </Grid>
    </BankPaper>
  );
};

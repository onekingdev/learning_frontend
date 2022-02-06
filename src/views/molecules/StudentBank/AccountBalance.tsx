import { FC } from 'react';
import { BasicColor } from '../../Color';

import SavingsIcon from '@mui/icons-material/Savings';
import { BankPaper } from './Style';
import { LSText, LSLabel } from '../Setting/utils/Style';

interface BalanceProp {
  balance: number
}
export const AccountBalance: FC<BalanceProp> = ({ balance }) => {

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <BankPaper flex_direction='row' bg_color={BasicColor.blue} width={500}>
      <SavingsIcon />
      <LSText fontSize={24}>
        current account:
      </LSText>
      <LSLabel ml={10} fontSize={24}>${numberWithCommas(balance)}</LSLabel>
    </BankPaper>
  );
};

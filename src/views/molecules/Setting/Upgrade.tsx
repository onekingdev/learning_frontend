import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { InputBase } from '@mui/material';


import { LSButtonContainer, LSButton, LSText, LSPaperMoney, LSLabel, LSInputBase } from './utils/Style';
import masterCard from 'views/assets/MasterCard.svg'

interface IUpgradeProps {
  onConfirm: () => void
  onCancel: () => void
  tag?: Number
}

const text = [
  'You are going to upgrade your current subscription to an ',
  'Have in mind you that the first payment will be prorated according your billing cycle',
  'You are already have an active agreement, you only need to confirm your payment',
]

export const Upgrade: FC<IUpgradeProps> = ({ onConfirm, onCancel, tag }) => {

  const onSubmitBtnClicked = () => {
    console.log(tag)
    onConfirm()
  }

  const onCancelBtnClicked = () => {
    onCancel()
  }

  useEffect(() => {
  }, [])

  return (
    <div >
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <LSText >{text[0]}</LSText>
        <LSLabel mt={0}>{'Annual Plan'}</LSLabel>
        <LSLabel >{'Do you have any coupon?'}</LSLabel >
        <LSPaperMoney elevation={6}>
          <LSLabel fontSize={24} color='darkblue' >{'$59.99 USD '}<span style={{ fontSize: '14px', color: 'black' }}>{'/year'}</span></LSLabel>
        </LSPaperMoney>
        <LSText mt={15} mb={20} textAlign='center'>{text[1]}</LSText>
        <LSText fontSize={15} margin={0} textAlign='center'>{text[2]}</LSText>
      </Box>
      <LSLabel >{'Card Number'}</LSLabel>
      <LSInputBase
        fullWidth
        disabled
        border='solid 2px darkblue'
        border_radius={10}
        pl={10}
        value='1154 4525 7889 1458'
        endAdornment={<img src={masterCard} style={{ marginRight: '40px', height: '40px' }} />}
      />
      <LSButtonContainer style={{ marginTop: '32px' }}>
        <LSButton
          variant='contained'
          onClick={onSubmitBtnClicked}
        >
          {'Upgrade'}
        </LSButton>
        <LSButton
          variant='contained'
          color="secondary"
          onClick={onCancelBtnClicked}
        >
          {'Cancel'}
        </LSButton>
      </LSButtonContainer>
    </div>
  );
}

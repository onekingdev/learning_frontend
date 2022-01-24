import {FC, useState} from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { LSTitle, CLabel, MemContainer, CText, MGridRow} from '../utils/Style';

import {LSBlueTextButton} from '../utils/Style'
import {dictionary} from '../dictionary';
import { PlanList } from '../molecules/PlanList';
import { LSDialog } from '../molecules/LSDialog';
import {CancelForm} from '../molecules/CancelForm'

import { useDialog } from '../utils/useDialog';

export const MembershipDetail:FC = () => {

  const {isOpen, open} = useDialog()

  const [reason, setReason] = React.useState<string>('reason1');

  const onConfirm = (reason: string) => {
    setReason(reason)
    console.log(reason)
    open()
  }
  const onCancel = () => open();

  const language = 'en';
  const words = dictionary[language].membership

  return (
  <Box>
    <MemContainer >
      <LSTitle>
        {words.title}
      </LSTitle>
      <CText>
        {words.expiration + 'March 15, 2022'}
      </CText>
      <Box >
        <MGridRow container>
          <Grid item sm={3} >
            <CLabel>
            {'Plan'}
            </CLabel>
          </Grid>
          <Grid item sm={5} >
            <CText>
            {'Monthly'}
            </CText>
            <CText>
              {words.yearIncentive}
            </CText>
          </Grid>
          <Grid item sm={4} >
            <LSBlueTextButton >
            {'Change to Yearly'}
            </LSBlueTextButton>
          </Grid>
        </MGridRow>
        <MGridRow container>
          <Grid item sm={3} >
            <CLabel>
            {'Children'}
            </CLabel>
          </Grid>
          <Grid item sm={9} >
            <PlanList/>
          </Grid>
        </MGridRow>
        <Box sx={{display:'flex', justifyContent:'center', margin:2}}>
          <LSBlueTextButton>
            {'Add a Plan'}
          </LSBlueTextButton>
        </Box>
        <MGridRow container>
          <Grid item sm={3} >
            <CLabel>
            {'Price'}
            </CLabel>
          </Grid>
          <Grid item sm={9} >
            <CText>
            {'$9.96 Monthly'}
            </CText>
          </Grid>
        </MGridRow>
        <LSBlueTextButton onClick={open}>
          {'Cancel Membership'}
        </LSBlueTextButton>
        <LSDialog
          isOpen={isOpen}
          open={open}
          title = 'Cancel Membership'
          contentText = 'Thank you for your plan. We are sorry to see you go'
          dialogContent = {
            <CancelForm
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          }
          />
      </Box>
    </MemContainer>
  </Box>
  );
}


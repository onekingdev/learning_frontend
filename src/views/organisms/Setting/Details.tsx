import {FC, useState} from 'react';
import styled from 'styled-components';
import * as React from 'react';
import Box from '@mui/material/Box';
import { LSTitle, LSShadowContainer } from '../../molecules/Setting/utils/Style';

import {LSBlueTextButton} from '../../molecules/Setting/utils/Style'
import {dictionary} from '../../pages/Settings/dictionary';
import { LSDialog } from '../../molecules/Setting/LSDialog';
import { CancelForm } from '../../molecules/Setting/CancelForm';
import { AddPlanForm } from '../../molecules/Setting/AddPlanForm';
import { useDialog, useAddDialog } from '../../molecules/Setting/utils/useDialog';
import { PlanList } from '../../molecules/Setting/PlanList';

export const MembershipDetail:FC = () => {

  const {isOpen, open} = useDialog()
  const {isAddOpen, openAdd} = useAddDialog()


  const [reason, setReason] = useState<string>('reason1');

  const onAddConfirm = () => {
    openAdd()
  }
  const onConfirm = (reason: string) => {
    setReason(reason)
    console.log(reason)
    open()
  }
  const onAddCancel = () => openAdd();
  const onCancel = () => open();

  const language = 'en';
  const words = dictionary[language].membership

  return (
  <Box>
    <LSShadowContainer >
      <LSTitle>
        Membership Details
      </LSTitle>
      <Box >
        <Box sx={{display:'flex', justifyContent:'center', margin:2}}>
          <LSDialog
          isOpen={isAddOpen}
          open={openAdd}
          title = 'Add Plan/or Package'
          contentText = 'Choose the new plan'
          dialogContent = {
            <AddPlanForm
              onConfirm={onAddConfirm}
              onCancel={onAddCancel}
            />
          }
          />
        </Box>
        <PlanList />
        <BtnContainer >
          <LSBlueTextButton onClick={openAdd}>
              {'Add a Plan'}
            </LSBlueTextButton>
          <LSBlueTextButton onClick={open}>
            {'Cancel Membership'}
          </LSBlueTextButton>
        </BtnContainer>
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
    </LSShadowContainer>
  </Box>
  );
}
const BtnContainer = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
@media screen and (max-width: 540px) {
  width: 100%;
}
`

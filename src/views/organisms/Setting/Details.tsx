import {FC} from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { LSTitle, MemContainer } from '../../molecules/Setting/utils/Style';

import {LSBlueTextButton} from '../../molecules/Setting/utils/Style'
import {dictionary} from '../../pages/Settings/dictionary';
import { LSDialog } from '../../molecules/Setting/LSDialog';
import { CancelForm } from '../../molecules/Setting/CancelForm';

import { AddPlanForm } from '../../molecules/Setting/AddPlanForm';

import { useDialog, useAddDialog } from '../../molecules/Setting/utils/useDialog';
import { PlanTable } from '../../molecules/Setting/PlanTable';

export const MembershipDetail:FC = () => {

  const {isOpen, open} = useDialog()
  const {isAddOpen, openAdd} = useAddDialog()

  const [reason, setReason] = React.useState<string>('reason1');

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
    <MemContainer >
      <LSTitle>
        {words.title}
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
        <PlanTable />
        <Box sx={{display: 'flex', justifyContent:'space-evenly', margin: 2}}>
          <LSBlueTextButton onClick={openAdd}>
              {'Add a Plan'}
            </LSBlueTextButton>
          <LSBlueTextButton onClick={open}>
            {'Cancel Membership'}
          </LSBlueTextButton>
        </Box>
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


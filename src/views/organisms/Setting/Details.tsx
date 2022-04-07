import { FC, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { LSTitle, LSShadowContainer } from 'views/molecules/Setting/utils/Style';
import { LSBlueTextButton } from 'views/molecules/Setting/utils/Style'
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { AddSimplePlanForm } from 'views/molecules/Setting/AddSimplePlanForm';
import { useDialog, useAddDialog } from 'views/molecules/Setting/utils/useDialog';
import { PlanList } from 'views/molecules/Setting/PlanList';
import { CancelMembershipForm } from 'views/molecules/Setting/CancelMembershipForm';

export const MembershipDetail: FC = () => {

  const { isOpen, open } = useDialog()
  const { isAddOpen, openAdd } = useAddDialog()


  // State to refresh component
  const [value, setValue] = useState(false);
  const refresh = () => {
    // it re-renders the component
    setValue(!value);
  }

  return (
    <Box>
      <LSShadowContainer >
        <LSTitle>
          Membership Details
        </LSTitle>
        <Box >
          <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
            <LSDialog
              isOpen={isAddOpen}
              open={openAdd}
              title='Add Plan/or Package'
              // fullWidth='true'
              // contentText='Choose the new plan'
              dialogContent={
                <AddSimplePlanForm
                  open={openAdd}
                  refresh={refresh}
                />
              }
            />
          </Box>
          <PlanList refresh={value} />
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
            title='Cancel Membership'
            contentText='Thank you for your plan. We are sorry to see you go'
            dialogContent={
              <CancelMembershipForm
                open={open}
                refresh={refresh}
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

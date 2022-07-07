import { FC } from 'react';
import { Box, Button, Paper, useMediaQuery } from '@mui/material';
import { LSTitle } from 'views/molecules/Setting/utils/Style';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { useDialog, useAddDialog } from 'views/molecules/Setting/utils/useDialog';
import { TeacherCancelMembershipForm } from './Forms/TeacherCancelMembershipForm';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { TeacherPlanList } from './Forms/TeacherPlanList';
import { TeacherAddSimplePlanForm } from './Forms/TeacherAddSimplePlanForm';
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { ScreenSize } from 'constants/screenSize';
export const TeacherMembershipDetail: FC = () => {

  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const { isOpen, open } = useDialog()
  const { isAddOpen, openAdd } = useAddDialog()
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';

  return (
    <Paper
      elevation={5}
      sx={{
        ...PARENT_PAPER_STYLE,
        width: isMobile ? '100%' : 640
      }}
    >
      <LSTitle>
        {dictionary[language]?.membershipDetails}
      </LSTitle>
      <Box >
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
          <LSDialog
            isOpen={isAddOpen}
            open={openAdd}
            title={dictionary[language]?.addPlanPackage}
            // fullWidth='true'
            // contentText={dictionary[language]?.chooseTheNewPlan}
            dialogContent={
              <TeacherAddSimplePlanForm
                open={openAdd}
              />
            }
          />
        </Box>
        <TeacherPlanList />
        <Box >
          <Button onClick={openAdd}>
            {dictionary[language]?.addAPlan}
          </Button>
          <Button onClick={open}>
            {dictionary[language]?.cancelMembership}
          </Button>
        </Box>
        <LSDialog
          isOpen={isOpen}
          open={open}
          title={dictionary[language]?.cancelMembership}
          contentText={dictionary[language]?.thankYouForYourPlan}
          dialogContent={
            <TeacherCancelMembershipForm
              open={open}
            />
          }
        />
      </Box>
    </Paper>
  );
}

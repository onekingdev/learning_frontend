import { FC, useEffect, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import { LSTitle } from 'views/molecules/Setting/utils/Style';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { useDialog, useAddDialog } from 'views/molecules/Setting/utils/useDialog';
import { TeacherCancelMembershipForm } from './Forms/TeacherCancelMembershipForm';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { OrderDetailsList } from './Forms/OrderDetailsList';
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import { TeacherAddOrderForm } from './Forms/TeacherAddOrderForm';

interface TeacherMembershipDetailProps {
  orders: Array<any>
}

export const TeacherMembershipDetail: FC<TeacherMembershipDetailProps> = ({ orders }) => {

  const isMobile = useSocratesMediaQuery('xs')
  const { isOpen, open } = useDialog()
  const { isAddOpen, openAdd } = useAddDialog()
  const { language } = useSelector((state: any) => state.user)
  const [orderDetails, setOrderDetails] = useState<Array<any>>([])

  useEffect(() => {
    const temp = []
    for (const order of orders) {
      temp.push(...order.orderdetailSet)
    }
    setOrderDetails(temp)
  }, [orders])

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
              <TeacherAddOrderForm
                close={openAdd}
              />
            }
          />
        </Box>
        <OrderDetailsList orderDetails={orderDetails} />
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

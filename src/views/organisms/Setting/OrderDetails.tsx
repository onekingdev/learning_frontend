import { FC, useEffect, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import { LSTitle } from 'views/molecules/Setting/utils/Style';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { useDialog, useAddDialog } from 'views/molecules/Setting/utils/useDialog';
import { CancelMembershipForm } from './CancelMembershipForm';
import { useSelector } from 'react-redux';
import { OrderDetailsList } from './OrderDetailsList';
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import NewOrderForm from './NewOrderForm';
import commonDictionary from 'constants/commonDictionary';

interface TeacherMembershipDetailProps {
  orders: Array<any>
}

export const OrdersDetails: FC<TeacherMembershipDetailProps> = ({ orders }) => {

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
        width: isMobile ? '100%' : 640,
      }}
    >
      <LSTitle>
        {commonDictionary[language]?.membership_details}
      </LSTitle>
      <Box >
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
          <LSDialog
            isOpen={isAddOpen}
            open={openAdd}
            title={commonDictionary[language]?.add_plan_package}
            // fullWidth='true'
            // contentText={commonDictionary[language]?.chooseTheNewPlan}
            dialogContent={
              <NewOrderForm
                close={openAdd}
              />
            }
          />
        </Box>
        <OrderDetailsList orderDetails={orderDetails} />
        <Box >
          <Button onClick={openAdd}>
            {commonDictionary[language]?.add_a_plan}
          </Button>
          <Button onClick={open}>
            {commonDictionary[language]?.cancel_membership}
          </Button>
        </Box>
        <LSDialog
          isOpen={isOpen}
          open={open}
          title={commonDictionary[language]?.cancel_membership}
          contentText={commonDictionary[language]?.thankyou_for_your_plan}
          dialogContent={
            <CancelMembershipForm
              open={open}
            />
          }
        />
      </Box>
    </Paper>
  );
}

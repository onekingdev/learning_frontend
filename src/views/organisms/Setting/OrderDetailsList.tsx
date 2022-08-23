import { FC, useState } from 'react';
import {
  Button,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux'
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { useDialog } from 'views/molecules/Setting/utils/useDialog';
import { LSLabel, LSText } from 'views/molecules/Setting/utils/Style';
import PlanUpgradeForm from './PlanUpgradeForm';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import commonDictionary from 'constants/commonDictionary';
import CancelOrderDetailForm from './CancelOrderDetailForm';

interface OrderListProps {
  orderDetails: Array<any>
  cardNumber: string
}
export const OrderDetailsList: FC<OrderListProps> = ({ orderDetails, cardNumber }) => {
  const isMobile = useSocratesMediaQuery('xs')
  const language = useSelector((state: any) => state.user.language);

  // for change to yearly update dialog
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)

  // for cancel dialog
  const { isOpen, open } = useDialog()

  // to store currently selected orderDetail
  const [selected, setSelected] = useState<any>()

  return (
    <>
      <List
        subheader={
          <ListSubheader sx={{ borderBottom: 'solid gray 1px' }}>
            <LSLabel fontSize={17} textAlign='center'>{commonDictionary[language]?.plan}</LSLabel>
            <LSText textAlign='center' fontSize={13}>{commonDictionary[language]?.get_three_months_free_for_annual_plan}</LSText>
          </ListSubheader>
        }
      >
        {orderDetails && orderDetails
          .filter((item: any) => item.isPaid) // Display only paid plans
          .map((row, index) => (
            <ListItem key={row.id} divider>
              <Grid container spacing={1} sx={{ background: isMobile ? colors[index % 4] : 'white' }}>
                <Grid item sm={3} xs={12}>
                  <LSLabel >{row.plan.name}({row.quantity})</LSLabel>
                </Grid>
                <Grid item sm={3} xs={4}>
                  <LSLabel>{row.period}</LSLabel>
                </Grid>
                <Grid item sm={3} xs={4}>
                  <LSLabel>{row.expiredAt?.slice(0, 10) || 'Unknown'}</LSLabel>
                </Grid>
                <Grid item sm={3} xs={4}>
                  <LSLabel>{row.period === 'MONTHLY' ? row.plan.priceMonth : row.plan.priceYear} {row.plan.currency}</LSLabel>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Button
                    disabled={row.period.toUpperCase() === 'YEARLY' || row.isCancel ? true : false}
                    onClick={() => {
                      setSelected(row)
                      setIsUpdateOpen(true)
                    }}
                  >{commonDictionary[language]?.change_to_yearly}
                  </Button>

                </Grid>
                <Grid item sm={6} xs={12}>
                  {
                    row.isCancel ? <Typography variant='inherit' color='gray'>Cancelled</Typography> :
                      <Button
                        onClick={() => { // on cancel plan btn clicked
                          setSelected(row)
                          open() // Open cancel plan dialog
                        }}
                      >{commonDictionary[language]?.cancel_plan}</Button>
                  }

                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
      {
        selected && <>
          <LSDialog // Cancel plan dialog
            open={isOpen}
            close={open}
            title={commonDictionary[language]?.cancel_plan}
            dialogContent={
              <CancelOrderDetailForm
                orderDetailId={selected?.id || ''}
                close={open}
              />
            }
          />
          <LSDialog // Upgrade to yearly dialog
            open={isUpdateOpen}
            close={() => setIsUpdateOpen(!isUpdateOpen)}
            title={commonDictionary[language]?.upgrade}
            dialogContent={
              <PlanUpgradeForm
                orderDetail={selected}
                close={() => setIsUpdateOpen(false)}
                cardNumber={cardNumber}
              />
            }
          />
        </>
      }
    </>
  );
}
const colors = [
  'linear-gradient(0deg, rgba(34, 186, 175, 0.2), rgba(34, 186, 175, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(23, 113, 185, 0.2), rgba(23, 113, 185, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(244, 194, 34, 0.2), rgba(244, 194, 34, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(38, 184, 36, 0.2), rgba(38, 184, 36, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);'
]

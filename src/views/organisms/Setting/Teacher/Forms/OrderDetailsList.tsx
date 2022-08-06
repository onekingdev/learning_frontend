import { FC, useState } from 'react';
import {
  Button,
  Grid,
  List,
  ListItem,
  ListSubheader,
} from '@mui/material';
import { useSelector } from 'react-redux'
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { useDialog } from 'views/molecules/Setting/utils/useDialog';
import { LSLabel, LSText } from 'views/molecules/Setting/utils/Style';
import { TeacherCancelPlanForm } from './TeacherCancelPlanForm';
import { TeacherPlanUpgrade } from './TeacherPlanUpgrade';
import { dictionary } from './dictionary'
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';


interface OrderListProps {
  orderDetails: Array<any>
}
export const OrderDetailsList: FC<OrderListProps> = ({ orderDetails }) => {
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
            <LSLabel fontSize={17} textAlign='center'>{dictionary[language]?.plan}</LSLabel>
            <LSText textAlign='center' fontSize={13}>{dictionary[language]?.getThreeMonthsFREEForAnnualPlan}</LSText>
          </ListSubheader>
        }
      >
        {orderDetails && orderDetails.map((row, index) => (
          <ListItem key={row.id} divider>
            <Grid container spacing={1} sx={{ background: isMobile ? colors[index % 4] : 'white' }}>
              <Grid item sm={3} xs={12}>
                <LSLabel >{row.plan.name}</LSLabel>
              </Grid>
              <Grid item sm={3} xs={4}>
                <LSLabel>{row.period}</LSLabel>
              </Grid>
              <Grid item sm={3} xs={4}>
                <LSLabel>{row.expiredAt?.slice(0, 10)}</LSLabel>
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
                >{dictionary[language]?.ChangeToYearly}
                </Button>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button
                  onClick={() => { // on cancel plan btn clicked
                    setSelected(row)
                    open() // Open cancel plan dialog
                  }}
                  disabled={row.isCancel}
                >{dictionary[language]?.CancelPlan}</Button>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      {
        selected && <>
          <LSDialog // Cancel plan dialog
            isOpen={isOpen}
            open={open}
            title={dictionary[language]?.CancelChildrenPlan}
            contentText={dictionary[language]?.YouAreCancellingOneChildSoloArea}
            dialogContent={
              <TeacherCancelPlanForm
                orderDetailId={selected?.id || ''}
              />
            }
          />
          <LSDialog // Upgrade to yearly dialog
            isOpen={isUpdateOpen}
            open={() => setIsUpdateOpen(!isUpdateOpen)}
            title={dictionary[language]?.Upgrade}
            dialogContent={
              <TeacherPlanUpgrade
                orderDetail={selected}
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

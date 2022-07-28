import { FC, useState, useEffect } from 'react';
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


const fake_plans = [
  {
    id: 1,
    plan: {
      name: 'Gold',
      priceMonth: '12USD',
      priceYear: '108USD',
    },
    period: 'MONTHLY',
    expiredAt: '22-06-08',
  },
  {
    id: 2,
    plan: {
      name: 'Gold',
      priceMonth: '12USD',
      priceYear: '108USD',
    },
    period: 'MONTHLY',
    expiredAt: '22-06-08',
  },
  {
    id: 3,
    plan: {
      name: 'Gold',
      priceMonth: '12USD',
      priceYear: '108USD',
    },
    period: 'YEARLY',
    expiredAt: '22-06-08',
  },
]

export const TeacherPlanList: FC = () => {
  const isMobile = useSocratesMediaQuery('xs')
  const language = useSelector((state: any) => state.user.language);

  // for change to yearly dialog
  const [isUpdateOpen, update] = useState(false)
  const openUpdate = () => update(!isUpdateOpen);
  const { isOpen, open } = useDialog()
  const [tag, seTag] = useState(0)
  const [plans, setPlans] = useState<Array<any>>([])
  const [changed, setChanged] = useState(false)

  const toggleChanged = () => {
    setChanged(!changed)
  }

  const onBtnClick = (id: number) => {
    seTag(id)
    open()
  }

  const onUpgradeBtnClick = (id: number) => {
    seTag(id)
    openUpdate()
  }

  const onCancelUpgrade = () => openUpdate()

  const fetchAvailableBrougthPlans = async () => {
    setPlans([])
    setPlans(fake_plans)
  }

  useEffect(() => {
    fetchAvailableBrougthPlans()
  }, [changed]);

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
        {plans.length > 0 && plans.map((row, index) => (
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
                  disabled={row.period === 'MONTHLY' ? false : true}
                  onClick={() => onUpgradeBtnClick(index)}
                >{dictionary[language]?.ChangeToYearly}
                </Button>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button onClick={() => onBtnClick(index)}>{dictionary[language]?.CancelPlan}</Button>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <LSDialog
        isOpen={isOpen}
        open={open}
        title={dictionary[language]?.CancelChildrenPlan}
        contentText={dictionary[language]?.YouAreCancellingOneChildSoloArea}
        dialogContent={
          <TeacherCancelPlanForm
            plan={plans[tag]}
            open={open}
            refresh={toggleChanged}
          />
        }
      />
      <LSDialog
        isOpen={isUpdateOpen}
        open={openUpdate}
        title={dictionary[language]?.Upgrade}
        dialogContent={
          <TeacherPlanUpgrade
            plan={plans[tag]}
            onConfirm={openUpdate}
            onCancel={onCancelUpgrade}
            refresh={toggleChanged}
          />
        }
      />
    </>
  );
}
const colors = [
  'linear-gradient(0deg, rgba(34, 186, 175, 0.2), rgba(34, 186, 175, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(23, 113, 185, 0.2), rgba(23, 113, 185, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(244, 194, 34, 0.2), rgba(244, 194, 34, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(38, 184, 36, 0.2), rgba(38, 184, 36, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);'
]

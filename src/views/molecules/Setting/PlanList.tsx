import styled                                from 'styled-components';
import { FC, useState, useEffect }           from 'react';
import Table                                 from '@mui/material/Table';
import TableBody                             from '@mui/material/TableBody';
import TableCell                             from '@mui/material/TableCell';
import TableContainer                        from '@mui/material/TableContainer';
import TableHead                             from '@mui/material/TableHead';
import TableRow                              from '@mui/material/TableRow';
import Paper                                 from '@mui/material/Paper';
import { Grid }                              from '@mui/material';
import { useSelector }                       from 'react-redux'
import { LSLabel, LSText, LSBlueTextButton } from './utils/Style';
import { LSDialog }                          from './LSDialog';
import { CancelPlanForm }                    from './CancelPlanForm';
import { useDialog }                         from './utils/useDialog';
import { Upgrade }                           from './Upgrade';
import { doFetchAvailableBroughtPlans }      from 'app/actions/guardianActions'

interface IPlanList {
  refresh: boolean
}

export const PlanList: FC<IPlanList> = ({refresh}) => {

  // for change to yearly dialog
  const [isUpdateOpen, update] = useState(false)
  const openUpdate = () => update(!isUpdateOpen);
  const user = useSelector((state: any) => state.user);
  const guardian = useSelector((state: any) => state.guardian);
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

  const fetchAvailableBrougthPlans = async (mounted: boolean) => {
    setPlans([])
    const res = await doFetchAvailableBroughtPlans(guardian.id, user.token)
    if (res !== null) {
      if (mounted) {
        setPlans(
          res
        )
      } else return
    }
  }

  useEffect(() => {
    let mounted = true
    fetchAvailableBrougthPlans(mounted)
    return () => {
      mounted = false
    }
  }, [refresh, changed]);

  return (
    <div>
      <TableContainer component={Paper} >
        <Table aria-label="simple table" size="small" >
          <StyledTableHead >
            <TableRow>
              <TableCell align="center">
                <LSLabel fontSize={17} textAlign='center'>{'Plan'}</LSLabel>
                <LSText textAlign='center' fontSize={13}>{'(Get 3 months FREE for annual plan)'}</LSText>
              </TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {plans.length > 0 ? plans.map((row, index) => (
              // row.status &&
              <TableRow
                hover
                key={row.id}
              >
                <StyledTableCell component="th" scope="row" bgcolor={colors[index % 4]}>
                  <Grid container>
                    <Grid item md={3} xs={12}>
                      <LSLabel >{row.plan.name}</LSLabel>
                    </Grid>
                    <StyledGrid container item md={9} xs={12} >
                      <Grid item md={4} xs={4}>
                        <LSLabel>{row.period}</LSLabel>
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <LSLabel>{row.expiredAt?.slice(0, 10)}</LSLabel>
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <LSLabel>{row.period === 'MONTHLY' ? row.plan.priceMonth:row.plan.priceYear} {row.plan.currency}</LSLabel>
                      </Grid>
                    </StyledGrid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <LSBlueTextButton
                        disabled={row.period === 'MONTHLY' ? false : true}
                        onClick={() => onUpgradeBtnClick(index)}
                      >{'Change to Yearly'}
                      </LSBlueTextButton>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <LSBlueTextButton onClick={() => onBtnClick(index)}>Cancel Plan</LSBlueTextButton>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </TableRow>
            )): null}
          </TableBody>
        </Table>
      </TableContainer>
      <LSDialog
        isOpen={isOpen}
        open={open}
        title='Cancel Childrens plan'
        contentText='You are cancelling 1 child solo area'
        dialogContent={
          <CancelPlanForm
            plan={plans[tag]}
            open={open}
            refresh={toggleChanged}
          />
        }
      />
      <LSDialog
        isOpen={isUpdateOpen}
        open={openUpdate}
        title={'Upgrade'}
        dialogContent={
          <Upgrade
            plan={plans[tag]}
            onConfirm={openUpdate}
            onCancel={onCancelUpgrade}
            refresh={toggleChanged}
          />
        }
      />
    </div>
  );
}
const colors = [
  'linear-gradient(0deg, rgba(34, 186, 175, 0.2), rgba(34, 186, 175, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(23, 113, 185, 0.2), rgba(23, 113, 185, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(244, 194, 34, 0.2), rgba(244, 194, 34, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);',
  'linear-gradient(0deg, rgba(38, 184, 36, 0.2), rgba(38, 184, 36, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);'
]

const StyledTableCell = styled(TableCell) <{
  bgcolor?: string
}>`
background: white;
@media screen and (max-width: 540px) {
  border-bottom: solid white 20px;
  border-top: solid white 20px;
  background: ${props => props.bgcolor}
}
`

const StyledTableHead = styled(TableHead)`
@media screen and (max-width: 540px) {
  border-bottom: solid white 20px;
  border-top: solid white 20px;
  background: #26B824;
  & .MuiTableCell-root{
    color: white;
  }
}
`

const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

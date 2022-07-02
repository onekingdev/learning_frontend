import styled from 'styled-components';
import { FC, useState } from 'react';
import { Button, Grid, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { LSLabel, LSText } from './utils/Style';
import { LSDialog } from './LSDialog';
import { CancelPlanForm } from './CancelPlanForm';
import { useDialog } from './utils/useDialog';
import { Upgrade } from './Upgrade';
import { doFetchGuardianPlans } from 'app/actions/guardianActions'
import { dictionary } from './dictionary'
import { useQuery } from 'react-query'
import { getMessage } from 'views/utils';

export const PlanList: FC = () => {

  const [isUpdateOpen, update] = useState(false)
  const openUpdate = () => update(!isUpdateOpen);
  const { token, language } = useSelector((state: any) => state.user);
  const lang = language || 'en-us'
  const guardianId = useSelector((state: any) => state.guardian.id);
  const { data, error, isLoading } = useQuery(['fetch-orders-list', guardianId, token], () => doFetchGuardianPlans(guardianId, token))
  const { isOpen, open } = useDialog()
  const [tag, seTag] = useState(0)

  const onCancelUpgrade = () => openUpdate()

  if (isLoading) return <Typography variant='caption'> Loading...</Typography>
  if (error) return <Typography variant='caption' color={'red'}> {getMessage(error)}</Typography>
  if (data.message) return <Typography variant='caption'> {data.message}</Typography>
  return (
    <div>
      {
        <TableContainer component={Paper} >
          <Table aria-label='simple table' size='small' >
            <StyledTableHead >
              <TableRow>
                <TableCell align='center'>
                  <LSLabel fontSize={17} textAlign='center'>{dictionary[lang]?.plan}</LSLabel>
                  <LSText textAlign='center' fontSize={13}>{dictionary[lang]?.getThreeMonthsFREEForAnnualPlan}</LSText>
                </TableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {data.filter((element: any) => element.orderdetailSet[0]?.isPaid) // Only display paid orders
                .map((row: any, index: number) => (
                  <TableRow
                    hover
                    key={row.id}
                  >
                    <StyledTableCell component='th' scope='row' bgcolor={colors[index % 4]}>
                      <Grid container>
                        <Grid item md={3} xs={12}>
                          <LSLabel >{row.orderdetailSet[0]?.plan?.name}({row.orderdetailSet[0]?.quantity})</LSLabel>
                        </Grid>
                        <StyledGrid container item md={9} xs={12} >
                          <Grid item md={4} xs={4}>
                            <LSLabel>{row.orderdetailSet[0]?.period}</LSLabel>
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <LSLabel>{row.orderdetailSet[0]?.expiredAt?.slice(0, 10)}</LSLabel>
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <LSLabel>{row.orderdetailSet[0]?.total} {row.orderdetailSet[0]?.currency} </LSLabel>
                          </Grid>
                        </StyledGrid>
                      </Grid>
                      <Grid container>
                        <Grid item md={6} xs={12}>
                          <Button
                            disabled={(row.orderdetailSet[0]?.period === 'YEARLY' || row.orderdetailSet[0]?.isCancel) ? true : false}
                            onClick={() => {
                              seTag(index)
                              openUpdate()
                            }}
                          >{dictionary[lang]?.ChangeToYearly}
                          </Button>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <Button onClick={() => {
                            seTag(index)
                            open()
                          }}
                            disabled={row.orderdetailSet[0]?.isCancel}
                          >{row.orderdetailSet[0]?.isCancel ? dictionary[lang]?.canceled : dictionary[lang]?.CancelPlan}</Button>
                        </Grid>
                      </Grid>
                    </StyledTableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <LSDialog // Cancel Children Plan
            isOpen={isOpen}
            open={open}
            title={dictionary[lang]?.CancelChildrenPlan}
            contentText={dictionary[lang]?.YouAreCancellingOneChildSoloArea}
            dialogContent={
              <CancelPlanForm
                orderId={data[tag].orderdetailSet[0]?.id}
                open={open}
              />
            }
          />
          <LSDialog // Upgrade to yearly dialog
            isOpen={isUpdateOpen}
            open={openUpdate}
            title={dictionary[lang]?.Upgrade}
            dialogContent={
              <Upgrade
                order={data[tag]}
                onConfirm={openUpdate}
                onCancel={onCancelUpgrade}
              />
            }
          />
        </TableContainer>
      }
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

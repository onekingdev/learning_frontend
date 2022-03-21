import * as React from 'react';
import styled from 'styled-components';
import { FC, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { LSLabel, LSText, LSBlueTextButton } from './utils/Style';
import { LSDialog } from './LSDialog';
import { CancelForm } from './CancelForm';
import { useDialog } from './utils/useDialog';
import { Upgrade } from './Upgrade';

const data = [
  {
    id: 0,
    package: 'Math/Financial Literacy',
    period: 'Monthly',
    expiration: 'Mar-10-2022',
    price: '$5.99',
  },
  {
    id: 1,
    package: 'Math',
    period: 'Yearly',
    expiration: 'Mar-11-2023',
    price: '$19.89',
  },
  {
    id: 2,
    package: 'ELA + Sight Words',
    period: 'Monthly',
    expiration: 'Mar-10-2022',
    price: '$5.99',
  },
  {
    id: 3,
    package: 'Science',
    period: 'Monthly',
    expiration: 'Mar-10-2022',
    price: '$5.99',
  },
]

export const PlanList: FC = () => {

  // for change to yearly dialog
  const [isUpdateOpen, update] = useState(false)
  const openUpdate = () => update(!isUpdateOpen);

  const { isOpen, open } = useDialog()
  const [tag, seTag] = useState(0)

  const onBtnClick = (id: number) => {
    seTag(id)
    open()
  }
  const onUpgradeBtnClick = (id: number) => {
    seTag(id)
    openUpdate()
  }

  const onCancel = () => open()
  const onCancelUpgrade = () => openUpdate()

  return (
    <div>
      <TableContainer component={Paper} >
        <Table aria-label="simple table" size="small" >
          <StyledTableHead >
            <TableRow>
              <TableCell align="center">
                <LSLabel fontSize={17} textAlign='center'>{'Plan'}</LSLabel>
                <LSText textAlign='center' fontSize={13}>{'(save 3 months if you change to annual plan)'}</LSText>
              </TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                hover
                key={row.id}
              >
                <StyledTableCell component="th" scope="row" bgcolor={colors[index % 4]}>
                  <Grid container>
                    <Grid item md={5} xs={12}>
                      <LSLabel >{row.package}</LSLabel>
                    </Grid>
                    <StyledGrid container item md={7} xs={12} >
                      <Grid item md={4} xs={4}>
                        <LSLabel>{row.period}</LSLabel>
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <LSText>{row.expiration}</LSText>
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <LSText>{row.price}</LSText>
                      </Grid>
                    </StyledGrid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <LSBlueTextButton
                        disabled={row.period === 'Monthly' ? false : true}
                        onClick={() => onUpgradeBtnClick(row.id)}
                      >{'Change to Yearly'}
                      </LSBlueTextButton>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <LSBlueTextButton onClick={() => onBtnClick(row.id)}>Cancel Plan</LSBlueTextButton>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <LSDialog
        isOpen={isOpen}
        open={open}
        title='Cancel Childrens plan'
        contentText='You are cancelling 1 child solo area'
        dialogContent={
          <CancelForm
            tag={tag}
            onConfirm={open}
            onCancel={onCancel}
          />
        }
      />
      <LSDialog
        isOpen={isUpdateOpen}
        open={openUpdate}
        title={'Upgrade'}
        dialogContent={
          <Upgrade
            tag={tag}
            onConfirm={openUpdate}
            onCancel={onCancelUpgrade}
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

const StyledTableCell = styled(TableCell)<{
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

import * as React from 'react';
import { FC, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
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

export const PlanTable: FC = () => {

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
          <TableHead sx={{ borderTop: 'solid 3px ghostwhite'}}>
            <TableRow>
              <TableCell align='center'>
                <LSLabel fontSize={17} textAlign='center'>{'Area of Knowledge'}</LSLabel>
              </TableCell>
              <TableCell align="center">
                <LSLabel fontSize={17} textAlign='center'>{'Plan'}</LSLabel>
                <LSText textAlign='center' fontSize={13}>{'(save 3 months if you change to annual plan)'}</LSText>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  <Box >
                    <LSLabel >{row.package}</LSLabel>
                    <LSBlueTextButton onClick={() => onBtnClick(row.id)}>Cancel Plan</LSBlueTextButton>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <LSLabel>{row.period}</LSLabel>
                    <LSText>{row.expiration}</LSText>
                    <LSText>{row.price}</LSText>
                  </Box>
                  <LSBlueTextButton
                    disabled={row.period === 'Monthly' ? false : true}
                    onClick={() => onUpgradeBtnClick(row.id)}
                  >{'Change to Yearly'}
                  </LSBlueTextButton>
                </TableCell>
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

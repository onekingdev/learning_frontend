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
import { CLabel, CText, LSBlueTextButton } from './utils/Style';
import { LSDialog } from './LSDialog';
import { CancelForm } from './CancelForm';
import { useDialog } from './utils/useDialog';

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

export const PlanTable:FC = () => {
  const {isOpen, open} = useDialog()
  const [tag, seTag] = useState(0)

  const onBtnClick = (id: number) => {
    seTag(id)
    open()
  }
  const onConfirm = (reason: string) => {
    open()
  }
  const onCancel = () => open()

  return (
    <div>
    <TableContainer component={Paper} >
      <Table aria-label="simple table" size="small" >
        <TableHead sx={{borderTop:'solid 3px ghostwhite'}}>
          <TableRow>
            <TableCell align='center'>
              <h2 style={{fontFamily: 'Montserrat'}}>Area of Knowledge</h2>
            </TableCell>
            <TableCell align="center">
              <h2 style={{fontFamily: 'Montserrat'}}>Plan</h2>
              <p style={{fontFamily: 'Montserrat'}}>{'safe 50% if you change to Annual'}</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              hover
              key={row.id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row" >
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <CLabel>{row.package}</CLabel>
                  <LSBlueTextButton onClick = {() => onBtnClick(row.id)}>Cancel Plan</LSBlueTextButton>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-evenly'}}>
                  <CLabel>{row.period}</CLabel>
                  <CText>{row.expiration}</CText>
                  <CText>{row.price}</CText>
                </Box>
                  <LSBlueTextButton disabled = {row.period === 'Monthly'?false:true}>Change to Yearly</LSBlueTextButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <LSDialog
    isOpen={isOpen}
    open={open}
    title = 'Cancel Childrens plan'
    contentText = 'You are cancelling 1 child solo area'
    dialogContent = {
      <CancelForm
        tag={tag}
        onConfirm={open}
        onCancel={onCancel}
      />
    }
  />
  </div>
  );
}

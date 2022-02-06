import { FC } from 'react';
import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { BasicColor } from '../../Color';
import { LSLabel } from '../Setting/utils/Style';

interface Column {
  id: 'title' | 'value' | 'interest';
  label: string;
  minWidth?: number;
  align?: string;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'title', label: 'Savings Title', minWidth: 100 },
  { id: 'value', label: 'Value', minWidth: 60, format: (value: number) => value.toLocaleString('en-US'), },
  {
    id: 'interest',
    label: 'Interest% \n (Per Week)',
    align: 'right',
    minWidth: 60,
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

const txData = [
  {
    title: 'Bronze',
    value: 10000,
    interest: 10,
    id: 1
  },
  {
    title: 'Silver',
    value: 20000,
    interest: 20,
    id: 2
  },
  {
    title: 'Gold',
    value: 50000,
    interest: 30,
    id: 3
  },
  {
    title: 'Plantium',
    value: 100000,
    interest: 40,
    id: 4
  }
]

export const Interest: FC = () => {

  return (

    <Paper sx={{ width: '500px', overflow: 'hidden', backgroundColor: BasicColor.blue, color: 'white', padding: 4, borderRadius: 5, margin: 5 }}>
      <LSLabel fontSize={20}>Interests {' & '} levels</LSLabel>
      <TableContainer sx={{ maxHeight: 430 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow sx={{
              '& .MuiTableRow-root': {
                backgroundColor: BasicColor.blue,
                color: 'white'
              }
            }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align='center'
                  style={{ minWidth: column.minWidth, backgroundColor: BasicColor.blue, color: 'white', fontSize: 18, fontFamily: 'Montserrat' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {txData
              .map((row, idx) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align='center' sx={{ color: 'white', fontSize: 15, fontFamily: 'Montserrat' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const StyledTableCell = styled(TableCell) <{
}>`

`;

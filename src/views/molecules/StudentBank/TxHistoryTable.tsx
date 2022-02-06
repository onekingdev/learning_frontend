import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PaidIcon from '@mui/icons-material/Paid';
import { BasicColor } from '../../Color';
import { LSLabel } from '../Setting/utils/Style';

interface Column {
  id: 'date' | 'type' | 'amount' | 'interest';
  label: string;
  minWidth?: number;
  align?: string;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'date', label: 'Date', minWidth: 100},
  { id: 'type', label: 'Type', minWidth: 60 },
  {
    id: 'amount',
    label: 'Amount($)',
    align: 'right',
    minWidth: 60,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'interest',
    label: 'Interest(%)',
    align: 'right',
    minWidth: 60,
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

const txData = [
  {
    date: '2022-02-04',
    type: 'Withdraw',
    amount: '+5000',
    interest: 10,
    id: 1
  },
  {
    date: '2022-02-04',
    type: 'Withdraw',
    amount: '-5000',
    interest: 10,
    id: 2
  },
  {
    date: '2022-02-04',
    type: 'Withdraw',
    amount: '-5000',
    interest: 10,
    id: 3
  },
  {
    date: '2022-02-04',
    type: 'Withdraw',
    amount: '-5000',
    interest: 10,
    id: 4
  },
  {
    date: '2022-02-04',
    type: 'Withdraw',
    amount: '-5000',
    interest: 10,
    id: 5
  },
  {
    date: '2022-02-04',
    type: 'Withdraw',
    amount: '-5000',
    interest: 10,
    id: 6
  },
]

export const TxHistoryTable: FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (

      <Paper sx={{ width: '500px', overflow: 'hidden', backgroundColor: BasicColor.blue, color: 'white', padding: 4, borderRadius: 5}}>

        <LSLabel fontSize={20}><PaidIcon />Latest Transactions</LSLabel>
        <TableContainer sx={{ maxHeight: 440, minHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow sx={{'& .MuiTableRow-root' : {
                backgroundColor: BasicColor.blue,
                color: 'white'
              }}}>
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
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align='center' sx={{color:'white', fontSize: 15, fontFamily: 'Montserrat'}}>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={txData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            '&.MuiTablePagination-root': {
              color: 'white'
            }
          }}
        />
      </Paper>
  );
}

const StyledTableCell = styled(TableCell) <{
}>`

`;

import { FC } from 'react';
import { ScreenSize } from '../../screenSize';
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
  { id: 'value', label: 'Value', minWidth: 70, format: (value: number) => value.toLocaleString('en-US'), },
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

    <StyledTxContainer >
      <LSLabel fontSize={20}>Interests {' & '} levels</LSLabel>
      <StyledTableContainer >
        <Table >
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
                  style={{ minWidth: column.minWidth,maxWidth: 90, backgroundColor: BasicColor.blue, color: 'white', fontFamily: 'Montserrat' }}
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
                        <TableCell key={column.id} align='center' sx={{ color: 'white', fontFamily: 'Montserrat' }}>
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
      </StyledTableContainer>
    </StyledTxContainer>
  );
}

const StyledTxContainer = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: ${BasicColor.blue};
  color: white;
  padding: 30px 20px 30px 20px;
  paddingBottom: 2px;
  margin-bottom: 60px;
  border-radius: 15px;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 85vw;
    padding: 15px;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) (max-width: ${ScreenSize.desktop}) {
    width: 45vw;
    margin-bottom: 1vh;
    padding: 15px;
  }
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 440px;
  min-height: 330px;
`;

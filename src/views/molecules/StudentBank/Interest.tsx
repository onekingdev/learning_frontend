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
  id: 'name' | 'requireCoin' | 'amount';
  label: string;
  minWidth?: number;
  align?: string;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Savings Title', minWidth: 100 },
  { id: 'requireCoin', label: 'Value', minWidth: 70, format: (value: number) => value.toLocaleString('en-US'), },
  {
    id: 'amount',
    label: 'Interest% \n (Per Week)',
    align: 'right',
    minWidth: 60,
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface InterestProp {
  interests: []
}
export const Interest: FC<InterestProp> = ({interests}) => {
  console.log(interests)
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
            {interests
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

import { FC } from 'react';
import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { BasicColor } from 'views/Color';
import useSWR from 'swr'
import { doFetchWalletTransactions } from 'app/actions';
import { useSelector } from 'react-redux';

interface Column {
  id: string
  label: string
  minWidth?: number
  align?: string
  format?: (value: number) => string
}



const columns: readonly Column[] = [
  { id: 'date', label: 'Date' },
  { id: 'description', label: 'Description' },
  { id: 'side', label: 'Type' },
  { id: 'comment', label: 'Comment' },
  {
    id: 'amount',
    label: 'Amount',
    align: 'right',
  },
];

// const data = [
//   {
//     "id": "1361",
//     "date": "2022-05-09",
//     "comment": "Answer the questions.",
//     "amount": "20.00",
//     "description": "BlockTransaction",
//     "side": "R"
//   },
// ];

export const WalletTxHistory: FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const student = useSelector((state: any) => state.student);
  const user = useSelector((state: any) => state.user);
  const { data, error } = useSWR([student.id, user.token], doFetchWalletTransactions)
  console.log(data, error)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (error) return <Typography variant='caption'>Failed to fetch</Typography>

  return (

    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440, minHeight: 340 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align='center'
                  style={{ minWidth: column.minWidth, backgroundColor: BasicColor.green, color: 'white', fontSize: 18 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data && (
                !data.success ? <Typography>{data.msg}</Typography> :
                  data.data && data.data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                          {columns.map((column) => {
                            const value: any = row[column.id as keyof Object];
                            return (
                              <TableCell key={column.id} align='center' >
                                {column.id === 'side' ?
                                  value === 'R' ? 'Deposit' : 'Widthraw'
                                  : value
                                }
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
              )
            }

          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          '&.MuiTablePagination-root': {
            paddingBottom: 0
          }
        }}
      /> */}
    </Paper>
  );
}

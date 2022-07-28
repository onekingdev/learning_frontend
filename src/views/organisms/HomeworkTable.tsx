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
} from '@mui/material';
import { BasicColor } from 'views/Color';

interface Column {
  id: string
  label: string
  width?: number
  align?: string
  format?: (value: number) => string
}



const columns: readonly Column[] = [
  { id: 'name', label: 'Name of Assignment' },
  { id: 'topic', label: 'Area of knowledge' },
  { id: 'startAt', label: 'Start Date' },
  { id: 'endAt', label: 'End Date' },
  // {
  //   id: 'numberOfQuestions',
  //   label: 'Number of Questions',
  //   align: 'right',
  //   width: 100
  // },
  { id: 'status', label: 'Status' },
  { id: 'result', label: 'Results' },
];



interface HomeworkTableProps {
  homeworks: Array<any>
  select: (id: string) => void
  selectedTaskId: string
}

export const HomeworkTable: FC<HomeworkTableProps> = ({ homeworks, select, selectedTaskId }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: any, newPage: number) => {
    event.preventDefault()
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderTableCell = (id: string, value: any) => {
    switch (id) {
      case 'topic':
        return value.name
      case 'result':
        return value.hits + '/' + value.total + '-' + (value.total === 0 ? 0 : +(value.hits / value.total * 100)) + '%';
      case 'startAt':
      case 'endAt':
        return new Date(value).toDateString()
      default:
        return value
    }
  }

  return (
    <Paper sx={{ overflow: 'hidden' }}>
      {
        homeworks &&
        <TableContainer>
          <Table stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align='center'
                    style={{
                      backgroundColor: BasicColor.green,
                      color: 'white',
                      fontSize: 18
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                homeworks
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}
                        onClick={() => select(row.id)}
                        selected={selectedTaskId === row.id}
                      >
                        {columns.map((column) => {
                          const value: any = row[column.id as keyof Object];
                          return (
                            <TableCell key={column.id} align='center' >
                              {
                                renderTableCell(column.id, value)
                              }
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
              }

            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={homeworks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              '&.MuiTablePagination-root': {
                paddingBottom: 0
              }
            }}
          />
        </TableContainer>
      }
    </Paper>
  );
}

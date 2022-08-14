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
  { id: 'aok', label: 'Area of Knowledge' },
  { id: 'topic', label: 'Topic' },
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

  const renderTableCell = (id: string, homework: any) => {
    switch (id) {
      case 'topic':
        return homework.topic?.name || ''
      case 'status':
        return homework.status || ''
      case 'aok':
        return homework.topic?.areaOfKnowledge?.name || ''
      case 'result':

        return homework.result?.hits + '/' +
          homework.result.total + '-' +
          (homework.result.total === 0 ? 0 :
            +(homework.result.hits / homework.result.total * 100)).toFixed(1) + '%';
      case 'startAt':
        return new Date(homework.startAt).toDateString()
      case 'endAt':
        return new Date(homework.endAt).toDateString()
      default:
        return ''
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
                  .map((homework: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={homework.id}
                        onClick={() => select(homework.id)}
                        selected={selectedTaskId === homework.id}
                        sx={{cursor: 'pointer'}}
                      >
                        {columns.map((column) => {
                          return (
                            <TableCell key={column.id} align='center' >
                              {
                                renderTableCell(column.id, homework)
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

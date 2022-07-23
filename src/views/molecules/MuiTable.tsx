import * as React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: 'right';
  editComponent?: 'Edit' | 'Select';
  selectDatas?: any;
  required?: boolean;
  format?: (value: any) => string;
}

interface MuiTableProps {
  columns: Column[];
  tableData: any;
}

const newDataState = -1;
const notEditingState = -2;

interface MuiTableFunc {
  getData(): any;
  handleAddData(): void;
}

const StudentsTable = forwardRef<MuiTableFunc, any>((props: MuiTableProps, ref) => {
  const { tableData, columns } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [editingIndex, setEditingIndex] = React.useState(notEditingState);
  const [data, setData] = React.useState<any>(tableData);
  const [editingData, setEditingData] = React.useState<any>({});

  React.useEffect(() => {
    setData(tableData)
  }, [tableData])

  useImperativeHandle(ref, () => ({
    getData() {
      const result = getData();
      return result;
    },
    handleAddData() {
      handleAddData()
    }
  }))
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setEditingIndex(notEditingState);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSave = (index: number) => {
    for (const column of columns) {
      if (column?.required === true && !(column.id in editingData && editingData[column.id])) return;
    }
    if (index === newDataState) data.push(editingData);
    else data[index] = editingData;
    setData(data);
    setEditingIndex(notEditingState);
  }

  const handleDelete = (index: number) => {
    data.splice(index, 1);
    setData([...data])
  }

  const handleChange = (index: number, key: string, value: any) => {
    // if (key === 'index') editingData[key] = data.length + 1 || 1
    editingData[key] = value;

    setEditingData({ ...editingData })
  }

  const handleEdit = (index: number) => {

    setEditingIndex(index);
    setEditingData(data[index]);
  }

  const handleAddData = () => {
    if (data.length > 30) return;
    setEditingIndex(newDataState);
    setEditingData({});
  }

  const getData = () => data;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: 1 }} elevation={5}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    ...(column.maxWidth && { maxWidth: column.maxWidth }),
                    ...(column.minWidth && { minWidth: column.minWidth }),
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                align={'right'}
                style={{ width: 145 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {editingIndex === newDataState &&
              <TableRow hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  const value = editingData[column.id];

                  if (column?.editComponent === 'Select')
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                          <Select
                            value={value || ''}
                            onChange={(e) => handleChange(newDataState, column.id, e.target.value)}
                          >
                            {column?.selectDatas && column.selectDatas.map((selectData: any, index: number) => (
                              <MenuItem value={selectData.id} key={index}>{selectData?.name}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>

                    );
                  else
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <TextField id="standard-basic"
                          variant="standard"
                          value={column.format ? column.format(value) : value}
                          onChange={(e) => handleChange(newDataState, column.id, e.target.value)}
                        />
                      </TableCell>
                    );
                })}
                <TableCell align={'right'} style={{ width: 145 }} >
                  <Button variant="text" onClick={() => handleSave(newDataState)}>Save</Button>
                  <Button variant="text" color="error" disabled={true}>Delete</Button>
                </TableCell>
              </TableRow>
            }
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: number) => {
                if (index === editingIndex - (page * rowsPerPage))
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = editingData[column.id] || '';
                        // if (column.id === 'grade') {
                        //   column.selectDatas = editingData?.audience?.gradeSet;
                        // }
                        if (column?.editComponent === 'Select')
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                                <Select
                                  value={value || ''}
                                  onChange={(e) => handleChange(page * rowsPerPage + index, column.id, e.target.value)}
                                >
                                  {column?.selectDatas && column.selectDatas.map((selectData: any, index: number) => (
                                    <MenuItem value={selectData.id} key={index}>{selectData?.name}</MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </TableCell>

                          );
                        else
                          return (
                            <TableCell key={column.id} align={column.align} style={{ width: 145 }} >
                              <TextField id="standard-basic"
                                variant="standard"
                                value={column.format ? column.format(value) : value}
                                onChange={(e) => handleChange(page * rowsPerPage + index, column.id, e.target.value)}
                              />
                            </TableCell>
                          );
                      })}
                      <TableCell align={'right'} style={{ width: 145 }} >
                        <Button variant="text" onClick={() => handleSave(page * rowsPerPage + index)}>Save</Button>
                        <Button variant="text" color="error" disabled={editingIndex > notEditingState}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  )
                else
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = (column.id in row) ? row[column.id] : '';
                        return (
                          column.id === 'grade' ?
                            <TableCell key={column.id} align={column.align}>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                                <Select
                                  value={value || ''}
                                  disabled
                                // onChange={(e) => handleChange(page * rowsPerPage + index, column.id, e.target.value)}
                                >
                                  {column?.selectDatas && column.selectDatas.map((selectData: any, index: number) => (
                                    <MenuItem value={selectData.id} key={index}>{selectData?.name}</MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </TableCell> :
                            <TableCell key={column.id} align={column.align}>
                              {column.format
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                      })}
                      <TableCell align={'right'} style={{ width: 145 }} >
                        <Button variant="text" onClick={() => handleEdit(page * rowsPerPage + index)} disabled={editingIndex > notEditingState}>Edit</Button>
                        <Button variant="text" color="error" disabled={editingIndex > notEditingState} onClick={() => handleDelete(page * rowsPerPage + index)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >
  );
})

export default StudentsTable

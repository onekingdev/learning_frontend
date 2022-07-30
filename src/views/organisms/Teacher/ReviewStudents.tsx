import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BasicColor } from 'views/Color';
import LoadingButton from '@mui/lab/LoadingButton';
import coin from 'views/assets/coin.svg'

const Row: FC<{ row: any }> = ({ row }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, border: `solid 2px ${BasicColor.aqua}` }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName}
        </TableCell>
        <TableCell align="right">{row.points}</TableCell>
        <TableCell align="right">{row.coinWallet?.blockTransactionCoins}</TableCell>
        <TableCell align="right">{row.level?.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: `solid 2px ${BasicColor.aqua}` }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{ maxHeight: 800, overflow: 'auto' }}>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Homeworks
              </Typography>
              <Table size="small" aria-label="purchases" >
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                    <TableCell>Area of Knowledge</TableCell>
                    <TableCell align="right">Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {row.studenthomeworkSet
                    .map((homework: any) => (
                      <TableRow key={homework.id}>
                        <TableCell component="th" scope="row">
                          {homework.topic?.name}
                        </TableCell>
                        <TableCell>{homework.topic?.areaOfKnowledge?.name}</TableCell>
                        <TableCell align="right">{new Date(homework.startAt).toDateString()}</TableCell>
                        <TableCell align="right">{new Date(homework.endAt).toDateString()}</TableCell>
                        <TableCell align="right">{homework.status}</TableCell>
                        <TableCell align="right">
                          <LoadingButton variant='contained' color='yellow'>Extend</LoadingButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>

  );
}

interface ReviewStudentsTasksProps {
  students: Array<any>
}
export const ReviewStudentsTasks: FC<ReviewStudentsTasksProps> = ({
  students
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead
          sx={{
            backgroundColor: BasicColor.green
          }}
        >
          <TableRow >
            <TableCell />
            <TableCell ><Typography>Name</Typography></TableCell>
            <TableCell align="right"><Typography>Points</Typography></TableCell>
            <TableCell align="right" >
              <Box display='flex' alignItems='center' justifyContent={'end'}>
                <img src={coin} style={{ height: 25 }} />
                <Typography>Coins&nbsp;Earned&nbsp;</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Typography>Level</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {students.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React, {useState} from 'react';
import DailyTime from './dailytime';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import {DailyTimetableType} from '../../data/Station';
import './dailyTimeTable.sass';

interface DailyTimetableProp {
  dailyTimetable: Array<DailyTimetableType>
}
/**
 * 車次資訊
 * @return {JSX.Element}
**/
function DailyTimetable({dailyTimetable}: DailyTimetableProp): JSX.Element {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{overflow: 'hidden'}}
      className="daily-time-table"
    >
      <TableContainer
        component={Paper}
        sx={{maxHeight: 440}}
        // style={{backgroundColor: '#41414b'}}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow className="dailytime">
              <TableCell>車種車次 (始發站 → 終點站)</TableCell>
              <TableCell>到站時間</TableCell>
              <TableCell>抵達時間</TableCell>
              <TableCell>始發站</TableCell>
              <TableCell>終點站</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dailyTimetable.map((dailyTime) => {
              return (
                <DailyTime
                  key={dailyTime.DailyTrainInfo.TrainNo}
                  dailyTime={dailyTime}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={rows}
        rowsPerPage={rows}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRows}
      >

      </TablePagination>
    </Paper>

  );
}

export default DailyTimetable;

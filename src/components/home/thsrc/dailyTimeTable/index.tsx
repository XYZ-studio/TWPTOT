import React from 'react';
import DailyTime from './dailyTime';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
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
  return (
    <Paper
      sx={{overflow: 'hidden'}}
      className="daily-time-table"
    >
      <TableContainer
        component={Paper}
        sx={{maxHeight: 'calc(100vh - 390px)'}}
        // style={{backgroundColor: '#41414b'}}
      >
        <Table aria-label="simple table" stickyHeader
          sx={{minWidth: 640}}
        >
          <TableHead>
            <TableRow className="dailytime">
              <TableCell>車次 (始發站 → 終點站)</TableCell>
              <TableCell>到站時間</TableCell>
              <TableCell>抵達時間</TableCell>
              <TableCell>備註</TableCell>
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
    </Paper>

  );
}

export default DailyTimetable;

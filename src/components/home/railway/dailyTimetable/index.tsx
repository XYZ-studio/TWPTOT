import React from 'react';
import DailyTime from './dailytime';
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
    <TableContainer
      component={Paper}
      className="daily-time-table"
      style={{backgroundColor: '#41414b'}}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="dailytime">
            <TableCell>車種車次 (始發站 → 終點站)</TableCell>
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
  );
}

export default DailyTimetable;

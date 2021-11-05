import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {DailyTimetableType} from '../../../data/Station';
import './dailytime.sass';
interface DailyTimeProp {
  dailyTime: DailyTimetableType;
}

/**
 * @return {JSX.Element}
**/
function DailyTime({dailyTime}: DailyTimeProp): JSX.Element {
  const info = dailyTime.DailyTrainInfo;
  return (
    <TableRow className="dailytime">
      <TableCell>
        {`${info.TrainTypeName.Zh_tw}${info.TrainNo}` +
          `(${info.StartingStationName.Zh_tw}→${info.EndingStationName.Zh_tw})`}
      </TableCell>
      <TableCell>
        {dailyTime.OriginStopTime.ArrivalTime}
      </TableCell>
      <TableCell>
        {dailyTime.DestinationStopTime.ArrivalTime}
      </TableCell>
      <TableCell>
        {info.Note.Zh_tw}
      </TableCell>
    </TableRow>
  );
}

export default DailyTime;

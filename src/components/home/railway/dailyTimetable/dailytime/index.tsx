import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {DailyTimetableType} from '../../../data/Station';

interface DailyTimeProp {
  dailyTime: DailyTimetableType;
}

/**
 * @return {JSX.Element}
**/
function DailyTime({dailyTime}: DailyTimeProp): JSX.Element {
  return (
    <TableRow>
      <TableCell>
        {dailyTime.DailyTrainInfo.TrainNo}
      </TableCell>
      <TableCell>
        {dailyTime.OriginStopTime.ArrivalTime}
      </TableCell>
      <TableCell>
        {dailyTime.DestinationStopTime.ArrivalTime}
      </TableCell>
      <TableCell>
        {dailyTime.DailyTrainInfo.StartingStationName.Zh_tw}
      </TableCell>
      <TableCell>
        {dailyTime.DailyTrainInfo.EndingStationName.Zh_tw}
      </TableCell>
    </TableRow>
  );
}

export default DailyTime;

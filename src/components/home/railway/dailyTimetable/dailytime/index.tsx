import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
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
        <Chip
          label={info.TrainTypeName.Zh_tw}
          sx={{
            backgroundColor: (Number(info.TrainTypeCode) === 1) ? '#ff0000' :
              (Number(info.TrainTypeCode) === 2) ? '#aa0000' :
              (Number(info.TrainTypeCode) === 3) ? '#990000' :
              (Number(info.TrainTypeCode) === 4) ? '#550000' :
              (Number(info.TrainTypeCode) === 5) ? '#220000' :
              (Number(info.TrainTypeCode) === 6) ? '#0000ff' :
              (Number(info.TrainTypeCode) === 7) ? '#000000' : '',
            color: '#ffff',
          }}
        />
      </TableCell>
      <TableCell>
        {info.TrainNo +
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

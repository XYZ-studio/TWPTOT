import React from 'react';
import {DailyTimetableType} from '../../../data/Station';

interface DailyTimeProp {
  dailyTime: DailyTimetableType;
}
/**
 * @return {JSX.Element}
**/
function DailyTime({dailyTime}: DailyTimeProp): JSX.Element {
  return (
    <tr>
      <td>
        {dailyTime.DailyTrainInfo.TrainNo}
      </td>
      <td>
        {dailyTime.DailyTrainInfo.StartingStationName.Zh_tw}
      </td>
    </tr>
  );
}

export default DailyTime;

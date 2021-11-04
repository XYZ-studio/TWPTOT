import React from 'react';
import DailyTime from './dailytime';
import {DailyTimetableType} from '../../data/Station';

interface DailyTimetableProp {
  dailyTimetable: Array<DailyTimetableType>
}
/**
 * @return {JSX.Element}
**/
function DailyTimetable({dailyTimetable}: DailyTimetableProp): JSX.Element {
  return (
    <table>
      {dailyTimetable.map((dailyTime) => {
        return (
          <DailyTime
            key={dailyTime.DailyTrainInfo.TrainNo}
            dailyTime={dailyTime}
          />
        );
      })}
    </table>
  );
}

export default DailyTimetable;

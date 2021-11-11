import {Name} from './Name';

export interface StopTime {
  StationName: Name;
  ArrivalTime: string;
}

export interface DailyTrainInfo {
  TrainNo: string;
  StartingStationID: string;
  StartingStationName: Name;
  EndingStationID: string;
  EndingStationName: Name;
  Note: Name;
}

import {Name} from './Name';

interface StationPosition {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}

export interface Station {
  StationUID: string;
  StationID: string;
  StationCode: string;
  StationName: Name;
  StationAddress: string;
  StationPhone: string;
  OperatorID: string;
  StationClass: string;
  UpdateTime: string;
  VersionID: number;
  StationPosition: StationPosition;
  LocationCity: string;
  LocationCityCode: string;
  LocationTown: string;
  LocationTownCode: string;
}

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
  TrainTypeName: Name;
  TrainTypeCode: string[];
  Note: Name;
}

export interface DailyTimetableType {
  DailyTrainInfo: DailyTrainInfo;
  OriginStopTime: StopTime;
  DestinationStopTime: StopTime;
}


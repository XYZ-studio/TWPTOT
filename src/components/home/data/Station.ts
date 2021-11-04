interface StationName {
  // eslint-disable-next-line camelcase
  Zh_tw: string;
  En: string;
}

interface StationPosition {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}

export interface Station {
  StationUID: string;
  StationID: string;
  StationCode: string;
  StationName: StationName;
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
  StationName: StationName;
  ArrivalTime: string;
}

export interface DailyTrainInfo {
  TrainNo: string;
  StartingStationID: string;
  StartingStationName: StationName;
  EndingStationID: string;
  EndingStationName: StationName;
  TrainTypeName: string;
  Note: string;
}

export interface DailyTimetableType {
  DailyTrainInfo: DailyTrainInfo;
  OriginStopTime: StopTime;
  DestinationStopTime: StopTime;
}


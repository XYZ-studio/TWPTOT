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

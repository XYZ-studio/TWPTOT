interface StationName {
  // eslint-disable-next-line camelcase
  Zh_tw: string;
  En: string;
}

export interface ThsrcStation {
  StationUID: string;
  StationID: string;
  StationCode: string;
  StationName: StationName;
}

import {Name} from './Name';

export interface BusInfo {
  DepartureStopNameZh: string;
  DestinationStopNameZh: string;
  RouteID: string;
  RouteMapImageUrl: string;
  RouteName: Name;
}

export interface BusStop {
  StopName: Name;
  StopUID: string;
}

export interface BusStopOfRoute {
  RouteName: Name;
  SubRouteName: Name;
  Stops: Array<BusStop>;
}

export interface BusRouteInfo {
  DepartureStopNameZh: string;
  DepartureStopNameEn: string;
  DestinationStopNameZh: string;
  DestinationStopNameEn: string;
}

export interface BusDisplayStopOfRoute {
  Direction: number;
  RouteUID: string;
  Stops: Array<BusStop>;
}

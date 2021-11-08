import React, {SyntheticEvent, useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import {styled} from '@mui/material/styles';
import {
  BusRouteInfo,
  BusDisplayStopOfRoute,
  BusStop,
  BusEstimatedTimeOfArrival,
} from '../../../data/Bus';
import {ptxAPI} from '../../../api/ptx';

interface RouteProp {
  name: string;
  city: string;
}

const BusRouteTabs = styled(Tabs)(() => ({
  'backgroundColor': '#3f8ad4',
  'minHeight': '40px',
  'height': '38px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#ffffff',
  },
}));

const BusRouteTab = styled(Tab)(() => ({
  'color': 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
}));
/**
 * @return {JSX.Element}
**/
function Route({name, city}: RouteProp): JSX.Element {
  const [busRouteInfo, setBusRouteInfo] =
    useState<Array<BusRouteInfo>>([]);
  const [selectBusRoute, setSelectBusRoute] =
    useState(0);
  const [busDisplayStopOfRoute, setBusDisplayStopOfRoute] =
    useState<BusDisplayStopOfRoute[]>([]);
  const [busEstimatedTimeOfArrival, setBusEstimatedTimeOfArrival] =
    useState<BusEstimatedTimeOfArrival[]>([]);

  const handleChangeSelectBusRoute = (_: SyntheticEvent, newValue: string) => {
    setSelectBusRoute(Number(newValue));
  };

  const getBusEstimatedTimeOfArrival = (
      stopUID: string,
  ): string => {
    const stopEstimatedTimeOfArrivalData =
      busEstimatedTimeOfArrival.find((value) => {
        return value.StopUID === stopUID ? value : null;
      });
    const state = stopEstimatedTimeOfArrivalData?.StopStatus;
    const time = stopEstimatedTimeOfArrivalData?.EstimateTime as number;
    const estimeatedTime = (time / 60 > 1) ? `${Math.floor(time / 60)}分鐘` :
      `${time}秒`;
    return (state === 4) ? '今日未營運' : (
      state === 3
    ) ? '末班車已過' : (
      state === 2
    ) ? '交管不停靠' : (
      state === 1
    ) ? '尚未發車' : estimeatedTime;
  };

  useEffect(() => {
    console.log(name, city);
    (async () => {
      const busRouteResponse = await ptxAPI.get<Array<BusRouteInfo>>(
          `/Bus/Route/City/${city}/${name}?$format=JSON`,
      );
      const displayStopOfRouteResponse =
        await ptxAPI.get<Array<BusDisplayStopOfRoute>>(
            `/Bus/DisplayStopOfRoute/City/${city}/${name}?$format=JSON`,
        );
      const busEstimatedTimeOfArrivalResponse =
        await ptxAPI.get<Array<BusEstimatedTimeOfArrival>>(
            `/Bus/EstimatedTimeOfArrival/City/${city}/${name}?$format=JSON`,
        );

      setBusRouteInfo(busRouteResponse.data);
      setBusDisplayStopOfRoute(displayStopOfRouteResponse.data);
      setBusEstimatedTimeOfArrival(busEstimatedTimeOfArrivalResponse.data);
    })();
  }, []);

  return (
    <div>
      <BusRouteTabs
        value={selectBusRoute}
        onChange={handleChangeSelectBusRoute}
        centered
      >
        {busRouteInfo.length !== 0 ? (
            <BusRouteTab
              label={`往 ${busRouteInfo[0].DepartureStopNameZh}`}
              value={0}
            />
        ) : null}
        {busRouteInfo.length !== 0 ? (
            <BusRouteTab
              label={`往 ${busRouteInfo[0].DestinationStopNameZh}`}
              value={1}
            />
        ) : null}
      </BusRouteTabs>
      {busDisplayStopOfRoute.map((
          displayStopOfRoute: BusDisplayStopOfRoute,
      ) => {
        return displayStopOfRoute.Direction === selectBusRoute ? (
          <List
            key={displayStopOfRoute.RouteUID}
          >
            {displayStopOfRoute.Stops.map((stop: BusStop) => {
              return (
                <ListItem
                  key={stop.StopUID}
                >
                  <Card
                    sx={{width: '100%'}}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                      >
                        {stop.StopName.Zh_tw}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {getBusEstimatedTimeOfArrival(stop.StopUID)}
                    </CardActions>
                  </Card>
                </ListItem>
              );
            })}
          </List>
        ) : null;
      })}
    </div>
  );
}

export default Route;
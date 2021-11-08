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
import {BusRouteInfo, BusDisplayStopOfRoute, BusStop} from '../../../data/Bus';
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

  const handleChangeSelectBusRoute = (_: SyntheticEvent, newValue: string) => {
    setSelectBusRoute(Number(newValue));
  };

  useEffect(() => {
    console.log(name, city);
    (async () => {
      const busRouteResponse = await ptxAPI.get<Array<BusRouteInfo>>(
          `/Bus/Route/City/${city}/${name}?$format=JSON`,
      );

      setBusRouteInfo(busRouteResponse.data);
      const displayStopOfRouteResponse =
        await ptxAPI.get<Array<BusDisplayStopOfRoute>>(
            `/Bus/DisplayStopOfRoute/City/${city}/${name}`,
        );
      console.log(displayStopOfRouteResponse.data);
      setBusDisplayStopOfRoute(displayStopOfRouteResponse.data);
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

import React, {useEffect, useState} from 'react';
import {ptxAPI} from '../../api/ptx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {citys} from '../../data/City';
import {BusInfo} from '../../data/Bus';

interface BusRouteProp {
  city: string;
  setCity: (value: React.SetStateAction<string>) => void
}
/**
 * Bus route select component
 * @return {JSX.Element}
**/
function BusRoute({city, setCity}: BusRouteProp): JSX.Element {
  const [busRouteInfo, setBusRouteInfo] = useState<Array<BusInfo>>([]);
  useEffect(() => {
    (async () => {
      const response =
        await ptxAPI.get<Array<BusInfo>>(
            `/Bus/Route/City/${city}?$format=JSON`,
        );
      setBusRouteInfo(response.data);
    })();
  }, [city]);

  return (
    <div>
      <AppBar id="bus-header" position="sticky">
        <Toolbar>
          <IconButton
            onClick={() => {
              setCity('');
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1}}
          >
            {citys[city as keyof typeof citys]}
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        {busRouteInfo.map((busInfo: BusInfo) => {
          return (
            <ListItem key={busInfo.RouteID}>
              <Card sx={{width: '100%'}}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {busInfo.RouteName.Zh_tw}
                  </Typography>
                </CardContent>
                <CardActions>
                  {busInfo.DepartureStopNameZh + ' - ' +
                    busInfo.DestinationStopNameZh}
                </CardActions>
              </Card>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default BusRoute;

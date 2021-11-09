import React, {useEffect, useState, ChangeEvent} from 'react';
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
import SearchBox from './search';
import Route from './route';
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
  const [searchString, setSearchString] = useState('');
  const [bus, setBus] = useState('');

  const handleChangeSearch = (event: ChangeEvent) => {
    setSearchString((event.target as HTMLInputElement).value);
  };

  const handleChangeBus = (name: string) => () => setBus(name);

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
            size="large"
            edge="start"
            color="inherit"
            sx={{mr: 2}}
            onClick={() => {
              bus === '' ? setCity('') : setBus('');
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{
              flexGrow: bus === '' ? 1 : 0,
              textAlign: 'left',
            }}
          >
            {bus === '' ? citys[city as keyof typeof citys] : bus}
          </Typography>
          {bus === '' ? (
            <Typography>
              <SearchBox
                onChange={handleChangeSearch}
              />
            </Typography>
          ) : null}
        </Toolbar>
      </AppBar>
      {bus !== '' ? (<Route name={bus} city={city}/>) : (
        <List>
          {busRouteInfo.map((busInfo: BusInfo) => {
            return new RegExp(searchString).test(busInfo.RouteName.Zh_tw) ? (
              <ListItem
                key={busInfo.RouteID}
                style={{justifyContent: 'center'}}
              >
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: '600px',
                  }}
                  onClick={handleChangeBus(busInfo.RouteName.Zh_tw)}
                >
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
            ) : null;
          })}
        </List>
      )}
    </div>
  );
}

export default BusRoute;

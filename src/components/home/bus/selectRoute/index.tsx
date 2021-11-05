import React, {useEffect} from 'react';
import {ptxAPI} from '../../api/ptx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import {citys} from '../../data/City';
import './selectRoute.sass';

interface BusRouteProp {
  city: string;
  setCity: (value: React.SetStateAction<string>) => void
}
/**
 * Bus route select component
 * @return {JSX.Element}
**/
function BusRoute({city, setCity}: BusRouteProp): JSX.Element {
  useEffect(() => {
    (async () => {
      const response = await ptxAPI.get(`/Bus/Route/City/${city}?$format=JSON`);
      console.log(response.data);
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
    </div>
  );
}

export default BusRoute;

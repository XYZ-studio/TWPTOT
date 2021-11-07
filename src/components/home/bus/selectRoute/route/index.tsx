import React, {SyntheticEvent, useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material/styles';
import {BusRouteInfo} from '../../../data/Bus';
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
    useState('');

  const handleChangeSelectBusRoute = (_: SyntheticEvent, newValue: string) => {
    setSelectBusRoute(newValue);
  };

  useEffect(() => {
    console.log(name, city);
    (async () => {
      const response = await ptxAPI.get<Array<BusRouteInfo>>(
          `/Bus/Route/City/${city}/${name}?$format=JSON`,
      );

      setBusRouteInfo(response.data);
      console.log(response.data);
      setSelectBusRoute(response.data[0].DepartureStopNameEn);
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
              value={busRouteInfo[0].DepartureStopNameEn}
            />
        ) : null}
        {busRouteInfo.length !== 0 ? (
            <BusRouteTab
              label={`往 ${busRouteInfo[0].DestinationStopNameZh}`}
              value={busRouteInfo[0].DestinationStopNameEn}
            />
        ) : null}
      </BusRouteTabs>
    </div>
  );
}

export default Route;

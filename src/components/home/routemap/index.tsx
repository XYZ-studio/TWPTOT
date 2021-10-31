import React, {useState, SyntheticEvent} from 'react';
import {Tabs, Tab} from '@mui/material';
import TabPanel from '../TabPanel';
import './routemap.sass';

/**
 * @return {JSX.Element}
**/
function RouteMap(): JSX.Element {
  const [routeMap, setRouteMap] = useState('taipei');
  const tableChange = (_: SyntheticEvent, newValue: string) => {
    setRouteMap(newValue);
  };
  return (
    <div id="routemap">
      <Tabs
        value={routeMap}
        onChange={tableChange}
        id="routemap-menu"
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons="auto"
        sx={{color: '#c5c3c3'}}
      >
        <Tab value="taipei" label="台北捷運" sx={{color: '#c5c3c3'}}/>
        <Tab value="taoyuan" label="桃源機場捷運" sx={{color: '#c5c3c3'}}/>
        <Tab value="TMRT" label="台中捷運" sx={{color: '#c5c3c3'}}/>
        <Tab value="KMRT" label="高雄捷運" sx={{color: '#c5c3c3'}}/>
      </Tabs>
      <div id="image">
        <TabPanel value={routeMap} index="taipei">
          <img src="https://web.metro.taipei/pages/assets/images/routemap2020.png" />
        </TabPanel>
        <TabPanel value={routeMap} index="taoyuan">
          <img src="https://www.tymetro.com.tw/tymetro-new/tw/_images/travel-guide/road_02-1_big.jpg"/>
        </TabPanel>
        <TabPanel value={routeMap} index="TMRT">
          <img src="https://www.tmrt.com.tw/static/img/metro-life/map/map.jpg" />
        </TabPanel>
        <TabPanel value={routeMap} index="KMRT">
          <img src="https://www.krtc.com.tw/Content/userfiles/images/guide-map.jpg" />
        </TabPanel>
      </div>
    </div>
  );
}

export default RouteMap;

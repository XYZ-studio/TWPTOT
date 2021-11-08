import React, {useState, SyntheticEvent} from 'react';
import {Tabs, Tab} from '@mui/material';
import TabPanel from '../TabPanel';
import './routemap.sass';
import KMRT from './img/KMRT.jpg';
import TMRT from './img/TMRT.jpg';
import TAMRT from './img/TAMRT.png';
import TPMRT from './img/TPMRT.png';

/**
 * 捷運路網圖
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
        <Tab value="taipei" label="台北捷運"
          className="routemap-menu" sx={{color: '#c5c3c3'}}/>
        <Tab value="taoyuan" label="桃源機場捷運"
          className="routemap-menu" sx={{color: '#c5c3c3'}}/>
        <Tab value="TMRT" label="台中捷運"
          className="routemap-menu" sx={{color: '#c5c3c3'}}/>
        <Tab value="KMRT" label="高雄捷運"
          className="routemap-menu" sx={{color: '#c5c3c3'}}/>
      </Tabs>
      <div id="image">
        <TabPanel value={routeMap} index="taipei">
          <img src={TPMRT} />
        </TabPanel>
        <TabPanel value={routeMap} index="taoyuan">
          <img src={TAMRT} />
        </TabPanel>
        <TabPanel value={routeMap} index="TMRT">
          <img src={TMRT} />
        </TabPanel>
        <TabPanel value={routeMap} index="KMRT">
          <img src={KMRT} />
        </TabPanel>
      </div>
    </div>
  );
}

export default RouteMap;

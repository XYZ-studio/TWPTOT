import React, {useState, SyntheticEvent} from 'react';
import {Tabs, Tab} from '@mui/material';
import TabPanel from '../TabPanel';
import './routemap.sass';

/**
 * @return {JSX}
**/
function RouteMap() {
  const [routeMap, setRouteMap] = useState('taipei');
  const tableChange = (_: SyntheticEvent, newValue: string) => {
    setRouteMap(newValue);
  };
  return (
    <div id="routemap">
      <Tabs value={routeMap} onChange={tableChange}>
        <Tab value="taipei" label="台北捷運"/>
      </Tabs>
      <TabPanel value={routeMap} index="taipei">
        <img src="https://web.metro.taipei/pages/assets/images/routemap2020.png" />
      </TabPanel>
    </div>
  );
}

export default RouteMap;

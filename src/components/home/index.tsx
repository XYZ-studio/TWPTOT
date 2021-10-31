import React, {useState, SyntheticEvent} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel';
import RouteMap from './routemap';
import './home.sass';

/**
 * @return {JSX}
**/
function Home() {
  const [table, setTable] = useState('search');
  const tableChange = (_: SyntheticEvent, newValue: string) => {
    setTable(newValue);
  };
  return (
    <div id="home">
      <Tabs
        value={table}
        onChange={tableChange}
        variant="fullWidth"
        centered
        id="menu"
      >
        <Tab label="搜尋" value="search" sx={{color: '#c5c3c3'}}/>
        <Tab label="路線規劃" value="directions" sx={{color: '#c5c3c3'}}/>
        <Tab label="捷運路網圖" value="routemap" sx={{color: '#c5c3c3'}}/>
      </Tabs>
      <div id="content">
        <TabPanel value={table} index="routemap">
          <RouteMap />
        </TabPanel>
      </div>
    </div>
  );
}

export default Home;

import React, {useState, SyntheticEvent} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel';
import RouteMap from './routemap';
import Thsrc from './thsrc';
import './home.sass';

/**
 * @return {JSX.Element}
**/
function Home(): JSX.Element {
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
        <Tab label="公車" value="bus" sx={{color: '#c5c3c3'}}/>
        <Tab label="臺鐵" value="railway" sx={{color: '#c5c3c3'}}/>
        <Tab label="高鐵" value="thsrc" sx={{color: '#c5c3c3'}} />
        <Tab label="路線規劃" value="directions" sx={{color: '#c5c3c3'}}/>
        <Tab label="捷運路網圖" value="routemap" sx={{color: '#c5c3c3'}}/>
      </Tabs>
      <div id="content">
        <TabPanel value={table} index="routemap">
          <RouteMap />
        </TabPanel>
        <TabPanel value={table} index="thsrc">
          <Thsrc />
        </TabPanel>
      </div>
    </div>
  );
}

export default Home;

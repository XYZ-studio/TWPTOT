import React, {useState, SyntheticEvent} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
      </Tabs>
    </div>
  );
}

export default Home;

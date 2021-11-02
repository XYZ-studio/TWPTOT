import React, {useState, SyntheticEvent} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  faBus,
  faSubway,
  faMapMarkerAlt,
  faTrain,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HSR from './svg/hsr.svg';
import TabPanel from './TabPanel';
import RouteMap from './routemap';
import Thsrc from './thsrc';
import Railway from './railway';
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
        selectionFollowsFocus={true}
        allowScrollButtonsMobile
        scrollButtons
        id="menu"
      >
        <Tab
          label={<FontAwesomeIcon icon={faBus} />}
          value="bus" sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<FontAwesomeIcon icon={faTrain} />}
          value="railway"
          sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<img src={HSR} />}
          value="thsrc"
          sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<FontAwesomeIcon icon={faMapMarkerAlt} />}
          value="directions"
          sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<FontAwesomeIcon icon={faSubway} />}
          value="routemap"
          sx={{color: '#c5c3c3'}}
        />
      </Tabs>
      <div id="content">
        <TabPanel value={table} index="routemap">
          <RouteMap />
        </TabPanel>
        <TabPanel value={table} index="thsrc">
          <Thsrc />
        </TabPanel>
        <TabPanel value={table} index="railway">
          <Railway />
        </TabPanel>
      </div>
    </div>
  );
}

export default Home;

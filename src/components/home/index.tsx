import React, {useState, SyntheticEvent} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
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
import Bus from './bus';
import './home.sass';

/**
 * @return {JSX.Element}
**/
function Home(): JSX.Element {
  const [table, setTable] = useState('bus');
  const tableChange = (_: SyntheticEvent, newValue: string) => {
    setTable(newValue);
  };

  return (
    <div id="home">
      <BottomNavigation
        value={table}
        onChange={tableChange}
        id="menu"
      >
        <BottomNavigationAction
          icon={<FontAwesomeIcon icon={faBus} />}
          label="公車"
          className="index_menu"
          value="bus" sx={{color: '#c5c3c3'}}
        />
        <BottomNavigationAction
          icon={<FontAwesomeIcon icon={faTrain} />}
          label="臺鐵"
          value="railway"
          className='index_menu'
          sx={{color: '#c5c3c3'}}
        />
        <BottomNavigationAction
          icon={<img src={HSR} />}
          label="高鐵"
          value="thsrc"
          className='index_menu'
          sx={{color: '#c5c3c3'}}
        />
        <BottomNavigationAction
          icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
          label="路線規劃"
          value="directions"
          className='index_menu'
          sx={{color: '#c5c3c3'}}
        />
        <BottomNavigationAction
          icon={<FontAwesomeIcon icon={faSubway} />}
          label="捷運"
          value="routemap"
          className="index_menu"
          sx={{color: '#c5c3c3'}}
        />
      </BottomNavigation>
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
        <TabPanel value={table} index="bus">
          <Bus />
        </TabPanel>
      </div>
    </div>
  );
}

export default Home;

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
          className="index_menu"
          value="bus" sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<FontAwesomeIcon icon={faTrain} />}
          value="railway"
          className='index_menu'
          sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<img src={HSR} />}
          value="thsrc"
          className='index_menu'
          sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<FontAwesomeIcon icon={faMapMarkerAlt} />}
          value="directions"
          className='index_menu'
          sx={{color: '#c5c3c3'}}
        />
        <Tab
          label={<FontAwesomeIcon icon={faSubway} />}
          value="routemap"
          className="index_menu"
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
        <TabPanel value={table} index="bus">
          <Bus />
        </TabPanel>
      </div>
    </div>
  );
}

export default Home;

import React, {useState, useEffect} from 'react';
import {SelectChangeEvent} from '@mui/material/Select';
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SelectCity from './selectCity';
import SelectStation from './selectStation';
import {Station} from '../data/Station';
import {CityListType} from '../data/City';
import {ptxAPI} from '../api/ptx';
import './railway.sass';

interface SelectData {
  city: CityListType;
  station: string;
}
/**
 * @return {JSX.Element}
**/
function Railway(): JSX.Element {
  const [railwayStation, setRailwayStation] = useState<Array<Station>>([]);
  const [start, setStart] =
    useState<SelectData>({city: '', station: ''});
  const [end, setEnd] =
    useState<SelectData>({city: '', station: ''});
  const startHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setStart({
        city: set === 'city' ? event.target.value as CityListType : start.city,
        station: set === 'station' ? event.target.value : end.station,
      });
    };
  };
  const endHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setEnd({
        city: set === 'city' ? event.target.value as CityListType : end.city,
        station: set === 'station' ? event.target.value : end.station,
      });
    };
  };

  useEffect(() => {
    (async () => {
      const response =
        await ptxAPI.get<Array<Station>>('/Rail/TRA/Station?$format=JSON');
      const data = response.data;
      setRailwayStation(data);
      railwayStation;
    })();
  }, []);

  return (
    <div id="railway">
      <div id="search">
        <h2>查詢班次</h2>
        <SelectCity
          selectCity={start.city}
          handleChange={startHandleChange('city')}
        />
        <SelectStation
          selectCity={start.city}
          railwayStations={railwayStation}
          selectStation={start.station}
          handleChange={startHandleChange('station')}
        />
        <span style={{
          display: 'block',
          textAlign: 'center',
          fontSize: '30px',
          color: '#ffff',
        }}>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </span>
        <SelectCity
          selectCity={end.city}
          handleChange={endHandleChange('city')}
        />
      </div>
    </div>
  );
}

export default Railway;

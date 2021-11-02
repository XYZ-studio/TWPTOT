import React, {useState, useEffect} from 'react';
import {SelectChangeEvent} from '@mui/material/Select';
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SelectCity from './selectCity';
import {Station} from '../data/Station';
import {CityListType} from '../data/City';
import {ptxAPI} from '../api/ptx';
import './railway.sass';
/**
 * @return {JSX.Element}
**/
function Railway(): JSX.Element {
  const [railwayStation, setRailwayStation] = useState<Array<Station>>([]);
  const [startCity, setStartCity] = useState<CityListType | ''>('');
  const [endCity, setEndCity] = useState<CityListType | ''>('');
  const startHandleChange = (event: SelectChangeEvent) => {
    setStartCity(event.target.value as CityListType | '');
  };
  const endHandleChange = (event: SelectChangeEvent) => {
    setEndCity(event.target.value as CityListType | '');
  };

  useEffect(() => {
    (async () => {
      const response = await ptxAPI.get<Array<Station>>('');
      const data = response.data;
      setRailwayStation(data);
      railwayStation;
    })();
  }, []);

  return (
    <div id="railway">
      <SelectCity selectCity={startCity} handleChange={startHandleChange} />
      <span style={{
        display: 'block',
        textAlign: 'center',
        fontSize: '30px',
        color: '#ffff',
      }}>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </span>
      <SelectCity selectCity={endCity} handleChange={endHandleChange} />
    </div>
  );
}

export default Railway;

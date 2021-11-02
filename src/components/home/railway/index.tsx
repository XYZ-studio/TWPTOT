import React, {useState, useEffect} from 'react';
import {SelectChangeEvent} from '@mui/material/Select';
import SelectCity from './selectCity';
import {Station} from '../data/Station';
import {CityListType} from '../data/City';
import {ptxAPI} from '../api/ptx';

/**
 * @return {JSX.Element}
**/
function Railway(): JSX.Element {
  const [railwayStation, setRailwayStation] = useState<Array<Station>>([]);
  const [startCity, setStartCity] = useState<CityListType | 'None'>('None');

  const handleChange = (event: SelectChangeEvent) => {
    setStartCity(event.target.value as CityListType | 'None');
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
      <SelectCity selectCity={startCity} handleChange={handleChange} />
    </div>
  );
}

export default Railway;

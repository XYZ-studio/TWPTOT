import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BusRoute from './selectRoute';
import {citys} from '../data/City';

/**
 * Bus component
 * @return {JSX.Element}
**/
function Bus(): JSX.Element {
  const [city, setCity] = useState('');
  const handleChangeCity = (city: string) => {
    return () => {
      setCity(city);
    };
  };

  return city === '' ? (
    <Stack
      direction="row"
      padding={'50px'}
      flexWrap={'wrap'}
      justifyContent={'space-around'}
    >
      {Object.keys(citys).map((city: string) => {
        return (
          <Paper
            key={city}
            style={{
              margin: '8px',
              fontSize: '20px',
              padding: '20px',
            }}
            onClick={handleChangeCity(city)}
          >
            {citys[city as keyof typeof citys]}
          </Paper>
        );
      })}
    </Stack>
  ) : (
    <BusRoute city={city} setCity={setCity} />
  );
}

export default Bus;

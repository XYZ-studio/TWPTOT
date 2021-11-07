import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BusRoute from './selectRoute';
import {citys} from '../data/City';

const CityPaper = styled(Paper)(() => ({
  '&:hover': {
    transform: 'scale(1.05)',
  },
  'margin': '8px',
  'fontSize': '20px',
  'padding': '20px',
  'transition': 'all .5s',
  'cursor': 'pointer',
}));

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
          <CityPaper
            key={city}
            onClick={handleChangeCity(city)}
          >
            {citys[city as keyof typeof citys]}
          </CityPaper>
        );
      })}
    </Stack>
  ) : (
    <BusRoute city={city} setCity={setCity} />
  );
}

export default Bus;

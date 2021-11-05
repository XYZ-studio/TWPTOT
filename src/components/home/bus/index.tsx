import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {citys} from '../data/City';

/**
 * @return {JSX.Element}
**/
function Bus(): JSX.Element {
  return (
    <Stack
      direction="row"
      // spacing={1}
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
              padding: '15px',
            }}
          >
            {citys[city as keyof typeof citys]}
          </Paper>
        );
      })}
    </Stack>
  );
}

export default Bus;

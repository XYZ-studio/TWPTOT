import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
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
          <Card
            key={city}
            style={{
              margin: '8px',
              fontSize: '20px',
              padding: '8px',
            }}
          >
            <CardContent>
              <Typography variant="h5">
                {citys[city as keyof typeof citys]}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}

export default Bus;

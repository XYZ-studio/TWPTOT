import React from 'react';

interface BusRouteProp {
  city: string;
  setCity: (value: React.SetStateAction<string>) => void
}
/**
 * @return {JSX.Element}
**/
function BusRoute({city, setCity}: BusRouteProp): JSX.Element {
  return (
    <div>
      <div>
      </div>
    </div>
  );
}

export default BusRoute;

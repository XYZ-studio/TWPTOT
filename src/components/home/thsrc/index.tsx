import React, {useState, useEffect} from 'react';
import dateFormat from 'dateformat';
import {SelectChangeEvent} from '@mui/material/Select';
import SelectStation from '../thsrc/selectStation';
import {ptxAPI} from '../api/ptx';
import {Station} from '../data/Station';
import './thsrc.sass';


interface SelectData {
  station: string;
}

/**
 * @return {JSX.Element}
**/
function Thsrc(): JSX.Element {
  const [thsrcStation, setThsrcStation] = useState<Array<Station>>([]);
  const [start, setStart] =
    useState<SelectData>({station: ''});
  const startHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setStart({
        station: set === 'station' ? event.target.value : start.station,
      });
    };
  };

  useEffect(() => {
    (async () => {
      const response =
        await ptxAPI.get<Array<Station>>('/Rail/THSR/Station?$format=JSON');
      const data = response.data;
      setThsrcStation(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const date = new Date();
      const dateFromat = dateFormat(date, 'yyyy-MM-dd');
      if (start.station !== '') {
        const response = await ptxAPI.get(
            '/Rail/THSR/DailyTimetable/' +
              `${start.station}/${dateFromat}?$format=JSON`,
        );
        console.log(response.data);
      }
    })();
  }, [start]);

  // const [thsrc, setThsrc] = useState();
  return (
    <div id="thsrc">
      <div id="search">
        <h2>查詢班次</h2>
        <div className='select'>
          <SelectStation
            stations={thsrcStation}
            selectStation={start.station}
            handleChange={startHandleChange('station')}
          />
        </div>
      </div>
    </div>
  );
}

export default Thsrc;

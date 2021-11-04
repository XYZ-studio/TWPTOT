import React, {useState, useEffect} from 'react';
import dateFormat from 'dateformat';
import {SelectChangeEvent} from '@mui/material/Select';
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SelectCity from './selectCity';
import SelectStation from './selectStation';
import DailyTimetable from './dailyTimetable';
import {Station, DailyTimetableType} from '../data/Station';
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
  const [dailyTimetable, setDailyTimetable] =
    useState<Array<DailyTimetableType>>([]);
  const [start, setStart] =
    useState<SelectData>({city: 'all', station: ''});
  const [end, setEnd] =
    useState<SelectData>({city: 'all', station: ''});
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
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const date = new Date();
      const dateFromat = dateFormat(date, 'yyyy-mm-dd');
      if (start.station !== '' && end.station !== '') {
        const response = await ptxAPI.get<Array<DailyTimetableType>>(
            '/Rail/TRA/DailyTimetable/OD/' +
              `${start.station}/to/${end.station}/${dateFromat}?$format=JSON`,
        );
        setDailyTimetable(response.data);
      }
    })();
  }, [start, end]);

  return (
    <div id="railway">
      <div id="search">
        <h2>查詢班次</h2>
        <div className="select">
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
        </div>
        <span style={{
          display: 'block',
          textAlign: 'center',
          fontSize: '30px',
          color: '#ffff',
        }}>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </span>
        <div className="select">
          <SelectCity
            selectCity={end.city}
            handleChange={endHandleChange('city')}
          />
          <SelectStation
            selectCity={end.city}
            railwayStations={railwayStation}
            selectStation={end.station}
            handleChange={endHandleChange('station')}
          />
        </div>
      </div>
      <DailyTimetable dailyTimetable={dailyTimetable} />
    </div>
  );
}

export default Railway;

import React, {useState, useEffect} from 'react';
import dateFormat from 'dateformat';
import {SelectChangeEvent} from '@mui/material/Select';
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';
import SelectStation from './selectStation';
import DailyTimetable from './dailyTimeTable';
import {Station, DailyTimetableType} from '../data/Station';
import {ptxAPI} from '../api/ptx';
import './thsrc.sass';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


interface SelectData {
  station: string;
}

/**
 * @return {JSX.Element}
**/
function Thsrc(): JSX.Element {
  const [thsrcStation, setthsrcStation] = useState<Array<Station>>([]);
  // 班次表
  const [dailyTimetable, setDailyTimetable] =
    useState<Array<DailyTimetableType>>([]);
  // 用戶選取的起始站資料
  const [start, setStart] =
    useState<SelectData>({station: ''});
  // 用戶選取的終點站資料
  const [end, setEnd] =
    useState<SelectData>({station: ''});

  const startHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setStart({
        station: set === 'station' ? event.target.value : start.station,
      });
    };
  };

  const endHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setEnd({
        station: set === 'station' ? event.target.value : end.station,
      });
    };
  };

  useEffect(() => {
    (async () => {
      const response =
        await ptxAPI().get<Array<Station>>('/Rail/THSR/Station?$format=JSON');
      const data = response.data;
      setthsrcStation(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const date = new Date();
      const dateFromat = dateFormat(date, 'yyyy-mm-dd');
      if (start.station !== '' && end.station !== '') {
        const response = await ptxAPI().get<Array<DailyTimetableType>>(
            '/Rail/THSR/DailyTimetable/OD/' +
              `${start.station}/to/${end.station}/${dateFromat}?$format=JSON`,
        );
        setDailyTimetable(response.data);
      }
    })();
  }, [start, end]);


  // const [thsrc, setThsrc] = useState();
  return (
    <div id="thsrc">
      <div id="search">
        <h2>查詢班次</h2>
        <div className="select">
          <SelectStation
            stations={thsrcStation}
            selectStation={start.station}
            handleChange={startHandleChange('station')}
          />
        </div>
        <span style={{
          display: 'block',
          textAlign: 'center',
          fontSize: '30px',
          color: 'rgba(0, 0, 0, 0.87)',
        }}>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </span>
        <div className="select">
          <SelectStation
            stations={thsrcStation}
            selectStation={end.station}
            handleChange={endHandleChange('station')}
          />
        </div>
        <div className='thsrc'>
          {/* <SelectTrainType
            selectTrainType={start.trainType}
            handleChange={startHandleChange('trainType')}
            TrainType={dailyTimetable} /> */}
        </div>
      </div>
      {dailyTimetable.length === 0 ? (
            (start.station && end.station) ? '沒東西' : null
        ) : (
          <DailyTimetable dailyTimetable={dailyTimetable} />

      )}
      {console.log(dailyTimetable)}
    </div>
  );
}

export default Thsrc;

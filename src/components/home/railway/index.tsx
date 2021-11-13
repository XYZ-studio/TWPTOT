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
import SelectTrainType from './selectTrainType';
import SelectTime from './selectDate';

interface SelectData {
  city: CityListType;
  station: string;
  trainType: string[];
  Time: Date;
}

/**
 * delete
 * @param {Array<T>} data
 * @param {number} index
 * @return {Array<T>}
 */
function del<T>(data: Array<T>, index: number): Array<T> {
  const cloneData = [...data];
  // console.log(cloneData);
  cloneData.splice(index, 1);
  // console.log(cloneData);
  return cloneData;
}

/**
 * 臺鐵查詢頁面
 * @return {JSX.Element}
 **/
function Railway(): JSX.Element {
  // 所有車站資料
  const [railwayStation, setRailwayStation] = useState<Array<Station>>([]);
  // 班次表
  const [dailyTimetable, setDailyTimetable] =
    useState<Array<DailyTimetableType>>([]);
  // 用戶選取的起始站資料
  const [start, setStart] =
    useState<SelectData>({city: 'all', station: '',
      trainType: ['all'], Time: new Date});
  // 用戶選取的終點站資料
  const [end, setEnd] =
    useState<SelectData>({city: 'all', station: '',
      trainType: ['all'], Time: new Date});
  // 更新用戶選擇起始站資料到State
  const startHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setStart({
        city: set === 'city' ? event.target.value as CityListType : start.city,
        station: set === 'station' ? event.target.value : start.station,
        trainType: set === 'trainType' ?
        (
          (start.trainType.indexOf(event.target.value) > -1) ?
            del(
                start.trainType, start.trainType.indexOf(event.target.value),
            ) :
              [...start.trainType, event.target.value]
        ) : start.trainType,
        Time: set === 'time' ? new Date(event.target.value) : start.Time,
      });
    };
  };
  // 更新用戶選擇終點站資料到State
  const endHandleChange = (set: string) => {
    return (event: SelectChangeEvent) => {
      setEnd({
        city: set === 'city' ? event.target.value as CityListType : end.city,
        station: set === 'station' ? event.target.value : end.station,
        trainType: set === 'trainType' ?
          (
            typeof event.target.value === 'string' ?
              event.target.value.split(',') :
              event.target.value
          ) : start.trainType,
        Time: set === 'time' ? new Date(event.target.value) : start.Time,
      });
    };
  };
  // 渲染component時執行1次
  useEffect(() => {
    (async () => {
      // 請求api取得所有車站資料
      const response =
        await ptxAPI().get<Array<Station>>('/Rail/TRA/Station?$format=JSON');
      const data = response.data;
      setRailwayStation(data);
    })();
  }, []);
  // 當update start and end state時執行
  useEffect(() => {
    (async () => {
      const date = new Date();
      const dateFromat = dateFormat(date, 'yyyy-mm-dd');
      if (start.station !== '' && end.station !== '') {
        const response = await ptxAPI().get<Array<DailyTimetableType>>(
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
            stations={railwayStation}
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
          <SelectCity
            selectCity={end.city}
            handleChange={endHandleChange('city')}
          />
          <SelectStation
            selectCity={end.city}
            stations={railwayStation}
            selectStation={end.station}
            handleChange={endHandleChange('station')}
          />
        </div>
        <div className='railway'>
          <SelectTrainType
            selectTrainType={start.trainType}
            handleChange={
              startHandleChange('trainType') as
                (event: SelectChangeEvent<string[]>) => void
            }
            TrainType={dailyTimetable}
          />
          <SelectTime
            selectTime={start.Time}
            handleChange={startHandleChange('time')}
          />
          {console.log(start.Time)}
        </div>
      </div>
      {dailyTimetable.length === 0 ? (
            (start.station && end.station) ? '沒東西' : null
        ) : (
          <DailyTimetable dailyTimetable={dailyTimetable}
            selectTrainType={start.trainType} />
      )}
    </div>
  );
}

export default Railway;

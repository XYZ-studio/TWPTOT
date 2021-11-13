import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {SelectChangeEvent} from '@mui/material';
import {DatePicker} from '@mui/lab';

interface selectTimeProp {
  selectTime: Date;
  handleChange: (event: SelectChangeEvent) => void
}

/**
 * select time
 * @return {JSX.Element}
**/
function SelectTime({selectTime,
  handleChange}: selectTimeProp): JSX.Element {
  const [selectTime1, setSelectTime] = React.useState<Date>(new Date);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="出發時間"
        value={selectTime1}
        onChange={(newValue) => {
          setSelectTime(newValue === null ? new Date : newValue);
          newValue === null ? '' : selectTime = selectTime1;
          handleChange;
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default SelectTime;

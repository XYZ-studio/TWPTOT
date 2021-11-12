import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {SelectChangeEvent} from '@mui/material';
import {DatePicker} from '@mui/lab';

interface selectTimeProp {
  selectTime: string;
  handleChange: (event: SelectChangeEvent) => void
}
/**
 * select time
 * @return {JSX.Element}
**/
function SelectTime({selectTime, handleChange}: selectTimeProp): JSX.Element {
  const [value, setValue] = React.useState<Date | null>(new Date());
  let selectTime1 = new Date;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="出發時間"
        value={selectTime1}
        onChange={(newValue) => {
          setValue(newValue);
          newValue === null ? '' : selectTime = newValue.toString();
          selectTime1 = new Date(selectTime);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default SelectTime;

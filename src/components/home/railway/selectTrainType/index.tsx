import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import {InputLabel, Select, SelectChangeEvent} from '@mui/material';

interface selectTrainTypeprop {
  selectTrainType: string,
  handleChange: (event: SelectChangeEvent) => void
}

/**
 * @return {JSX.Element}
**/


// eslint-disable-next-line require-jsdoc
function SelectTrainType(
    {selectTrainType, handleChange}: selectTrainTypeprop,
): JSX.Element {
  return (
    <FormGroup className="select1">
      <FormControl sx={{m: 1, width: 200}} >
        <InputLabel id="trianType">火車種類</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          label="火車種類"
          value={selectTrainType}
          onChange={handleChange}
        />

      </FormControl>
    </FormGroup>
  );
}

export default SelectTrainType;

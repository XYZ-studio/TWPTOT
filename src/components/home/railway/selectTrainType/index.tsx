import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import {OutlinedInput, Select, SelectChangeEvent} from '@mui/material';
import {InputLabel, MenuItem} from '@mui/material';
import {TrainName} from '../../data/TrainName';

interface selectTrainTypeprop {
  selectTrainType: string[],
  handleChange: (event: SelectChangeEvent<string[]>) => void
}

/**
 * @return {JSX.Element}
**/
function SelectTrainType(
    {
      selectTrainType,
      handleChange,
    }: selectTrainTypeprop,
): JSX.Element {
  return (
    <FormGroup className="select1" style={{alignContent: 'center'}}>
      <FormControl sx={{m: 1, width: 200}} >
        <InputLabel id="demo-multiple-checkbox-label">火車種類</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          label="車種"
          multiple
          value={selectTrainType}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {
            TrainName.map((code)=>{
              return (
                <MenuItem
                  key={code}
                  value={code}
                >
                  <Checkbox checked={selectTrainType.indexOf(code) > -1} />
                  <ListItemText primary={code} />
                </MenuItem>
              );
            })
          }
        </Select>
      </FormControl>
    </FormGroup>
  );
}
export default SelectTrainType;

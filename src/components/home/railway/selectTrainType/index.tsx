import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import {OutlinedInput, Select, SelectChangeEvent} from '@mui/material';
import {InputLabel, MenuItem} from '@mui/material';
import {DailyTimetableType} from '../../data/Station';
import {Train, TrainList, TrainNameList} from '../../data/TrainName';

interface selectTrainTypeprop {
  selectTrainType: string[],
  TrainType: Array<DailyTimetableType>,
  handleChange: (event: SelectChangeEvent<string[]>) => void
}

const train = [
  'all', '自強', '區間', '莒光', '復興', '太魯閣', '普悠瑪', '普快', '區間快',
];

// const [trainName, setTrainName] = React.useState<string[]>([]);

/**
 * @return {JSX.Element}
**/
function SelectTrainType(
    {selectTrainType,
      handleChange,
      TrainType,
    }: selectTrainTypeprop,
): JSX.Element {
  return (
    <FormGroup className="select1">
      <FormControl sx={{m: 1, width: 200}} >
        <InputLabel id="demo-multiple-checkbox-label">火車種類</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          label="車種"
          // multiple
          value={selectTrainType}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {
            train.map((code)=>{
              return (
                <MenuItem key={code} value={code}>
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

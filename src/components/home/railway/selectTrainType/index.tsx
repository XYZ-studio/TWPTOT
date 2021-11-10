import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import {InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {DailyTimetableType, DailyTrainInfo} from '../../data/Station';
import {Train, TrainList, TrainNameList} from '../../data/TrainName';

interface selectTrainTypeprop {
  selectTrainType: string,
  TrainType: Array<DailyTimetableType>,
  handleChange: (event: SelectChangeEvent) => void
}

const trainType = [
  '自強', '區間', '莒光', '復興', '太魯閣', '普悠瑪', '普快',
];


// const [trainName, setTrainName] = React.useState<string[]>([]);

/**
 * @return {JSX.Element}
**/


// eslint-disable-next-line require-jsdoc
function SelectTrainType(
    {selectTrainType,
      handleChange,
      TrainType,
    }: selectTrainTypeprop,
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
        >
          {
            TrainList.map((Code: TrainNameList)=>{
              return (
                <MenuItem key={Code} value={Code}>
                  <ListItemText primary={Code === 'all' ? '':Train[Code]} />
                </MenuItem>
              );
            })
          }
          )
        </Select>
      </FormControl>
    </FormGroup>
  );
}

export default SelectTrainType;

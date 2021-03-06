import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Station} from '../../data/Station';

interface SelectStation {
  selectStation: string;
  stations: Array<Station>;
  handleChange: (event: SelectChangeEvent) => void;
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '300px',
    },
  },
};

/**
 * 選取車站
 * @return {JSX.Element}
**/
function SelectStation(
    {
      stations,
      selectStation,
      handleChange,
    }: SelectStation,
): JSX.Element {
  return (
    <FormControl style={{width: '150px'}}>
      <InputLabel
        id="demo-simple-select-label"
        // style={{color: '#ffff'}}
      >車站</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectStation}
        label="車站"
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {
          stations.map((station: Station) => {
            return (
              <MenuItem
                value={station.StationID}
                key={station.StationID}
              >
                {station.StationName.Zh_tw}
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
}

export default SelectStation;

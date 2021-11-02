import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {CityList, City, CityListType} from '../../data/City';

interface SelectCityProp {
  selectCity: string;
  handleChange: (event: SelectChangeEvent) => void
}

/**
 * @return {JSX.Element}
**/
function SelectCity({selectCity, handleChange}: SelectCityProp): JSX.Element {
  return (
    <FormControl style={{width: '95px'}}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectCity}
        label="縣市"
        onChange={handleChange}
      >
        <MenuItem value="None">
          None
        </MenuItem>
        {
          CityList.map((city: CityListType) => {
            return (
              <MenuItem
                value={city}
                key={city}
              >
                {City[city]}
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
}

export default SelectCity;

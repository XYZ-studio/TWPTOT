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
    <FormControl style={{width: '150px'}}>
      <InputLabel
        id="demo-simple-select-label"
        style={{color: '#ffff'}}
      >縣市</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectCity}
        label="縣市"
        onChange={handleChange}
        sx={{color: '#c5c3c3'}}
      >
        {
          CityList.map((city: CityListType) => {
            return (
              <MenuItem
                value={city}
                key={city}
              >
                {city === '' ? null : City[city]}
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
}

export default SelectCity;

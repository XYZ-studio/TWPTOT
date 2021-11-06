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

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '440px',
    },
  },
};

/**
 * 選取城市
 * @return {JSX.Element}
**/
function SelectCity({selectCity, handleChange}: SelectCityProp): JSX.Element {
  return (
    <FormControl style={{width: '150px'}}>
      <InputLabel
        id="demo-simple-select-label"
        // style={{color: '#ffff'}}
      >縣市</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectCity}
        label="縣市"
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        <MenuItem
          value={'all'}
        >
          全部
        </MenuItem>
        {
          CityList.map((city: CityListType) => {
            return (
              <MenuItem
                value={city}
                key={city}
              >

                {city === 'all' ? '' : City[city]}
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
}

export default SelectCity;

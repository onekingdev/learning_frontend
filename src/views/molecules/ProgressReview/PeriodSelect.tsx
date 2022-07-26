import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { REVIEW_PERIODS } from 'constants/common';

export const PeriodSelect: FC = () => {
  const [period, setPeriod] = useState('');
  let language = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <FormControl >
      <InputLabel id="demo-simple-select-label">Review</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={period}
        onChange={handleChange}
      >
        {
          REVIEW_PERIODS.map((period) => (
            <MenuItem key={period.id} value={period.value}>{period.label[language as keyof Object]}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
    // </Box>
  );
}

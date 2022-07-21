import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { USER_SET_LANGUAGE } from 'app/types';
import { LANGUAGES } from 'constants/common';
import commonDictionary from 'constants/commonDictionary'



export const LanguageSelect: FC = () => {
  const dispatch = useDispatch()
  const language = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({ type: USER_SET_LANGUAGE, payload: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{commonDictionary[language]?.language}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language || 'en-us'}
        label={commonDictionary[language]?.language}
        onChange={handleChange}
      >
        {
          LANGUAGES.map((lang) => (
            <MenuItem key={lang.id} value={lang.value}>{lang.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

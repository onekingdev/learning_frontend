import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { USER_SET_LANGUAGE } from 'app/types';
import { LANGUAGES } from 'constants/common';

export const dictionary: any = Object.freeze({
  'en-us': {
    language: 'Language',
  },
  'th': {
    language: 'ภาษา',
  },
  'es-mx': {
    language: 'Español',
  }
});

interface ClassLangProps {
  lang: string
  setLang: (lang: string) => void
}

export const ClassroomLanguageSelect: FC<ClassLangProps> = ({ lang, setLang }) => {
  const language = useSelector((state: any) => state.user.language) || 'en-us';

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{dictionary[language]?.language}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={lang || 'en-us'}
        label={dictionary[language]?.language}
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

import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LANGUAGES } from 'constants/common';
import { USER_SET_LANGUAGE } from 'app/types';

export const LanguageSelect: FC = () => {

    //   const [language, setLanguage] = React.useState('');
    const dispatch = useDispatch()
    const language = useSelector((state: any) => state.user.language);

    const handleChange = (event: SelectChangeEvent) => {
        //   TODO: Send backend  mutation to set language
        dispatch({ type: USER_SET_LANGUAGE, payload: event.target.value as string });
    };

    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id='settings-language-select-label'>Language</InputLabel>
                <Select
                    labelId='settings-language-select-label'
                    id='settings-language-select'
                    value={language}
                    label='Language'
                    onChange={handleChange}
                >
                    {
                        LANGUAGES.map((lang) => (
                            <MenuItem value={lang.lang}>{lang.lang}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

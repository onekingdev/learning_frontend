import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useSelector, useDispatch } from 'react-redux';
import { USER_SET_TOGGLE_SOUND } from 'app/types';

export const SoundSwitch: FC = () => {
    const dispatch = useDispatch()
    const isSoundOn = useSelector((state: any) => state.user.sound);

    const handleChange = () => {
        dispatch({ type: USER_SET_TOGGLE_SOUND })
    };

    return (
        <FormControl component='fieldset' variant='standard'>
            <FormControlLabel
                control={
                    <Switch checked={isSoundOn} onChange={handleChange} name='sound' />
                }
                label={isSoundOn ? 'On' : 'Off'}
            />
        </FormControl>
    );
}

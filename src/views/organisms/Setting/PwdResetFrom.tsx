import { FC, useState } from 'react';
import { settingPage } from 'views/Theme';
import { TextField, ThemeProvider } from '@mui/material';
import { LSGridRow, LSLabel } from 'views/molecules/Setting/utils/Style';
import { Grid } from '@mui/material';
import { LSButtonContainer } from 'views/molecules/Setting/utils/Style';
import { doUpdateUserNameEmailPassword } from 'app/actions/guardianActions';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import commonDictionary from 'constants/commonDictionary';
import { USER_SET_TOKEN } from 'app/types';

interface DialogProps {
    open: () => (void)
}
export const PwdResetForm: FC<DialogProps> = ({ open }) => {

    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    // const [errorMsg, setErrorMsg] = useState('')
    const { language, token } = useSelector((state: any) => state.user);
    const [loading, setLoading] = useState(false)
    // Whenever an input changes value, change the corresponding state variable

    const updatePwd = useMutation((pwd: string) => doUpdateUserNameEmailPassword(token, undefined, undefined, pwd), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                dispatch({
                    type: USER_SET_TOKEN,
                    payload: data.token
                });
                enqueueSnackbar('Update pwd success!', { variant: 'success' })
            }
            open()
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
        }
    })

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setLoading(true)
        if (password)
            updatePwd.mutate(password)
    }
    return (
        <ThemeProvider theme={settingPage}>
            <LSGridRow container spacing={3}>
                <Grid item lg={4} xs={12}>
                    <LSLabel>
                        {commonDictionary[language]?.new_password}
                    </LSLabel>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <TextField
                        // size='small'
                        id='outlined-password-input'
                        label={commonDictionary[language]?.new_password}
                        type='password'
                        autoComplete='new-password'
                        value={password || ''}
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                    />
                </Grid>
                <Grid item lg={4} xs={12}>
                    <LSLabel>
                        {commonDictionary[language]?.confirm_password}
                    </LSLabel>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <TextField
                        aria-describedby='component-error-text'
                        // size='small'
                        id='outlined-password-confirm'
                        label={commonDictionary[language]?.confirm}
                        type='password'
                        value={confirm || ''}
                        onChange={(e) => setConfirm(e.target.value)}
                        name='confirm'
                        error={confirm !== password}
                    // helperText={'Passwords don\'t match'}
                    />
                </Grid>
            </LSGridRow>
            <LSButtonContainer>
                <LoadingButton
                    type='submit'
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={password !== confirm}
                    loading={loading}
                >
                    {commonDictionary[language]?.submit}
                </LoadingButton>
            </LSButtonContainer>
        </ThemeProvider>
    );
}


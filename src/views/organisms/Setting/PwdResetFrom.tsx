import { FC, useState } from 'react';
import { settingPage } from 'views/Theme';
import { Button, TextField, ThemeProvider } from '@mui/material';
import { LSGridRow, LSLabel } from 'views/molecules/Setting/utils/Style';
import { Grid } from '@mui/material';
import { LSButtonContainer } from 'views/molecules/Setting/utils/Style';
import { doUpdateUserEmailPassword } from 'app/actions/guardianActions';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { dictionary } from './Parent/dictionary'
import { useMutation } from '@tanstack/react-query';
import LoadingButton from '@mui/lab/LoadingButton';

interface DialogProps {
    open: () => (void)
}
export const PwdResetForm: FC<DialogProps> = ({ open }) => {

    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    const [errorMsg, setErrorMsg] = useState('')
    const { language, token } = useSelector((state: any) => state.user);
    const [loading, setLoading] = useState(false)
    // Whenever an input changes value, change the corresponding state variable

    const updatePwd = useMutation((pwd: string) => doUpdateUserEmailPassword(token, undefined, pwd), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                console.log({ data })
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
        // Verify that the passwords match
        // if (!validatePwd()) return

        // Call Userfront.resetPassword()
        setLoading(true)
        if (password)
            updatePwd.mutate(password)
    }
    return (
        <ThemeProvider theme={settingPage}>
            <LSGridRow container spacing={3}>
                <Grid item lg={4} xs={12}>
                    <LSLabel>
                        {dictionary[language]?.newPassword}
                    </LSLabel>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <TextField
                        // size='small'
                        id='outlined-password-input'
                        label={dictionary[language]?.newPassword}
                        type='password'
                        autoComplete='new-password'
                        value={password || ''}
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                    />
                </Grid>
                <Grid item lg={4} xs={12}>
                    <LSLabel>
                        {dictionary[language]?.confirmPassword}
                    </LSLabel>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <TextField
                        aria-describedby='component-error-text'
                        // size='small'
                        id='outlined-password-confirm'
                        label={dictionary[language]?.confirm}
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
                    {dictionary[language]?.submit}
                </LoadingButton>
            </LSButtonContainer>
        </ThemeProvider>
    );
}


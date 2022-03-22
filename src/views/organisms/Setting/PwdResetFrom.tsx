import { FC, useState } from 'react';
import { settingPage } from 'views/molecules/Setting/utils/Theme';
import { ThemeProvider } from '@mui/material';
import { LSGridRow, LSLabel, LSTextField } from 'views/molecules/Setting/utils/Style';
import { Grid } from '@mui/material';
import { LSButtonContainer, LSButton } from 'views/molecules/Setting/utils/Style';
import styled from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { doUpdateGuardianEmailPassword } from 'app/actions/guardianActions';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from 'views/atoms/Spinner';

interface DialogProps {
    open: () => (void)
}
export const PwdResetForm: FC<DialogProps> = ({ open }) => {

    const [pwd, setPwd] = useState({ password: '', confirm: '' })
    const { enqueueSnackbar } = useSnackbar();
    const [errorMsg, setErrorMsg] = useState('')
    const user = useSelector((state: any) => state.user);
    const [loading, setLoading] = useState(false)
    // Whenever an input changes value, change the corresponding state variable
    const handleInputChange = (event: any) => {
        event.preventDefault();
        const target = event.target;
        setPwd({
            ...pwd,
            [target.name]: target.value,
        });
    }

    const validatePwd = () => {
        if (pwd.confirm !== pwd.password) {
            setErrorMsg('Passwords don\'t match')
            return false
        } else if (pwd.password.length < 6) {
            setErrorMsg('Password should be at least 6 letters')
            return false
        } else {
            setErrorMsg('')
            return true
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // Verify that the passwords match
        if (!validatePwd()) return

        // Call Userfront.resetPassword()
        setLoading(true)
        const res: any = await doUpdateGuardianEmailPassword('', user.username, pwd.password, user.token)
        if (res === null)
            enqueueSnackbar('Password reset error! ', { variant: 'error' })
        else enqueueSnackbar('Password reset success! ', { variant: 'success' });
        setLoading(false)
        open()
    }
    return (
        loading ?
            <LoadingSpinner />
            :
            <ThemeProvider theme={settingPage}>
                <LSGridRow container spacing={3}>
                    <Grid item lg={4} xs={12}>
                        <LSLabel>
                            {'New Password'}
                        </LSLabel>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <LSTextField
                            error={errorMsg ? true : false}
                            size='small'
                            id='outlined-password-input'
                            label='New Password'
                            type='password'
                            autoComplete='new-password'
                            value={pwd.password}
                            onChange={handleInputChange}
                            name='password'
                            aria-describedby="component-error-text"
                            helperText={errorMsg}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <LSLabel>
                            {'Confirm Password'}
                        </LSLabel>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <LSTextField
                            size='small'
                            id='outlined-password-confirm'
                            label='Confirm'
                            type='password'
                            value={pwd.confirm}
                            onChange={handleInputChange}
                            name='confirm'
                        />
                    </Grid>
                </LSGridRow>
                <LSButtonContainer>
                    <LSButton
                        type='submit'
                        variant='contained'
                        onClick={handleSubmit}
                    >
                        {'Submit'}
                    </LSButton>
                    <LSButton
                        color="secondary"
                        variant='contained'
                        onClick={open}
                    >
                        {'Cancel'}
                    </LSButton>
                </LSButtonContainer>
            </ThemeProvider>
    );
}


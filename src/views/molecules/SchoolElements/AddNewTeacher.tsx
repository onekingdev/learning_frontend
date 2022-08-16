import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
import commonDictionary from 'constants/commonDictionary'
import LoadingButton from '@mui/lab/LoadingButton';
import { doAddTeachersToSchool } from 'app/actions';
import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { any2String } from 'views/utils';
import { GENDERS, USERTYPES } from 'constants/common';

const AddNewTeacher = (props: any) => {
    const { language, token } = useSelector((state: any) => state.user);
    const queryClient = useQueryClient()
    const { id } = useSelector((state: any) => state.school);

    const { enqueueSnackbar } = useSnackbar();

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pwd, setPwd] = useState('')
    const [gender, setGender] = useState('')
    const [userType, setUserType] = useState('')

    const [loading, setLoading] = useState(false)
    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        firstName: null,
        lastName: null,
        pwd: null,
        gender: null,
        email: null,
        userType: null
    });


    const addTeachersToSchool = useMutation((params: any) => doAddTeachersToSchool(id,
        any2String(params),
        token), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                queryClient.invalidateQueries(['school-teachers', id])
                enqueueSnackbar('Add teacher to school succeed', { variant: 'success' })
            }
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
            props.close()
        }
    })

    const formValidation = () => {
        const validateMsgTemp = { ...validateMsg };
        let valiResult = true;
        for (const key in validateMsg) {
            if (validateMsg[key] === null) {
                validateMsgTemp[key] = commonDictionary[language]?.fieldIsRequired;
            }
            if (validateMsgTemp[key]) valiResult = false;
        }
        setValidateMsg(validateMsgTemp);
        return valiResult;
    };

    const handleSubmit = () => {
        if (!formValidation()) return;

        setLoading(true)
        const queryParams: Array<any> = []

        queryParams.push({
            email: email || '',
            username: email || '',
            name: firstName || '',
            lastName: lastName || '',
            password: pwd || '',
            gender: gender || '',
            userType: userType || ''
        })
        addTeachersToSchool.mutate(queryParams)
    }

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateMsg({ ...validateMsg, [field]: errMsg });
    }

    return (
        <CardDialog
            isOpen={props.isOpen}
            open={props.close}
            title={commonDictionary[language]?.add_new}
            dialogContent={
                <Box padding={1}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                                label={commonDictionary[language]?.email}
                                onChange={(e: any) => {
                                    handleFormChange('email', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setEmail(e.target.value)
                                }}
                                error={!!validateMsg.email}
                                helperText={validateMsg.email}
                                value={email || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={commonDictionary[language]?.first_name}
                                onChange={(e: any) => {
                                    handleFormChange('firstName', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setFirstName(e.target.value)
                                }}
                                error={!!validateMsg.firstName}
                                helperText={validateMsg.firstName}
                                value={firstName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={commonDictionary[language]?.last_name}
                                onChange={(e: any) => {
                                    handleFormChange('lastName', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setLastName(e.target.value)
                                }}
                                error={!!validateMsg.lastName}
                                helperText={validateMsg.lastName}
                                value={lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-label">{commonDictionary[language]?.gender}</InputLabel>
                                <Select
                                    value={gender || ''}
                                    label={commonDictionary[language]?.gender}
                                    onChange={(e: any) => {
                                        handleFormChange('gender', e.target.value === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                        setGender(e.target.value)
                                    }}
                                >
                                    {GENDERS.map((selectData: any) => (
                                        <MenuItem value={selectData.id} key={selectData.id}>{selectData?.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-label">{commonDictionary[language]?.user_type}</InputLabel>
                                <Select
                                    value={userType || ''}
                                    label={commonDictionary[language]?.user_type}
                                    onChange={(e: any) => {
                                        handleFormChange('userType', e.target.value === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                        setUserType(e.target.value)
                                    }
                                    }
                                >
                                    {USERTYPES.map((selectData: any) => (
                                        <MenuItem value={selectData.id} key={selectData.id}>{selectData?.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={commonDictionary[language]?.password}
                                onChange={(e: any) => {
                                    handleFormChange('pwd', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setPwd(e.target.value)
                                }}
                                error={!!validateMsg.pwd}
                                helperText={validateMsg.pwd}
                                value={pwd}
                            />
                        </Grid>
                        <Grid item xs={12} justifyContent='start'>
                            <LoadingButton
                                loading={loading}
                                onClick={handleSubmit}
                                variant='contained'
                                sx={{
                                    maxWidth: 'fit-content'
                                }}
                            >
                                {commonDictionary[language]?.create_account_add}
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Box>
            }
        />
    )
}

export default AddNewTeacher

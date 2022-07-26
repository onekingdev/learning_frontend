import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import { dictionary } from './dictionary'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
import { useSnackbar } from 'notistack';
import commonDictionary from 'constants/commonDictionary'
import { useMutation } from '@tanstack/react-query';
import { doAddExistingStudentToClassroom } from 'app/actions';
import { queryClient } from 'index';
import LoadingButton from '@mui/lab/LoadingButton';

const AddExistStudent = (props: any) => {
    const { language, token } = useSelector((state: any) => state.user);
    const { currentClassId } = useSelector((state: any) => state.teacher);
    const { enqueueSnackbar } = useSnackbar();


    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        username: null,
        password: null,
    });

    const addExistingStudent = useMutation(() => doAddExistingStudentToClassroom(
        currentClassId,
        username,
        password,
        token), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            } else {
                queryClient.setQueryData(['fetch-classroom-students', currentClassId], data)
                enqueueSnackbar('Add student Succeed', { variant: 'success' })
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
        addExistingStudent.mutate()
    }

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateMsg({ ...validateMsg, [field]: errMsg });
    }

    useEffect(() => {
    }, [])
    return (
        <CardDialog
            isOpen={props.isOpen}
            open={props.close}
            dialogContent={
                <div >
                    <h1>{dictionary[language]?.addingANewStudent}</h1>
                    <h2>{'(' + dictionary[language]?.existingAccountSocrates + ')'}</h2>
                    <h3>{dictionary[language]?.pleaseIntroduceNestInformation}</h3>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                                label={dictionary[language]?.username}
                                onChange={(e: any) => {
                                    handleFormChange('username', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setUsername(e.target.value)
                                }}
                                error={!!validateMsg.username}
                                helperText={validateMsg.username}
                                value={username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={dictionary[language]?.password}
                                onChange={(e: any) => {
                                    handleFormChange('password', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setPassword(e.target.value)
                                }}
                                error={!!validateMsg.password}
                                helperText={validateMsg.password}
                                value={password}
                            />
                        </Grid>
                        <Grid item xs={12} justifyContent='start'>
                            <LoadingButton
                                onClick={handleSubmit}
                                variant='contained'
                                sx={{
                                    maxWidth: 'fit-content'
                                }}
                                loading={loading}
                            >
                                {dictionary[language]?.addAcctAndToTheClass}
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </div>
            }
        />
    )
}

export default AddExistStudent

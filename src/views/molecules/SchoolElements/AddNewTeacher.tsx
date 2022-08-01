import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
import commonDictionary from 'constants/commonDictionary'
import LoadingButton from '@mui/lab/LoadingButton';
import { doAddOneStudentToClassroom } from 'app/actions';
import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddNewTeacher = (props: any) => {
    const { language, token } = useSelector((state: any) => state.user);
    const gradeSet = useSelector((state: any) => state.teacher?.currentClass?.audience?.gradeSet) || []
    const { currentClassId } = useSelector((state: any) => state.teacher);
    const queryClient = useQueryClient()

    const { enqueueSnackbar } = useSnackbar();

    const [studentName, setStudentName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const [loading, setLoading] = useState(false)
    const [gradeId, setGradeId] = useState('')
    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        studentName: null,
        lastName: null,
        userName: null,
        pwd: null,
        gradeId: null
    });


    const addNewStudent = useMutation(() => doAddOneStudentToClassroom(currentClassId,
        gradeId,
        lastName,
        studentName,
        pwd,
        userName,
        token), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
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

        setLoading(true)
        addNewStudent.mutate()
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
                                label={commonDictionary[language]?.teacher_name}
                                onChange={(e: any) => {
                                    handleFormChange('studentName', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setStudentName(e.target.value)
                                }}
                                error={!!validateMsg.studentName}
                                helperText={validateMsg.studentName}
                                value={studentName}
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
                            <TextField
                                label={commonDictionary[language]?.username}
                                onChange={(e: any) => {
                                    handleFormChange('userName', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setUserName(e.target.value)
                                }}
                                error={!!validateMsg.userName}
                                helperText={validateMsg.userName}
                                value={userName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-label">{commonDictionary[language]?.select_grade}</InputLabel>
                                <Select
                                    label={commonDictionary[language]?.select_grade}
                                    value={gradeId || ''}
                                    onChange={(e) => {
                                        handleFormChange('gradeId', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                        const selectedGrade = gradeSet.find((item: any) => item.id === e.target.value) || {}
                                        setGradeId(selectedGrade.id)
                                    }}
                                    error={!!validateMsg.gradeId}
                                // helperText={validateMsg.gradeId}
                                >
                                    {gradeSet.length > 0 && gradeSet.map((grade: any) => (
                                        <MenuItem value={grade.id} key={grade.id}>{grade.name}</MenuItem>
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

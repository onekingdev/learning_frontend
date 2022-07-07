import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Box, Button, Grid } from '@mui/material';
import { dictionary } from './dictionary'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
import commonDictionary from 'constants/commonDictionary'
import { LANGUAGES } from 'constants/common';

const AddNewStudent = (props: any) => {
    const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;
    const [studentName, setStudentName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        studentName: null,
        lastName: null,
        userName: null,
        pwd: null,
    });

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
        props.close();
    }

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateMsg({ ...validateMsg, [field]: errMsg });
    }

    return (
        <CardDialog
            isOpen={props.isOpen}
            open={props.close}
            title={dictionary[language]?.newStudent}
            dialogContent={
                <Box padding={1}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                                label={dictionary[language]?.student_name}
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
                                label={dictionary[language]?.lastName}
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
                                label={dictionary[language]?.username}
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
                            <TextField
                                label={dictionary[language]?.password}
                                onChange={(e: any) => {
                                    handleFormChange('className', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                    setPwd(e.target.value)
                                }}
                                error={!!validateMsg.pwd}
                                helperText={validateMsg.pwd}
                                value={pwd}
                            />
                        </Grid>
                        <Grid item xs={12} justifyContent='start'>
                            <Button
                                onClick={handleSubmit}
                                variant='contained'
                                sx={{
                                    maxWidth: 'fit-content'
                                }}
                            >
                                {commonDictionary[language]?.create_account_add}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            }
        />
    )
}

export default AddNewStudent

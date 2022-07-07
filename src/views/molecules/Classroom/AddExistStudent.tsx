import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material';
import { dictionary } from './dictionary'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
// import { useSnackbar } from 'notistack';
import commonDictionary from 'constants/commonDictionary'
import { LANGUAGES } from 'constants/common';

const AddExistStudent = (props: any) => {
    const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;

    // const { enqueueSnackbar } = useSnackbar();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        username: null,
        password: null,
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
                            <Button
                                onClick={handleSubmit}
                                variant='contained'
                                sx={{
                                    maxWidth: 'fit-content'
                                }}
                            >
                                {dictionary[language]?.addAcctAndToTheClass}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            }
        />
    )
}

export default AddExistStudent

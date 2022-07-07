import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Grid, FormControl, Select, Avatar } from '@mui/material';
import { dictionary } from './dictionary'
import {
    Container,
    useStyles,
} from './Style'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import InputLabel from '@mui/material/InputLabel';
import TextField from 'views/molecules/MuiTextField';
import { getAudiencesWithGrades } from 'app/actions/audienceActions'
import { useSnackbar } from 'notistack';
import MenuItem from '@mui/material/MenuItem';
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import commonDictionary from 'constants/commonDictionary'
import { LANGUAGES } from 'constants/common';
import avatar from 'views/assets/avatars/girl-6.svg'
import { useMediaQuery } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { useHistory } from 'react-router-dom';

const EditStudent = (props: any) => {
    const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;
    const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
    const history = useHistory();

    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    // const [audiences, setAudiences] = useState([]);
    // const [audience, setAudience] = useState();
    const [grades, setGrades] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [lastName, setLastName] = useState('');
    const [classroom, setClassroom] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        name: null,
        grade: null,
        lastName: null,
        classroom: null,
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

    const setAudienceData = async () => {
        const result: any = await getAudiencesWithGrades(
            // user.token,
            // dispatch
        );
        if (!result.success) {
            enqueueSnackbar(result.msg, { variant: 'error' });
            return false;
        }
        // setAudiences(result.data);
        return true;
    }

    const handleSubmit = () => {
        if (!formValidation()) return;
        props.close();
    }

    const handleRemove = () => {

        // TODO: Add backdrop for confirmation

    }

    const handleViewReport = () => {

        // TODO: Redirect to student progress page
        history.push('/report/teacher/' + 247)

    }

    const handleAddToGroup = () => {

    }

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateMsg({ ...validateMsg, [field]: errMsg });
    }

    useEffect(() => {
        setAudienceData();
    }, [])
    return (
        <Container>
            <CardDialog
                isOpen={props.isOpen}
                open={props.close}
                dialogContent={
                    <Grid container spacing={2}>
                        <Grid item container xs={12} sm={4} spacing={2}>
                            <Grid item xs={12}>
                                <Avatar src={avatar}
                                    sx={{
                                        height: isMobile ? 80 : 200,
                                        width: isMobile ? 80 : 200,
                                        border: 'solid gray 2px'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    value={dictionary[language]?.viewProgressReport}
                                    bgColor={BasicColor.white}
                                    color={BasicColor.blue}
                                    borderColor={BasicColor.blue}
                                    onClick={handleViewReport}
                                    align={'right'}
                                    fullWidth={true}
                                    borderWidth={1}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={dictionary[language]?.name}
                                        onChange={(e: any) => {
                                            handleFormChange('name', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                            setName(e.target.value)
                                        }}
                                        error={!!validateMsg.name}
                                        helperText={validateMsg.name}
                                        value={name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
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
                                <Grid item xs={12} sm={6}>
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
                                <Grid item xs={12} sm={6}>
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
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id='select-grade-label'>
                                            {dictionary[language]?.grade}
                                        </InputLabel>
                                        <Select
                                            labelId='select-grade-label'
                                            id='select-grade'
                                            value={grade ? grade : {}}
                                            label={dictionary[language]?.grade}
                                            className={`${classes.select} err-border`}
                                            onChange={(e: any) => {
                                                setGrade(e.target.value);
                                                validateMsg.grade = '';
                                                setValidateMsg({ ...validateMsg });
                                            }}
                                            sx={
                                                validateMsg.grade ? {
                                                    '& fieldset': {
                                                        borderColor: `${BasicColor.red} !important`,
                                                    },
                                                } : {}
                                            }
                                            displayEmpty={true}
                                        >
                                            {grades?.length > 0 && grades.map((value: any, index: number) => (
                                                <MenuItem value={value} key={index}>
                                                    {value.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <div className='err-text'>{validateMsg.grade}</div>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id='select-classroom-label'>
                                            {dictionary[language]?.classroom}
                                        </InputLabel>
                                        <Select
                                            labelId='select-classroom-label'
                                            id='select-classroom'
                                            value={classroom ? classroom : {}}
                                            label={dictionary[language]?.classroom}
                                            className={`${classes.select} err-border`}
                                            onChange={(e: any) => {
                                                setClassroom(e.target.value);
                                                validateMsg.classroom = '';
                                                setValidateMsg({ ...validateMsg });
                                            }}
                                            sx={
                                                validateMsg.classroom ? {
                                                    '& fieldset': {
                                                        borderColor: `${BasicColor.red} !important`,
                                                    },
                                                } : {}
                                            }
                                            displayEmpty={true}
                                        >
                                            {classrooms?.length > 0 && classrooms.map((value: any, index: number) => (
                                                <MenuItem value={value} key={index}>
                                                    {value.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <div className='err-text'>{validateMsg.classroom}</div>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        value={'+ ' + dictionary[language]?.addToAGroup}
                                        color={BasicColor.blue}
                                        bgColor={BasicColor.white}
                                        onClick={handleAddToGroup}
                                        fullWidth={true}
                                        variant={'text'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                value={dictionary[language]?.removeStudent}
                                color={BasicColor.red}
                                bgColor={BasicColor.white}
                                onClick={handleRemove}
                                align={'left'}
                                fullWidth={true}
                                variant={'text'}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                value={dictionary[language]?.save}
                                bgColor={BasicColor.green}
                                onClick={handleSubmit}
                                align={'right'}
                                fullWidth={true}
                            />
                        </Grid>
                    </Grid>
                }
            />
        </Container>
    )
}

export default EditStudent

import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Grid, FormControl, Select, Button } from '@mui/material';
import { dictionary } from './dictionary'
import {
    useStyles,
} from './Style'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import InputLabel from '@mui/material/InputLabel';
import TextField from 'views/molecules/MuiTextField';
import { getAudiencesWithGrades } from 'app/actions/audienceActions'
import { useSnackbar } from 'notistack';
import MenuItem from '@mui/material/MenuItem';
// import Button                    from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import commonDictionary from 'constants/commonDictionary'
import { LANGUAGES } from 'constants/common';
import { useHistory } from 'react-router-dom';
import { doAddClassroomToTeacher } from 'app/actions';
import { TEACHER_ADD_CLASSROOM } from 'app/types';
import LoadingButton from '@mui/lab/LoadingButton';

const AddClassroomForm = (props: any) => {
    const { token, language } = useSelector((state: any) => state.user)
    const history = useHistory();
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    const [audiences, setAudiences] = useState([]);
    const [audience, setAudience] = useState('');
    const [className, setClassName] = useState('')
    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
        className: null,
        audience: null,
    });
    const [loading, setLoading] = useState(false)

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
        setAudiences(result.data);
        return true;
    }

    const handleSubmit = async () => {
        if (!formValidation()) return;

        setLoading(true)

        const res: any = await doAddClassroomToTeacher(audience, className, token)
        if (res.status) {
            dispatch({
                type: TEACHER_ADD_CLASSROOM,
                payload: res.data,
            });
            props.close()
        } else {
            enqueueSnackbar(res.message, { variant: 'error' })
        }
        setLoading(false)
    }

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateMsg({ ...validateMsg, [field]: errMsg });
    }

    useEffect(() => {
        setAudienceData();
    }, [])
    return (
        <CardDialog
            isOpen={props.isOpen}
            open={props.close}
            title={dictionary[language]?.newClassroom}
            dialogContent={
                <Grid container spacing={4} padding={2}>
                    <Grid item xs={12}>
                        <TextField
                            label={dictionary[language]?.classroomName}
                            onChange={(e: any) => {
                                handleFormChange('className', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                setClassName(e.target.value)
                            }}
                            error={!!validateMsg.className}
                            helperText={validateMsg.className}
                            value={className}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id='select-audience-label'>
                                {dictionary[language]?.selectYourCurriculum}
                            </InputLabel>
                            <Select
                                labelId='select-audience-label'
                                id='select-audience'
                                value={audience || ''}
                                label={dictionary[language]?.selectYourCurriculum}
                                className={`${classes.select} err-border`}
                                onChange={(e: any) => {
                                    const selected: any = audiences.find((p: any) => p.id === e.target.value)
                                    setAudience(selected?.id || '');
                                    validateMsg.audience = '';
                                    setValidateMsg({ ...validateMsg });
                                }}
                                sx={
                                    validateMsg.audience ? {
                                        '& fieldset': {
                                            borderColor: `${BasicColor.red} !important`,
                                        },
                                    } : {}
                                }
                                displayEmpty={true}
                            >
                                {audiences?.length > 0 && audiences.map((value: any, index: number) => (
                                    <MenuItem value={value.id} key={index}>
                                        {value.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <div className='err-text'>{validateMsg.audience}</div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton
                            onClick={handleSubmit}
                            variant='contained'
                            loading={loading}
                        >{dictionary[language]?.createClassroom}
                        </LoadingButton>
                    </Grid>
                </Grid>
            }
        />
    )
}

export default AddClassroomForm

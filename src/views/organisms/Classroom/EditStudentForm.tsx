import { useSelector } from 'react-redux'
import { useState, useEffect, FC } from 'react'
import { Grid, FormControl, Select, Avatar, TextField, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import { dictionary } from './dictionary'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import InputLabel from '@mui/material/InputLabel';
import { useSnackbar } from 'notistack';
import MenuItem from '@mui/material/MenuItem';
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import commonDictionary from 'constants/commonDictionary'
import avatar from 'views/assets/avatars/girl-6.svg'
import { useMediaQuery } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { doFetchClassroomGroups, doFetchTeacherClassrooms, doUpdateStudent } from 'app/actions';
import LoadingButton from '@mui/lab/LoadingButton';
import ConfirmDeleteStudent from './ConfirmDeleteStudentForm';

interface EditStudentProps {
    _id: string | number    // student Id
    _firstName: string
    _lastName: string
    _username: string
    _gradeId: string
    _classId: string
    _groupIds: Array<any>
    _close: () => void
    _isOpen: boolean
}

const EditStudent: FC<EditStudentProps> = ({
    _firstName,
    _id,
    _lastName,
    _username,
    _isOpen,
    _close,
    _groupIds,
    _gradeId,
    _classId
}) => {
    const { language, token } = useSelector((state: any) => state.user);
    const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
    const history = useHistory();
    const gradeSet = useSelector((state: any) => state.teacher?.currentClass?.audience?.gradeSet) || []
    const teacherId = useSelector((state: any) => state.teacher.id)
    const queryClient = useQueryClient()
    const { data: classrooms } = useQuery(
        ['teacher-classrooms', teacherId],
        () => doFetchTeacherClassrooms(teacherId, token),
        { refetchIntervalInBackground: false }
    )

    console.log({ classrooms })
    const { data: groups } = useQuery(
        ['classroom-groups', _classId],
        () => doFetchClassroomGroups(_classId, token),
        { refetchIntervalInBackground: false }
    )
    const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState('');
    const [selected, setSelected] = useState<Array<string>>([])
    const [grade, setGrade] = useState('');
    const [lastName, setLastName] = useState('');
    const [classroom, setClassroom] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    const updateStudent = useMutation(() => doUpdateStudent(
        token,
        _id,
        classroom,
        grade,
        selected,
        lastName,
        name,
        password,
        username), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                await queryClient.refetchQueries(['classroom-students', _classId])
                enqueueSnackbar('Update student Succeed', { variant: 'success' })
            }
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
            _close()
        }
    })

    const handleStudentSelect = (id: string) => {

        const tempSeleted = [...selected]
        if (tempSeleted.includes(id)) {
            const filtered = tempSeleted.filter(element => { return element !== id })
            setSelected(filtered)
        } else setSelected([...tempSeleted, id])
    }

    const handleSubmit = () => {
        setLoading(true)
        updateStudent.mutate()
        // close();
    }

    const handleRemove = () => {
        // Open confirmation Dialog
        setIsConfirmOpen(true)
    }

    const handleViewReport = () => {

        // TODO: Redirect to student progress page
        history.push('/report/teacher/' + _id)

    }

    const updateSelected = (ids: Array<any>) => {
        const temp = []
        for (const id of ids) {
            temp.push(id.id)
        }
        setSelected(temp)
    }

    useEffect(() => {
        updateSelected(_groupIds)
        setName(_firstName)
        setLastName(_lastName)
        setUsername(_username)
        setGrade(_gradeId)
        setClassroom(_classId)
    }, [
        _firstName,
        _id,
        _lastName,
        _username,
        _groupIds,
        _gradeId,
        _classId
    ])
    return (
        // <Container>
        <CardDialog
            isOpen={_isOpen}
            open={_close}
            dialogContent={
                <>
                    <Grid container spacing={3} mt={2} padding={1}>
                        <Grid item container xs={12} sm={4} spacing={3}>
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
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={dictionary[language]?.name}
                                        onChange={(e: any) => {
                                            setName(e.target.value)
                                        }}
                                        value={name || ''}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={dictionary[language]?.lastName}
                                        onChange={(e: any) => {
                                            setLastName(e.target.value)
                                        }}
                                        value={lastName || ''}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={dictionary[language]?.username}
                                        onChange={(e: any) => {
                                            setUsername(e.target.value)
                                        }}
                                        value={username || ''}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={dictionary[language]?.password}
                                        onChange={(e: any) => {
                                            setPassword(e.target.value)
                                        }}
                                        value={password || ''}
                                        variant='outlined'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel id="demo-simple-select-label">{commonDictionary[language]?.select_grade}</InputLabel>
                                        <Select
                                            label={commonDictionary[language]?.select_grade}
                                            id='select-grade'
                                            value={grade || _gradeId}
                                            onChange={(e) => {
                                                const selectedGrade = gradeSet.find((item: any) => item.id === e.target.value) || {}
                                                setGrade(selectedGrade.id)
                                            }}
                                        >
                                            {gradeSet.length > 0 && gradeSet.map((grade: any) => (
                                                <MenuItem value={grade.id} key={grade.id}>{grade.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {/* <FormControl fullWidth>
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
                                    </FormControl> */}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {
                                        classrooms &&
                                        <FormControl fullWidth>
                                            <InputLabel id='select-classroom-label'>
                                                {dictionary[language]?.classroom}
                                            </InputLabel>
                                            <Select
                                                labelId='select-classroom-label'
                                                id='select-classroom'
                                                value={classroom || ''}
                                                label={dictionary[language]?.classroom}
                                                onChange={(e: any) => {
                                                    const selectedClassroom = classrooms.find((item: any) => item.classroom.id === e.target.value)
                                                    setClassroom(selectedClassroom?.classroom.id);
                                                }}
                                                displayEmpty={true}
                                            >
                                                {classrooms.length > 0 && classrooms.filter((item: any) => item.classroom).map((value: any) => (
                                                    <MenuItem value={value.classroom.id} key={value.classroom.id}>
                                                        {value.classroom.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    }
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography>Groups</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box>
                                        {
                                            groups && groups.map((group: any) => (
                                                <FormControlLabel
                                                    key={group.id}
                                                    label={group.name || ''}
                                                    value={group.id}
                                                    sx={{
                                                        marginLeft: 5
                                                    }}
                                                    control={
                                                        <Checkbox checked={selected.includes(group.id)} onChange={() => handleStudentSelect(group.id)} />
                                                    }
                                                />
                                            ))
                                        }
                                    </Box>
                                </Grid>

                                {/* <Grid item xs={12}>
                                    <Button
                                        value={'+ ' + dictionary[language]?.addToAGroup}
                                        color={BasicColor.blue}
                                        bgColor={BasicColor.white}
                                        onClick={handleAddToGroup}
                                        fullWidth={true}
                                        variant={'text'}
                                    />
                                </Grid> */}
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
                            <LoadingButton
                                onClick={handleSubmit}
                                fullWidth={true}
                                loading={loading}
                                variant='contained'
                            >
                                {dictionary[language]?.save}
                            </LoadingButton>
                        </Grid>
                    </Grid>

                    <ConfirmDeleteStudent
                        classroomId={_classId}
                        close={() => setIsConfirmOpen(false)}
                        isOpen={isConfirmOpen}
                        studentId={_id}
                    />
                </>
            }
        />
        // </Container>
    )
}

export default EditStudent

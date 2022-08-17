import { useSelector } from 'react-redux'
import { useState, useEffect, FC } from 'react'
import {
    Grid, FormControl, Select, TextField, Button,
} from '@mui/material';
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import commonDictionary from 'constants/commonDictionary'
import { useMediaQuery } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { doFetchTeacherClassrooms } from 'app/actions';
import LoadingButton from '@mui/lab/LoadingButton';
import blueDoor from 'views/assets/classroom-item.svg'
import { USERTYPES } from 'constants/common';

interface EditStudentProps {
    _id: string | number    // teacher Id
    _firstName: string
    _lastName: string
    _username: string
    _close: () => void
    _isOpen: boolean
    _userType: 'Admin' | 'Teacher'
}

const EditTeacher: FC<EditStudentProps> = ({
    _id,
    _firstName,
    _lastName,
    _username,
    _isOpen,
    _close,
    _userType
}) => {
    const { language, token } = useSelector((state: any) => state.user);
    const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
    const history = useHistory();
    const { data: classrooms } = useQuery(
        ['teacher-classrooms', _id],
        () => doFetchTeacherClassrooms(_id, token),
        { refetchIntervalInBackground: false }
    )

    // const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [classroom, setClassroom] = useState('');
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [userType, setUserType] = useState<any>()

    const [loading, setLoading] = useState(false)

    // const updateStudent = useMutation(() => doUpdateStudent(
    //     token,
    //     _id,
    //     classroom,
    //     grade,
    //     selected,
    //     lastName,
    //     name,
    //     password,
    //     username), {
    //     onSuccess: async data => {
    //         if (data.message) {
    //             enqueueSnackbar(data.message, { variant: 'error' })
    //         }
    //         else {
    //             await queryClient.refetchQueries(['classroom-students', _classId])
    //             enqueueSnackbar('Update student Succeed', { variant: 'success' })
    //         }
    //     },
    //     onError: async (error: any) => {
    //         enqueueSnackbar(error.message, { variant: 'error' })
    //     },
    //     onSettled: async () => {
    //         setLoading(false)
    //         _close()
    //     }
    // })

    const handleSubmit = () => {
        // setLoading(true)
        // updateStudent.mutate()
        _close();
    }

    const handleRemove = () => {
        // Open confirmation Dialog
        setIsConfirmOpen(true)
    }

    const handleViewTeacherClassroom = () => {

        history.push('/teacher/classrooms')

    }

    useEffect(() => {
        setName(_firstName)
        setLastName(_lastName)
        setUsername(_username)
    }, [
        _firstName,
        _id,
        _lastName,
        _username,
    ])
    return (
        <CardDialog
            isOpen={_isOpen}
            open={_close}
            dialogContent={
                <>
                    <Grid container spacing={3} mt={2} padding={1}>
                        <Grid item container xs={12} sm={4} spacing={3}>
                            <Grid item xs={12}>
                                <img
                                    src={blueDoor}
                                    style={{ width: isMobile ? 50 : 100 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    onClick={handleViewTeacherClassroom}
                                    variant='outlined'
                                    disabled={_userType === 'Admin'}
                                >
                                    {commonDictionary[language]?.view_teacher_classroom}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={commonDictionary[language]?.name}
                                        onChange={(e: any) => {
                                            setName(e.target.value)
                                        }}
                                        value={name || ''}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={commonDictionary[language]?.last_name}
                                        onChange={(e: any) => {
                                            setLastName(e.target.value)
                                        }}
                                        value={lastName || ''}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label={commonDictionary[language]?.username_email}
                                        onChange={(e: any) => {
                                            setUsername(e.target.value)
                                        }}
                                        value={username || ''}
                                        disabled
                                    />
                                </Grid>

                                {/* <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={commonDictionary[language]?.password}
                                        onChange={(e: any) => {
                                            setPassword(e.target.value)
                                        }}
                                        value={password || ''}
                                        variant='outlined'
                                    />
                                </Grid> */}
                                <Grid item xs={6}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel id="demo-simple-select-label">{commonDictionary[language]?.user_type}</InputLabel>
                                        <Select
                                            value={userType?.id || _userType || ''}
                                            label={commonDictionary[language]?.user_type}
                                            onChange={(e: any) => {
                                                // handleFormChange('userType', e.target.value === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                                                const selectedUserType = USERTYPES.find((item: any) => item.id === e.target.value) || {}
                                                setUserType(selectedUserType)
                                            }
                                            }
                                            disabled
                                        >
                                            {USERTYPES.map((selectData: any) => (
                                                <MenuItem value={selectData.id} key={selectData.id}>{selectData?.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {
                                        classrooms &&
                                        <FormControl fullWidth>
                                            <InputLabel id='select-classroom-label'>
                                                {commonDictionary[language]?.classroom}
                                            </InputLabel>
                                            <Select
                                                labelId='select-classroom-label'
                                                id='select-classroom'
                                                value={classroom || classrooms[0]?.classroom?.id || ''}
                                                label={commonDictionary[language]?.classroom}
                                                onChange={(e: any) => {
                                                    const selectedClassroom = classrooms.find((item: any) => item.classroom.id === e.target.value)
                                                    setClassroom(selectedClassroom?.classroom.id);
                                                }}
                                                displayEmpty={true}
                                                disabled
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
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={handleRemove}
                                variant={'text'}
                                disabled
                            >
                                {commonDictionary[language]?.remove_teacher}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <LoadingButton
                                // onClick={handleSubmit}
                                // ! update onclick action when the update teacher mutation is ready
                                onClick={handleSubmit}
                                fullWidth={true}
                                loading={loading}
                                variant='contained'
                            >
                                Close
                                {/* {commonDictionary[language]?.save} */}
                            </LoadingButton>
                        </Grid>
                    </Grid>

                    {/* <ConfirmDeleteStudent
                        classroomId={_classId}
                        close={_close}
                        isOpen={isConfirmOpen}
                        studentId={_id}
                    /> */}
                </>
            }
        />
    )
}

export default EditTeacher

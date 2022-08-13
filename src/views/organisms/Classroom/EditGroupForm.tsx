import { useSelector } from 'react-redux'
import { FC, useEffect, useState } from 'react'
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
import commonDictionary from 'constants/commonDictionary'
import {  doFetchClassroomStudents } from 'app/actions';
import LoadingButton from '@mui/lab/LoadingButton';
import {  useQuery } from '@tanstack/react-query';

interface EditGroupFormProps {
    id: string | number
    name: string
    studentSet: Array<any>
    close: () => void
    isOpen: boolean,
    students: Array<any>
}

const EditGroupFrom: FC<EditGroupFormProps> = ({
    name,
    studentSet,
    close,
    isOpen
}) => {
    const { language, token } = useSelector((state: any) => state.user);
    const { currentClassId } = useSelector((state: any) => state.teacher);
    const [groupName, setGroupName] = useState('')

    const { data: students } = useQuery(
        ['classroom-students', currentClassId],
        () => doFetchClassroomStudents(currentClassId, token),
        { refetchIntervalInBackground: false, initialData: [] }
    )

    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        setGroupName(name)
    }, [name])

    return (
        <CardDialog
            isOpen={isOpen}
            open={close}
            title={commonDictionary[language]?.edit_group}
            dialogContent={
                <Box display='flex' flexDirection={'column'} alignItems='center' gap={2}>
                    <TextField
                        label='Group Name'
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    ></TextField>
                    {
                        students &&
                        <Box sx={{
                            width: 300,
                            background: '#22BAAF33',
                            // padding: '30px 50px',
                        }}
                            display='flex'
                            alignItems='start'
                            flexDirection='column'
                        >{
                                students.map((student: any) =>
                                    <FormControlLabel
                                        key={student.id}
                                        label={student.firstName || ''}
                                        value={student.id}
                                        sx={{
                                            marginLeft: 5
                                        }}
                                        control={
                                            <Checkbox checked={studentSet.some((item: any) => item.id === student.id)} />
                                        }
                                    />
                                )
                            }
                        </Box>
                    }
                    <LoadingButton
                        onClick={close}
                        variant='contained'
                        // loading={loading}
                    >{commonDictionary[language]?.edit_group}
                    </LoadingButton>
                </Box>
            }
        />
    )
}

export default EditGroupFrom

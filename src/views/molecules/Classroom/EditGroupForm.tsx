import { useSelector } from 'react-redux'
import { FC, useEffect, useState } from 'react'
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import TextField from 'views/molecules/MuiTextField';
import { useSnackbar } from 'notistack';
import commonDictionary from 'constants/commonDictionary'
import { doCreateGroup, doFetchClassroomStudents } from 'app/actions';
import LoadingButton from '@mui/lab/LoadingButton';
import { StudentsCheckbox } from './StudentsCheckbox';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from 'index'
import { any2String } from 'views/utils';
// src\index.tsx

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
    const { currentClassId, currentClass } = useSelector((state: any) => state.teacher);
    const [selected, setSelected] = useState<Array<any>>([])
    const [groupName, setGroupName] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    const { data: students } = useQuery(
        ['fetch-classroom-students', currentClassId],
        () => doFetchClassroomStudents(currentClassId, token),
        { refetchIntervalInBackground: false, initialData: [] }
    )

    // const createGroup = useMutation(() => doCreateGroup(currentClassId,
    //     groupName,
    //     any2String(selected),
    //     token), {
    //     onSuccess: async data => {
    //         if (data.message) {
    //             enqueueSnackbar(data.message, { variant: 'error' })
    //         }
    //         else {
    //             queryClient.setQueryData(['classroom-groups', currentClassId], (groups: Array<any> | undefined) => [...groups || [], data])
    //             enqueueSnackbar('Create Group Succeed', { variant: 'success' })
    //         }
    //     },
    //     onError: async (error: any) => {
    //         enqueueSnackbar(error.message, { variant: 'error' })
    //     },
    //     onSettled: async () => {
    //         setLoading(false)
    //         close()
    //     }
    // })


    const [loading, setLoading] = useState(false)



    const handleSubmit = async () => {
        if (selected.length < 1 || !groupName) {
            enqueueSnackbar('Set group settings correctly', { variant: 'error' })
            return;
        }
        setLoading(true)

        // createGroup.mutate()

    }

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
                        onClick={handleSubmit}
                        variant='contained'
                        loading={loading}
                    >{commonDictionary[language]?.edit_group}
                    </LoadingButton>
                </Box>
            }
        />
    )
}

export default EditGroupFrom

import { useSelector } from 'react-redux'
import { useState } from 'react'
import {  Box } from '@mui/material';
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
const AddGroupForm = (props: any) => {
    const { language, token } = useSelector((state: any) => state.user);
    const { currentClassId } = useSelector((state: any) => state.teacher);
    const [selected, setSelected] = useState<Array<any>>([])
    const { currentClass } = useSelector((state: any) => state.teacher)
    const [groupName, setGroupName] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    const { data: students } = useQuery(
        ['fetch-classroom-students', currentClassId],
        () => doFetchClassroomStudents(currentClassId, token),
        { refetchIntervalInBackground: false, initialData: [] }
    )

    const createGroup = useMutation(() => doCreateGroup(currentClassId,
        groupName,
        any2String(selected),
        token), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                queryClient.setQueryData(['classroom-groups', currentClassId], (groups: Array<any> | undefined) => [...groups || [], data])
                enqueueSnackbar('Create Group Succeed', { variant: 'success' })
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


    const [loading, setLoading] = useState(false)



    const handleSubmit = async () => {
        if (selected.length < 1 || !groupName) {
            enqueueSnackbar('Set group settings correctly', { variant: 'error' })
            return;
        }
        setLoading(true)

        createGroup.mutate()

    }

    return (
        <CardDialog
            isOpen={props.isOpen}
            open={props.close}
            title={currentClass.name || commonDictionary[language]?.classroom}
            dialogContent={
                <Box display='flex' flexDirection={'column'} alignItems='center' gap={2}>
                    <TextField
                        label='Group Name'
                        value={groupName || ''}
                        onChange={(e) => setGroupName(e.target.value)}
                    ></TextField>
                    {
                        students && <StudentsCheckbox students={students} onChange={setSelected} />
                    }
                    <LoadingButton
                        onClick={handleSubmit}
                        variant='contained'
                        loading={loading}
                    >{commonDictionary[language]?.create_group}
                    </LoadingButton>
                </Box>
            }
        />
    )
}

export default AddGroupForm

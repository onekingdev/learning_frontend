import { useSelector } from 'react-redux'
import { useState, FC } from 'react'
import { Typography, Box, Dialog } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { doDeleteStudent } from 'app/actions';
import LoadingButton from '@mui/lab/LoadingButton';
import { queryClient } from 'index';

interface EditStudentProps {
    studentId: string | number
    classroomId: string | number
    close: () => void
    isOpen: boolean
}

const ConfirmDeleteStudent: FC<EditStudentProps> = ({
    studentId,
    classroomId,
    close,
    isOpen
}) => {
    const { language, token } = useSelector((state: any) => state.user);
    const { enqueueSnackbar } = useSnackbar();

    const [loading, setLoading] = useState(false)

    const deleteStudent = useMutation(() => doDeleteStudent(
        token,
        studentId,
        classroomId), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                await queryClient.refetchQueries(['classroom-students', classroomId])
                enqueueSnackbar('Remove student Succeed', { variant: 'success' })
            }
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
            close()
        }
    })

    const handleRemove = () => {

        // TODO: Add backdrop for confirmation
        setLoading(true)
        deleteStudent.mutate()

    }

    return (
        // <Container>
        <Dialog
            onClose={close}
            open={isOpen}
            fullWidth
            children={
                <Box display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} gap={2} padding={2}
                    sx={{ background: 'linear-gradient(0deg, rgba(244, 194, 34, 0.4), rgba(244, 194, 34, 0.4)),linear-gradient(0deg, #FFFFFF, #FFFFFF)' }}
                >
                    <Typography variant='h4' textAlign={'center'}>
                        Do you want to remove
                        <br />
                        the student from
                        <br />
                        the classroom?
                    </Typography>
                    <LoadingButton
                        loading={loading}
                        variant='contained'
                        color='warning'
                        onClick={handleRemove}
                    >
                        Remove
                    </LoadingButton>
                </Box>
            }
        />
        // </Container>
    )
}

export default ConfirmDeleteStudent

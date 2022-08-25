import { FC, useState, useRef } from 'react'
import { Container, Box, Button, Typography } from '@mui/material'
import { exportComponentAsPNG } from 'react-component-export-image'
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery'

import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@tanstack/react-query';
import { doFetchCertificateById, doSendCertificationToStudents } from 'app/actions';
import { StudentsCheckbox } from 'views/organisms/Classroom/StudentsCheckbox';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';

interface ICreateCertificate {
    certificateId: string | number
    students: Array<any>
}

interface ISendCertificationMutation {
    certificateId: string | number,
    editableText: string,
    fromWhoId: number | string,
    title: string,
    toWhos: Array<number>,
    token: string
}

export const SendCertificationDgContent: FC<ICreateCertificate> = ({ certificateId, students }) => {

    const isMobile = useSocratesMediaQuery('xs')
    const { token, firstName, lastName,id: userId } = useSelector((state: any) => state.user);
    const [toWhos, SeToWhos] = useState<Array<any>>([])
    const { enqueueSnackbar } = useSnackbar();

    const { data: certificate } = useQuery(
        ['certificate', certificateId], () => doFetchCertificateById(certificateId, token),
        { refetchIntervalInBackground: false, initialData: [] }
    )

    const [title, seTitle] = useState('')
    const [editableText, seteditableText] = useState('')
    const [sendDate, setSendDate] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const certRef = useRef<HTMLElement>(null)

    const send = useMutation(({
        certificateId,
        editableText,
        fromWhoId,
        title,
        toWhos,
        token
    }: ISendCertificationMutation) => doSendCertificationToStudents(
        certificateId,
        editableText,
        fromWhoId,
        title,
        toWhos,
        token), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            }
            else {
                enqueueSnackbar('Send certification success', { variant: 'success' })
            }
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
        }
    })

    const handleTitleChange = (e: any) => {
        seTitle(e.target.value)
    }

    const handleContentChange = (e: any) => {
        seteditableText(e.target.value)
    }

    const handleSendClick = () => {
        if (!title || !editableText) {
            enqueueSnackbar('Input title or content', { variant: 'error' })
            return
        }
        setLoading(true)

        send.mutate({
            certificateId: certificate.id,
            editableText,
            fromWhoId: userId,
            title,
            toWhos,
            token
        })
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingBottom: 2 }}>
            {
                certificate &&
                <Box ref={certRef}
                    id='certificate'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        height: 400,
                        backgroundImage: `url(${certificate.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        placeholder='Title'
                        style={{
                            position: 'absolute',
                            top: certificate.posTitle,
                            left: 0,
                            right: 0,
                            fontSize: isMobile ? 24 : 45,
                            textAlign: 'center',
                            border: 'none',
                            background: 'none',
                            filter: 'drop-shadow(0 0 0.1rem blue)'
                        }}
                    />
                    <textarea
                        value={editableText}
                        onChange={handleContentChange}
                        placeholder='Editible Text'
                        style={{
                            position: 'absolute',
                            top: certificate.poseditableText,
                            left: 0,
                            right: 0,
                            fontSize: 20,
                            textAlign: 'center',
                            border: 'none',
                            background: 'none',
                            filter: 'drop-shadow(0 0 0.1rem green)'
                        }}
                    />
                    <Typography position='absolute' bottom={certificate.posStudentName}
                        sx={{ filter: 'drop-shadow(0 0 0.1rem gold)' }}
                    >
                        Student Name
                    </Typography>
                    <Typography
                        position='absolute'
                        bottom={certificate.posFromWho}
                        left='50%'
                        right={0}
                        textAlign='center'
                        sx={{
                            filter: 'drop-shadow(0 0 0.1rem purple)',
                        }}

                    >
                        {firstName + ' ' + lastName}
                    </Typography>
                    <input
                        value={sendDate || new Date().toDateString()}
                        onChange={(e) => setSendDate(e.target.value)}
                        placeholder='Send Date'
                        style={{
                            position: 'absolute',
                            bottom: certificate.posFromWho,
                            right: `calc(50%)`,
                            left: 0,
                            textAlign: 'center',
                            border: 'none',
                            background: 'none',
                            filter: 'drop-shadow(0 0 0.1rem white)'
                        }}
                    />
                </Box>
            }
            {
                students && <Box sx={{ display: 'flex' }}>
                    <StudentsCheckbox students={students} onChange={SeToWhos} />
                </Box>
            }
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: 1 }}>
                <LoadingButton
                    variant='contained'
                    onClick={handleSendClick}
                    loading={loading}
                >
                    Send
                </LoadingButton>
                <Button
                    variant='contained'
                    color='warning'
                    onClick={() => exportComponentAsPNG(certRef)}
                >
                    Print
                </Button>
            </Box>
        </Container>
    )

}

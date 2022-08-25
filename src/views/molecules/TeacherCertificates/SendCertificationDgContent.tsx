import { FC, useState, useRef, useEffect } from 'react'
import { Container, Box, Button, Typography, TextField, Grid, ButtonGroup, IconButton, Divider } from '@mui/material'
import { exportComponentAsPNG } from 'react-component-export-image'
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery'

import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
// import { doFetchCertificateById } from 'app/actions';

interface ICreateCertificate {
    certificateId: string | number
}

export const SendCertificationDgContent: FC<ICreateCertificate> = ({ certificateId }) => {

    const isMobile = useSocratesMediaQuery('xs')
    const { token, firstName, lastName } = useSelector((state: any) => state.user);

    // const { data: certificate } = useQuery(
    //     ['certificate', certificateId], () => doFetchCertificateById(certificateId, token),
    //     { refetchIntervalInBackground: false, initialData: [] }
    // )

    const [title, seTitle] = useState('')
    const [editibleText, setEditibleText] = useState('')
    const [fromWho, setFromWho] = useState(firstName + ' ' + lastName)
    const [sendDate, setSendDate] = useState<string>('')

    const certRef = useRef<HTMLElement>(null)

    const handleTitleChange = (e: any) => {
        seTitle(e.target.value)
    }

    const handleContentChange = (e: any) => {
        setEditibleText(e.target.value)
    }

    const handleSendClick = () => {

    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingBottom: 2 }}>
            {/* {
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
                            filter: 'drop-shadow(0 0 0.1rem white)'
                        }}
                    />
                    <textarea
                        value={editibleText}
                        onChange={handleContentChange}
                        placeholder='Editible Text'
                        style={{
                            position: 'absolute',
                            top: certificate.posEditibleText,
                            left: 0,
                            right: 0,
                            fontSize: 20,
                            textAlign: 'center',
                            border: 'none',
                            background: 'none',
                            filter: 'drop-shadow(0 0 0.1rem white)'
                        }}
                    />
                    <input
                        value={fromWho}
                        onChange={(e) => setFromWho(e.target.value)}
                        placeholder='From who'
                        style={{
                            position: 'absolute',
                            bottom: certificate.posFromWho,
                            left: `calc(50%)`,
                            right: 0,
                            textAlign: 'center',
                            border: 'none',
                            background: 'none',
                            filter: 'drop-shadow(0 0 0.1rem white)'
                        }}
                    />
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
                    <Typography position='absolute' bottom={certificate.posStudentName}>Student Name</Typography>
                </Box>
            } */}
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: 1 }}>
                <Button
                    variant='contained'
                    onClick={handleSendClick}
                >
                    Send
                </Button>
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

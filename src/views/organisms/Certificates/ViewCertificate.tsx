import { FC, useRef } from 'react'
import { Container, Box, Button, Typography } from '@mui/material'
import { exportComponentAsPNG } from 'react-component-export-image'
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery'


interface ICertification {
    image: string,
    editableText: string,
    fromWho: {
        firstName: string,
        lastName: string
    },
    title: string,
    toWho: {
        firstName: string,
        lastName: string
    },
    certificate: any,
    createTimestamp: any
}

export const ViewCertificate: FC<ICertification> = ({ image, editableText, certificate, title, fromWho, createTimestamp,toWho }) => {

    const certRef = useRef<HTMLElement>(null)

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
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <Typography
                        position='absolute'
                        top={certificate.posTitle}
                        variant='h2'
                        left={0}
                        right={0}
                        textAlign='center'
                        sx={{
                            filter: 'drop-shadow(0 0 0.1rem blue)',
                        }}

                    >
                        {title}
                    </Typography>
                    <Typography
                        position='absolute'
                        top={certificate.posEditible}
                        left={0}
                        right={0}
                        textAlign='center'
                        padding={4}
                        sx={{
                            filter: 'drop-shadow(0 0 0.1rem green)',
                        }}

                    >
                        {editableText}
                    </Typography>
                    <Typography position='absolute' bottom={certificate.posStudentName}
                        sx={{ filter: 'drop-shadow(0 0 0.1rem gold)' }}
                    >
                        {toWho.firstName + ' ' + toWho.lastName}
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
                        {fromWho.firstName + ' ' + fromWho.lastName}
                    </Typography>
                    <Typography
                        position='absolute'
                        bottom={certificate.posFromWho}
                        right='50%'
                        left={0}
                        textAlign='center'
                        sx={{
                            filter: 'drop-shadow(0 0 0.1rem pink)',
                        }}

                    >
                        {new Date(createTimestamp).toDateString()}
                    </Typography>
                </Box>
            }
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: 1 }}>
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

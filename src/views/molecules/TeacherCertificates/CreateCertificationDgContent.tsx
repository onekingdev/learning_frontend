import { FC, useState, useRef, useEffect } from 'react'
import { Container, Box, Button, Typography } from '@mui/material'
import { exportComponentAsPNG } from 'react-component-export-image'
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery'

interface ICreateCertificate {
    imgUrl: string
}

export const CreateCertificationDgContent: FC<ICreateCertificate> = ({ imgUrl }) => {

    const isMobile = useSocratesMediaQuery('xs')

    const [title, seTitle] = useState('')
    const [content, setContent] = useState('')

    const [img, setImg] = useState('')
    const certRef = useRef<HTMLElement>(null)

    const handleTitleChange = (e: any) => {
        seTitle(e.target.value)
    }

    const handleContentChange = (e: any) => {
        setContent(e.target.value)
    }

    useEffect(() => {
        setImg(imgUrl)
    }, [imgUrl])

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingBottom: 2 }}>
            <Box ref={certRef}
                id='certificate'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    height: 400,
                    backgroundImage: `url(${img})`,
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
                        top: 100,
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
                    value={content}
                    onChange={handleContentChange}
                    placeholder='Editible Text'
                    style={{
                        position: 'absolute',
                        top: 150,
                        left: 0,
                        right: 0,
                        fontSize: 20,
                        textAlign: 'center',
                        border: 'none',
                        background: 'none',
                        filter: 'drop-shadow(0 0 0.1rem white)'
                    }}
                />
                <Typography>Student Name</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: 1 }}>
                <Button
                    variant='contained'
                // onClick={() => { setOpen(true) }}
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

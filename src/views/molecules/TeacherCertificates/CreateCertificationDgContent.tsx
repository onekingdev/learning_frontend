import { FC, useState, useRef } from 'react'
import { Container, Box, Button, Typography, TextField, Grid, ButtonGroup, IconButton, Divider } from '@mui/material'
import { exportComponentAsPNG } from 'react-component-export-image'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { doCreateCertificate } from 'app/actions';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { queryClient } from 'index';

interface ICreateCertificate {
    imgUrl: string
    close: () => void
}

interface ICertificate {
    token: string,
    image: string,
    posEditableText: number,
    posFromWho: number,
    posName: number,
    posStudentName: number,
    posText: number,
    posTitle: number,
}
export const CreateCertificationDgContent: FC<ICreateCertificate> = ({ imgUrl, close }) => {

    const { token, firstName, lastName } = useSelector((state: any) => state.user);

    const [loading, setLoading] = useState(false)

    const [posTitle, setPosTitle] = useState(100) //Top
    const [posEditible, setPosEditible] = useState(170) //top

    const posStudentName = 110
    const posFromWho = 70
    // const [posStudentName, setPosStudentName] = useState(110) // bottom
    // const [posFromWho, setPosFromWho] = useState(70)    //bottom

    const certRef = useRef<HTMLElement>(null)

    const { enqueueSnackbar } = useSnackbar();


    const create = useMutation(({ token,
        image,
        posEditableText,
        posFromWho,
        posName,
        posStudentName,
        posText,
        posTitle }: ICertificate) => doCreateCertificate(
            token,
            image,
            posEditableText,
            posFromWho,
            posName,
            posStudentName,
            posText,
            posTitle
        ), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            } else {
                enqueueSnackbar('Create certificate template successfully', { variant: 'success' })
                queryClient.invalidateQueries(['certificates'])
                close()
            }
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
        }
    })

    const handleSaveClick = () => {
        setLoading(true)
        create.mutate({
            token,
            image: imgUrl,
            posEditableText: posEditible,
            posFromWho,
            posName: 0,
            posStudentName: posStudentName,
            posText: 0,
            posTitle: posTitle
        })
    }

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
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <Typography
                    position='absolute'
                    top={posTitle}
                    variant='h2'
                    left={0}
                    right={0}
                    textAlign='center'
                    sx={{
                        filter: 'drop-shadow(0 0 0.1rem blue)',
                    }}

                >
                    Certificate Title
                </Typography>

                <Typography
                    position='absolute'
                    top={posEditible}
                    left={0}
                    right={0}
                    textAlign='center'
                    padding={4}
                    sx={{
                        filter: 'drop-shadow(0 0 0.1rem green)',
                    }}

                >
                    Certificate Content Text
                </Typography>
                <Typography
                    id='student-name'
                    variant='h6'
                    position='absolute'
                    bottom={posStudentName}
                    sx={{ filter: 'drop-shadow(0 0 0.1rem gold)' }}
                >
                    Student Name
                </Typography>
                <Typography
                    position='absolute'
                    bottom={posFromWho}
                    left='50%'
                    right={0}
                    textAlign='center'
                    sx={{
                        filter: 'drop-shadow(0 0 0.1rem purple)',
                    }}

                >
                    {firstName + ' ' + lastName}
                </Typography>
                <Typography
                    position='absolute'
                    bottom={posFromWho}
                    right='50%'
                    left={0}
                    textAlign='center'
                    sx={{
                        filter: 'drop-shadow(0 0 0.1rem white)',
                        border: '1px dashed gray'
                    }}

                >
                    {new Date().toDateString()}
                </Typography>

            </Box>
            <Grid container mt={2} spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Title Position'
                        value={posTitle || ''}
                        onChange={(e) => setPosTitle(+e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <ButtonGroup variant='contained' orientation='vertical'>
                                    <IconButton onClick={() => setPosTitle(posTitle + 1)} size='small' sx={{ padding: 0 }}>
                                        <KeyboardArrowUpIcon />
                                    </IconButton>
                                    <Divider />
                                    <IconButton onClick={() => setPosTitle(posTitle - 1)} size='small' sx={{ padding: 0 }}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </ButtonGroup>
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Editible Text Position'
                        value={posEditible || ''}
                        onChange={(e) => setPosEditible(+e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <ButtonGroup variant='contained' orientation='vertical'>
                                    <IconButton onClick={() => setPosEditible(posEditible + 1)} size='small' sx={{ padding: 0 }}>
                                        <KeyboardArrowUpIcon />
                                    </IconButton>
                                    <Divider />
                                    <IconButton onClick={() => setPosEditible(posEditible - 1)} size='small' sx={{ padding: 0 }}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </ButtonGroup>
                            )
                        }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: 1 }}>
                <LoadingButton
                    variant='contained'
                    onClick={handleSaveClick}
                    loading={loading}
                >
                    Save
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

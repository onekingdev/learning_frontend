import { FC, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { dictionary } from './dictionary'
import { useSelector } from 'react-redux';
import { LSDialog } from '../Setting/LSDialog';
import { ImgUploadDgContent } from './ImgUploadDgContent';

export const ImageUploader: FC = () => {

    const [open, setOpen] = useState(false)

    const language = useSelector((state: any) => state.user.language);

    const close = () => {
        setOpen(false)
    }

    // const handleResetFile = (e: any, fileRef: any) => {
    //     e.stopPropagation()
    //     setFileDataUrl(null)
    //     fileRef.current.value = null
    // }

    return (
        <>
            <Paper
                onClick={() => { setOpen(true) }}
                sx={{
                    // maxHeight: ,
                    width: 150,
                    height: 120,
                    background: '#C4C4C4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                        filter: 'drop-shadow(0 0 0.2rem gold)'
                    },
                    position: 'relative'
                }}>
                {
                    <Typography variant='h6'>
                        {dictionary[language]?.uploadImage}
                    </Typography>
                }
            </Paper>
            <LSDialog
                open={open}
                close={close}
                title='Upload image'
                fullWidth={true}
                dialogContent={
                    <ImgUploadDgContent />
                }
            />
        </ >
    )

}

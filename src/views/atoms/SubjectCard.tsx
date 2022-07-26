import { FC } from 'react';
import { Box, BoxProps, Typography } from '@mui/material';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';

interface ISubjectBox extends BoxProps {
    imgUrl?: string
    bgColor?: string
    text?: string
    isChecked?: boolean
}
export const SubjectCard: FC<ISubjectBox> = ({ imgUrl, bgColor, text, isChecked }) => {
    const isMobile = useSocratesMediaQuery('xs')

    return (
        <Box
            width={isMobile ? 60 : 120}
            height={isMobile ? 60 : 120}
            display='flex'
            flexDirection={'column'}
            justifyContent='space-between'
            alignItems={'center'}
            margin={2}
            padding={2}
            sx={{
                background: bgColor,
                boxShadow: isChecked ? `2px 2px 20px 2px ${bgColor}` : 'none',
                borderRadius: 5,
                cursor: 'pointer'
            }}
        >
            <img src={imgUrl} style={{ width: isMobile ? 40 : 100 }} alt='imgUrl' />
            <Typography fontWeight={'bold'} textAlign='center' color='white'>{text}</Typography>
        </Box>)
}

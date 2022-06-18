import {
    Box, Typography,
} from '@mui/material';
import { FC } from 'react';
import { BasicColor } from 'views/Color';
import { isValidUrl } from 'views/utils';

interface ReviewMCOptionProps {
    value: string
}

export const ReviewMCOption: FC<ReviewMCOptionProps> = ({
    value
}) => {
    return (
        <Box display='flex' justifyContent='center'>
            {
                isValidUrl(value) ? <img src={value} style={{ height: 50 }} /> : <Typography color={BasicColor.darkGreen}>{value}</Typography>
            }
        </Box>
    )
}

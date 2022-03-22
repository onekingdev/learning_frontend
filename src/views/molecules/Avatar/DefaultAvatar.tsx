import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import icon from 'views/assets/avatars/kid-2.svg';

interface AvatarProps {
    accessory?: string,
    head?: string
}

export const ImageAvatar: FC<AvatarProps> = ({accessory, head}) => {
    return (
        <Avatar alt="Remy Sharp" src={icon} sx={{width: 50, height: 50}}/>
    )
}

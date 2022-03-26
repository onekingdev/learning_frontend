import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import { AvatarItemWithSkinTone } from 'views/molecules/Avatar/AvatarItemWithSkinTone';
import styled from 'styled-components';
import { deepPurple } from '@mui/material/colors';
import { ScreenSize } from 'constants/screenSize';

interface AvatarProps {
    accessory?: any,
    head?: any,
    skinTone?: string,
    firstName: string,
    lastName:string
}

export const ImageAvatar: FC<AvatarProps> = ({ accessory, head, skinTone, firstName,lastName  }) => {
    return (
        head ?
        <Avatar sx={{width: 60, height: 60}}>
            {accessory && <CurrentAccessory src={accessory} />}
            <div className='head'>
                <AvatarItemWithSkinTone url={head.image} skinTone={skinTone ? skinTone : ''} />
            </div>
        </Avatar>:
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{firstName.charAt(0)}{lastName.charAt(0)}</Avatar>
    )
}

const CurrentAccessory = styled.img`
  position: absolute;
  top: -14px;
  width: 100%;
  z-index: 3;
  @media screen and (max-width: ${ScreenSize.phone}) {
  }
`;

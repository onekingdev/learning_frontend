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
    lastName: string,
    size: number
}

export const ImageAvatar: FC<AvatarProps> = ({ accessory, head, skinTone, firstName, lastName, size }) => {
    return (
        head ?
            <div style={{width: size, height: size, zIndex: 30, position: 'relative'}}>
                {/* {accessory && <CurrentAccessory src={accessory.image} style={{width: size, height: size}}/>} */}
                <div style={{width: size, height: size, position: 'absolute'}}>
                    <AvatarItemWithSkinTone url={head.image} skinTone={skinTone ? skinTone : ''} />
                </div>
            </div>
            :
            <Avatar sx={{ bgcolor: deepPurple[500], width: size, height: size , zIndex:30}}>{firstName.charAt(0).toUpperCase()}{lastName.charAt(0).toUpperCase()}</Avatar>
    )
}

const CurrentAccessory = styled.img`
  position: absolute;
  z-index: 3;
  @media screen and (max-width: ${ScreenSize.phone}) {
  }
`;

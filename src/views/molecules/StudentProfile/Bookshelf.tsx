import { FC, useState } from 'react'
import { Container, Stack, Backdrop, Button } from '@mui/material'
import settings_img from 'views/assets/student-profile/Vector.svg';
import badge_img from 'views/assets/student-profile/badge.png';
import awards_img from 'views/assets/student-profile/awards.png';
import leg_img from 'views/assets/student-profile/shelf-leg.png';
import { BadgeContainer } from 'views/molecules/StudentProfile/BadgeContainer';
import { TypoTitle } from 'views/atoms/Text';
import styled from 'styled-components';
import { StudentSettings } from 'views/molecules/StudentProfile/StudentSettings';
import CloseIcon from '@mui/icons-material/Close';
import { Awards } from './Awards';
import IconButton from '@mui/material/IconButton';
import { BasicColor } from 'views/Color';

export const BookShelf: FC = () => {

    const [openSetting, setOpenSetting] = useState(false)
    const [openBadge, setOpenBadge] = useState(false)
    const [openAward, setOpenAward] = useState(false)
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpenSetting(false)
        setOpenBadge(false)
        setOpenAward(false)
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 0, marginTop: 10 }}>
            <Stack direction='row' justifyContent='center' gap={20} width={800}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, display: 'flex', flexDirection: 'column' }}
                    open={open}
                >
                    <Container sx={{ width: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        {openSetting && <StudentSettings />}
                        {openBadge && <BadgeContainer />}
                        {openAward && <Awards />}
                        <Button sx={{ borderRadius: '100%', background: BasicColor.green, padding: '10px' }} variant="contained" onClick={handleClose} >
                            <CloseIcon />
                        </Button>
                    </Container>
                </Backdrop>
                <ProfileImg onClick={() => { setOpenSetting(true), setOpen(true) }} src={settings_img} style={{ height: 160 }} />
                <ProfileImg onClick={() => { setOpenBadge(true), setOpen(true) }} src={badge_img} size={160} />
                <ProfileImg onClick={() => { setOpenAward(true), setOpen(true) }} src={awards_img} size={160} />
            </Stack>
            <Stack direction='row' justifyContent='center' gap={20} width={800} sx={{ background: '#85431F' }}>
                <TypoTitle style={{ color: 'white', textAlign: 'center' }}> Settings </TypoTitle>
                <TypoTitle style={{ color: 'white', textAlign: 'center' }}> Badges </TypoTitle>
                <TypoTitle style={{ color: 'white', textAlign: 'center' }}> Awards </TypoTitle>
            </Stack>
            <Stack direction='row' justifyContent='space-around' width={800} >
                <img src={leg_img} />
                <img src={leg_img} />
            </Stack>
        </Container>
    );
};

const ProfileImg = styled.img<{
    size?: number;
}>`
  height: ${props => props.size}px;
  cursor: pointer;
`

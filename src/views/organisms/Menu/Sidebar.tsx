import { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ICON_SIZE } from 'constants/icon';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { BasicColor } from 'views/Color';
import ListItem from '@mui/material/ListItem';
import { Icon } from 'views/atoms/Icon/Icon';
import progress_icon from 'views/assets/nav-icons/Progress.png';
import homework_icon from 'views/assets/nav-icons/homework.png';
import question_icon from 'views/assets/nav-icons/question.png';
import game_icon from 'views/assets/nav-icons/game.png';
import bank_icon from 'views/assets/nav-icons/bank.png';
import collectible_icon from 'views/assets/nav-icons/collectibles.png';
import profile_icon from 'views/assets/nav-icons/profile.png';
import menu_toggle from 'views/assets/Menu Toggle.svg';
import styled from 'styled-components';


export const Sidebar: FC = () => {

    const [state, setState] = useState(false);
    const [isMobile, setMobile] = useState(false)
    const history = useHistory();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    useEffect(() => {
            // check device is mobile, do mobile view
    const handleResize = () => {
        if (window.innerWidth > 767) {
          setMobile(false);
        } else setMobile(true);
      };
      handleResize();
    })

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <Icon
                    image={menu_toggle}
                    size={ICON_SIZE.small}
                />
            </Button>
            <Drawer
                sx={{ '& .MuiPaper-root': { background: BasicColor.green } }}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem >
                            <IconContainer>
                                <Icon
                                    image={homework_icon}
                                    size={ICON_SIZE.medium}
                                    onClick={() => history.push('/login')}
                                />
                                <p>HOMEWORKS</p>
                            </IconContainer>
                        </ListItem>
                        <ListItem >
                            <IconContainer>
                                <Icon
                                    image={question_icon}
                                    size={ICON_SIZE.medium}
                                    onClick={() => history.push('/map')}
                                />
                                <p>QUESTIONS</p>
                            </IconContainer>
                        </ListItem>
                        <ListItem >
                            <IconContainer>
                                <Icon
                                    image={game_icon}
                                    size={ICON_SIZE.medium}
                                    onClick={() => history.push('/games/categories')}
                                />
                                <p>GAMES</p>
                            </IconContainer>
                        </ListItem>
                        <ListItem >
                            <IconContainer>
                                <Icon
                                    image={progress_icon}
                                    size={ICON_SIZE.medium}
                                    onClick={() => history.push('/progress')}
                                />
                                <p>PROGRESS</p>
                            </IconContainer>
                        </ListItem>
                        <ListItem >
                            <IconContainer>
                                <Icon
                                    image={collectible_icon}
                                    size={ICON_SIZE.medium}
                                    onClick={() => history.push('/backpack')}
                                />
                                <p>COLLECTIBLE</p>
                            </IconContainer>
                        </ListItem>
                        <ListItem >
                            <IconContainer>
                                <Icon
                                    size={ICON_SIZE.medium}
                                    image={bank_icon}
                                    onClick={() => history.push('/bank')}
                                />
                                <p>BANK</p>
                            </IconContainer>
                        </ListItem>
                        <ListItem sx={{display: isMobile ? 'block' : 'none'}}>
                            <IconContainer>
                                <Icon
                                    image={profile_icon}
                                    size={ICON_SIZE.medium}
                                    onClick={() => history.push('/avatar')}
                                />
                                <p>PROFILE</p>
                            </IconContainer>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}


export const IconContainer = styled.div`
  width: 90%;
  height: 70px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  &:hover {
  }
  p {
    font-size: 12px;
    font-family: Montserrat;
    margin: 0;
    font-weight: 700;
  }
`;

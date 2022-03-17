import { FC, useEffect, useContext, useMemo, useState } from 'react';
import { StudentMenu } from 'views/templates/StudentMenu';
import { LoadingContext } from 'react-router-loading';
import styled from 'styled-components';
import { Title } from 'views/atoms/Text';
import welcome from 'views/assets/welcome.svg';
import treasureMap from 'views/assets/student/treasure-track-map.png';
import treasureTrackIsland01 from 'views/assets/student/treasure-track-island-01.png';
import treasureTrackIsland02 from 'views/assets/student/treasure-track-island-02.png';
import treasureTrackIsland03 from 'views/assets/student/treasure-track-island-03.png';
import treasureTrackIsland04 from 'views/assets/student/treasure-track-island-04.png';
import path01 from 'views/assets/student/treasure-track-path-01.png';
import path02 from 'views/assets/student/treasure-track-path-02.png';
import path03 from 'views/assets/student/treasure-track-path-03.png';
import path04 from 'views/assets/student/treasure-track-path-04.png';
import path05 from 'views/assets/student/treasure-track-path-05.png';
import path06 from 'views/assets/student/treasure-track-path-06.png';
import path07 from 'views/assets/student/treasure-track-path-07.png';
import path08 from 'views/assets/student/treasure-track-path-08.png';
import path09 from 'views/assets/student/treasure-track-path-09.png';
import path10 from 'views/assets/student/treasure-track-path-10.png';
import path11 from 'views/assets/student/treasure-track-path-11.png';
import path12 from 'views/assets/student/treasure-track-path-12.png';
import path13 from 'views/assets/student/treasure-track-path-13.png';
import path14 from 'views/assets/student/treasure-track-path-14.png';
import path15 from 'views/assets/student/treasure-track-path-15.png';
import path16 from 'views/assets/student/treasure-track-path-16.png';
import path17 from 'views/assets/student/treasure-track-path-17.png';
import path18 from 'views/assets/student/treasure-track-path-18.png';
import path19 from 'views/assets/student/treasure-track-path-19.png';
import path20 from 'views/assets/student/treasure-track-path-20.png';
import path21 from 'views/assets/student/treasure-track-path-21.png';
import path22 from 'views/assets/student/treasure-track-path-22.png';
import path23 from 'views/assets/student/treasure-track-path-23.png';
import path24 from 'views/assets/student/treasure-track-path-24.png';
import path25 from 'views/assets/student/treasure-track-path-25.png';
import pathEnd from 'views/assets/student/treasure-track-path-end.png';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Boy1 from 'views/assets/avatars/boy-1.png';
import Boy7 from 'views/assets/avatars/boy-7.png';
import Girl5 from 'views/assets/avatars/girl-5.png';
import Girl9 from 'views/assets/avatars/girl-9.png';
import Girl11 from 'views/assets/avatars/girl-11.png';

import FaceGirl11 from 'views/assets/avatars/pieces/faces/girl-11.png';
import Hair from 'views/assets/avatars/pieces/hairs/hair.png';
import Pant from 'views/assets/avatars/pieces/pants/black.png';
import TShirt from 'views/assets/avatars/pieces/shirts/tshirt.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserRankTreasureTrack } from 'views/molecules/UserRank';
import avatar from 'views/assets/avatars/avatar1.svg';
import { getRanking } from 'app/firebase';
import { ScreenSize } from 'constants/screenSize';

const avatars = [Boy1, Boy7, Girl5, Girl9, Girl11];
const imgPaths = [
    path01, path02, path03, path04, path05, path06, path07, path08, path09, path10, path11, path12, path13, path14, path15, path16, path17, path18, path19, path20, path21, path22, path23, path24, path25
]

export const StudentTreasureTrack: FC = () => {
    const loadingContext = useContext(LoadingContext);
    useEffect(() => {
        loadingContext.done();
    }, []);
    const [earnedCoin, setEarnedCoin] = useState<number>(Math.ceil(Math.random() * 1000));
    const pathComp = useMemo(() => {
        let imgPath;
        for (let i = 0; i < 25; i ++) {
            if (1000 / 25 * i <= earnedCoin && 1000 / 25 * (i+1) < earnedCoin) {
                imgPath = imgPaths[i];
            }
        }
        if (earnedCoin === 1000) {
            imgPath = pathEnd;
        }
        return <img style={{
            position: 'absolute',
            left: '197px',
            top: '76px'
        }} src={imgPath} alt="path01" />
    }, [earnedCoin]);

    const [menuTitle, setMenuTitle] = useState<string>("Socrates");
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (str: string) => {
        setAnchorEl(null);
        setMenuTitle(str);
        setEarnedCoin(Math.ceil(Math.random() * 1000));
    };


    const mock_ranking = ['Candy', 'Tony', 'Emily', 'Albert', 'Viri'];

    const [ranking, setRanking] = useState(mock_ranking);
    useEffect(() => {
        getRanking(setRanking);
    }, []);

    const initialNumber = Math.ceil(Math.random()*10);
    return (<StudentMenu>
        <Container>
            <MapWrapper>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}>
                    <MapTitleViewer>
                        <img style={{
                            position: 'absolute',
                            zIndex: 10,
                            width: '100%',
                            height: '80px'
                        }} src={welcome} alt="Welcome" />
                        <Title style={{
                            zIndex: 20,
                        }}>Treasure Track</Title>
                    </MapTitleViewer>
                    <MapViewer>
                        <div style={{
                            position: "relative",
                            width: "660px",
                            margin: "auto",
                        }}>
                            <img src={treasureMap} alt="treasureMap" />
                            <img style={{
                                position: 'absolute',
                                left: '80px',
                                top: '60px'
                            }} src={treasureTrackIsland01} alt="treasureTrackIsland01" />
                            <img style={{
                                position: 'absolute',
                                right: '100px',
                                top: '57px'
                            }} src={treasureTrackIsland02} alt="treasureTrackIsland02" />
                            <img style={{
                                position: 'absolute',
                                left: '100px',
                                bottom: '160px'
                            }} src={treasureTrackIsland03} alt="treasureTrackIsland03" />
                            <img style={{
                                position: 'absolute',
                                right: '110px',
                                bottom: '106px'
                            }} src={treasureTrackIsland04} alt="treasureTrackIsland04" />
                            { pathComp }
                        </div>
                    </MapViewer>
                </div>
                <CharactorViewer>
                    <img src={Hair} alt="hair" />
                    <img style={{
                        marginTop: '-2rem'
                    }} src={TShirt} alt="tshirt" />
                    <img src={Pant} alt="pant" />
                    <img style={{
                        position: 'absolute',
                        top: '2rem'
                    }} src={FaceGirl11} alt="pant" />
                </CharactorViewer>
            </MapWrapper>
            <PanelWrapper>
                <Card>
                    <CardContent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginLeft: '-1rem',
                            marginRight: '-1rem',
                        }}>
                            <Typography variant="h4" color="text.primary" gutterBottom>
                            Honor Roll
                            </Typography>
                            <Typography variant="h5" color="text.primary" gutterBottom>
                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        {menuTitle}
                                        <ArrowDropDownIcon />
                                    </div>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={() => handleClose(menuTitle)}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={() => handleClose("Socrates")}>Socrates</MenuItem>
                                        <MenuItem onClick={() => handleClose("Classroom")}>Classroom</MenuItem>
                                        <MenuItem onClick={() => handleClose("School")}>School</MenuItem>
                                    </Menu>
                                </div>
                            </Typography>
                            {ranking.map((name, i) => {
                                return (
                                <UserRankTreasureTrack additionalPl={i%2 === 1 ? "0px" : "10px"} active={i === Math.floor(ranking.length / 2)} coinsEarned={i === Math.floor(ranking.length / 2) ? earnedCoin : Math.floor(Math.random() * 1000)} userRank={i + initialNumber} userName={name} key={name+i} userIcon={avatars[i]} />
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            </PanelWrapper>
        </Container>
    </StudentMenu>)
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: ${ parseInt(ScreenSize.desktop.slice(0, -2)) + 100 }px;
    width: 100%;
    margin: auto;
    align-items: flex-end;
    margin-top: 2rem;
    box-sizing: border-box;
    @media (max-width: ${ parseInt(ScreenSize.desktop.slice(0, -2)) + 100 }px) {
        flex-direction: column;
        max-width: 100vw;
        padding: 0.5rem;
    }
`;

const panelWidth = 390;
const MapWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    margin: auto;
    width: 100%;
    @media (max-width: ${ parseInt(ScreenSize.desktop.slice(0, -2)) + 100 }px) {
        width: calc(100% - 1rem);
    }
`;

const PanelWrapper = styled.div`
    margin: 1rem;
    border-radius: 2rem;
    overflow: hidden;
    flex-grow: 0;
    flex-shrink: 0;
    box-shadow: 0 0 10px #0000003f;
    min-width: ${panelWidth}px;
    @media (max-width: ${ parseInt(ScreenSize.desktop.slice(0, -2)) + 100 }px) {
        margin: auto;
        margin-bottom: 1rem;
        width: calc(100% - 1rem);
        min-width: calc(${panelWidth}px - 1rem);
    }
    @media (max-width: ${ ScreenSize.tablet }) {
        margin-bottom: 5rem;
    }
`;

const CharactorViewer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: -6.5rem;
    bottom: -5rem;
    @media (max-width: ${ScreenSize.tablet}) {
        display: none;
    }
`;

const MapTitleViewer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MapViewer = styled.div`
    position: relative;
    overflow: auto;
    width: 100%;
`;

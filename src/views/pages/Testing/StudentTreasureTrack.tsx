import { FC, useEffect, useContext, useMemo, useState } from 'react';
import { StudentMenu } from 'views/templates/StudentMenu';
import { LoadingContext } from 'react-router-loading';
import styled from 'styled-components';
import { Title } from "views/atoms/Text";
import welcome from "views/assets/welcome.svg";
import treasureMap from "views/assets/student/treasure-track-map.png";
import treasureTrackIsland01 from "views/assets/student/treasure-track-island-01.png";
import treasureTrackIsland02 from "views/assets/student/treasure-track-island-02.png";
import treasureTrackIsland03 from "views/assets/student/treasure-track-island-03.png";
import treasureTrackIsland04 from "views/assets/student/treasure-track-island-04.png";
import path01 from "views/assets/student/treasure-track-path-01.png";
import path02 from "views/assets/student/treasure-track-path-02.png";
import path03 from "views/assets/student/treasure-track-path-03.png";
import path04 from "views/assets/student/treasure-track-path-04.png";
import path05 from "views/assets/student/treasure-track-path-05.png";
import path06 from "views/assets/student/treasure-track-path-06.png";
import path07 from "views/assets/student/treasure-track-path-07.png";
import path08 from "views/assets/student/treasure-track-path-08.png";
import path09 from "views/assets/student/treasure-track-path-09.png";
import path10 from "views/assets/student/treasure-track-path-10.png";
import pathEnd from "views/assets/student/treasure-track-path-end.png";
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

export const StudentTreasureTrack: FC = () => {
    const loadingContext = useContext(LoadingContext);
    useEffect(() => {
        loadingContext.done();
    }, []);
    const [earnedCoin, setEarnedCoin] = useState<number>(Math.ceil(Math.random() * 100));
    const pathComp = useMemo(() => {
        let imgPath;
        if (0 <= earnedCoin && earnedCoin < 10) {
            imgPath = path01;
        } else if (10 <= earnedCoin && earnedCoin < 20) {
            imgPath = path02;
        } else if (20 <= earnedCoin && earnedCoin < 30) {
            imgPath = path03;
        } else if (30 <= earnedCoin && earnedCoin < 40) {
            imgPath = path04;
        } else if (40 <= earnedCoin && earnedCoin < 50) {
            imgPath = path05;
        } else if (50 <= earnedCoin && earnedCoin < 60) {
            imgPath = path06;
        } else if (60 <= earnedCoin && earnedCoin < 70) {
            imgPath = path07;
        } else if (70 <= earnedCoin && earnedCoin < 80) {
            imgPath = path08;
        } else if (80 <= earnedCoin && earnedCoin < 90) {
            imgPath = path09;
        } else if (90 <= earnedCoin && earnedCoin < 100) {
            imgPath = path10;
        } else {
            imgPath = pathEnd;
        }
        return <img style={{
            position: "absolute",
            left: "197px",
            top: "76px"
        }} src={imgPath} alt="path01" />
    }, [earnedCoin]);

    const [girlsName, setGirlsName] = useState<string[]>([
        "Marie",
        "John",
        "YOU",
        "Angie",
        "Mark",
    ]);
    const [descriptions, setDescriptions] = useState<string[]>([
        "570 COINS EARNED",
        "510 COINS EARNED",
        "500 COINS EARNED",
        "414 COINS EARNED",
        "337 COINS EARNED",
    ]);
    return (<StudentMenu>
        <Container>
            <div id="treasure-map" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <div id='title' style={{
                    position: "relative",
                    width: "450px",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <img style={{
                        position: "absolute",
                        zIndex: 10,
                        width: "100%",
                        height: "80px"
                    }} src={welcome} alt="Welcome" />
                    <Title style={{
                        zIndex: 20,
                    }}>Treasure Track</Title>
                </div>
                <div style={{
                    position: "relative",
                    width: "660px",
                    height: "510px"
                }}>
                    <img src={treasureMap} alt="treasureMap" />
                    <img style={{
                        position: "absolute",
                        left: "80px",
                        top: "60px"
                    }} src={treasureTrackIsland01} alt="treasureTrackIsland01" />
                    <img style={{
                        position: "absolute",
                        right: "100px",
                        top: "57px"
                    }} src={treasureTrackIsland02} alt="treasureTrackIsland02" />
                    <img style={{
                        position: "absolute",
                        left: "100px",
                        bottom: "160px"
                    }} src={treasureTrackIsland03} alt="treasureTrackIsland03" />
                    <img style={{
                        position: "absolute",
                        right: "110px",
                        bottom: "106px"
                    }} src={treasureTrackIsland04} alt="treasureTrackIsland04" />
                    { pathComp }
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "absolute",
                        left: "-6.5rem",
                        bottom: "-5rem"
                    }}>
                        <img src={Hair} alt="hair" />
                        <img style={{
                            marginTop: "-2rem"
                        }} src={TShirt} alt="tshirt" />
                        <img src={Pant} alt="pant" />
                        <img style={{
                            position: "absolute",
                            top: "2rem"
                        }} src={FaceGirl11} alt="pant" />
                    </div>
                </div>
            </div>
            <div style={{
                borderRadius: "2rem",
                overflow: "hidden",
                padding: "1rem",
                flexGrow: "1",
                flexShrink: "1",
            }}>
                <Paper elevation={3}>
                    <Card>
                        <CardContent>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginLeft: "-1rem",
                                marginRight: "-1rem",
                            }}>
                                <Typography variant="h4" color="text.primary" gutterBottom>
                                Honor Roll
                                </Typography>
                                <Typography variant="h5" color="text.primary" gutterBottom>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                    SOCRATES
                                    <ArrowDropDownIcon />
                                    </div>
                                </Typography>
                                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    {[Boy1, Boy7, Girl5, Girl9, Girl11].map((value, id) => {
                                        const labelId = `checkbox-list-secondary-label-${value}`;
                                        return (
                                            <div
                                                key={id}
                                                style={{
                                                    paddingLeft: id === 2 ? "0px" : "1rem"
                                                }}
                                            >
                                                <ListItem
                                                    selected={id === 2}
                                                    disablePadding
                                                >
                                                    <ListItemButton>
                                                        <Typography variant="inherit" color="text.secondary" gutterBottom>
                                                        # {id + earnedCoin}
                                                        </Typography>
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                sx={{ width: 60, height: 60 }}
                                                                alt={`Avatar n°${id + 1}`}
                                                                src={value}
                                                                variant="circular"
                                                            />
                                                        </ListItemAvatar>
                                                        <Typography variant={id === 2 ? "h4" : "h6"} color="text.secondary" gutterBottom>
                                                        {girlsName[id]}
                                                        </Typography>
                                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                        # {descriptions[id]}
                                                        </Typography>
                                                    </ListItemButton>
                                                </ListItem>
                                            </div>
                                        );
                                    })}
                                </List>
                            </div>
                        </CardContent>
                    </Card>
                </Paper>
            </div>
        </Container>
    </StudentMenu>)
}

const Container = styled.div`
    display: flex;
    max-width: 1024px;
    margin: auto;
    align-items: flex-end;
    margin-top: 2rem;
`;

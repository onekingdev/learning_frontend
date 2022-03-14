import { useState } from 'react';
import { StudentMenu } from 'views/templates/StudentMenu';
import styled from "styled-components";
import { Title } from "views/atoms/Text";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TitleProgressBackground from "views/assets/title-games-background.png";
import ProgressMap from "views/assets/student/progress-map.png";
import ProgressPath01 from "views/assets/student/progress-path-01.png";
import ProgressPath02 from "views/assets/student/progress-path-02.png";
import ProgressPath03 from "views/assets/student/progress-path-03.png";
import ProgressPath04 from "views/assets/student/progress-path-04.png";
import ProgressPath05 from "views/assets/student/progress-path-05.png";
import ProgressPath06 from "views/assets/student/progress-path-06.png";
import ProgressPath07 from "views/assets/student/progress-path-07.png";
import ProgressPath08 from "views/assets/student/progress-path-08.png";
import ProgressPath09 from "views/assets/student/progress-path-09.png";
import ProgressPath10 from "views/assets/student/progress-path-10.png";
import ProgressPath11 from "views/assets/student/progress-path-11.png";
import ProgressPath12 from "views/assets/student/progress-path-12.png";
import ProgressPath13 from "views/assets/student/progress-path-13.png";
import ProgressPath14 from "views/assets/student/progress-path-14.png";
import ProgressPath15 from "views/assets/student/progress-path-15.png";
import ProgressPath16 from "views/assets/student/progress-path-16.png";
import ProgressPath17 from "views/assets/student/progress-path-17.png";
import ProgressPath18 from "views/assets/student/progress-path-18.png";
import ProgressPath19 from "views/assets/student/progress-path-19.png";
import ProgressPath20 from "views/assets/student/progress-path-20.png";
import ProgressPath21 from "views/assets/student/progress-path-21.png";

export const StudentProgress = () => {
    const grades = [
        "1st Grade",
        "2st Grade",
        "3st Grade",
        "4st Grade",
    ]
    const subjects = [
        "Math",
        "Computer",
        "Psychology",
    ]
    const [grade, setGrade] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    const handleGradeChange = (event: any) => {
        setGrade(event.target.value);
    };
    const handleSubjectChange = (event: any) => {
        setSubject(event.target.value);
    };

    const paths = [{
        left: 15,
        top: 0,
        imgSrc: ProgressPath01
    }, {
        left: 15,
        top: 6,
        imgSrc: ProgressPath02
    }, {
        left: 18,
        top: 14,
        imgSrc: ProgressPath03
    }, {
        left: 23,
        top: 19,
        imgSrc: ProgressPath04
    }, {
        left: 32,
        top: 19,
        imgSrc: ProgressPath05
    }, {
        left: 39,
        top: 14,
        imgSrc: ProgressPath06
    }, {
        left: 44,
        top: 9,
        imgSrc: ProgressPath07
    }, {
        left: 52,
        top: 7,
        imgSrc: ProgressPath08
    }, {
        left: 59,
        top: 11,
        imgSrc: ProgressPath09
    }, ];
    return <StudentMenu>
        <Container>
            <div style={{
                width: "500px",
                height: "80px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                }} src={TitleProgressBackground} alt="TitleProgressBackground" />
                <Title style={{
                    zIndex: 20,
                    color: "black",
                }}>Treasure Track</Title>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingTop: "1rem"
            }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={grade}
                            label="Grade"
                            onChange={handleGradeChange}
                        >
                            { grades.map((grade, id) => (
                                <MenuItem key={id} value={grade}>{grade}</MenuItem>
                            )) }
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={subject}
                            label="Subject"
                            onChange={handleSubjectChange}
                        >
                            { subjects.map((subject, id) => (
                                <MenuItem key={id} value={subject}>{subject}</MenuItem>
                            )) }
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div style={{
                position: 'relative'
            }}>
                <img style={{
                    width: "100%"
                }} src={ProgressMap} alt="ProgressMap" />
                { paths.map((path, id) => <div key={id} style={{
                    position: "absolute",
                    left: `${path.left}%`,
                    top: `${path.top}%`,
                }}>
                    <img width={`${Math.min(1024, window.innerWidth) / 1366 * 100}%`} height={`${Math.min(1024, window.innerWidth) / 1366 * 100}%`} src={path.imgSrc} alt={id.toString()} />
                </div>) }
            </div>
        </Container>
    </StudentMenu>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    margin: auto;
    margin-top: 2rem;
`;

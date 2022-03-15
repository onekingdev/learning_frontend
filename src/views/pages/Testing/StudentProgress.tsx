import { useState } from 'react';
import { StudentMenu } from 'views/templates/StudentMenu';
import styled from 'styled-components';
import { Title } from 'views/atoms/Text';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TitleProgressBackground from 'views/assets/title-games-background.png';
import ProgressMap from 'views/assets/student/progress-map.png';
import ProgressPath01 from 'views/assets/student/progress-path-01.png';
import ProgressPath02 from 'views/assets/student/progress-path-02.png';
import ProgressPath03 from 'views/assets/student/progress-path-03.png';
import ProgressPath04 from 'views/assets/student/progress-path-04.png';
import ProgressPath05 from 'views/assets/student/progress-path-05.png';
import ProgressPath06 from 'views/assets/student/progress-path-06.png';
import ProgressPath07 from 'views/assets/student/progress-path-07.png';
import ProgressPath08 from 'views/assets/student/progress-path-08.png';
import ProgressPath09 from 'views/assets/student/progress-path-09.png';
import ProgressPath10 from 'views/assets/student/progress-path-10.png';
import ProgressPath11 from 'views/assets/student/progress-path-11.png';
import ProgressPath12 from 'views/assets/student/progress-path-12.png';
import ProgressPath13 from 'views/assets/student/progress-path-13.png';
import ProgressPath14 from 'views/assets/student/progress-path-14.png';
import ProgressPath15 from 'views/assets/student/progress-path-15.png';
import ProgressPath16 from 'views/assets/student/progress-path-16.png';
import ProgressPath17 from 'views/assets/student/progress-path-17.png';
import ProgressPath18 from 'views/assets/student/progress-path-18.png';
import ProgressPath19 from 'views/assets/student/progress-path-19.png';
import ProgressPath20 from 'views/assets/student/progress-path-20.png';
import ProgressPath21 from 'views/assets/student/progress-path-21.png';
import ProgressPath22 from 'views/assets/student/progress-path-22.png';
import ProgressPath23 from 'views/assets/student/progress-path-23.png';
import ProgressPath24 from 'views/assets/student/progress-path-24.png';
import ProgressPath25 from 'views/assets/student/progress-path-25.png';
import ProgressPath26 from 'views/assets/student/progress-path-26.png';
import ProgressPath27 from 'views/assets/student/progress-path-27.png';
import ProgressPath28 from 'views/assets/student/progress-path-28.png';
import ProgressPath29 from 'views/assets/student/progress-path-29.png';
import ProgressPath30 from 'views/assets/student/progress-path-30.png';
import ProgressPath31 from 'views/assets/student/progress-path-31.png';
import ProgressPath32 from 'views/assets/student/progress-path-32.png';
import ProgressPath33 from 'views/assets/student/progress-path-33.png';
import ProgressPath34 from 'views/assets/student/progress-path-34.png';
import ProgressPath35 from 'views/assets/student/progress-path-35.png';
import ProgressPath36 from 'views/assets/student/progress-path-36.png';
import ProgressPath37 from 'views/assets/student/progress-path-37.png';
import ProgressPath38 from 'views/assets/student/progress-path-38.png';
import ProgressPath39 from 'views/assets/student/progress-path-39.png';
import ProgressPath40 from 'views/assets/student/progress-path-40.png';
import ProgressPath41 from 'views/assets/student/progress-path-41.png';
import ProgressPath42 from 'views/assets/student/progress-path-42.png';
import MarkTableSubject from 'views/molecules/Table/MarkTableSubject';

export const StudentProgress = () => {
    const grades = [
        '1st Grade',
        '2st Grade',
        '3st Grade',
        '4st Grade',
    ]
    const subjects = [
        'Math',
        'Computer',
        'Psychology',
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
    }, {
        left: 63,
        top: 20,
        imgSrc: ProgressPath10
    }, {
        left: 59,
        top: 29,
        imgSrc: ProgressPath11
    }, {
        left: 52,
        top: 34,
        imgSrc: ProgressPath12
    }, {
        left: 43,
        top: 32.3,
        imgSrc: ProgressPath13
    }, {
        left: 36,
        top: 31.3,
        imgSrc: ProgressPath14
    }, {
        left: 28,
        top: 31.3,
        imgSrc: ProgressPath15
    }, {
        left: 20,
        top: 32.3,
        imgSrc: ProgressPath16
    }, {
        left: 18,
        top: 40.3,
        imgSrc: ProgressPath17
    }, {
        left: 18,
        top: 51.3,
        imgSrc: ProgressPath18
    }, {
        left: 23,
        top: 57.3,
        imgSrc: ProgressPath19
    }, {
        left: 32,
        top: 59.3,
        imgSrc: ProgressPath20
    }, {
        left: 39.5,
        top: 54.3,
        imgSrc: ProgressPath21
    }, {
        left: 47,
        top: 47.3,
        imgSrc: ProgressPath22
    }, {
        left: 54.3,
        top: 41.5,
        imgSrc: ProgressPath23
    }, {
        left: 61.6,
        top: 37.8,
        imgSrc: ProgressPath24
    }, {
        left: 69,
        top: 37.8,
        imgSrc: ProgressPath25
    }, {
        left: 77,
        top: 38.8,
        imgSrc: ProgressPath26
    }, {
        left: 80.5,
        top: 46.8,
        imgSrc: ProgressPath27
    }, {
        left: 75.5,
        top: 56.8,
        imgSrc: ProgressPath28
    }, {
        left: 68,
        top: 61.3,
        imgSrc: ProgressPath29
    }, {
        left: 60.5,
        top: 60.3,
        imgSrc: ProgressPath30
    }, {
        left: 52.5,
        top: 60.1,
        imgSrc: ProgressPath31
    }, {
        left: 43.7,
        top: 60.6,
        imgSrc: ProgressPath32
    }, {
        left: 41.5,
        top: 66.8,
        imgSrc: ProgressPath33
    }, {
        left: 41.5,
        top: 75.8,
        imgSrc: ProgressPath34
    }, {
        left: 46,
        top: 81.3,
        imgSrc: ProgressPath35
    }, {
        left: 54.5,
        top: 80.4,
        imgSrc: ProgressPath36
    }, {
        left: 60.5,
        top: 73.8,
        imgSrc: ProgressPath37
    }, {
        left: 66,
        top: 70.3,
        imgSrc: ProgressPath38
    }, {
        left: 74,
        top: 70.3,
        imgSrc: ProgressPath39
    }, {
        left: 79.5,
        top: 75.8,
        imgSrc: ProgressPath40
    }, {
        left: 81.5,
        top: 82.3,
        imgSrc: ProgressPath41
    }, {
        left: 76.5,
        top: 92.5,
        imgSrc: ProgressPath42
    }, ];
    const subSubjects = [
        {
            left: 8,
            top: 14,
            angle: 108,
            text: 'Conteo'
        },
        {
            left: 0,
            top: 31,
            angle: 71,
            text: 'Geometría'
        },
        {
            left: 3,
            top: 37,
            angle: 48,
            text: 'Sentido Numérico'
        },
        {
            left: 24,
            top: 29,
            angle: 14,
            text: 'Medición'
        },
        {
            left: 1,
            top: 13,
            angle: 349,
            text: 'Suma de números enteros'
        },
        {
            left: 16,
            top: 38,
            angle: 311,
            text: 'Dinero'
        },
        {
            left: 4,
            top: 12,
            angle: 328,
            text: 'Resta de números enteros'
        },
        {
            left: 0,
            top: 29,
            angle: 10,
            text: 'Multiplicación de números enteros'
        },
    ]
    return <StudentMenu>
        <Container>
            <div style={{
                width: '500px',
                height: '80px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 10,
                }} src={TitleProgressBackground} alt="TitleProgressBackground" />
                <Title style={{
                    zIndex: 20,
                    color: 'black',
                }}>Treasure Track</Title>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: '1rem'
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
                    width: '100%'
                }} src={ProgressMap} alt="ProgressMap" />
                { paths.map((path, id) => <div key={id} style={{
                    position: 'absolute',
                    left: `${path.left}%`,
                    top: `${path.top}%`,
                }}>
                    { subSubjects.length > id ? <span style={{
                        position: 'absolute',
                        transform: `rotate(${subSubjects[id].angle}deg)`,
                        left: `${subSubjects[id].left}px`,
                        top: `${subSubjects[id].top}px`
                    }}>{subSubjects[id].text}</span> : '' }
                    <img width={`${Math.min(1024, window.innerWidth) / 1366 * 100}%`} height={`${Math.min(1024, window.innerWidth) / 1366 * 100}%`} src={path.imgSrc} alt={id.toString()} />
                </div>) }
            </div>
        </Container>
        <Container>
            <MarkTableSubject />
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

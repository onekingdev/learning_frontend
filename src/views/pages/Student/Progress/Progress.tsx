import { useState, useEffect, useContext, FC, useRef } from 'react';
import { useHistory }           from 'react-router-dom';
import { StudentMenu }         from 'views/pages/Student/Menus/StudentMenu';
import { Title }               from 'views/atoms/Text';
import Box                     from '@mui/material/Box';
import InputLabel              from '@mui/material/InputLabel';
import MenuItem                from '@mui/material/MenuItem';
import FormControl             from '@mui/material/FormControl';
import Select                  from '@mui/material/Select';
import TitleProgressBackground from 'views/assets/title-games-background.png';
import ProgressMap             from 'views/assets/student/process/map.svg';
import ProgressMapMobile       from 'views/assets/student/process/progress-map-mobile.svg';
import MarkTableSubject        from 'views/molecules/Table/MarkTableSubject';
import { LoadingContext }      from 'react-router-loading';
import { ScreenSize }          from 'constants/screenSize';
import { MobileCom, PcCom }    from '../TreasureTrack/TreasureTrack';
import { Container }            from './Style';
import { dictionary }           from './dictionary'
import { useSelector }       from 'react-redux';
import { TopicReport, AreasOfKnowledge } from 'api/fragments/topicFragments';
import query                 from 'api/queries/get';
import styled             from 'styled-components';
import background     from 'views/assets/colored-shapes-bg.svg';
import { subSubjects, subSubjectsMobile, paths, pathsMobile } from './positionInfo';
import { smoothScroll } from 'views/utils';
import _ from 'lodash';

const Wrapper = styled.div`
    background-image  : url(${background});
    background-repeat : no-repeat;
    background-size   : cover;
    height            : 100vh;
`;

const masteryColors = {
    'NP': '#919699',
    'N': '#EC5858',
    'C': '#F4C222',
    'M': '#26B824'
}

const screen_width = window.innerWidth;
let lineCount = 10;
let verticalCount = 0;
let unitHeight = 8;
if (screen_width < 450) {
    lineCount = 4;
    verticalCount = 0;
    unitHeight = 4;
} else if (screen_width < 768) {
    lineCount = 6;
    verticalCount = 0;
    unitHeight = 5;
} else {
    lineCount = 10;
    verticalCount = 0;
    unitHeight = 8;
}

const getAllTopic: any = (subSubjectList: Array<any>) => {
    return subSubjectList.map(subSubject => {
        return subSubject.subTopics.length > 0 ? [subSubject, getAllTopic(subSubject.subTopics)] : [subSubject]
    })
}

export const KidsProgress = () => {
    const user              = useSelector((state: any) => state.user);
    const student           = useSelector((state: any) => state.student);
    let language:string     = useSelector((state: any) => state.user.language);
    language                = language? language : 'en-us'

    const [activeSubjectId, setActiveSubjectId]   = useState<number>(-1);
    const [activeSubjectIdTable, setActiveSubjectIdTable] = useState<string>('');
    const [areasOfKnowledge, setAreasOfKnowledge] = useState<any[]>([]);
    const [data, setData]                         = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            // Get All Subject
            const res:any = await query('', AreasOfKnowledge(), user.token).catch(e => ({success: false}));
            if(res.success === false) {
                return
            }
            const result:any = await res.json();
            if(result.errors && !result.data) {
                alert(result.errors[0].message);
            } else {
                setAreasOfKnowledge(result.data.areasOfKnowledge)
                console.log(result.data.areasOfKnowledge)
                let iii = 4;
                for (let i = 0; i < result.data.areasOfKnowledge.length; i ++) {
                    if (result.data.areasOfKnowledge[i].name === 'Sight Words') {
                        iii = i;
                        break;
                    }
                }
                setActiveSubjectId(result.data.areasOfKnowledge[iii].id)
                // setSubject(result.data.areasOfKnowledge[0].id);
            }
        })();
    }, [user]);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const loadingContext = useContext(LoadingContext);
    useEffect(() => {
        if (activeSubjectId !== -1) {
            (async () => {
                loadingContext.start();
                // Get Topic Report
                const res:any = await query('', TopicReport(parseInt(student.id), activeSubjectId), user.token).catch(e => ({success: false}));
                if(res.success === false) {
                return
                }
                const result:any = await res.json();
                if(result.errors && !result.data) {
                    alert(result.errors[0].message);
                } else {
                    // console.log(result.data.rootTopicsByAok)
                    setData(result.data.rootTopicsByAok);
                }
                // if (firstLoad) {
                //     setFirstLoad(false);
                    loadingContext.done();
                // }
          })();
        }
      }, [activeSubjectId]);
    // const grades = [
    //     'Kindergarten',
    //     '1st Grade',
    //     '2nd Grade',
    //     '3rd Grade',
    //     '4th Grade',
    //     '5th Grade',
    //     '6th Grade',
    //     '7th Grade',
    //     '8th Grade',
    // ]
    const [grade, setGrade] = useState<string>(dictionary[language]?.grades[0]);

    const handleGradeChange = (event: any) => {
        setGrade(event.target.value);
    };
    const handleSubjectChange = (event: any) => {
        setActiveSubjectId(event.target.value);
    };
    const subSubjects1 = _.flattenDeep(getAllTopic(data)).map((_subSubject: any, id) => {
        let bgColor = masteryColors.NP;
        if (_subSubject.mastery) {
            if (_subSubject.mastery === 'NP') {
                bgColor = masteryColors.NP;
            } else if (_subSubject.mastery === 'N') {
                bgColor = masteryColors.N;
            } else if (_subSubject.mastery === 'C') {
                bgColor = masteryColors.C;
            } else if (_subSubject.mastery === 'M') {
                bgColor = masteryColors.M;
            }
        }
        return ({
            ..._subSubject,
            aokId: _subSubject.id || '',
            text: _subSubject.name || '',
            bgColor: bgColor,
            active: false,
        })
    })
    // const subSubjectsMobile1 = data.map((subSubject, id) => {
    //     let bgColor = masteryColors.NP;
    //     if (data && data[id] && data[id].mastery) {
    //         if (data[id].mastery === 'NP') {
    //             bgColor = masteryColors.NP;
    //         } else if (data[id].mastery === 'N') {
    //             bgColor = masteryColors.N;
    //         } else if (data[id].mastery === 'C') {
    //             bgColor = masteryColors.C;
    //         } else if (data[id].mastery === 'M') {
    //             bgColor = masteryColors.M;
    //         }
    //     }
    //     return ({
    //         ...subSubject,
    //         text: data && data[id] && data[id].name ? data[id].name : '',
    //         bgColor: bgColor,
    //         active: false,
    //     })
    // })

    const mapBgRef = useRef<HTMLDivElement>(null);
    const [mapWidth, setMapWidth] = useState<number>(1366);
    useEffect(() => {
        const timer = setInterval(() => {
            if (mapBgRef.current?.clientWidth) {
                setMapWidth(val => {
                    if (val === mapBgRef.current?.clientWidth) {
                        clearInterval(timer);
                        return val
                    } else {
                        return mapBgRef.current?.clientWidth || 0
                    }
                });
            }
        }, 1000);
    }, []);

    const history = useHistory();
    const [type, setType] = useState<string>();
    const handleTypeChange = (e: any) => setType(e.target.value);
    return (<Wrapper>
        <StudentMenu>
            <Container>
                <div style={{
                    width: '500px',
                    maxWidth: 'calc(100vw - 100px)',
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
                    }} src={TitleProgressBackground} alt='TitleProgressBackground' />
                    <Title style={{
                        zIndex: 20,
                        color: 'black',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                    }}>{dictionary[language]?.title}</Title>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    width: '100%',
                    paddingTop: '1rem'
                }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            {/* <InputLabel id='demo-simple-select-label' style={{
                                background: '#1771B9',
                                color: 'white'
                            }}>Grade</InputLabel> */}
                            <Select
                                id='demo-simple-select'
                                value={grade}
                                onChange={handleGradeChange}
                                SelectDisplayProps={{
                                    style: {
                                        background: '#1771B9',
                                        color: 'white'
                                    }
                                }}
                            >
                                { dictionary[language]?.grades.map((grade: any, id: number) => (
                                    <MenuItem key={id} value={grade}>{grade}</MenuItem>
                                )) }
                            </Select>
                        </FormControl>
                    </Box>
                    <div style={{
                        flexGrow: 1,
                        flexShrink: 1,
                    }}></div>
                    <Box sx={{ minWidth: 120 }} style={{
                        marginRight: '1rem'
                    }}>
                        <FormControl fullWidth style={{
                            width: '17rem',
                        }}>
                            <PcCom style={{
                                paddingLeft: '1rem'
                            }}>
                                <InputLabel id='demo-simple-select-label' style={{
                                    background: '#26B824',
                                    color: 'white',
                                }}>{dictionary[language]?.reviewQuestionsAnswered}</InputLabel>
                            </PcCom>
                            <MobileCom>
                                <InputLabel id='demo-simple-select-label' style={{
                                    background: '#26B824',
                                    color: 'white',
                                }}>{dictionary[language]?.reviewQuestions}</InputLabel>
                            </MobileCom>
                            <Select
                                id='demo-simple-select'
                                value={type}
                                disabled
                                onChange={handleTypeChange}
                                SelectDisplayProps={{
                                    style: {
                                        background: '#26B824',
                                        color: 'white'
                                    }
                                }}
                            >
                                { ["Today's Answers", 'Recent Answers', 'Recent Incorrect Answers'].map((type, id) => (
                                    <MenuItem key={id} value={type}>{type}</MenuItem>
                                )) }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            {/* <InputLabel id='demo-simple-select-label' style={{
                                background: '#CE2489',
                                color: 'white'
                            }}>Subject</InputLabel> */}
                            <Select
                                id='demo-simple-select'
                                value={activeSubjectId}
                                onChange={handleSubjectChange}
                                SelectDisplayProps={{
                                    style: {
                                        background: '#CE2489',
                                        color: 'white'
                                    }
                                }}
                            >
                                { areasOfKnowledge.map((subject, id) => (
                                    <MenuItem key={id} value={subject.id}>{subject.name}</MenuItem>
                                )) }
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div ref={mapBgRef} style={{
                    position: 'relative',
                    width: '100%',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    overflow: 'hidden',
                    backgroundImage: `url("map.svg")`,
                    backgroundColor: `rgb(235, 119, 56)`,
                    backgroundRepeat: 'repeat',
                    minHeight: (
                        (
                            Math.ceil(subSubjects1.length / (lineCount + verticalCount))
                            // (
                            //     data.length % (lineCount + verticalCount) === 0 || data.length % (lineCount + verticalCount) > lineCount ?
                            //     0 :
                            //     verticalCount
                            // )
                        ) * unitHeight * 1.5) + 'rem'
                }}>
                    {/* <div style={{
                        position: 'relative',
                        width: ScreenSize.widescreen
                    }}> */}
                    {/* <PcCom
                        style={{
                        }}
                    >
                    </PcCom>
                    <MobileCom
                        style={{
                            backgroundImage: `url("progress-map-mobile.svg")`,
                            backgroundColor: `rgb(235, 119, 56)`,
                            backgroundRepeat: 'repeat'
                        }}
                    >
                    </MobileCom> */}
                    {subSubjects1 && subSubjects1.map((singleInfo, id) => {
                        if (singleInfo && singleInfo.text) {
                            const _id = id + 1;
                            const rotatingStatus = (_id % (lineCount + verticalCount) >= lineCount || _id % (lineCount + verticalCount) === 0) ? (
                                Math.floor((_id - 1) / (lineCount + verticalCount)) % 2 === 0 ? 1 : -1
                            ) : 0
                            return (
                                <div style={{
                                    position: 'absolute',
                                    top: (_id % (verticalCount + lineCount)) > lineCount ? // (_id % (lineCount + verticalCount) === 11 || _id % (lineCount + verticalCount) === 12) ?
                                        (Math.floor(_id / (lineCount + verticalCount))) * ((unitHeight * 1.5) * (verticalCount + 1)) + (id % (lineCount + verticalCount) - lineCount + 1) * (unitHeight * 1.5) + 'rem' :
                                        (
                                            _id % (lineCount + verticalCount) === 0 ?
                                                (Math.floor(_id / (lineCount + verticalCount)) - 1) * ((unitHeight * 1.5) * (verticalCount + 1)) + verticalCount * (unitHeight * 1.5) + 'rem' :
                                                Math.floor((_id) / (lineCount + verticalCount)) * ((unitHeight * 1.5) * (verticalCount + 1)) + 'rem'
                                        ),
                                    left: (_id % (verticalCount + lineCount)) >= lineCount ? // (_id % (lineCount + verticalCount) === 11 || _id % (lineCount + verticalCount) === 12) ?
                                        ((lineCount - 1) * (Math.floor(_id / (lineCount + verticalCount)) % 2 === 0 ? (100 / lineCount) : 0) + '%') :
                                        (
                                            _id % (lineCount + verticalCount) === 0 ?
                                                ((lineCount - 1) * ((Math.floor(_id / (lineCount + verticalCount)) - 1) % 2 === 0 ? (100 / lineCount) : 0) + '%') :
                                                (
                                                    (Math.floor(_id / (lineCount + verticalCount)) % 2 === 0) ?
                                                        ((_id % (lineCount + verticalCount) - 1) * (100 / lineCount) + '%') :
                                                        ((lineCount - _id % (lineCount + verticalCount)) * (100 / lineCount) + '%')
                                                )
                                        ),
                                    width: ((_id % (verticalCount + lineCount)) === 0 || (_id % (verticalCount + lineCount)) >= lineCount) ? 100 / (lineCount + Math.floor(lineCount / 8)) + '%' : 100 / lineCount + '%',
                                    height: ((_id % (verticalCount + lineCount)) === 0 || (_id % (verticalCount + lineCount)) >= lineCount) ? unitHeight * 1.5 + 'rem' : unitHeight + 'rem',
                                    padding: '10px 16px',
                                    boxSizing: 'border-box',
                                    writingMode: rotatingStatus === 0 ? 'initial' : 'vertical-rl',
                                    textOrientation: 'mixed',
                                    transform: rotatingStatus === -1 ? "rotate(180deg)" : "rotate(0deg)",
                                }}>
                                    <div style={{
                                        width: `100%`,
                                        height: '100%',
                                        background: singleInfo.bgColor,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        fontSize: '0.7rem',
                                        transform: singleInfo.active ? 'scale(1.2)' : 'scale(1)',
                                        outline: singleInfo.active ? '2px solid black' : 'none',
                                        cursor: 'pointer',
                                    }} onClick={() => {
                                        if (singleInfo.aokId !== '') {
                                            smoothScroll('#aok-id-' + singleInfo.aokId)
                                            setActiveSubjectIdTable(singleInfo.aokId);
                                        }
                                    }}>
                                    {singleInfo.text}
                                    </div>
                                </div>
                            )
                        } else {
                            return <></>
                        }
                    })}
                        {/* { paths.map((path, id) => <PcCom key={id} style={{
                            position: 'absolute',
                            left: `${path.left}%`,
                            top: `${path.top}%`,
                        }}>
                            {path.imgSrc({
                                bgColor: subSubjects1.length > id ? subSubjects1[id].bgColor : masteryColors['NP'],
                                active: subSubjects1.length > id ? subSubjects1[id].active : false,
                                mapWidth: mapWidth
                            })}
                        </PcCom>) }
                        { pathsMobile.map((path, id) => <MobileCom key={id} style={{
                            position: 'absolute',
                            left: `${path.left}%`,
                            top: `${path.top}%`,
                        }}>
                            {path.imgSrc({
                                bgColor: subSubjects1.length > id ? subSubjects1[id].bgColor : masteryColors['NP'],
                                active: subSubjects1.length > id ? subSubjects1[id].active : false,
                            })}
                        </MobileCom>) }
                        { subSubjects1.map((subSubject, id) => <PcCom onClick={() => {
                            // history.push('/question/PATH/' + aokId)
                            if (subSubject.aokId !== '') {
                                smoothScroll('#aok-id-' + subSubject.aokId)
                                setActiveSubjectIdTable(subSubject.aokId);
                            }
                            // history.push('/question/AI/' + data[id].id)
                            // console.log(data[id].id)
                            // alert("Developing now, will be released soon 🎓")
                        }} key={id} style={{
                            position: 'absolute',
                            transform: `rotate(${subSubject.angle}deg) translate(${subSubject.tX * mapWidth / 1366}px, ${subSubject.tY * mapWidth / 1366}px)`,
                            // transform: `translate(${subSubject.tX * mapWidth / 1366}px, ${subSubject.tY * mapWidth / 1366}px)`,
                            left: `${subSubject.left}%`,
                            top: `${subSubject.top}%`,
                            // fontSize: `${Math.max(14 * mapWidth / 1366, 8)}px`,
                            fontWeight: subSubject.active ? '600' : '400',
                            width: `${subSubject.width * mapWidth / 1366}px`,
                            // overflow: "hidden",
                            height: '50px',
                            textAlign: 'center',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            // "-webkit-box-orient": "vertical",
                            WebkitLineClamp: 3,
                            // "-webkit-line-clamp": 3,
                            overflow: 'hidden',
                        }}>{subSubject.text}</PcCom>)}
                        { subSubjectsMobile1.map((subSubject, id) => <MobileCom key={id} style={{
                            position: 'absolute',
                            transform: `rotate(${subSubject.angle}deg) translate(${subSubject.tX * mapWidth / parseInt(ScreenSize.phone.slice(0, -2))}px, ${subSubject.tY * mapWidth / parseInt(ScreenSize.phone.slice(0, -2))}px)`,
                            left: `${subSubject.left}%`,
                            top: `${subSubject.top}%`,
                            fontSize: '11px',
                            fontWeight: subSubject.active ? '600' : '400',
                            width: `${subSubject.width * mapWidth / 390}px`,
                            zIndex: 20,
                            height: '50px',
                            textAlign: 'center'
                        }}>{subSubject.text}</MobileCom>)} */}
                    {/* </div> */}
                </div>
            </Container>
            <Container>
                <MarkTableSubject
                    data={data}
                    activeSubjectId={activeSubjectIdTable}
                />
            </Container>
        </StudentMenu>
    </Wrapper>)
}

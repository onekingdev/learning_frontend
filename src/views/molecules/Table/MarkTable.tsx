import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ScreenSize } from 'constants/screenSize';
import { useSelector } from 'react-redux';

const colors = [
    '#CC5B1D',
    '#28D764',
    '#FFD814',
    '#FF4646',
    '#FF8D8D',
    '#C6CACC'
];

const Subject = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 28px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Mark = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: 135px;
    min-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    @media (max-width: ${ScreenSize.phone}) {
        width: 100%;
        justify-content: start;
    }
`;

const MarkTableDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
    color: black;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    overflow: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: ${ScreenSize.phone}) {
        margin-bottom: 2rem;
        width: 100%;
    }
`;

interface ISingleGroup {
    main?: {
        item1?: string,
        item2?: string,
        item3?: string,
        item4?: string,
        mastery?: string,
    },
    extra?: ISingleGroup[],
    deep?: number,
}

const SingleGroup: FC<ISingleGroup> = ({ main={}, extra=[], deep = 0 }) => {
    const [opened, setOpened] = useState<boolean>(false);
    const toggle = () => setOpened(val => !val);
    const [markOpened, setMarkOpened] = useState<boolean>(false);
    const toggleMark = () => setMarkOpened(val => !val);
    const children = opened ? extra.map((item: ISingleGroup, id: number) => {
        return <SingleGroup key={id} main={item.main} extra={item.extra} deep={deep+1} />
    }) : '';
    if (main === {}) {
        return <></>;
    } else {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <PcCom style={{
                backgroundColor: colors[deep],
                cursor: 'pointer',
                border: '1px solid black'
            }} onClick={toggle}>
                <Subject style={{
                    paddingLeft: `${deep}rem`,
                }}>
                    <ArrowRightIcon style={{
                        transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
                        opacity: extra.length > 0 ? '100' : '0'
                    }} />
                    <span>{main.item1}</span>
                </Subject>
                <Mark>{main.item2}</Mark>
                <Mark>{main.item3}</Mark>
                <Mark>{main.item4}</Mark>
            </PcCom>
            <MobileCom style={{
                backgroundColor: colors[deep],
                cursor: 'pointer',
            }}>
                <Subject style={{
                    paddingLeft: `${deep}rem`,
                    border: '1px solid black'
                }} onClick={toggle}>
                    <ArrowRightIcon style={{
                        transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
                        opacity: extra.length > 0 ? '100' : '0'
                    }} />
                    <span>{main.item1}</span>
                </Subject>
                { main.item2 !== 'Accuracy' ? <Mark style={{
                    paddingLeft: `${deep + 1.5}rem`,
                    border: '1px solid black'
                }} onClick={toggleMark}>
                    <ArrowRightIcon style={{
                        transform: markOpened ? 'rotate(90deg)' : 'rotate(0deg)',
                    }} />
                    <div>
                        <div>Accuracy {main.item2}</div>
                        { markOpened ? <>
                            <span style={{
                                marginRight: '1rem'
                            }}>Correct {main.item3}</span>
                            <span>Total {main.item4}</span>
                        </> : '' }
                    </div>
                </Mark> : '' }
            </MobileCom>
            { children }
        </div>
    }
}

const MarkTable = ({
    activeSubjectId=-1,
    onChangeActiveIdHandler=()=>{},
    data=[],
    areasOfKnowledge=[],
    studentId=-1,
    setStudentId=()=>{},
}: {
    activeSubjectId: number;
    onChangeActiveIdHandler: (x: number) => void;
    data: any;
    areasOfKnowledge: any[];
    studentId: number;
    setStudentId: (x: number) => void;
}) => {
    const guardian = useSelector((state: any) => state.guardian);
    useEffect(() => {
        if (areasOfKnowledge && typeof areasOfKnowledge === "object" && areasOfKnowledge.length > 0) {
            onChangeActiveIdHandler(areasOfKnowledge[0].id)
        }
    }, [areasOfKnowledge]);
    return (<MarkTableDiv>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end"
        }}>
            <div>
                Student |
            </div>
            <select
                style={{
                    minHeight: "28px",
                    background: "transparent",
                    width: "auto",
                    height: "100%",
                    border: "none",
                    outline: "none",
                }} name="" id="" value={studentId} onChange={e => setStudentId(parseInt(e.target.value))}>
            { guardian && guardian.guardianstudentSet && guardian.guardianstudentSet.length > 0 ? guardian.guardianstudentSet.map((studentObj: any, id: number) => (
                <option key={id} value={studentObj.id}>{ studentObj?.student?.fullName || "Unset" }</option>
            )) : "" }
            </select>
        </div>
        <PcCom style={{
            backgroundColor: colors[0],
            cursor: 'pointer',
            border: '1px solid black'
        }}>
            <select
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    minHeight: "28px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    paddingLeft: `${1}rem`,
                    background: "transparent",
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                }} name="" id="" value={activeSubjectId} onChange={e => onChangeActiveIdHandler(parseInt(e.target.value))}>
            { areasOfKnowledge && typeof areasOfKnowledge === "object" && areasOfKnowledge.length > 0 ? areasOfKnowledge.map((subject, id) => (
                <option key={id} value={subject?.id}>{ subject?.name }</option>
            )) : "" }
            </select>
            <Mark>Accuracy</Mark>
            <Mark>Correct</Mark>
            <Mark>Total</Mark>
        </PcCom>
        <MobileCom style={{
            backgroundColor: colors[0],
            cursor: 'pointer',
        }}>
            <select style={{
                flexGrow: 1,
                flexShrink: 1,
                minHeight: "28px",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                paddingLeft: `${0}rem`,
                background: "transparent",
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
            }} name="" id="" value={activeSubjectId} onChange={e => onChangeActiveIdHandler(parseInt(e.target.value))}>
            { areasOfKnowledge.map((subject, id) => (
                <option key={id} value={subject?.id}>{ subject?.name }</option>
            )) }
            </select>
        </MobileCom>
        { data && data.rootTopicsByAok && data.rootTopicsByAok.length > 0 ? data?.rootTopicsByAok?.map((aok: any, id: number) => (
            <SingleGroup key={id} main={{
                item1: aok?.name,
                item2: aok?.report ? "" : "",
                item3: aok?.report ? "" : "",
                item4: aok?.report ? "" : "",
                mastery: aok?.mastery
            }} extra={aok?.subTopics.map((subTopic1: any) => ({
                main: {
                    item1: subTopic1?.name,
                    item2: subTopic1?.report ? "" : "",
                    item3: subTopic1?.report ? "" : "",
                    item4: subTopic1?.report ? "" : "",
                    mastery: subTopic1?.mastery
                },
                extra: subTopic1?.subTopics.map((subTopic2: any) => ({
                    main: {
                        item1: subTopic2?.name,
                        item2: subTopic2?.report ? "" : "",
                        item3: subTopic2?.report ? "" : "",
                        item4: subTopic2?.report ? "" : "",
                        mastery: subTopic2?.mastery
                    },
                    extra: subTopic1?.subTopics.map((subTopic3: any) => ({
                        main: {
                            item1: subTopic3?.name,
                            item2: subTopic3?.report ? "" : "",
                            item3: subTopic3?.report ? "" : "",
                            item4: subTopic3?.report ? "" : "",
                            mastery: subTopic3?.mastery
                        },
                    }))
                }))
            }))} deep={1} />
        )) : "" }
        <SingleGroup main={{
            item1: 'Resta de números enteros',
            item2: '-%',
            item3: '-%',
            item4: '-%',
        }} deep={0} />
    </MarkTableDiv>);
};

export default MarkTable;

export const MobileCom = styled.div`
    display: none;
    @media (max-width: ${ScreenSize.phone}) {
        display: block;
    }
`;

export const PcCom = styled.div`
    display: flex;
    @media (max-width: ${ScreenSize.phone}) {
        display: none;
    }
`;

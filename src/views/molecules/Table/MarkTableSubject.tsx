import { FC, useState } from 'react';
import styled           from 'styled-components';
import ArrowRightIcon   from '@mui/icons-material/ArrowRight';
import { ScreenSize }   from 'constants/screenSize';
import { TypoBtn }      from 'views/atoms/Text';
import { useHistory } from 'react-router-dom';

const colors = [
    '#CC5B1D',
    '#28D764',
    '#FFD814',
    '#FF4646',
    '#FF8D8D',
    '#C6CACC'
];
const masteryColors = {
    "NP": "#919699",
    "N": "#EC5858",
    "C": "#F4C222",
    "M": "#26B824"
}

const Subject = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 28px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const MarkTableDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
    color: black;
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    overflow: auto;
    @media (min-width: ${ScreenSize.tablet}) {
        margin-bottom: 2rem;
    }
`;

interface ISingleGroup {
    main?: {
        item?: string,
        button?: boolean,
        mastery?: string,
    },
    extra?: ISingleGroup[],
    deep?: number,
    aokId?: number,
}

const SingleGroup: FC<ISingleGroup> = ({ main={}, extra=[], deep = 0, aokId = -1 }) => {
    const history = useHistory();
    const [opened, setOpened] = useState<boolean>(false);
    const toggle = () => setOpened(val => !val);
    const children = opened ? extra.map((item: ISingleGroup, id: number) => {
        return <SingleGroup aokId={aokId} key={id} main={item.main} extra={item.extra} deep={deep+1} />
    }) : '';
    let bgColor = masteryColors.NP;
    if (main.mastery === "NP") {
        bgColor = masteryColors.NP;
    } else if (main.mastery === "N") {
        bgColor = masteryColors.N;
    } else if (main.mastery === "C") {
        bgColor = masteryColors.C;
    } else if (main.mastery === "M") {
        bgColor = masteryColors.M;
    }
    if (main === {}) {
        return <></>;
    } else {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                // backgroundColor: colors[deep],
                backgroundColor: bgColor,
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
                    <span style={{
                        paddingLeft: '5px',
                        paddingRight: '5px',
                    }}>{main.item}</span>
                </Subject>
            </div>
            { main.button ? <div style={{
                    display: 'flex',
                    // backgroundColor: colors[deep],
                    backgroundColor: bgColor,
                    cursor: 'pointer',
                    border: '1px solid black'
                }} onClick={toggle}>
                    <TypoBtn style={{
                        background: '#26B824',
                        color: 'black',
                        minWidth: '200px',
                        height: '36px',
                        marginTop: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '1000px',
                        outline: 'none',
                        cursor: 'pointer',
                        marginLeft: `calc(${deep}rem + 2rem)`,
                    }} onClick={() => {
                        if (aokId !== -1) {
                            // history.push('/question/PATH/' + aokId)
                            history.push('/question/AI/' + aokId)
                            // alert("Developing now, will be released soon 🎓")
                        }
                    }}>Practice</TypoBtn>
                </div>
            : "" }
            { children }
        </div>
    }
}

const MarkTableSubject = ({
    data=[],
    activeSubjectId=-1,
}: {
    data: any[];
    activeSubjectId: number,
}) => {
    console.log(data)
    return (<MarkTableDiv>
        { data && data.length > 0 ? data?.map((aok: any, id: number) => (
            <SingleGroup aokId={activeSubjectId} key={id} main={{
                item: aok?.name,
                mastery: aok?.mastery,
                button: aok?.subTopics.length ? false : true,
            }} extra={aok?.subTopics.map((subTopic1: any) => ({
                main: {
                    item: subTopic1?.name,
                    mastery: subTopic1?.mastery,
                    button: subTopic1?.subTopics.length ? false : true,
                },
                extra: subTopic1?.subTopics.map((subTopic2: any) => ({
                    main: {
                        item: subTopic2?.name,
                        mastery: subTopic2?.mastery,
                        button: subTopic2?.subTopics.length ? false : true,
                    },
                    extra: subTopic1?.subTopics.map((subTopic3: any) => ({
                        main: {
                            item: subTopic3?.name,
                            mastery: subTopic3?.mastery,
                            button: true,
                        },
                    }))
                }))
            }))} deep={1} />
        )) : '' }
    </MarkTableDiv>);
};

export default MarkTableSubject;

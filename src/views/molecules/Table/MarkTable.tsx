import { FC, useState } from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ScreenSize } from 'constants/screenSize';

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

const SingleLineContainer = styled.div`
    display: grid;
    grid-template-columns: 4;
`;

interface ISingleGroup {
    main?: {
        item1?: string,
        item2?: string,
        item3?: string,
        item4?: string,
    },
    extra?: ISingleGroup[],
    deep?: number,
}

const SingleGroup: FC<ISingleGroup> = ({ main={}, extra=[], deep = 0 }) => {
    const [opened, setOpened] = useState<boolean>(true);
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
                border: "1px solid black"
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
                    border: "1px solid black"
                }} onClick={toggle}>
                    <ArrowRightIcon style={{
                        transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
                        opacity: extra.length > 0 ? '100' : '0'
                    }} />
                    <span>{main.item1}</span>
                </Subject>
                { main.item2 !== "Accuracy" ? <Mark style={{
                    paddingLeft: `${deep + 1.5}rem`,
                    border: "1px solid black"
                }} onClick={toggleMark}>
                    <ArrowRightIcon style={{
                        transform: markOpened ? 'rotate(90deg)' : 'rotate(0deg)',
                    }} />
                    <div>
                        <div>Accuracy {main.item2}</div>
                        { markOpened ? <>
                            <span style={{
                                marginRight: "1rem"
                            }}>Correct {main.item3}</span>
                            <span>Total {main.item4}</span>
                        </> : "" }
                    </div>
                </Mark> : "" }
            </MobileCom>
            { children }
        </div>
    }
}

const MarkTable = () => {
    return (<MarkTableDiv>
        <SingleGroup main={{
            item1: 'Math',
            item2: 'Accuracy',
            item3: 'Correct',
            item4: 'Total',
        }} extra={[{
            main: {
                item1: 'Conteo',
                item2: '93%',
                item3: '538',
                item4: '686',
            }
        }, {
            main: {
                item1: 'Geometría',
                item2: '86%',
                item3: '491',
                item4: '1,031',
            }
        }, {
            main: {
                item1: 'Sentido numérico',
                item2: '96%',
                item3: '859',
                item4: '1,285',
            }
        }, {
            main: {
                item1: 'Medición',
                item2: '91%',
                item3: '793',
                item4: '1,153',
            }
        }, {
            main: {
                item1: 'Suma de números enteros',
                item2: '75%',
                item3: '265',
                item4: '449',
            },
            extra: [{
                main: {
                    item1: 'Dinero:',
                    item2: '56%',
                    item3: '135',
                    item4: '170'
                },
            }, {
                main: {
                    item1: 'Conceptos de la moneda-2 Comparar valores de monedas',
                    item2: '56%',
                    item3: '33',
                },
                extra: [{
                    main: {
                        item1: 'Representar el valor de una moneda con una cantidad de una moneda diferente',
                        item2: '56%',
                        item3: '5'
                    }
                }]
            }, ]
        }, {
            main: {
                item1: 'Conceptos de la moneda-2 Comparar valores de monedas',
                item2: '89%',
                item3: '645',
                item4: '820',
            }
        }, ]} deep={0}/>
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

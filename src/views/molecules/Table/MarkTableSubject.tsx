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
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MarkTableDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
    color: black;
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    overflow: auto;
    @media (min-width: ${ScreenSize.tablet}) {
        margin-bottom: 2rem;
    }
`;

interface ISingleGroup {
    main?: {
        item?: string,
        type?: string,
    },
    extra?: ISingleGroup[],
    deep?: number,
}

const SingleGroup: FC<ISingleGroup> = ({ main={}, extra=[], deep = 0 }) => {
    const [opened, setOpened] = useState<boolean>(true);
    const toggle = () => setOpened(val => !val);
    const children = opened ? extra.map((item: ISingleGroup, id: number) => {
        return <SingleGroup key={id} main={item.main} extra={item.extra} deep={deep+1} />
    }) : '';
    if (main === {}) {
        return <></>;
    } else {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '760px',
        }}>
            <div style={{
                display: 'flex',
                backgroundColor: colors[deep],
                cursor: 'pointer'
            }} onClick={toggle}>
                <Subject style={{
                    paddingLeft: `${deep}rem`,
                }}>
                    { main.type === 'text' ? <>
                        <ArrowRightIcon style={{
                            transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
                            opacity: extra.length > 0 ? '100' : '0'
                        }} />
                        <span>{main.item}</span>
                    </> : <>
                        <button style={{
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
                            cursor: 'pointer'
                        }}>{main.item}</button>
                    </> }
                </Subject>
            </div>
            { children }
        </div>
    }
}

const MarkTableSubject = () => {
    return (<MarkTableDiv>
        <SingleGroup main={{
            item: 'Math',
            type: 'text'
        }} extra={[{
            main: {
                item: 'Conteo',
                type: 'text'
            }
        }, {
            main: {
                item: 'Geometría',
                type: 'text'
            }
        }, {
            main: {
                item: 'Sentido numérico',
                type: 'text'
            }
        }, {
            main: {
                item: 'Medición',
                type: 'text'
            }
        }, {
            main: {
                item: 'Suma de números enteros',
                type: 'text'
            },
            extra: [{
                main: {
                    item: 'Dinero:',
                    type: 'text'
                },
            }, {
                main: {
                    item: 'Conceptos de la moneda-2 Comparar valores de monedas',
                    type: 'text'
                },
                extra: [{
                    main: {
                        item: 'Representar el valor de una moneda con una cantidad de una moneda diferente',
                        type: 'text'
                    }
                }, {
                    main: {
                        item: 'Practice',
                        type: 'button'
                    }
                }, ]
            }, ]
        }, {
            main: {
                item: 'Conceptos de la moneda-2 Comparar valores de monedas',
                type: 'text'
            }
        }, ]} deep={0}/>
        <SingleGroup main={{
            item: 'Resta de números enteros',
            type: 'text'
        }} deep={0} />
    </MarkTableDiv>);
};

export default MarkTableSubject;

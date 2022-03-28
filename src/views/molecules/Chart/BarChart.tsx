import CrogoGirlsFace                  from 'views/assets/croco-girl.svg';
import TitleKidBackground              from 'views/assets/title-kids-background.png';
import ReportCheckIcon                 from 'views/assets/parent/report-check.png';
import ReportCoinIcon                  from 'views/assets/parent/report-coin.png';
import styled                          from 'styled-components';
import { ScreenSize }                  from 'constants/screenSize';
import { useEffect, useRef, useState } from 'react';
import 'react-vis/dist/style.css';
import {
    XYPlot,
    LineSeries,
    VerticalBarSeries,
    AreaSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
}                                      from 'react-vis';
import TitleGameBackground             from 'views/assets/title-games-background.png';

const ChartHeaderContrainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    background: #D1E3F1;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @media (min-width: ${ScreenSize.phone}) {
        flex-direction: row;
        background: transparent;
        margin-top: 5rem;
    }
`;
const CrocoGirlImg = styled.img``;
const ChartTitleGroup = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;
const ChartTitleBG = styled.img`
    position: absolute;
    height: 100%;
    margin-left: 0;
    width: 100%;
    z-index: 10;
    display: none;
    @media (min-width: ${ScreenSize.phone}) {
        margin-left: -10rem;
        display: block
    }
`;
const ChartTitle = styled.span`
    z-index: 20;
    color: #3F3F3F;
    position: relative;
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    line-height: 50px;
    padding-right: 3rem;
    padding-left: 3rem;
    text-align: center;
    width: 100%;
    @media (min-width: ${ScreenSize.phone}) {
        padding-right: 10rem;
        padding-left: 0;
        color: white;
    }
`;

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const WEEKS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
]

interface iChartData {
    x: number,
    y: number
}

export const BarChart = () => {
    const [barChartData, setBarChartData] = useState<iChartData[]>([]);
    const [barChartData2, setBarChartData2] = useState<iChartData[]>([]);
    const [areaChartData, setAreaChartData] = useState<iChartData[]>([]);
    useEffect(() => {
        setBarChartData([
            {x: 0, y: 750},
            {x: 1, y: 200},
            {x: 2, y: 1700},
            {x: 3, y: 300},
            {x: 4, y: 100},
            {x: 5, y: 800},
            {x: 6, y: 100},
            // {x: 7, y: 2900},
            // {x: 8, y: 1600},
            // {x: 9, y: 800},
            // {x: 10, y: 600},
            // {x: 11, y: 1500},
        ]);
        setBarChartData2([
            {x: 0, y: 250},
            {x: 1, y: 100},
            {x: 2, y: 1400},
            {x: 3, y: 800},
            {x: 4, y: 900},
            {x: 5, y: 300},
            {x: 6, y: 500},
            // {x: 7, y: 2900},
            // {x: 8, y: 1600},
            // {x: 9, y: 800},
            // {x: 10, y: 600},
            // {x: 11, y: 1500},
        ]);
        setAreaChartData([
            {x: 0, y: 375},
            {x: 1, y: 100},
            {x: 2, y: 850},
            {x: 3, y: 150},
            {x: 4, y: 50},
            {x: 5, y: 400},
            {x: 6, y: 50},
            // {x: 7, y: 1450},
            // {x: 8, y: 800},
            // {x: 9, y: 400},
            // {x: 10, y: 300},
            // {x: 11, y: 750},
        ]);
    }, []);

    const chartContainerRef = useRef<HTMLDivElement>(null);
    const [chartWidth, setChartWidth] = useState<number>(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (chartContainerRef.current?.clientWidth) {
                setChartWidth(val => {
                    if (val === chartContainerRef.current?.clientWidth) {
                        clearInterval(timer);
                        return val
                    } else {
                        return chartContainerRef.current?.clientWidth || 0
                    }
                });
            }
        }, 1000);
    }, []);
    return (
        <div style={{ position: 'relative', maxWidth: '768px', margin: 'auto'}}>
            <MobileCom>
                <img style={{
                    position: 'absolute',
                    height: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }} src={TitleGameBackground} alt='TitleGameBackground'></img>
                <h3 style={{
                    position: 'relative',
                    width: '100%',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '28px',
                    color: '#3F3F3F',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    zIndex: 20,
                }}>Your Childs</h3>
            </MobileCom>
            <ChartHeaderContrainer>
                <CrocoGirlImg style={{
                    zIndex: 20
                }} src={CrogoGirlsFace} alt='CrogoGirls' />
                <ChartTitleGroup>
                    <ChartTitleBG src={TitleKidBackground} alt='Kid Title Bg' />
                    <ChartTitle>Sophie Turner Report</ChartTitle>
                </ChartTitleGroup>
            </ChartHeaderContrainer>
            <div ref={chartContainerRef} style={{
                position: 'relative',
                width: 'calc(100% - 2rem)',
                marginLeft: '1rem',
                marginRight: '1rem',
                overflowX: 'auto'
            }}>
                <XYPlot height={450} width={chartWidth}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis style={{
                        text: {
                            fontSize: chartWidth < 576 ? '0.8rem' : '1.2rem'
                        }
                    }} tickLabelAngle={0} tickFormat={v => WEEKS[v]} />
                    <YAxis style={{
                        text: {
                            fontSize: '1rem'
                        }
                    }} width={52}/>
                    {/* <AreaSeries fill={'#F4C222'} opacity={0.54} data={areaChartData} curve={'curveMonotoneX'} />
                    <LineSeries fill={'#F4C222'} opacity={0.54} data={areaChartData} curve={'curveMonotoneX'} /> */}
                    <VerticalBarSeries color='#28D764' barWidth={0.7} data={barChartData} opacity={0.6} />
                    <VerticalBarSeries color='#CC5B1D' barWidth={0.7} data={barChartData2} opacity={0.6} />
                </XYPlot>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={ReportCheckIcon} alt='ReportCheckIcon' />
                    <span style={{marginLeft: '0.5rem'}}>correct answers</span>
                </div>
                <div style={{
                    display: 'flex',
                    marginLeft: '3rem',
                    alignItems: 'center'
                }}>
                    <img src={ReportCoinIcon} alt='ReportCoinIcon' />
                    <span style={{marginLeft: '0.5rem'}}>coins earned</span>
                </div>
            </div>
        </div>
    )
}

export const MobileCom = styled.div`
    display: none;
    position: relative;
    @media (max-width: ${ScreenSize.phone}) {
        display: block;
    }
`;

export const PcCom = styled.div`
    display: block;
    position: relative;
    @media (max-width: ${ScreenSize.phone}) {
        display: none;
    }
`;

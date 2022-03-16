import CrogoGirlsFace from 'views/assets/croco-girl.svg';
import TitleKidBackground from 'views/assets/title-kids-background.png';
import ReportCheckIcon from 'views/assets/parent/report-check.png';
import ReportCoinIcon from 'views/assets/parent/report-coin.png';
import styled from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { useEffect, useState } from 'react';
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
} from 'react-vis';

const ChartHeaderContrainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    @media (min-width: ${ScreenSize.tablet}) {
        flex-direction: row;
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
    @media (min-width: ${ScreenSize.tablet}) {
        margin-left: -10rem;
    }
`;
const ChartTitle = styled.span`
    z-index: 20;
    color: white;
    position: relative;
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    line-height: 50px;
    padding-right: 3rem;
    padding-left: 3rem;
    text-align: center;
    width: 100%;
    @media (min-width: ${ScreenSize.tablet}) {
        padding-right: 10rem;
        padding-left: 0;
    }
`;

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

interface iChartData {
    x: number,
    y: number
}

export const BarChart = () => {
    const [barChartData, setBarChartData] = useState<iChartData[]>([]);
    const [areaChartData, setAreaChartData] = useState<iChartData[]>([]);
    const data: iChartData[] = [
        {x: 0, y: 750},
        {x: 1, y: 200},
        {x: 2, y: 1700},
        {x: 3, y: 300},
        {x: 4, y: 100},
        {x: 5, y: 800},
        {x: 6, y: 100},
        {x: 7, y: 2900},
        {x: 8, y: 1600},
        {x: 9, y: 800},
        {x: 10, y: 600},
        {x: 11, y: 1500},
    ];
    useEffect(() => {
        setBarChartData([
            {x: 0, y: 750},
            {x: 1, y: 200},
            {x: 2, y: 1700},
            {x: 3, y: 300},
            {x: 4, y: 100},
            {x: 5, y: 800},
            {x: 6, y: 100},
            {x: 7, y: 2900},
            {x: 8, y: 1600},
            {x: 9, y: 800},
            {x: 10, y: 600},
            {x: 11, y: 1500},
        ]);
        setAreaChartData([
            {x: 0, y: 375},
            {x: 1, y: 100},
            {x: 2, y: 850},
            {x: 3, y: 150},
            {x: 4, y: 50},
            {x: 5, y: 400},
            {x: 6, y: 50},
            {x: 7, y: 1450},
            {x: 8, y: 800},
            {x: 9, y: 400},
            {x: 10, y: 300},
            {x: 11, y: 750},
        ]);
    }, []);
    return (
        <div style={{ position: "relative"}}>
            <ChartHeaderContrainer>
                <CrocoGirlImg style={{
                    zIndex: 20
                }} src={CrogoGirlsFace} alt="CrogoGirls" />
                <ChartTitleGroup>
                    <ChartTitleBG src={TitleKidBackground} alt="Kid Title Bg" />
                    <ChartTitle>Sophie Turner Report</ChartTitle>
                </ChartTitleGroup>
            </ChartHeaderContrainer>
            <div style={{
                position: 'relative',
                width: "100%",
                maxWidth: "95vw",
                overflowX: "auto"
            }}>
                <XYPlot height={450} width={parseInt(ScreenSize.tablet.slice(0,-2))}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis style={{
                        text: {
                            fontSize: "1.2rem"
                        }
                    }} tickLabelAngle={0} tickFormat={v => MONTHS[v]} />
                    <YAxis style={{
                        text: {
                            fontSize: "1rem"
                        }
                    }} width={52}/>
                    <AreaSeries fill={"#F4C222"} opacity={0.54} data={areaChartData} curve={"curveMonotoneX"} />
                    <LineSeries fill={"#F4C222"} opacity={0.54} data={areaChartData} curve={"curveMonotoneX"} />
                    <VerticalBarSeries color="#28D764" barWidth={0.7} data={barChartData} opacity={0.6} />
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
                    <img src={ReportCheckIcon} alt="ReportCheckIcon" />
                    <span style={{marginLeft: '0.5rem'}}>correct answers</span>
                </div>
                <div style={{
                    display: 'flex',
                    marginLeft: '3rem',
                    alignItems: 'center'
                }}>
                    <img src={ReportCoinIcon} alt="ReportCoinIcon" />
                    <span style={{marginLeft: '0.5rem'}}>coins earned</span>
                </div>
            </div>
        </div>
    )
}

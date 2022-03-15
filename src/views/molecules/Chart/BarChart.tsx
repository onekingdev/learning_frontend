import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import CrogoGirlsFace from 'views/assets/croco-girl.svg';
import TitleKidBackground from 'views/assets/title-kids-background.png';
import ReportChartBg from 'views/assets/parent/report-chart-bg.png';
import ReportCheckIcon from 'views/assets/parent/report-check.png';
import ReportCoinIcon from 'views/assets/parent/report-coin.png';
import styled from 'styled-components';
import { ScreenSize } from 'constants/screenSize';

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

export const BarChart = () => {
    const chartData = [
        { month: '1', population: 750 },
        { month: '2', population: 200 },
        { month: '3', population: 1700 },
        { month: '4', population: 300 },
        { month: '5', population: 100 },
        { month: '6', population: 800 },
        { month: '7', population: 100 },
        { month: '8', population: 2900 },
        { month: '9', population: 1600 },
        { month: '10', population: 800 },
        { month: '11', population: 600 },
        { month: '12', population: 1500 },
    ];
    return (
        <div>
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
                position: 'relative'
            }}>
                <div style={{
                    zIndex: 0,
                    position: 'absolute',
                    width: '100%',
                    paddingLeft: '3rem',
                    paddingRight: '0.5rem',
                    paddingBottom: '2rem',
                    boxSizing: 'border-box',
                    bottom: 0
                }}>
                <img style={{
                    width: '100%'
                }} src={ReportChartBg} alt="ReportChartBg" />
                </div>
                <Chart
                    height={window.innerHeight - 450}
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis tickSize={500} >
                    </ValueAxis>
                    <BarSeries
                        valueField="population"
                        argumentField="month"
                    />
                    {/* <Animation /> */}
                </Chart>
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

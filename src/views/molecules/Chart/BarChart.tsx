import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import CrogoGirlsFace from "views/assets/croco-girl.svg";
import TitleKidBackground from "views/assets/title-kids-background.png";
import ReportChartBg from "views/assets/parent/report-chart-bg.png";

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
            <div style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5rem",
            }}>
                <img style={{
                    zIndex: 20
                }} src={CrogoGirlsFace} alt="CrogoGirls" />
                <div style={{
                    position: "relative"
                }}>
                    <img style={{
                        position: "absolute",
                        height: "100%",
                        marginLeft: "-3rem",
                        width: "100%",
                        zIndex: 10
                    }} src={TitleKidBackground} alt="Kid Title Bg" />
                    <span style={{
                        zIndex: 20,
                        color: 'white',
                        position: 'relative',
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontSize: "40px",
                        lineHeight: "50px",
                        paddingRight: "10rem"
                    }}>Sophie Turner Report</span>
                </div>
            </div>
            <div style={{
                position: "relative"
            }}>
                <div style={{
                    zIndex: 0,
                    position: "absolute",
                    width: "100%",
                    paddingLeft: "3rem",
                    paddingRight: "0.5rem",
                    paddingBottom: "2rem",
                    boxSizing: "border-box",
                    bottom: 0
                }}>
                <img style={{
                    width: "100%"
                }} src={ReportChartBg} alt="ReportChartBg" />
                </div>
                <Chart
                    height={300}
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis />
                    <BarSeries
                        valueField="population"
                        argumentField="month"
                    />
                    {/* <Animation /> */}
                </Chart>
            </div>
        </div>
    )
}

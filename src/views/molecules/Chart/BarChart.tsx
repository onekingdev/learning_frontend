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
        // { year: "1950", population: 2.525 },
        // { year: "1960", population: 3.018 },
        // { year: "1970", population: 3.682 },
        // { year: "1980", population: 4.44 },
        // { year: "1990", population: 5.31 },
        // { year: "2000", population: 6.127 },
        // { year: "2010", population: 6.93 },
        // { year: "2011", population: 6.93 },
        // { year: "2012", population: 6.93 },
        // { year: "2013", population: 6.93 }
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
            <Chart
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
    )
}

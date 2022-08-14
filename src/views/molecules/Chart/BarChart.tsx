import ReportCheckIcon from 'views/assets/parent/report-check.png';
import ReportCoinIcon from 'views/assets/parent/report-coin.png';
import { useEffect, useState } from 'react';
import 'react-vis/dist/style.css';
import {
    VerticalBarSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    FlexibleXYPlot,
} from 'react-vis';
import query from 'api/queries/get';
import { LastWeekAndCoinsQuestions } from 'api/fragments/studentFragments';
import { dictionary } from './dictionary';


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

interface BarChartProps {
    studentId: string | number
    token: string
    language: string
}

export const BarChart = ({ token, studentId, language }: BarChartProps) => {

    const [barChartData, setBarChartData] = useState<iChartData[]>([]);
    const [barChartData2, setBarChartData2] = useState<iChartData[]>([]);

    useEffect(() => {
        if (studentId && token) {
            (async () => {
                const res: any = await query('', LastWeekAndCoinsQuestions(1), token).catch(() => ({ success: false }));
                if (res.success !== false) {
                    const result: any = await res.json();
                    if (result.errors && !result.data) {
                        alert(result.errors[0].message);
                    } else {
                        const { lastWeekCoins, lastWeekQuestions } = result.data.students.filter((_student: any) => _student.id === studentId)[0];
                        // setBarChartData(lastWeekQuestions.map((_question: any) => ({ x: new Date(_question.day).getDay(), y: _question.question})))
                        let chartData1 = [];
                        chartData1 = [0, 1, 2, 3, 4, 5, 6].map(_day => {
                            const dayQuestion = lastWeekQuestions.filter((_question: any) => new Date(_question.day).getDay() === _day)
                            if (dayQuestion.length > 0) {
                                return { x: _day, y: dayQuestion[0].questions }
                            } else {
                                return { x: _day, y: 0 }
                            }
                        });
                        setBarChartData(chartData1);
                        let chartData2 = [];
                        chartData2 = [0, 1, 2, 3, 4, 5, 6].map(_day => {
                            const dayCoins = lastWeekCoins.filter((_coin: any) => new Date(_coin.day).getDay() === _day)
                            if (dayCoins.length > 0) {
                                return { x: _day, y: parseInt(dayCoins[0].coins) }
                            } else {
                                return { x: _day, y: 0 }
                            }
                        });
                        setBarChartData2(chartData2)
                    }
                }
            })()
        }
    }, [studentId]);
    return (
        <div style={{ position: 'relative', maxWidth: '768px', margin: 'auto' }}>
            <div style={{
                position: 'relative',
                width: 'calc(100% - 2rem)',
                marginLeft: '1rem',
                marginRight: '1rem',
                overflowX: 'auto'
            }}>
                <FlexibleXYPlot height={450}
                 >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis style={{
                        text: {
                            fontSize: '1rem',
                        }
                    }} tickLabelAngle={0} tickFormat={v => WEEKS[v]} />
                    <YAxis style={{
                        text: {
                            fontSize: '1rem'
                        }
                    }} width={52} />
                    <VerticalBarSeries color='#26B824' barWidth={0.7} data={barChartData} opacity={0.6} />
                    <VerticalBarSeries color='#F4C222' barWidth={0.7} data={barChartData2} opacity={0.6} />
                </FlexibleXYPlot>
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
                    <span style={{ marginLeft: '0.5rem' }}>{dictionary[language]?.correctAnswers}</span>
                </div>
                <div style={{
                    display: 'flex',
                    marginLeft: '3rem',
                    alignItems: 'center'
                }}>
                    <img src={ReportCoinIcon} alt='ReportCoinIcon' />
                    <span style={{ marginLeft: '0.5rem' }}>{dictionary[language]?.coinsEarned}</span>
                </div>
            </div>
        </div>
    )
}

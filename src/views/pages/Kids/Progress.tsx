import { useState, useEffect, useContext, FC, useRef, useMemo } from 'react';
import { StudentMenu } from 'views/templates/StudentMenu';
import styled from 'styled-components';
import { Title } from 'views/atoms/Text';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TitleProgressBackground from 'views/assets/title-games-background.png';
import ProgressMap from 'views/assets/student/process/map.svg';
import ProgressPath01 from 'views/assets/student/process/01.svg';
import ProgressPath02 from 'views/assets/student/process/02.svg';
import ProgressPath03 from 'views/assets/student/process/03.svg';
import ProgressPath04 from 'views/assets/student/process/04.svg';
import ProgressPath05 from 'views/assets/student/process/05.svg';
import ProgressPath06 from 'views/assets/student/process/06.svg';
import ProgressPath07 from 'views/assets/student/process/07.svg';
import ProgressPath08 from 'views/assets/student/process/08.svg';
import ProgressPath09 from 'views/assets/student/process/09.svg';
import ProgressPath10 from 'views/assets/student/process/10.svg';
import ProgressPath11 from 'views/assets/student/process/11.svg';
import ProgressPath12 from 'views/assets/student/process/12.svg';
import ProgressPath13 from 'views/assets/student/process/13.svg';
import ProgressPath14 from 'views/assets/student/process/14.svg';
import ProgressPath15 from 'views/assets/student/process/15.svg';
import ProgressPath16 from 'views/assets/student/process/16.svg';
import ProgressPath17 from 'views/assets/student/process/17.svg';
import ProgressPath18 from 'views/assets/student/process/18.svg';
import ProgressPath19 from 'views/assets/student/process/19.svg';
import ProgressPath20 from 'views/assets/student/process/20.svg';
import ProgressPath21 from 'views/assets/student/process/21.svg';
import ProgressPath22 from 'views/assets/student/process/22.svg';
import ProgressPath23 from 'views/assets/student/process/23.svg';
import ProgressPath24 from 'views/assets/student/process/24.svg';
import ProgressPath25 from 'views/assets/student/process/25.svg';
import ProgressPath26 from 'views/assets/student/process/26.svg';
import ProgressPath27 from 'views/assets/student/process/27.svg';
import ProgressPath28 from 'views/assets/student/process/28.svg';
import ProgressPath29 from 'views/assets/student/process/29.svg';
import ProgressPath30 from 'views/assets/student/process/30.svg';
import ProgressPath31 from 'views/assets/student/process/31.svg';
import ProgressPath32 from 'views/assets/student/process/32.svg';
import ProgressPath33 from 'views/assets/student/process/33.svg';
import ProgressPath34 from 'views/assets/student/process/34.svg';
import ProgressPath35 from 'views/assets/student/process/35.svg';
import ProgressPath36 from 'views/assets/student/process/36.svg';
import ProgressPath37 from 'views/assets/student/process/37.svg';
import ProgressPath38 from 'views/assets/student/process/38.svg';
import ProgressPath39 from 'views/assets/student/process/39.svg';
import ProgressPath40 from 'views/assets/student/process/40.svg';
import ProgressPath41 from 'views/assets/student/process/41.svg';
import ProgressPath42 from 'views/assets/student/process/42.svg';
import MarkTableSubject from 'views/molecules/Table/MarkTableSubject';
import { LoadingContext } from 'react-router-loading';
import { ScreenSize } from 'constants/screenSize';

type IProcessPathSvg = {
    bgColor?: string;
    active?: boolean;
}

export const KidsProgress = () => {
    const loadingContext = useContext(LoadingContext);
    useEffect(() => {
      loadingContext.done();
    }, []);
    const grades = [
        '1st Grade',
        '2st Grade',
        '3st Grade',
        '4st Grade',
    ]
    const subjects = [
        'Math',
        'Computer',
        'Psychology',
    ]
    const [grade, setGrade] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    const handleGradeChange = (event: any) => {
        setGrade(event.target.value);
    };
    const handleSubjectChange = (event: any) => {
        setSubject(event.target.value);
    };

    const paths = [{
        left: 11.25,
        top: 0,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath01Svg {...props} />
    }, {
        left: 11.25,
        top: 6.21,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath02Svg {...props} />
    }, {
        left: 14.43,
        top: 14.27,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath03Svg {...props} />
    }, {
        left: 19.36,
        top: 19.54,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath04Svg  {...props}/>,
    }, {
        left: 28.81,
        top: 19.91,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath05Svg  {...props}/>,
    }, {
        left: 36.35,
        top: 14.5,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath06Svg {...props} />
    }, {
        left: 41.91,
        top: 8.97,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath07Svg  {...props}/>,
    }, {
        left: 49.96,
        top: 7.37,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath08Svg {...props} />
    }, {
        left: 58.56,
        top: 11.38,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath09Svg {...props} />
    }, {
        left: 61.9,
        top: 20.21,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath10Svg {...props} />
    }, {
        left: 57.76,
        top: 28.83,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath11Svg {...props} />
    }, {
        left: 50.37,
        top: 33.99,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath12Svg {...props} />
    }, {
        left: 41.38,
        top: 32.34,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath13Svg {...props} />
    }, {
        left: 33.93,
        top: 31.03,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath14Svg {...props} />
    }, {
        left: 25.82,
        top: 30.85,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath15Svg {...props} />
    }, {
        left: 17.97,
        top: 32.18,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath16Svg {...props} />
    }, {
        left: 15.96,
        top: 40.18,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath17Svg {...props} />
    }, {
        left: 16.54,
        top: 51.35,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath18Svg {...props} />
    }, {
        left: 21.92,
        top: 57.71,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath19Svg {...props} />
    }, {
        left: 31.49,
        top: 59.41,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath20Svg {...props} />
    }, {
        left: 39.17,
        top: 54.41,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath21Svg {...props} />
    }, {
        left: 46.8,
        top: 47.11,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath22Svg {...props} />
    }, {
        left: 54.11,
        top: 40.46,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath23Svg {...props} />
    }, {
        left: 61.73,
        top: 36.16,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath24Svg {...props} />
    }, {
        left: 69.62,
        top: 35.34,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath25Svg {...props} />
    }, {
        left: 77.95,
        top: 36.52,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath26Svg {...props} />
    }, {
        left: 81.46,
        top: 46.06,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath27Svg {...props} />
    }, {
        left: 76.24,
        top: 56.33,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath28Svg {...props} />
    }, {
        left: 68.02,
        top: 61.02,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath29Svg {...props} />
    }, {
        left: 60.07,
        top: 60.07,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath30Svg {...props} />
    }, {
        left: 51.51,
        top: 59.84,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath31Svg {...props} />
    }, {
        left: 42.36,
        top: 60.41,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath32Svg {...props} />
    }, {
        left: 40.04,
        top: 67.19,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath33Svg {...props} />
    }, {
        left: 40.04,
        top: 76.66,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath34Svg {...props} />
    }, {
        left: 44.87,
        top: 82.43,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath35Svg {...props} />
    }, {
        left: 53.45,
        top: 81.5,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath36Svg {...props} />
    }, {
        left: 59.52,
        top: 74.83,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath37Svg {...props} />
    }, {
        left: 65.2,
        top: 70.66,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath38Svg {...props} />
    }, {
        left: 73.4,
        top: 70.61,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath39Svg {...props} />
    }, {
        left: 79.39,
        top: 76.22,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath40Svg {...props} />
    }, {
        left: 81.7,
        top: 82.64,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath41Svg {...props} />
    }, {
        left: 76.46,
        top: 93.2,
        imgSrc: (props: IProcessPathSvg) => <ProcessPath42Svg {...props} />
    }, ];
    const subSubjects = [
        {
            left: 15.39,
            top: 0.01,
            width: 63.03,
            angle: 103,
            tX: 45,
            tY: 43,
            text: 'Conteo',
            bgColor: "#28D764"
        },
        {
            left: 14.19,
            top: 7.66,
            width: 78.38,
            angle: 72,
            tX: 30,
            tY: 45,
            text: 'Geometría',
            bgColor: "#28D764"
        },
        {
            left: 17.41,
            top: 15.51,
            width: 72.24,
            angle: 50,
            tX: 11,
            tY: 35,
            text: 'Sentido Numérico',
            bgColor: "#28D764"
        },
        {
            left: 21.97,
            top: 22.37,
            width: 78.8,
            angle: 15,
            tX: 10,
            tY: 10,
            text: 'Medición',
            bgColor: "#28D764"
        },
        {
            left: 29.98,
            top: 23.28,
            width: 74.84,
            angle: 345,
            tX: 20,
            tY: -10,
            text: 'Suma de números enteros',
            bgColor: "#FFD814"
        },
        {
            left: 37.38,
            top: 21.64,
            width: 78.63,
            angle: 320,
            tX: 40,
            tY: -20,
            text: 'Dinero',
            bgColor: "#FF1940"
        },
        {
            left: 43.45,
            top: 13.94,
            width: 72.37,
            angle:325,
            tX: 30,
            tY: -20,
            text: 'Resta de números enteros',
            bgColor: "#28D764"
        },
        {
            left: 51.46,
            top: 9,
            width: 97.44,
            angle: 5,
            tX: 10,
            tY: 5,
            text: 'Multiplicación de números enteros',
            active: true
        },
    ];

    const mapBgRef = useRef<HTMLImageElement>(null);
    const [mapWidth, setMapWidth] = useState<number>(1366);
    useEffect(() => {
        const timer = setInterval(() => {
            if (mapBgRef.current?.width) {
                setMapWidth(val => {
                    if (val === mapBgRef.current?.width) {
                        clearInterval(timer);
                        return val
                    } else {
                        return mapBgRef.current?.width || 0
                    }
                });
            }
        }, 1000);
    }, []);

    const ProcessPath01Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={84 * mapWidth / 1366} height={70 * mapWidth / 1366} viewBox="0 0 84 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.97 0C13.97 0 12.6872 1.71266 11.9476 3.45409C9.31284 9.61523 7.13715 15.9682 5.43878 22.4596L4.72873 24.8616L4.22578 27.2936L3.30864 32.1876L2.33232 37.0516C1.99452 38.656 1.75736 40.2806 1.62227 41.9156C0.803442 48.3681 0.378574 54.8658 0.350098 61.3715C0.350098 62.4824 0.350098 63.6233 0.350098 64.7643L66.9172 69.0578C65.8419 55.6587 67.9417 42.193 73.0414 29.7856C73.4238 28.8662 73.7498 27.9236 74.0177 26.9633C74.1656 26.513 74.2544 26.0326 74.3727 25.5222C74.4911 25.0117 74.6982 24.6214 74.8461 24.141C75.4082 22.3095 83.435 2.0416 83.5829 -7.52343e-05C51.8031 -0.000180615 13.97 0 13.97 0Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath02Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={94 * mapWidth / 1366} height={124 * mapWidth / 1366} viewBox="0 0 94 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M92.6564 83.466C90.4967 79.4127 88.1595 75.4494 86.2956 71.4562L83.3371 65.4513C82.3607 63.4096 81.5619 61.3379 80.6744 59.4463C72.9968 42.3913 68.3399 24.097 66.9172 5.40209L0.350098 0.688232C0.350098 2.78995 0.350098 4.86164 0.350098 6.90332L1.08973 16.331C1.23766 17.8923 1.29683 19.4836 1.50393 21.0149L2.21398 25.6086L3.66366 34.616C4.28495 37.6185 4.96541 40.6209 5.64588 43.6234C6.32634 46.6258 6.94763 49.6283 7.8352 52.3906C9.58073 58.0952 11.1192 63.92 13.2197 69.3845L16.1783 77.6713C17.2433 80.3735 18.4268 83.0156 19.551 85.6878C20.6752 88.36 21.9474 91.1523 23.19 93.7044L26.9769 101.451C29.4029 106.675 32.2135 111.569 34.9058 116.463C36.2371 118.955 37.6868 121.447 39.1957 123.939L93.0706 84.1866C92.9227 83.9464 92.7748 83.7062 92.6564 83.466Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath03Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={103 * mapWidth / 1366} height={109 * mapWidth / 1366} viewBox="0 0 103 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.692383 38.764C1.07699 39.5746 14.8934 59.7812 15.4851 60.4417C16.3431 62.063 17.3194 63.6543 18.4436 65.2456C21.9554 70.8559 25.8713 76.1949 30.1594 81.2187L31.7275 83.1403L33.473 84.9117L36.9345 88.4246L40.4256 91.9375C41.5567 93.1168 42.7624 94.22 44.035 95.2402C48.8648 99.5032 53.9536 103.454 59.2715 107.07L62.0229 108.961L102.466 55.1874C90.8604 48.6499 80.9686 39.3835 73.6204 28.1653C73.0888 27.3377 72.5058 26.5455 71.8748 25.7933L70.8985 24.6824L70.0109 23.5415C68.7979 22.0403 54.0052 1.41338 52.4372 0.152344L0.692383 38.764Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath04Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={124 * mapWidth / 1366} height={90 * mapWidth / 1366} viewBox="0 0 124 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M119.962 21.9785C115.465 21.5582 110.909 21.318 106.501 20.6274L99.8443 19.7567C97.655 19.4565 95.4953 18.9761 93.306 18.5857C75.0714 15.612 57.4955 9.40211 41.3836 0.240723L0.94043 54.0748C2.65638 55.2458 4.37233 56.4167 6.11787 57.4376L14.2243 62.0313C15.5852 62.7819 16.9461 63.5926 18.3366 64.2832L22.4786 66.2047L30.7921 70.0779C33.5731 71.1888 36.3837 72.2397 39.1647 73.3205C41.9458 74.4014 44.786 75.5424 47.5966 76.323C53.2178 78.0044 58.8686 79.956 64.4898 81.187L72.9808 83.2287C75.9394 83.8592 78.602 84.3096 81.4127 84.85C84.2233 85.3904 87.0635 85.9609 89.8741 86.3512L98.3059 87.4922C103.927 88.3328 109.519 88.6631 115.11 89.1735C117.891 89.4438 120.732 89.5939 123.601 89.684L120.82 22.2187L119.962 21.9785Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath05Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={123 * mapWidth / 1366} height={89 * mapWidth / 1366} viewBox="0 0 123 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M74.5406 11.0729C66.9926 14.0899 59.2157 16.4797 51.2865 18.2188C43.0346 19.8239 34.68 20.8273 26.2869 21.2212C24.1567 21.4314 21.9378 21.2212 19.7781 21.4014C17.6183 21.5815 15.4586 21.4014 13.2693 21.4014L6.64217 21.1612C4.71912 21.1612 2.76649 21.1612 0.725098 20.8309L3.50611 88.4462L12.0859 88.7465C15.0444 88.7465 18.0029 88.7465 20.784 88.7465C23.565 88.7465 26.5531 88.7465 29.5116 88.5063C41.3808 87.9013 53.1888 86.3958 64.8366 84.0026C76.7117 81.4074 88.3503 77.8017 99.629 73.2238C107.368 69.9887 114.907 66.2788 122.203 62.1147L94.6586 0.444214C88.234 4.51053 81.5077 8.06412 74.5406 11.0729Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath06Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={116 * mapWidth / 1366} height={121 * mapWidth / 1366} viewBox="0 0 116 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M68.8471 1.90546C52.516 16.1671 38.1079 30.1886 23.8182 41.8982C16.434 48.0176 8.64458 53.6153 0.504883 58.6519L28.1672 120.322C41.3254 112.725 53.8168 103.996 65.504 94.231C82.7818 80.0294 97.6633 65.4675 112.101 52.9172L115.592 49.9148L70.2672 0.704468L68.8471 1.90546Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath07Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={120 * mapWidth / 1366} height={106 * mapWidth / 1366} viewBox="0 0 120 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M88.2601 4.18659C76.785 7.88535 65.6324 12.5452 54.9175 18.118C35.2635 28.7621 16.8959 41.6894 0.18457 56.6396L45.5093 105.94C57.702 95.193 71.0505 85.8765 85.3016 78.1672C92.6776 74.2972 100.357 71.0535 108.26 68.4692C111.835 67.2437 115.481 66.2411 119.177 65.4668L100.745 0.673706C96.5145 1.69454 92.2542 2.83548 88.2601 4.18659Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath08Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={148 * mapWidth / 1366} height={97 * mapWidth / 1366} viewBox="0 0 148 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.00717 7.91947C12.8355 5.87722 21.7948 4.46432 30.8195 3.69154C60.7871 1.47398 90.8714 5.9167 118.975 16.7109C127.439 20.0311 135.686 23.8959 143.664 28.2815L104.766 93.5851C80.0838 81.0944 52.1489 76.7974 24.9228 81.3074L4.00717 7.91947Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath09Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={112 * mapWidth / 1366} height={115 * mapWidth / 1366} viewBox="0 0 112 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M74.6869 31.6812C62.9416 19.3422 49.4262 8.87554 34.5987 0.635742L0.190918 58.283C10.0812 63.4436 19.075 70.208 26.8177 78.3094C36.6431 88.6647 43.9654 101.194 48.208 114.909L111.195 93.8921C103.85 70.6056 91.3632 49.3281 74.6869 31.6812V31.6812Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath10Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={75 * mapWidth / 1366} height={117 * mapWidth / 1366} viewBox="0 0 75 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M71.9347 81.6632C73.8798 69.0955 74.5342 56.3569 73.8873 43.6521C73.3283 30.825 71.2928 18.1082 67.8223 5.76105C67.349 4.07967 66.7869 2.42833 66.2543 0.746948L3.2671 21.7642C3.50378 22.5448 3.77005 23.3254 4.00673 24.1061C6.10228 31.58 7.3139 39.2804 7.61611 47.0449C8.01297 54.9117 7.61646 62.7991 6.43271 70.5842C5.24248 77.6884 3.30849 84.6435 0.663574 91.3311L62.3786 116.011C66.7596 104.94 69.9631 93.4251 71.9347 81.6632V81.6632Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath11Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={116 * mapWidth / 1366} height={118 * mapWidth / 1366} viewBox="0 0 116 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M38.7948 111.277C61.126 99.1686 80.5437 82.2002 95.6578 61.5861C103.744 50.348 110.385 38.1094 115.421 25.1663L53.7058 0.486084C50.7323 8.01543 46.857 15.1448 42.1675 21.7135C32.9108 34.2355 21.0528 44.5372 7.43429 51.8882C5.12663 53.1492 2.7302 54.3202 0.304199 55.4011L26.931 117.072C30.9842 115.27 34.9191 113.379 38.7948 111.277Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath12Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={122 * mapWidth / 1366} height={80 * mapWidth / 1366} viewBox="0 0 122 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.19264 76.5759C5.15118 76.9962 8.10973 77.4766 10.8908 77.8369C16.8078 78.4074 22.577 79.098 28.4941 79.2481C34.4112 79.3982 40.3282 79.4583 46.2453 79.3982C52.1624 79.3382 58.0795 78.8278 63.9966 77.9871C69.9137 77.1464 75.8307 76.2456 81.7478 75.1647C87.6649 74.0839 93.582 72.4325 99.4991 70.541C107.093 68.1688 114.542 65.3415 121.807 62.074L95.1796 0.403564C90.3681 2.60128 85.4279 4.49641 80.3869 6.07821C76.5408 7.36926 72.5468 8.20995 68.5528 9.08067C64.5587 9.95138 60.4759 10.6119 56.3635 11.0022C52.2512 11.3926 48.0796 11.6928 43.9377 11.9931C39.7957 12.2933 35.5354 12.1732 31.3047 11.9931C27.074 11.8129 22.8432 11.3325 18.5829 10.9722C16.4528 10.732 14.3227 10.3417 12.2221 10.0414H11.305L0.56543 76.3958L2.19264 76.5759Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath13Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={128 * mapWidth / 1366} height={96 * mapWidth / 1366} viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48.5129 78.0416L77.477 85.9981L84.7846 88.0698L88.4828 89.0906L92.6839 90.1715L101.116 92.3333L109.666 94.0747C111.974 94.5851 114.281 94.9755 116.648 95.3057L127.536 28.8613C125.701 28.5911 123.896 28.3209 122.062 27.9005L115.701 26.6095L109.37 24.9882L106.175 24.1775L102.565 23.1567L95.1987 21.0849L65.4358 12.8883C49.4597 8.62476 33.2173 4.57144 16.7382 0.878418L0.0224609 66.1518C16.1169 69.6947 32.241 73.658 48.5129 78.0416Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath14Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={110 * mapWidth / 1366} height={81 * mapWidth / 1366} viewBox="0 0 110 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M84.3606 78.3805C87.3191 78.951 90.2777 79.6115 93.2362 80.242L109.952 14.9686C105.78 14.0679 101.609 13.1371 97.4077 12.2964C76.698 8.09299 55.5149 4.76025 34.3613 2.44835C26.0478 1.51759 17.7343 0.79702 9.39124 0.166504L0.515625 67.0312C28.6757 68.9773 56.6824 72.7683 84.3606 78.3805V78.3805Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath15Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={112 * mapWidth / 1366} height={76 * mapWidth / 1366} viewBox="0 0 112 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.9362 74.3755C30.5661 71.7067 38.4333 69.7962 46.427 68.6709C50.4211 68.1605 54.4447 67.68 58.4979 67.56C60.5256 67.4046 62.5597 67.3545 64.5925 67.4099C66.6338 67.4099 68.4977 67.4099 71.1308 67.4099C81.6632 67.7101 92.1364 68.2505 102.551 68.9711L111.426 2.10637C98.6452 1.14558 85.8348 0.455022 72.9651 0.0947266C70.5095 0.0947266 67.3143 0.0947266 64.2966 0.0947266C61.2789 0.0947266 58.202 0.0947321 55.1843 0.334929C49.0897 0.545101 43.0247 1.23567 36.9597 2.04633C24.8792 3.76412 12.9901 6.65987 1.45726 10.6934L0.983887 10.8735L20.2144 75.3664L22.9362 74.3755Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath16Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={120 * mapWidth / 1366} height={119 * mapWidth / 1366} viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M80.9434 87.6888C92.3605 77.7038 105.46 69.8922 119.611 64.6299L100.411 0.0469971C77.2579 8.12189 55.8459 20.6278 37.3346 36.8871C23.01 49.5628 10.7398 64.4469 0.974121 80.9933L56.1509 118.734C62.5744 107.002 70.9642 96.4964 80.9434 87.6888V87.6888Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath17Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={81 * mapWidth / 1366} height={126 * mapWidth / 1366} viewBox="0 0 81 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M69.8964 114.163L69.1271 111.161C68.8905 110.14 68.8017 109.179 68.6242 108.158C68.3579 106.207 67.855 104.255 67.7662 102.303C67.6775 100.352 67.2928 98.3702 67.2041 96.2985L66.9378 90.2936C66.8101 74.6659 70.1256 59.2067 76.6418 45.0465C77.6773 42.7646 78.8311 40.5728 80.0146 38.351L24.8082 0.790283C8.6376 28.0786 0.239808 59.3831 0.548239 91.2243L0.932852 100.802C1.11036 103.985 1.52456 107.137 1.82041 110.29C2.11627 113.443 2.73756 116.565 3.21092 119.688C3.47719 121.219 3.71388 122.69 4.03931 124.311L4.21683 125.152L70.6064 117.406C70.3697 116.325 70.1035 115.244 69.8964 114.163Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath18Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={108 * mapWidth / 1366} height={120 * mapWidth / 1366} viewBox="0 0 108 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M99.1149 59.6817C87.8916 48.8284 79.1202 35.6348 73.4052 21.01C70.7149 14.2533 68.5389 7.29729 66.8964 0.203003L0.506836 7.94931L1.33523 11.4922C3.86804 23.4587 7.41166 35.1816 11.9268 46.5309C21.2939 70.2827 35.6507 91.6765 53.9972 109.222C57.9597 112.929 62.1071 116.426 66.4231 119.701L107.843 67.0677C104.788 64.7881 101.873 62.3215 99.1149 59.6817V59.6817Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath19Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={131 * mapWidth / 1366} height={97 * mapWidth / 1366} viewBox="0 0 131 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M125.61 29.2449C93.7469 25.8821 63.9544 16.8447 42.0612 0.541382L0.730469 53.1745C16.1918 64.894 33.2679 74.2417 51.4102 80.9172C73.0742 88.7859 95.6102 93.9187 118.51 96.1997L123.096 96.65L130.64 29.7253L125.61 29.2449Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath20Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={122 * mapWidth / 1366} height={80 * mapWidth / 1366} viewBox="0 0 122 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M55.7932 10.5752C39.8303 12.5796 23.6997 12.8112 7.68733 11.2658L0.143066 78.2205C21.3692 80.3301 42.7594 80.0683 63.9292 77.4399C83.598 74.89 102.965 70.3436 121.739 63.8688L98.8695 0.577026C84.8648 5.32161 70.4379 8.67016 55.7932 10.5752V10.5752Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath21Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={143 * mapWidth / 1366} height={118 * mapWidth / 1366} viewBox="0 0 143 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M95.3712 3.22341L83.3595 11.3L77.4425 15.3534L71.3479 19.0764L59.1883 26.5525C43.1512 35.8471 26.459 43.9257 9.24814 50.7223C6.46711 51.7431 3.65651 52.7039 0.875488 53.7248L23.745 117.017C26.7035 116.026 29.6621 115.005 32.3839 114.014C53.0218 105.928 73.029 96.2723 92.2352 85.1304L105.963 76.4834L112.886 72.2199L119.572 67.7162L132.915 58.7088C136.317 56.3969 139.601 53.965 142.885 51.533L98.951 0.491211C97.7972 1.48202 96.5842 2.38272 95.3712 3.22341Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath22Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={143 * mapWidth / 1366} height={128 * mapWidth / 1366} viewBox="0 0 143 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M78.2635 14.8158C70.7489 21.3611 63.2638 27.9665 55.5715 34.2116C47.8793 40.4568 40.3351 46.9421 32.5245 52.8869L20.8975 61.8943C17.0218 64.8968 13.0573 67.659 9.06329 70.5714C6.31185 72.523 3.59002 74.5347 0.868164 76.5763L44.8025 127.618L47.761 125.456C52.0213 122.304 56.4 119.211 60.6011 115.999L73.0861 106.241C81.4884 99.8153 89.506 93.0598 97.6124 86.3643C105.719 79.6688 113.589 72.8232 121.458 65.9476L142.316 47.9329L94.6539 0.554077L78.2635 14.8158Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath23Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={130 * mapWidth / 1366} height={119 * mapWidth / 1366} viewBox="0 0 130 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.61262 65.4265L0.571289 71.4314L48.3221 118.6L50.2451 116.949C75.0842 95.6823 101.581 76.4938 129.475 59.5717L98.3509 0.00292969C66.3397 19.173 35.9852 41.059 7.61262 65.4265V65.4265Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath24Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={109 * mapWidth / 1366} height={103 * mapWidth / 1366} viewBox="0 0 109 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M92.7809 2.37475L84.4082 4.80673C81.5976 5.6174 78.8462 6.45812 76.1835 7.4189C55.1245 14.6394 34.7147 23.68 15.1784 34.441C10.1489 37.2333 5.17857 40.0556 0.385742 42.968L31.5096 102.537C36.5687 99.5343 41.6574 96.5319 46.7756 93.7396C62.8854 84.8167 79.7105 77.2937 97.0708 71.2512C99.1713 70.4705 101.272 69.84 103.343 69.2695L108.077 67.8584L99.2009 0.723389L92.7809 2.37475Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath25Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={121 * mapWidth / 1366} height={79 * mapWidth / 1366} viewBox="0 0 121 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M118.56 10.3542C95.398 2.76092 71.0659 -0.484732 46.7566 0.776313L37.881 1.22671C34.9225 1.43688 31.9639 1.85722 29.1533 2.15746C26.3426 2.45771 23.2362 2.72792 20.4551 3.26836L11.8754 4.73958L7.58544 5.49019L3.23637 6.48101L0.928711 7.02143L9.80435 74.1564L11.3428 73.706L17.4966 72.2949L20.6031 71.5443L23.7983 71.0038L30.2184 69.8929C32.3485 69.4726 34.4786 69.3825 36.6384 69.0822C38.7981 68.782 40.8987 68.5418 43.0288 68.3917L49.3897 68.0614C65.7049 67.149 82.0474 69.2653 97.614 74.3065C99.4773 74.8326 101.297 75.5052 103.058 76.3182C104.833 77.0688 106.638 77.7293 108.383 78.5099L120.01 10.8346L118.56 10.3542Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath26Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={112 * mapWidth / 1366} height={125 * mapWidth / 1366} viewBox="0 0 112 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M110.476 97.0057L108.76 92.6522C108.168 91.211 107.488 89.8299 106.837 88.4187L102.872 80.0418C101.363 77.2495 99.7659 74.4873 98.1682 71.7251C91.701 60.5395 83.9661 50.1604 75.1212 40.7997C57.4701 22.6431 35.8798 8.92696 12.0748 0.746948L0.447754 68.4223L5.35885 70.9744C6.18724 71.4248 7.04523 71.8151 7.87362 72.2955L10.2109 73.8268L14.9446 76.8292L19.2936 80.282L21.5125 81.9935L23.4947 83.915L27.5479 87.7582C32.7226 93.2956 37.2496 99.4212 41.0388 106.013L43.9973 111.057L46.5713 116.612C47.0151 117.543 47.4885 118.443 47.8731 119.374L48.9678 122.196C49.2636 123.007 49.589 123.818 49.9144 124.628L111.186 98.7472C110.92 98.1767 110.712 97.5762 110.476 97.0057Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath27Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={79 * mapWidth / 1366} height={141 * mapWidth / 1366} viewBox="0 0 79 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M68.4517 121.543C72.8435 109.262 75.8217 96.5073 77.3273 83.5322C78.605 70.6704 78.5356 57.7075 77.1202 44.8605C75.4943 32.2745 72.6401 19.8835 68.5996 7.87023C67.8008 5.49828 66.8837 3.15638 65.9666 0.844482L4.69546 26.7257C5.10965 27.7765 5.52391 28.8574 5.87894 29.9383C8.37721 37.4358 10.1702 45.1566 11.2339 52.9972C12.0027 60.6336 12.0027 68.3296 11.2339 75.966C10.3051 83.4328 8.56878 90.773 6.05644 97.8539C4.4633 102.084 2.54417 106.18 0.316895 110.104L59.7537 140.279C63.0608 134.237 65.9666 127.978 68.4517 121.543V121.543Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath28Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={126 * mapWidth / 1366} height={112 * mapWidth / 1366} viewBox="0 0 126 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M59.5709 97.0582C70.4432 90.7695 80.6712 83.397 90.103 75.0502C99.6597 66.4432 108.189 56.7291 115.517 46.1065C118.989 40.9793 122.189 35.6674 125.103 30.1935L65.6655 0.0187988C64.2454 2.60091 62.7069 5.12294 61.0797 7.58496C56.7328 13.8282 51.7006 19.5496 46.0799 24.6389L41.6716 28.392C40.222 29.653 38.506 30.7039 36.9676 31.8749C34.009 34.3069 30.3404 36.1383 27.0564 38.3301C18.493 43.0555 9.47076 46.8689 0.133789 49.7095L27.5594 111.47C38.616 107.603 49.3257 102.781 59.5709 97.0582V97.0582Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath29Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={131 * mapWidth / 1366} height={76 * mapWidth / 1366} viewBox="0 0 131 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.62091 73.6416C15.183 74.2121 20.7747 74.6625 26.3367 75.1429C49.2336 76.8118 72.2447 75.7132 94.886 71.8702C107.047 69.6866 119.018 66.524 130.684 62.4125L103.259 0.651855C96.7661 2.685 90.156 4.3094 83.4661 5.51582C66.0268 8.41735 48.3124 9.23358 30.6858 7.94781L17.1061 6.71684L3.46719 4.82527H3.08256L0.124023 72.3806L9.62091 73.6416Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath30Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={104 * mapWidth / 1366} height={84 * mapWidth / 1366} viewBox="0 0 104 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.13149 67.9779C24.1253 69.7794 43.2078 72.7818 62.2016 76.4448L69.3317 77.9161L72.8819 78.6367L76.9351 79.4173C82.3493 80.4081 87.7634 81.519 93.2071 82.4198L100.248 83.3805L103.207 15.8253C98.7987 15.0747 94.3313 14.1439 89.9527 13.3633L86.4912 12.7027L82.5859 11.8921L74.805 10.3008C53.9473 6.30753 32.8825 2.97477 11.4628 0.933105H10.3089L0.812012 67.7377L5.13149 67.9779Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath31Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={118 * mapWidth / 1366} height={76 * mapWidth / 1366} viewBox="0 0 118 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.67189 75.2622C11.2108 73.0579 19.8762 71.3933 28.6182 70.2781C33.0265 69.5876 37.4939 69.3173 42.1092 68.8069C46.7245 68.2965 51.2215 68.1164 55.8664 68.0263C73.2389 67.4535 90.6296 67.985 107.937 69.6176L117.434 2.81303C96.1609 0.692785 74.7741 -0.00928452 53.4108 0.711321C47.9079 0.711321 42.3163 1.31179 36.7838 1.67208C31.2514 2.03238 25.6597 2.63287 20.0385 3.50358C13.4114 4.31424 6.75466 5.45518 0.0683594 6.8363L0.42337 75.8928L2.67189 75.2622Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath32Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={117 * mapWidth / 1366} height={111 * mapWidth / 1366} viewBox="0 0 117 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M74.7732 89.0185C81.0961 84.382 87.9143 80.4842 95.0983 77.399C102.06 74.3673 109.229 71.8487 116.548 69.8628L116.193 0.806274C111.577 1.76706 106.962 2.7879 102.317 3.95886C90.7406 6.92253 79.4212 10.8387 68.4715 15.6684C56.9786 20.6698 46.0646 26.9429 35.9275 34.3737C25.3309 42.0749 15.7813 51.1606 7.5256 61.3958C5.01084 64.3983 2.67358 67.7911 0.395508 71.0938L54.2113 110.516C59.7146 102.136 66.6835 94.8503 74.7732 89.0185V89.0185Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath33Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={84 * mapWidth / 1366} height={104 * mapWidth / 1366} viewBox="0 0 84 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M67.3354 97.8677C67.1781 90.2067 67.8728 82.5521 69.4063 75.0491C70.9654 67.3896 73.244 59.8992 76.211 52.6808C78.2176 48.3853 80.5418 44.2501 83.1636 40.3107L29.3477 0.888428C24.1565 8.47774 19.6323 16.5152 15.8272 24.9081C10.7438 36.6162 6.84807 48.819 4.20017 61.3279C1.72662 73.4639 0.556072 85.8362 0.709069 98.2281L67.3946 103.062C67.3354 101.321 67.3354 99.6092 67.3354 97.8677Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath34Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={98 * mapWidth / 1366} height={113 * mapWidth / 1366} viewBox="0 0 98 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M79.7322 39.8078C72.7469 29.4815 68.5262 17.49 67.4839 5.0093L0.79834 0.175293C0.79834 0.715736 0.79834 1.2562 0.79834 1.79665C1.12776 15.2564 3.33916 28.6005 7.3663 41.4291C11.451 54.3518 17.3712 66.6006 24.94 77.7889C34.011 91.135 45.116 102.932 57.839 112.738L97.5722 58.6933C90.7024 53.3684 84.6847 46.998 79.7322 39.8078V39.8078Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath35Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={120 * mapWidth / 1366} height={92 * mapWidth / 1366} viewBox="0 0 120 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M107.044 24.1475C105.121 24.1475 103.198 24.1474 101.127 23.8772C85.3664 22.6963 70.0018 18.3055 55.95 10.9667C50.4456 8.08024 45.2163 4.68297 40.3289 0.818359L0.595703 54.8626C8.35641 60.9043 16.6338 66.2299 25.3291 70.7756C47.4523 82.386 71.67 89.3117 96.5116 91.1323C99.4701 91.4025 102.784 91.4325 105.89 91.5526C108.997 91.6727 112.221 91.5526 115.387 91.5526L119.322 91.2523L111.452 24.2675C110.091 24.1174 108.582 24.1775 107.044 24.1475Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath36Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={117 * mapWidth / 1366} height={102 * mapWidth / 1366} viewBox="0 0 117 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M75.9601 1.87112C63.3567 13.881 50.8717 22.5881 36.582 27.5722C29.2492 30.2225 21.6481 32.0351 13.9196 32.9765L10.961 33.3969L7.85457 33.607L1.7008 34.0874H0.487793L8.35751 101.072L13.4462 100.712L17.9432 100.352L22.4993 99.7212C34.9099 98.1806 47.1142 95.2503 58.8893 90.9841C61.8479 89.8131 64.8064 88.8523 67.7649 87.4711L76.4926 83.4479L84.8653 78.8541C87.6463 77.2928 90.2498 75.5214 92.9421 73.84C101.429 68.1747 109.471 61.8506 116.995 54.9245L77.2914 0.459961L75.9601 1.87112Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath37Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={107 * mapWidth / 1366} height={127 * mapWidth / 1366} viewBox="0 0 107 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M62.5741 5.893C54.0984 13.5601 46.0393 21.6888 38.4324 30.243C24.3498 45.8558 12.4269 60.7179 0.296875 72.4575L40.0004 126.922C41.4797 125.571 42.959 124.25 44.4087 122.869C61.4202 106.595 74.5561 89.8417 87.3666 75.7302C93.4535 68.8843 99.9028 62.3793 106.686 56.2442L68.7278 0.608643C66.6273 2.35007 64.645 4.12155 62.5741 5.893Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath38Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={109 * mapWidth / 1366} height={98 * mapWidth / 1366} viewBox="0 0 109 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M98.9155 1.01046L94.4186 1.58094L85.543 2.7819L76.4011 4.67346C73.4426 5.21391 70.4841 6.05463 67.3776 6.86529C64.2712 7.67595 61.4606 8.36644 58.502 9.50738C46.5122 13.389 34.9903 18.6262 24.1534 25.1202C15.9215 30.0452 8.06879 35.5956 0.662598 41.7238L38.6207 97.3593C44.53 92.0213 50.9413 87.2848 57.7624 83.2178C71.365 75.2031 86.4929 70.2187 102.14 68.5958L105.099 68.2055L108.057 68.0553L103.531 0.830322L98.9155 1.01046Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath39Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={129 * mapWidth / 1366} height={100 * mapWidth / 1366} viewBox="0 0 129 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M101.707 30.705C91.2316 22.4243 79.6585 15.6826 67.3293 10.6785C64.1932 9.50757 61.1459 8.09644 57.9211 7.22572C54.6963 6.35501 51.5603 5.3342 48.365 4.43346C41.985 2.96141 35.5238 1.87854 29.0162 1.19076C22.6381 0.513518 16.2281 0.19275 9.8153 0.22995L0.466309 0.740408L4.99287 67.9654L10.9099 67.6351C14.6548 67.6259 18.3976 67.8164 22.1228 68.2056C25.7027 68.5812 29.2585 69.1626 32.7735 69.947L37.803 71.4482C39.4766 71.9407 41.1171 72.5425 42.7142 73.2497C55.9716 78.8309 67.5367 87.8745 76.2344 99.4612L128.038 57.4268C120.335 47.4933 111.496 38.5233 101.707 30.705V30.705Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath40Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={87 * mapWidth / 1366} height={97 * mapWidth / 1366} viewBox="0 0 87 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M86.5407 64.7743C78.6896 41.8336 67.2407 20.3296 52.6359 1.0922L51.8962 0.191406L0.0922852 42.2258L0.595276 42.8264C10.2993 55.2866 22.6659 80.297 28.5534 96.8706L86.5407 64.7743Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath41Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={79 * mapWidth / 1366} height={140 * mapWidth / 1366} viewBox="0 0 79 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M73.694 120.21C76.7689 107.511 78.3871 94.4944 78.5165 81.4185C78.399 68.4935 76.9112 55.6188 74.0787 43.017C71.0891 30.6892 66.9071 18.6912 61.5936 7.19771C60.5286 4.91584 59.3452 2.72402 58.1913 0.502197L0.115234 33.1389C0.684496 34.1089 1.19813 35.1114 1.65364 36.1414C4.94638 43.3029 7.57128 50.7615 9.49384 58.4196C11.128 65.9162 12.0102 73.5614 12.1269 81.2383C12.0393 88.7675 11.1062 96.262 9.34586 103.577C8.24461 107.96 6.80022 112.247 5.02642 116.397L67.3332 139.786C69.8956 133.418 72.0209 126.877 73.694 120.21V120.21Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    const ProcessPath42Svg: FC<IProcessPathSvg> = ({
        bgColor="#28D764",
        active=false,
    }) => {
        return (
            <svg width={136 * mapWidth / 1366} height={72 * mapWidth / 1366} viewBox="0 0 136 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M105.099 71.5C113.995 62.183 120.568 54.3074 127.103 43.1574C130.171 37.7763 132.956 32.234 135.446 26.5538L73.9378 0.882812C72.6952 3.555 71.3639 6.22723 69.9142 8.80935C66.0558 15.3277 61.4693 21.3726 56.2457 26.8241L52.1334 30.9074C50.7725 32.2885 49.1749 33.4295 47.6956 34.7505C44.737 37.3927 41.4235 39.4945 38.2874 41.9265C30.1033 47.2972 9.26321 67.9268 0.175293 71.5H73.9378C89.9659 71.5 102.577 71.5 105.099 71.5Z"
                    fill={bgColor}
                    stroke="#5E6366"
                    strokeWidth={active ? "8" : "0"}
                />
            </svg>
        )
    }
    return <StudentMenu>
        <Container>
            <div style={{
                width: '500px',
                maxWidth: "calc(100vw - 100px)",
                height: '80px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 10,
                }} src={TitleProgressBackground} alt="TitleProgressBackground" />
                <Title style={{
                    zIndex: 20,
                    color: 'black',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}>Progress</Title>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: '1rem'
            }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={grade}
                            label="Grade"
                            onChange={handleGradeChange}
                        >
                            { grades.map((grade, id) => (
                                <MenuItem key={id} value={grade}>{grade}</MenuItem>
                            )) }
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={subject}
                            label="Subject"
                            onChange={handleSubjectChange}
                        >
                            { subjects.map((subject, id) => (
                                <MenuItem key={id} value={subject}>{subject}</MenuItem>
                            )) }
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div style={{
                position: 'relative',
                width: "100%",
                paddingLeft: "5px",
                paddingRight: "5px",
                overflow: "hidden"
            }}>
                {/* <div style={{
                    position: "relative",
                    width: ScreenSize.widescreen
                }}> */}
                    <img ref={mapBgRef} style={{
                        width: "100%"
                    }} src={ProgressMap} alt="ProgressMap" />
                    { paths.map((path, id) => <div key={id} style={{
                        position: 'absolute',
                        left: `${path.left}%`,
                        top: `${path.top}%`,
                    }}>
                        {path.imgSrc({
                            bgColor: subSubjects.length > id ? subSubjects[id].bgColor : "#C6CACC",
                            active: subSubjects.length > id ? subSubjects[id].active : false,
                        })}
                    </div>) }
                    { subSubjects.map((subSubject, id) => <span key={id} style={{
                        position: 'absolute',
                        transform: `rotate(${subSubject.angle}deg) translate(${subSubject.tX * mapWidth / 1366}px, ${subSubject.tY * mapWidth / 1366}px)`,
                        left: `${subSubject.left}%`,
                        top: `${subSubject.top}%`,
                        fontSize: `${Math.max(14 * mapWidth / 1366, 8)}px`,
                        fontWeight: subSubject.active ? "600" : "400",
                        width: `${subSubject.width * mapWidth / 1366}px`,
                    }}>{subSubject.text}</span>)}
                {/* </div> */}
            </div>
        </Container>
        <Container>
            <MarkTableSubject />
        </Container>
    </StudentMenu>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${ScreenSize.widescreen};
    width: 100vw;
    margin: auto;
    margin-top: 2rem;
    padding: 0;
    box-sizing: border-box;
    @media (max-width: ${ ScreenSize.widescreen}) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import {TopicProgress} from '../molecules/TopicProgress';
import MYPROGRESS from '../assets/My Progress.svg';
import {Icon} from '../atoms/Icon/Icon';
import {ScreenSize} from '../screenSize';
import {Title} from '../atoms/Text/Title';

type MyProgressProps = {
  point: number;
};

export const MyProgress: FC<MyProgressProps> = ({point}) => {
  const lessonProps = [
    {
      title: 'ELA',
      color: BasicColor.red,
    },
    {
      title: 'MATH',
      color: BasicColor.orange,
    },
    {
      title: 'SIGHT',
      color: BasicColor.yellow,
    },
    {
      title: 'SCIENCE',
      color: BasicColor.green,
    },
    {
      title: 'HEALTH',
      color: BasicColor.aqua,
    },
  ];
  return (
    <>
      <MyProgressStyle>
        <MyProgressTitle>
          <Title isDark={true}>My Progress</Title>
        </MyProgressTitle>
        {lessonProps.map((item, i) => (
          <TopicProgress
            points={point}
            maxPoints={8}
            title={item.title}
            color={item.color}
            key={i}
          />
        ))}
      </MyProgressStyle>
    </>
  );
};

const MyProgressStyle = styled.div`
  display: none;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 300px;
    height: 450px;
    background-color: ${BasicColor.white};
    border-radius: 30px;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 35px 25px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 420px;
  }
`;
const MyProgressTitle = styled.div`
  margin-bottom: 25px;
`;

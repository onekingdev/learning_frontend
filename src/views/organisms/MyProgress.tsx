import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import {TopicProgress} from '../molecules/TopicProgress';
import {ScreenSize} from '../screenSize';
import {Title} from '../atoms/Text/Title';

export const MyProgress: FC = () => {
  const lessonProps = [
    {
      title: 'ELA',
      color: BasicColor.red,
      progress: [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
      ],
    },
    {
      title: 'MATH',
      color: BasicColor.orange,
      progress: [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
      ],
    },
    {
      title: 'SIGHT',
      color: BasicColor.yellow,
      progress: [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
      ],
    },
    {
      title: 'SCIENCE',
      color: BasicColor.green,
      progress: [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
      ],
    },
    {
      title: 'HEALTH',
      color: BasicColor.aqua,
      progress: [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
      ],
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
            points={item.progress}
            maxPoints={10}
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

  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 400px;
  }
`;
const MyProgressTitle = styled.div`
  margin-bottom: 10px;
`;

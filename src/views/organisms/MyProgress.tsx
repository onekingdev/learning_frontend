import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import {TopicProgress} from '../molecules/TopicProgress';
import {ScreenSize} from '../screenSize';
import {Title} from '../atoms/Text/Title';
import {dictionary} from '../pages/Progress/dictionary';

export const MyProgress: FC = () => {
  const language = 'en';
  const lessonProps = [
    {
      title: dictionary[language].ela,
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
      title: dictionary[language].math,
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
      title: dictionary[language].sight,
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
      title: dictionary[language].science,
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
      title: dictionary[language].health,
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
          <Title isDark={true}>{dictionary[language].progress}</Title>
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

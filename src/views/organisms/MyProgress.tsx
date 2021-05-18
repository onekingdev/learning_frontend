import styled from 'styled-components';
import {BasicColor} from '../Color';
import {LessonProgress} from '../molecules/LessonProgress';
import ELA from '../assets/ELA.svg';
import MATH from '../assets/MATH.svg';
import SIGHT from '../assets/sight words.svg';
import SCIENCE from '../assets/SCIENCE.svg';
import HEALTH from '../assets/health.svg';
import MYPROGRESS from '../assets/My Progress.svg';
import {Headline4} from '../atoms/Headline/Headline';
import {Icon} from '../atoms/Icon/Icon';

const MyProgressStyle = styled.div`
  width: 350px;
  height: 480px;
  background-color: ${BasicColor.white};
  border-radius: 30px;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 25px;
`;
const MyProgressTitle = styled.div`
  margin-bottom: 25px;
`;
export const MyProgress = () => {
  const lessonProps = [
    {
      title: ELA,
      color: BasicColor.red,
    },
    {
      title: MATH,
      color: BasicColor.orange,
    },
    {
      title: SIGHT,
      color: BasicColor.yellow,
    },
    {
      title: SCIENCE,
      color: BasicColor.green,
    },
    {
      title: HEALTH,
      color: BasicColor.aqua,
    },
  ];
  return (
    <>
      <MyProgressStyle>
        <MyProgressTitle>
          <Icon image={MYPROGRESS} />
        </MyProgressTitle>
        {lessonProps.map((item, i) => (
          <LessonProgress
            point={5}
            title={item.title}
            color={item.color}
            key={i}
          />
        ))}
      </MyProgressStyle>
    </>
  );
};

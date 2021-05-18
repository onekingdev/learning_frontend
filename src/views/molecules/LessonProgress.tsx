import {FC} from 'react';
import styled from 'styled-components';
import {Icon} from '../atoms/Icon/Icon';
import {BasicColor} from '../Color';
import ELA from '../assets/ELA.svg';

type LessonProgressProps = {
  point: boolean;
};
const LessonProgressContainer = styled.div`
  width: 275px;
  height: 84px;
  display: grid;
  grid-row-gap: 14px;
`;

const LessonProgressStyles = styled.div`
  width: 100%;
  height: 36px;
  background-color: ${BasicColor.gray40};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;
const ProgressPoint = styled.div<{
  color:
    | BasicColor.red
    | BasicColor.orange
    | BasicColor.yellow
    | BasicColor.green
    | BasicColor.aqua
    | BasicColor.greenSoft
    | BasicColor.gray80;
}>`
  width: 25px;
  height: 25px;
  background-color: ${p => p.color};
`;
export const LessonProgress: FC<LessonProgressProps> = ({point}) => {
  const points = [
    {
      id: 1,
      point: false,
    },
    {
      id: 2,
      point: false,
    },
    {
      id: 3,
      point: false,
    },
    {
      id: 4,
      point: false,
    },
    {
      id: 5,
      point: false,
    },
    {
      id: 6,
      point: false,
    },
    {
      id: 7,
      point: false,
    },
    {
      id: 8,
      point: false,
    },
  ];

  return (
    <>
      <LessonProgressContainer>
        <Icon image={ELA} />
        <LessonProgressStyles>
          {points.map(item => (
            <ProgressPoint
              color={item.point ? BasicColor.red : BasicColor.gray80}
              key={item.id}
            />
          ))}
        </LessonProgressStyles>
      </LessonProgressContainer>
    </>
  );
};

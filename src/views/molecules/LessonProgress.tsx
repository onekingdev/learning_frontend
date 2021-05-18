import {FC} from 'react';
import styled from 'styled-components';
import {Icon} from '../atoms/Icon/Icon';
import {BasicColor} from '../Color';

type LessonProgressProps = {
  point: number;
  title: string;
  color: string;
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
  color: string;
}>`
  width: 25px;
  height: 25px;
  background-color: ${p => p.color};
`;
export const LessonProgress: FC<LessonProgressProps> = ({
  point,
  title,
  color,
}) => {
  const points = [false, false, false, false, false, false, false, false];
  const IncreasePoint = () => {
    for (let i = 0; i < point; i++) {
      points[i] = true;
    }
  };
  IncreasePoint();
  return (
    <>
      <LessonProgressContainer>
        <Icon image={title} />
        <LessonProgressStyles>
          {points.map((item, i) => {
            return (
              <ProgressPoint color={item ? color : BasicColor.gray80} key={i} />
            );
          })}
        </LessonProgressStyles>
      </LessonProgressContainer>
    </>
  );
};

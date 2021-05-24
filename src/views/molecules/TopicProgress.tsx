import {FC} from 'react';
import styled from 'styled-components';
import {Icon} from '../atoms/Icon/Icon';
import {BasicColor} from '../Color';

type TopicProgressProps = {
  points: number;
  maxPoints: number;
  title: string;
  color: string;
};
export const TopicProgress: FC<TopicProgressProps> = ({
  points,
  title,
  color,
  maxPoints,
}) => {
  const generateProgress = (curr: number, max: number) => {
    const progressState = [];
    for (let i = 0; i < max; i++) {
      progressState.push(i < curr ? true : false);
    }
    return progressState;
  };

  return (
    <>
      <TopicProgressContainer>
        <Icon image={title} />
        <TopicProgressStyles>
          {generateProgress(points, maxPoints).map((item, i) => {
            return (
              <ProgressPoint
                color={item ? color : BasicColor.gray80}
                width={275 / maxPoints - 10}
                key={i}
              />
            );
          })}
        </TopicProgressStyles>
      </TopicProgressContainer>
    </>
  );
};

type PropgressPointProps = {
  color: string;
  width: number;
};

const TopicProgressContainer = styled.div`
  width: 275px;
  height: 84px;
  display: grid;
  grid-row-gap: 14px;
`;

const TopicProgressStyles = styled.div`
  width: 100%;
  height: 36px;
  background-color: ${BasicColor.gray40};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;
const ProgressPoint = styled.div<PropgressPointProps>`
  width: ${p => `${p.width}px`};
  height: 25px;
  background-color: ${p => p.color};
`;
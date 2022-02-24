import {FC, useEffect, useState} from 'react';
import styled, {keyframes, css} from 'styled-components';
import lightening from 'views/assets/lightning.svg';
import {rubberBand} from 'react-animations';
import {wobble} from 'react-animations';

interface LighteningProps {
  animate: boolean;
  duration?: number;
}
export const LessonProgressLightening: FC<LighteningProps> = ({
  animate,
  duration,
}) => {
  const [iswobble, setIswobble] = useState(false);

  const triggerAnimation = () => {
    setIswobble(!iswobble);
  };
  useEffect(() => {
    triggerAnimation();
  }, [animate]);

  return (
    <Wobble animationWobble={iswobble}>
      <Wobble animationWobble={!iswobble}>
        <img src={lightening} alt={'lightening'} />
      </Wobble>
    </Wobble>
  );
};

const Lightening = styled.div`
  animation: 0.5s ${keyframes`${rubberBand}`};
`;

const Wobble = styled.div<{
  animationWobble: boolean;
}>`
  ${props =>
    props.animationWobble
      ? css`
          animation: 0.5s ${keyframes`${wobble}`};
        `
      : null}
`;

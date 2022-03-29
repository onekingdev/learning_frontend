import { FC, useEffect, useState } from 'react';
import styled, {keyframes, css }   from 'styled-components';
import lightening                  from 'views/assets/lightning.svg';
import { bounceInLeft }            from 'react-animations';
import { zoomIn }                  from 'react-animations';

interface LighteningProps {
  combocount: number;
}
export const LessonProgressLightening: FC<LighteningProps> = ({combocount}) => {
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate(!animate);
  };
  useEffect(() => {
    if (combocount) triggerAnimation();
  }, [combocount]);
  return (
    <Energy>
      <Combocount animate={animate} className="count">
        <Combocount animate={!animate} >
          <p>+{combocount}</p>
        </Combocount>
      </Combocount>
      <Wobble animate={animate}>
        <Wobble animate={!animate}>
          <img src={lightening} alt={'lightening'} />
        </Wobble>
      </Wobble>
    </Energy>
  );
};

const Energy = styled.div`
  display: flex;
  .count {
    align-self: center;
    p {
      color: white;
      font-size: 30px;
      margin: auto;
    }
  }
`;

const Wobble = styled.div<{
  animate: boolean;
}>`
  ${props =>
    props.animate
      ? css`
          animation: 0.5s ${keyframes`${bounceInLeft}`};
        `
      : null}
`;

const Combocount = styled.div<{
  animate: boolean;
}>`
  ${props =>
    props.animate
      ? css`
          animation: 0.5s ${keyframes`${zoomIn}`};
        `
      : null}
`;

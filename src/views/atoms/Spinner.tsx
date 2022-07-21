import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
// import socrates              from 'views/assets/socrates.svg';
import boat from 'views/assets/islands/fillers/boat.svg';
import shapes from 'views/assets/colored-shapes-bg.svg';
import ReactLoading from 'react-loading';
import { LoadingContainer } from 'views/atoms/Loading'
import { BasicColor } from 'views/Color';
import { ScreenSize } from 'constants/screenSize';

export const LoadingSpinner: FC = () => (
  <LoadingContainer>
    <ReactLoading type="spinningBubbles" color={BasicColor.green} />
  </LoadingContainer>
)

export const Spinner: any = () => {
  return (
    <Wrapper>
      <Icon src={boat} />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  overflow: hidden;
  background-image  : url(${shapes});
  background-repeat : no-repeat;
  background-size   : cover;
  height            : 100vh;
`;

const move = keyframes`
  from {
    left: 0vw;
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(8deg);
  }

  to {
    transform: rotate(0deg);
    left: 100vw;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 30%;
  height: 300px;
  z-index: 1;
  animation: ${move} 10s linear infinite;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    height: 100px;
  }
`;

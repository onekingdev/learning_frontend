import { FC }                from 'react';
import styled, { keyframes } from 'styled-components';
import socrates              from 'views/assets/socrates.svg';
import shapes                from 'views/assets/colored-shapes-bg.svg';
import ReactLoading          from 'react-loading';
import { LoadingContainer }  from 'views/atoms/Loading'
import { BasicColor }        from 'views/Color';

export const LoadingSpinner: FC = () => (
  <LoadingContainer>
    <ReactLoading type="spinningBubbles" color={BasicColor.green} />
  </LoadingContainer>
)

export const Spinner: any = () => {
  return (
    <Shapes>
      <Icon src={socrates} />
    </Shapes>
  );
};

const Shapes = styled.div`
  background-image: url(${shapes});
  width: 100vw;
  height: 100vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-top: -250px;
  margin-left: -250px;
  z-index: 1;
  animation: ${rotate} 6s linear infinite;
`;

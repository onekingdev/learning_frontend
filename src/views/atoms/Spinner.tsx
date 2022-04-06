import { FC }                from 'react';
import styled, { keyframes } from 'styled-components';
// import socrates              from 'views/assets/socrates.svg';
import boat                  from 'views/assets/islands/fillers/boat.svg';
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
      <Icon src={boat} />
    </Shapes>
  );
};

const Shapes = styled.div`
  background-image: url(${shapes});
  width: 100vw;
  height: 100vh;
`;

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;
const move = keyframes`
  from {
    left: 20vw;
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(0deg);
    left: 90vw;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 30%;
  height: 300px;
  // margin-top: -250px;
  // margin-left: -250px;
  z-index: 1;
  // animation: ${move} 6s linear infinite;
  animation: ${move} 10s linear infinite;
`;

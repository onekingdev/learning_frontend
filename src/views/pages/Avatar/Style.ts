import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';

export const AvatarContainer = styled.div`
  display: grid;
  grid-template-rows: [avatar-favorites] 37px [avatar-favorites] 85px [avatar-selector] auto;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

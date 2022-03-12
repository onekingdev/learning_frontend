import styled from 'styled-components';
import titleBackground from '../../assets/title-games-background.png';
import background from '../../assets/colored-shapes-bg.svg';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const GamesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const GamesTitle = styled.div`
  width: 50%;
  max-width: 300px;
  height: 50%;
  text-align: center;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: url(${titleBackground}) center no-repeat;
  background-size: contain;
  margin-bottom: 20px;
`;

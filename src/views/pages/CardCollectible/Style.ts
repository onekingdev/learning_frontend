import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';
import {BasicColor} from '../../Color';
import {UserInfo} from '../../atoms/Text/UserInfo';
import {Title} from '../../atoms/Text/Title';
import {Typography} from '../../atoms/Text/typography';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const CardCollectibleContainer = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-rows: 60px 4fr 5fr;
  height: 100%;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-rows: 85px 200px 400px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-rows: 85px 200px 1fr;
  }
`;
export const ModalContent = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background-color: ${BasicColor.background40};
  @media screen and (min-width: ${ScreenSize.tablet}) {
    z-index: 10;
  }
`;
export const ModalStyles = styled.div`
  width: 80%;
  height: 450px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  padding-top: 15px;
  position: relative;
  background-color: ${BasicColor.white};
  border-radius: 10px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 400px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding: 10px;
    border-radius: 40px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 500px;
  }
`;
export const ModalImage = styled.img`
  width: 210px;
  height: 240px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 310px;
    height: 370px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 250px;
    height: 300px;
  }
`;
export const ModalTextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  grid-gap: 5px;
  flex-direction: column;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 350px;
    justify-content: center;
    width: 90%;
  }
`;
export const ModalText = styled(UserInfo)`
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    font-size: 18px;
    font-weight: 600;
  }
`;
export const ModalTitle = styled(Title)`
  display: none;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: initial;
    margin-bottom: 20px;
    font-size: 28px;
    color: ${BasicColor.black};
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    margin-bottom: 5px;
  }
`;
export const CloseButton = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: ${Typography.primary};
  position: absolute;
  right: 5px;
  top: 0;
  border-radius: 10px;
  letter-spacing: 0.25px;
  cursor: pointer;
  @media screen and (min-width: ${ScreenSize.tablet}){
    right: 25px;
    font-size: 35px;
`;

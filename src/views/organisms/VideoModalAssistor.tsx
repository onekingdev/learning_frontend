import {FC, useState} from 'react';
import styled from 'styled-components';
import {Modal} from '../atoms/Modal';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';
import {VideoQuestion} from '../molecules/VideoQuestions';
import {ScreenSize} from '../screenSize';

type VideoModalProps = {
  onClick: () => void;
  source: string;
};
export const VideoModalAssistor: FC<VideoModalProps> = ({onClick,source}) => {

  return (
    <>
      <Modal>
        <ModalContainer>
          <ModalStyles>
            <CloseButton onClick={onClick}>X</CloseButton>
            <VideoQuestion source={source} />
          </ModalStyles>
        </ModalContainer>
      </Modal>
    </>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background-color: ${BasicColor.background40};
`;
const ModalStyles = styled.div`
  width: 80%;
  height: 270px;
  margin: 0 auto;
  background-color: ${BasicColor.white};
  border-radius: 40px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 400px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 720px;
    height: 480px;
  }
`;
const CloseButton = styled.div`
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

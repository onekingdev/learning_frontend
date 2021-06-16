import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import {Subheader} from '../atoms/Text/Subheader';
import math from '../assets/math-elements.svg';

export const TopicCard: FC = () => {
  return (
    <>
      <TopicCardStyles color={BasicColor.aqua}>
        <TopicCardImage src={math} />
        <TopicCardText isDark={true}>MATH</TopicCardText>
      </TopicCardStyles>
    </>
  );
};

type CardStylesProps = {
  color: string;
};

const TopicCardStyles = styled.div<CardStylesProps>`
  width: 150px;
  height: 165px;
  background-color: ${p => p.color};
  border-radius: 16px;
  text-align: center;
`;
const TopicCardImage = styled.img`
  width: 120px;
  height: 90px;
  margin: 10px auto;
`;
const TopicCardText = styled(Subheader)`
  height: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
`;

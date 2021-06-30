import {FC} from 'react';
import styled from 'styled-components';
import {Subheader} from '../atoms/Text/Subheader';

type TopicCardProps = {
  image: string;
  subject: string;
  background: string;
  onClick?: () => void;
};

export const TopicCard: FC<TopicCardProps> = ({
  image,
  subject,
  background,
  onClick,
}) => {
  return (
    <>
      <TopicCardStyles color={background} onClick={onClick}>
        <TopicCardImage src={image} />
        <TopicCardText isDark={true}>{subject}</TopicCardText>
      </TopicCardStyles>
    </>
  );
};

type CardStylesProps = {
  color: string;
};

const TopicCardStyles = styled.div<CardStylesProps>`
  width: 145px;
  height: 165px;
  background-color: ${p => p.color};
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  &: hover {
    transform: scale(1.1);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.5);
  }
`;
const TopicCardImage = styled.img`
  width: 120px;
  height: 90px;
  margin: 5px auto;
`;
const TopicCardText = styled(Subheader)`
  height: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
`;

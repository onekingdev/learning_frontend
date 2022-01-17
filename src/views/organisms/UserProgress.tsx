import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import {UserProgressBar} from '../molecules/UserProgressBar';
import {UserIcon} from '../atoms/UserIcon';
import {Typography} from '../atoms/Text/typography';

type UserProgressProps = {
  rank: number;
  level: number;
  icon: string;
  exp: number;
  expMax: number;
  progress: number;
  userName: string;
};

export const UserProgress: FC<UserProgressProps> = ({
  rank,
  level,
  icon,
  exp,
  expMax,
  progress,
  userName,
}) => {
  return (
    <>
      <UserProgressContainer>
        <UserProgressStyle>
          <RangeContainer color={BasicColor.greenSoft}>
            Rank <Range>#{rank}</Range>
          </RangeContainer>
          <RangeContainer color={BasicColor.blue}>
            Level <Range>{level}</Range>
          </RangeContainer>
          <Name color={BasicColor.black}>{userName}</Name>
          <ExpContainer>
            <Name color={BasicColor.greenSoft}>{exp}</Name>
            <Name color={BasicColor.black}>/{expMax}XP</Name>
          </ExpContainer>
          <UserProgressBar progress={progress} />
        </UserProgressStyle>
        <UserIcon src={icon} />
      </UserProgressContainer>
    </>
  );
};

type RangeContainerProps = {
  color: BasicColor.greenSoft | BasicColor.blue;
};

type NameProps = {
  color: BasicColor.black | BasicColor.greenSoft;
};

const UserProgressContainer = styled.div`
  width: 262px;
  height: 69px;
  display: grid;
  grid-template-columns: 1fr 65px;
  justify-content: center;
`;

const UserProgressStyle = styled.div`
  width: 186px;
  height: 69px;
  font-family: ${Typography.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  grid-column-gap: 10px;
`;

const RangeContainer = styled.div<RangeContainerProps>`
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${p => p.color};
`;

const Range = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
`;

const Name = styled.p<NameProps>`
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
  margin: 0;
  color: ${p => p.color};
`;

const ExpContainer = styled.div`
  display: flex;
`;

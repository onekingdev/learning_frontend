import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import {UserProgressBar} from '../atoms/UserProgressBar';
import {UserIcon} from '../atoms/UserIcon';

type UserProgressProps = {
  rank: number;
  level: number;
  icon: string;
  exp: number;
  expMax: number;
  progress: number;
  userName: string;
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
  font-family: Montserrat;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  grid-column-gap: 10px;
`;

const RangeContainer = styled.div<{
  color: BasicColor.greenSoft | BasicColor.blue;
}>`
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
const Name = styled.p<{
  color: BasicColor.black | BasicColor.greenSoft;
}>`
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
  margin: 0;
  color: ${p => p.color};
`;
const ExpContainer = styled.div`
  display: flex;
`;
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
        <UserIcon avatar={icon} />
      </UserProgressContainer>
    </>
  );
};

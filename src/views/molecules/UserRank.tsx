import { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'views/atoms/Text/Button';
import { Subheader } from 'views/atoms/Text/Subheader';
import { GeneralText } from 'views/atoms/Text/GeneralText';
import { UserIcon } from 'views/atoms/UserIcon';

type UserRankProps = {
  userRank: number;
  userName: string;
  userIcon: string;
};

interface UserRankTreasureTrackProps extends UserRankProps {
  active?: boolean;
  coinsEarned?: string | number;
}

export const UserRank: FC<UserRankProps> = ({userRank, userName, userIcon}) => {
  return (
    <>
      <UserRankStyles>
        <Button isDark={true}>#{userRank}</Button>
        <UserIcon src={userIcon} />
        <Button isDark={true}>{userName}</Button>
      </UserRankStyles>
    </>
  );
};

export const UserRankTreasureTrack: FC<UserRankTreasureTrackProps> = ({userRank, userName, userIcon, active=false, coinsEarned="0" }) => {
  return active ? (
    <>
      <UserRankTreasureTrackStylesActive >
        <Button isDark={true}>#{userRank}</Button>
        <UserIcon src={userIcon} />
        <Button isDark={true}>{userName}</Button>
        <Button isDark={true}>{coinsEarned} COINS EARNED</Button>
      </UserRankTreasureTrackStylesActive>
    </>
  ) : (
    <>
      <UserRankTreasureTrackStyles >
        <Button isDark={true}>#{userRank}</Button>
        <UserIcon src={userIcon} />
        <Button isDark={true}>{userName}</Button>
        <Button isDark={true}>{coinsEarned} COINS EARNED</Button>
      </UserRankTreasureTrackStyles>
    </>
  );
};

const UserRankStyles = styled.div`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding: 3px 0;
  display: grid;
  grid-template-columns: 40px 1fr 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`;

const UserRankTreasureTrackStyles = styled(UserRankStyles)`
  grid-template-columns: 40px 1fr 1fr 4fr;
  margin-left: 1rem;
`;

const UserRankTreasureTrackStylesActive = styled(UserRankStyles)`
  grid-template-columns: 40px 1fr 1fr 4fr;
  margin-left: 0;
  background: #21B95C33;
`;

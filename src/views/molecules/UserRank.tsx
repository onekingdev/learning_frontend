import { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'views/atoms/Text/Button';
import { UserIcon } from 'views/atoms/UserIcon';

type UserRankProps = {
  userRank: number;
  userName: string;
  userIcon: string;
};

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

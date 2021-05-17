import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type UserIconProps = {
  avatar: string;
};

const UserIconStyle = styled.div`
  width: 50px;
  height: 52px;
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid ${BasicColor.black};
`;

export const UserIcon: FC<UserIconProps> = ({avatar}) => {
  return (
    <>
      <UserIconStyle>
        <img src={avatar} alt="avatar" />
      </UserIconStyle>
    </>
  );
};

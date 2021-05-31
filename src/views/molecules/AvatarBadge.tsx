import {FC} from 'react';
import styled from 'styled-components';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';

export const AvatarBadge: FC = () => {
  return (
    <Wrapper>
      <Avatar src={'https://i.pravatar.cc/100'} />
      <NameWrapper>
        <Name>Sophie</Name>
        <Ribbon></Ribbon>
      </NameWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 6rem;
  display: grid;
  grid-template-columns: 100px auto;
  width: 250px;
  align-items: center;
`;

const NameWrapper = styled.div`
  height: 16px;
  display: grid;
  grid-template-columns: auto 30px;
`;

const Avatar = styled.img`
  margin: 0;
  border-radius: 50%;
  margin-top: 15px;
  z-index: 50;
  border: 5px #21b95c solid;
`;

const Name = styled.div`
  font-family: ${Typography.secondary};
  color: ${BasicColor.white};
  font-size: 24px;
  line-height: 20px;
  background-color: #21b95c;
  padding-top: 6px;
  text-align: center;
  &::after {
    content: '!';
  }
`;

const Ribbon = styled.span`
  border-style: solid;
  border-width: 16px;
  border-color: #21b95c transparent #21b95c #21b95c;
`;

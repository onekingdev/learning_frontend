import {FC} from 'react';
import styled from 'styled-components';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';
import {ScreenSize} from '../screenSize';

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
  display: grid;
  grid-template-columns: 110px auto;
  width: 240px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 404px;
  }
`;

const NameWrapper = styled.div`
  height: 16px;
  display: grid;
  grid-template-columns: auto 30px;
  margin: 0;
  margin-left: -7%;
  margin-top: -14px;
  @media (min-width: ${ScreenSize.tablet}) {
    margin-top: -32px;
  }
`;

const Avatar = styled.img`
  margin: 0;
  border-radius: 50%;
  margin-left: auto;
  border: 5px ${BasicColor.green} solid;
  height: 100px;
  width: 100px;
  z-index: 50;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.div`
  font-family: ${Typography.secondary};
  color: ${BasicColor.white};
  font-size: 24px;
  line-height: 20px;
  background-color: ${BasicColor.green};
  padding-top: 6px;
  text-align: center;
  &::after {
    content: '!';
  }
  @media (min-width: ${ScreenSize.tablet}) {
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    text-align: right;
  }
`;

const Ribbon = styled.span`
  border-style: solid;
  border-width: 16px;
  border-color: ${`${BasicColor.green} transparent ${BasicColor.green} ${BasicColor.green}`};
  @media (min-width: ${ScreenSize.tablet}) {
    border-width: 26px;
  }
`;

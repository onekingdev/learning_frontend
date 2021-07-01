import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../../atoms/Text/Title';
import ribbon from '../../assets/ribbon.svg';
import {ScreenSize} from '../../screenSize';

export const CardCollectibleTitle: FC = () => {
  return (
    <CardTitle>
      <Title isDark={true}>Cards Collectible</Title>
    </CardTitle>
  );
};

const CardTitle = styled.div`
  display: grid;
  height: 90%;
  text-align: center;
  align-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 268px 33px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    background-size: 296px 58px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    background-size: 400px 60px;
  }
`;

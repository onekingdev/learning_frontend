import {FC} from 'react';
import styled from 'styled-components';
import {Typography} from '../atoms/Text/typography';
import {BasicColor, SettingBarColor} from '../Color';

type SettingProps = {
  body: string;
  color: SettingBarColor;
  route?: string; // !! TODO: evaluate proper route prop
  icon?: string; // !! TODO: evaluate proper route prop
};

export const SettingBar: FC<SettingProps> = ({body, route, color}) => {
  return <StyledSetting bgColor={color}>{body}</StyledSetting>;
};

type StyledSettingProps = {
  bgColor: SettingBarColor;
};

const StyledSetting = styled.div<StyledSettingProps>`
  background-color: ${prop => prop.bgColor};
  border-radius: 3px;
  font-family: ${Typography.primary};
  padding: 6px;
  color: ${BasicColor.white};
`;

import {FC} from 'react';
import styled from 'styled-components';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';

type SettingProps = {
  body: string;
  color: string;
  route?: string; // !! TODO: evaluate proper route prop
  icon?: string; // !! TODO: evaluate proper route prop
};

export const SettingBar: FC<SettingProps> = ({body, route, color}) => {
  return <StyledSetting>{body}</StyledSetting>;
};

const StyledSetting = styled.div`
  background-color: #ec5858;
  border-radius: 3px;
  font-family: ${Typography.primary};
  padding: 6px;
  color: ${BasicColor.white};
`;

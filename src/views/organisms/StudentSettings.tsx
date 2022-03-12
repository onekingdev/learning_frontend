import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor, SettingBarColor} from '../Color';
import {RibbonText} from '../molecules/RibbonText';
import {SettingBar} from '../molecules/SettingBar';
import {ScreenSize} from '../screenSize';

export const StudentSettings: FC = () => {
  const studentSettingsSpecs = [
    {body: 'Language', color: SettingBarColor.accessibility},
    {body: 'Music', color: SettingBarColor.audio},
    {body: 'Sound Effects', color: SettingBarColor.audio},
    {body: 'On game lost', color: SettingBarColor.notifications},
    {body: 'Notifications', color: SettingBarColor.notifications},
  ];
  return (
    <>
      <RibbonWrapper>
        <RibbonText body={'Settings'} />
      </RibbonWrapper>
      <SettingsContainer>
        <SettingsWrapper>
          {studentSettingsSpecs.map(setting => {
            return <SettingBar body={setting.body} color={setting.color} />;
          })}
        </SettingsWrapper>
      </SettingsContainer>
    </>
  );
};

const SettingsContainer = styled.div`
  margin-top: 12px;
  background-color: ${BasicColor.white};
  width: 253px;
  box-shadow: 0px 0px 10px 5px rgba(63, 63, 63, 0.2);
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 450px;
  }
`;

const SettingsWrapper = styled.div`
  padding: 19px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  @media (min-width: ${ScreenSize.tablet}) {
    padding: 46px;
  }
`;

const RibbonWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

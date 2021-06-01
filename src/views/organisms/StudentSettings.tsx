import {FC} from 'react';
import styled from 'styled-components';
import {SettingBarColor} from '../Color';
import {SettingBar} from '../molecules/SettingBar';

export const StudentSettings: FC = () => {
  const studentSettingsSpecs = [
    {body: 'Language', color: SettingBarColor.accessibility},
    {body: 'Music', color: SettingBarColor.audio},
    {body: 'Sound Effects', color: SettingBarColor.audio},
    {body: 'On game lost', color: SettingBarColor.notifications},
    {body: 'Notifications', color: SettingBarColor.notifications},
  ];
  return (
    <Card>
      {studentSettingsSpecs.map(setting => {
        return <SettingBar body={setting.body} color={setting.color} />;
      })}
    </Card>
  );
};

const Card = styled.div`
  padding: 65px;
  padding-left: 46px;
  padding-right: 46px;
  width: 253px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  box-shadow: 0px 0px 10px 5px rgba(63, 63, 63, 0.2);
  border-radius: 16px;
`;

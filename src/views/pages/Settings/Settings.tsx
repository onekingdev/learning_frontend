import { FC, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';

import { Title } from 'views/molecules/Setting/utils/Style';
import {
  TextGroup,
  LSLabel,
  LSText,
  LSBlueTextButton,
} from 'views/molecules/Setting/utils/Style';

import { SettingForm } from 'views/organisms/Setting/Profile';
import { Payment } from 'views/organisms/Setting/Payment';
import { MembershipDetail } from 'views/organisms/Setting/Details';

import { CssBaseline } from '@mui/material';
import { LoadingContext } from 'react-router-loading';
import { TypoTitle } from 'views/atoms/Text';

export const Settings: FC = () => {
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <SettingContainer>
        <TitleContainer>
          <Title><TypoTitle>Settings</TypoTitle></Title>
        </TitleContainer>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={6}>
            <SettingForm />
            <Payment />
            <TextGroup>
              <LSLabel>{'Questions? '}</LSLabel>
              <LSText>{' Reach us and we will help you'}</LSText>
              <LSBlueTextButton href="#">{' Contact'}</LSBlueTextButton>
            </TextGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <MembershipDetail />
          </Grid>
        </Grid>
      </SettingContainer>
    </ParentPgContainer>
  );
};
export default Settings;

const SettingContainer = styled.div`
  width: 80vw;
  @media screen and (max-width: 540px) {
    width: 100%;
    margin-bottom: 20vh;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

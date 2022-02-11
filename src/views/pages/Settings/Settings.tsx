import {FC, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import Box from '@mui/material/Box';
import {Grid} from '@mui/material';

import {ParentPgContainer} from '../../molecules/ParentPgContainer/ParentPgContainer';

import {Title} from '../../molecules/Setting/utils/Style';
import {
  TextGroup,
  LSLabel,
  LSText,
  LSBlueTextButton,
} from '../../molecules/Setting/utils/Style';

import {SettingForm} from '../../organisms/Setting/Profile';
import {Payment} from '../../organisms/Setting/Payment';
import {MembershipDetail} from '../../organisms/Setting/Details';

import {CssBaseline} from '@mui/material';
import {LoadingContext} from 'react-router-loading';

export const Settings: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const dispatch = useDispatch();

  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <SettingContainer>
        <TitleContainer>
          <Title>{'Settings'}</Title>
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

import {FC, useEffect} from 'react';
import { useDispatch } from 'react-redux'

import Box from '@mui/material/Box';

import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'

import { Title } from '../../molecules/Setting/utils/Style';
import { SettingForm } from '../../organisms/Setting/Profile';
import { Payment } from '../../organisms/Setting/Payment'
import { MembershipDetail } from '../../organisms/Setting/Details';

import { CssBaseline } from '@mui/material';

export const Settings: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false} >
      <>
      <Title>{'Settings'}</Title>
        <CssBaseline/>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <div>
          <SettingForm/>
          </div>
          <div>
          <Payment/>
          <MembershipDetail/>
          </div>
        </Box>
      </>
    </ParentPgContainer>
  );
};
export default Settings;

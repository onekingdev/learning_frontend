import {FC, useEffect} from 'react';
import { SettingForm } from './organisms/Profile';
import { useDispatch } from 'react-redux'
import { Title } from './utils/Style';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import Box from '@mui/material/Box';
import { MembershipDetail } from './organisms/Details';
import { CssBaseline } from '@mui/material';
import { Payment } from './organisms/Payment';

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

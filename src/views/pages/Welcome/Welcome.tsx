import {
  FC,
  useEffect
} from 'react';
import logo from 'views/assets/socrates-logo.svg';
import welcome from 'views/assets/welcome-page.svg';
import { dictionary } from 'views/pages/Welcome/dictionary';
import { useHistory } from 'react-router-dom';
import { resetReducer } from 'app/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Grid,
  ThemeProvider,
} from '@mui/material';
import { welcomePage } from 'views/Theme';

import {
  Wrapper,
  Illustration,
} from './Style';
import { Typography } from '@mui/material';
import { LanguageSelect } from 'views/organisms/Welcome/LanguageSelect';
import { TermsAndConditions } from 'views/molecules/Login/TermsAndConditions';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';


export const Welcome: FC = () => {
  const isMobile = useSocratesMediaQuery('xs')
  const history = useHistory();
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.user.language);

  useEffect(() => {
    resetReducer(dispatch);
  }, []);

  return (
    <ThemeProvider theme={welcomePage}>
      <Wrapper>
        <Box
          display='flex'
          justifyContent={isMobile ? 'start' : 'center'}
          width='100%'
          margin={2}
        >
          <img src={logo} alt='Learn with Socrates logo' style={{ width: isMobile ? '50%' : 'auto' }} />
        </Box>
        <Typography variant='h4' fontWeight='bold'>{dictionary[language]?.practice}</Typography>
        <Box
          sx={{
            position: 'absolute',
            right: '1vw',
            top: '1vh',
            minWidth: 120,
          }}>
          <LanguageSelect />
        </Box>
        <Box mt={1}>
          <Typography variant='body1'>{dictionary[language]?.description1}</Typography>
          <Typography variant='body1'>{dictionary[language]?.description2}</Typography>
        </Box>

        <Illustration src={welcome} alt='' />

        <Grid container justifyContent='center' spacing={2} mt='3vh' maxWidth={'sm'} mb={5}>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={() => history.push('/teacher/selectCreateType')}
              // onClick={() => history.push('/teacher/classrooms')}
              variant='contained'
              color='secondary'
              disabled={true}
            >
              {dictionary[language]?.schoolSignUp}
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} >
            <Button
              color='yellow'
              variant='contained'
              style={{ width: 'unset' }}
              onClick={() => history.push('/parent/create')}
            >
              {dictionary[language]?.parentSignUp}
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              value={dictionary[language]?.login}
              variant='contained'
              color='primary'
              style={{ width: 'unset' }}
              onClick={() => history.push('/login')}
            >
              {dictionary[language]?.login}
            </Button>
          </Grid>
        </Grid>
        <TermsAndConditions />
      </Wrapper>
    </ThemeProvider>
  );
};

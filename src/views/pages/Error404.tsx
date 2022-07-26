import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { resetReducer } from 'app/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  ThemeProvider,
} from '@mui/material';
import { themeTeacher } from 'views/Theme';
import notFoundPageImage from 'views/assets/others/404image.svg'
import { Typography } from '@mui/material';
import commonDictionary from 'constants/commonDictionary'
import { Wrapper } from './Welcome/Style';

export const Error404: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';

  useEffect(() => {
    resetReducer(dispatch);
  }, []);

  return (
    <ThemeProvider theme={themeTeacher}>
      <Wrapper>
        <Box display='flex' flexDirection='column' alignItems='center' gap={3}>
          <Typography variant='h1' fontWeight={'bold'}>Opps!</Typography>
          <Typography variant='h4'>{commonDictionary[language]?.something_wrong}</Typography>
          <Typography variant='h5'>Error404: Page not found</Typography>
          <img src={notFoundPageImage}
            style={{ maxWidth: '100%', maxHeight: '60vh' }}
          />
          <Button
            variant='contained'
            color='aqua'
            onClick={() => history.goBack()}
            sx={{ marginBottom: 10 }}
          >Go Back</Button>
        </Box>
      </Wrapper>
    </ThemeProvider >
  );
};

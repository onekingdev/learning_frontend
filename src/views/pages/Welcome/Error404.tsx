import { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { resetReducer } from 'app/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import { welcomePage } from 'views/Theme';

import {
  Wrapper,
} from './Style';
import { Typography } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';

export const Error404: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const [deployModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  useEffect(() => {
    resetReducer(dispatch);
  }, []);

  return (
    <ThemeProvider theme={welcomePage}>
      <Wrapper>
        <Typography variant='h3'>Error: 404, Page not found!</Typography>
      </Wrapper>
    </ThemeProvider>
  );
};

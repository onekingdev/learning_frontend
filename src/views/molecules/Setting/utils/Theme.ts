import { createTheme } from '@mui/material/styles';
import { BasicColor } from 'views/Color';

export const settingPage = createTheme({
  palette: {
    primary: {
      main: BasicColor.green,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#919699',
      contrastText: '#ffffff',
    },
  },
});

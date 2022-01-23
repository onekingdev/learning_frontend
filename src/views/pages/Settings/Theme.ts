import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const settingPage = createTheme({
  palette: {
    primary: {
      main: '#21B95C',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#919699',
      contrastText: '#ffffff',
    },
  },
});

import {useMediaQuery} from '@mui/material';
import {ScreenSize} from 'constants/screenSize';

/**
  widescreen = '1366px'
  desktop = '1024px'
  tablet = '769px'
  phone = '450px'
 */

export const useSocratesMediaQuery = (screenSize: string) => {
  let pixelWidth;
  switch (screenSize) {
    case 'lg':
      pixelWidth = ScreenSize.widescreen;
      break;
    case 'md':
      pixelWidth = ScreenSize.desktop;
      break;
    case 'sm':
      pixelWidth = ScreenSize.tablet;
      break;
    case 'xs':
      pixelWidth = ScreenSize.phone;
      break;

    default:
      pixelWidth = ScreenSize.widescreen;

      break;
  }
  return useMediaQuery(`(max-width: ${pixelWidth})`);
};

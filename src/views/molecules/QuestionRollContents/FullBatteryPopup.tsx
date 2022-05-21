import { FC } from 'react';
import { Box } from '@mui/material';
import fullBattery from 'views/assets/question/full-battery.gif'

export const FullBatteryPopup: FC = () => {

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img src={fullBattery} />
    </Box>
  );
};


import { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SettingBarColor } from 'views/Color';
import { SoundSwitch } from './SoundSwitch';
import { LanguageSelect } from './StudentSettingsLanguageSelect';

export const StudentSettingsAccordian: FC = () => {

  return (
    <div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ background: SettingBarColor.accessibility }}
        >
          <Typography style={{ color: 'white' }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LanguageSelect />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sound</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SoundSwitch />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {Typography, Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SettingBarColor } from 'views/Color';
import { SoundSwitch } from './SoundSwitch';
import { LanguageSelect } from './StudentSettingsLanguageSelect';

export const StudentSettingsAccordian: FC = () => {

  return (
    <Container sx={{marginTop: 2, marginBottom: 2, borderRadius: 10}}>
      <Accordion sx={{ marginBottom: 2 }}>
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
      <Accordion sx={{ marginBottom: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: SettingBarColor.notifications }}
        >
          <Typography style={{ color: 'white' }}>Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: SettingBarColor.audio }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography style={{ color: 'white', textAlign:'center' }}>Sound</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', justifyContent: 'center'}}>
          <SoundSwitch />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

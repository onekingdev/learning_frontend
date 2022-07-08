import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';
import { dictionary } from './dictionary'
import { LANGUAGES } from 'constants/common';

export const Classroom: FC = () => {
  const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.classroom}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
    </TeacherPgContainer>
  );
}

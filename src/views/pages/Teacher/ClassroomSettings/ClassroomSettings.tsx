import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';
import { getAudiencesWithGrades } from 'app/actions/audienceActions'
import { useSnackbar } from 'notistack';
import commonDictionary from 'constants/commonDictionary'
import { Box, Button, Container, FormControl, Grid, InputLabel, List, ListItem, MenuItem, Paper, Select, Switch, TextField, Typography } from '@mui/material';
import { BasicColor } from 'views/Color';
import { ClassroomLanguageSelect } from 'views/molecules/Classroom/LanguageSelect';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LANGUAGES } from 'constants/common';

const data = [
  {
    id: 'mon',
    day: 'Monday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: true
  },
  {
    id: 'tue',
    day: 'Tuesday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: false
  },
  {
    id: 'wed',
    day: 'Wednesday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: true
  },
  {
    id: 'thu',
    day: 'Thursday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: true
  },
  {
    id: 'fri',
    day: 'Friday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: true
  },
  {
    id: 'sat',
    day: 'Saturday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: false
  },
  {
    id: 'sun',
    day: 'Sunday',
    start: new Date('2018-01-01T00:00:00.000Z'),
    end: new Date('2018-01-01T00:00:00.000Z'),
    isOn: false
  },
]
const ClassroomSettings: FC = (props: any) => {
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';
  const [settings, setSettings] = useState({
    language: 'en-us',
    game: true,
    gameCost: '200',
    timezone: 'EST',
    schoolDayTime: [
      {
        id: 'mon',
        day: 'Monday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: true
      },
      {
        id: 'tue',
        day: 'Tuesday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: false
      },
      {
        id: 'wed',
        day: 'Wednesday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: true
      },
      {
        id: 'thu',
        day: 'Thursday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: true
      },
      {
        id: 'fri',
        day: 'Friday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: true
      },
      {
        id: 'sat',
        day: 'Saturday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: false
      },
      {
        id: 'sun',
        day: 'Sunday',
        start: new Date('2018-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        isOn: false
      },
    ]
  })
  const [classLang, setClassLang] = useState(language)
  const [schoolHours, setSchoolHours] = useState(data)

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.classroom_settings} current='classroomSettings'>
      <Box display='flex' gap={2} padding={1} alignItems={'center'} mt={2} flexDirection='column'>
        {/* <Grid container justifyContent={'center'} alignItems='start' maxWidth='lg' spacing={2}>
          <Grid item container sm={12} md={4} height='100%'>
            <Paper sx={{ width: '100%', height: '100%' }} elevation={5}>
              <Typography sx={{ background: BasicColor.blue, padding: 2 }} mb={1} color='white' fontWeight={'bold'} textAlign='center'>Class Settings</Typography>
              <Grid container padding={2} spacing={2}>
                <Grid item xs={6}>
                  <Typography textAlign={'end'}>Lanuguage</Typography>
                </Grid>
                <Grid item xs={6}>
                  <ClassroomLanguageSelect
                    lang={settings.language}
                    setLang={(value) => setSettings({ ...settings, language: value })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign={'end'}>Games</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Switch
                    checked={settings.game}
                    onChange={() => setSettings({ ...settings, game: !settings.game })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign={'end'}>Game Cost</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={settings.gameCost}
                    onChange={(e: any) => setSettings({ ...settings, gameCost: e.target.value })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign={'end'}>Time Zone</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item container sm={12} md={8}>
            <Paper sx={{ width: '100%', height: '100%' }} elevation={5}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Typography sx={{ background: BasicColor.blue, padding: 2 }} color='white' fontWeight={'bold'} textAlign='center'>Set School Hours</Typography>
                <List sx={{ padding: 2 }}
                >
                  {
                    schoolHours.map(element => (
                      <ListItem divider key={element.id}>
                        <Grid container padding={1} spacing={1}>
                          <Grid item xs={6} sm={3}>
                            <Typography sx={{ width: '100%' }} textAlign={'end'}>{element.day}</Typography>
                          </Grid>
                          <Grid item xs={6} sm={1}>
                            <Switch checked={element.isOn} />
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <Box
                              display={element.isOn ? 'flex' : 'none'}
                              gap={1}
                              alignItems='center'
                              justifyContent={'space-around'} >
                              <TimePicker
                                label="Start"
                                value={element.start}
                                onChange={(newValue) => {
                                  // setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                              <Typography>to</Typography>
                              <TimePicker
                                label="End"
                                value={element.end}
                                onChange={(newValue) => {
                                  // setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </ListItem>
                    ))
                  }
                </List>
              </LocalizationProvider>
            </Paper>
          </Grid>
        </Grid> */}
        <Button
          variant='contained'
        >Save
        </Button>
      </Box>
    </TeacherPgContainer >
  )
};
export default ClassroomSettings

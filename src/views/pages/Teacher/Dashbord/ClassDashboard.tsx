import {
  FC, useEffect, useState,
  // useContext
} from 'react';
import { useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import commonDictionary from 'constants/commonDictionary'
import { Avatar, Box, Container, Grid, Paper, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import coin from 'views/assets/coin.svg'
import target from 'views/assets/target.svg'
import question_icon from 'views/assets/nav-icons/question.png';
import { ScreenSize } from 'constants/screenSize';
import { BasicColor } from 'views/Color';
import { useQuery } from 'react-query'
import { doFetchClassLeaders } from 'app/actions';
import { getMessage } from 'views/utils';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { ImageAvatar } from 'views/molecules/Avatar/DefaultAvatar';
import { ClassroomMenu } from 'views/organisms/Menu/ClassroomMenu';

const leaders = [
  {
    name: 'Charly',
    coins: 540,
  },
  {
    name: 'Candy',
    coins: 240,
  },
  {
    name: 'Armin',
    coins: 140,
  },
]
const ClassDashboard: FC = () => {
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';
  const token = useSelector((state: any) => state.user.token);
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  // const { data: leaders, isLoading, error } = useQuery(['yesterday-class-leaders', token], () => doFetchClassLeaders(token))

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);

  // if (isLoading) return <LoadingSpinner />
  // if (error) return <Typography variant='caption' color={'red'}> {getMessage(error)}</Typography>
  // if (leaders.message) return <Typography variant='caption'> {leaders.message}</Typography>
  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.class_dashboard} current='dashboard'>
      <Container maxWidth={'lg'}>
        <Grid container justifyContent='center' spacing={2} alignItems='start' mt={2}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{
              background: '#F4C22233',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              height: isMobile ? 65 : 110,
              width: isMobile ? '100%' : 500,
            }}>
              <img src={coin} />
              <Typography ><span style={{ fontWeight: 'bold' }}>Today Coins </span>6/6,000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{
              background: '#1771B933',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              height: isMobile ? 65 : 110,
              width: isMobile ? '100%' : 500,
            }}>
              <img src={question_icon} />
              <Typography fontWeight={'bold'}>Today Questions</Typography>
              <Box >
                <Typography textAlign={'end'}>30/100</Typography>
                <Typography textAlign={'end'} fontWeight={'bold'}>30%</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              width: isMobile ? '100%' : 500,
            }}>
              <Typography
                textAlign={'center'}
                color='white'
                padding={1}
                sx={{ background: BasicColor.blue }}>Yesterday's class leaders</Typography>
              <Grid container spacing={1} padding={1}>
                {
                  leaders.map(item => (
                    <>
                      <Grid item xs={3}>
                        <Box display='flex' gap={2} width='100%' justifyContent='space-evenly'>
                          <Avatar />
                        </Box>
                      </Grid>
                      <Grid item xs={3}>
                        <Box display='flex' gap={2} width='100%' justifyContent='space-evenly'>
                          <Typography>{item.name}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box display='flex' gap={2} width='100%' justifyContent='space-evenly'>
                          <Typography>{item.coins} COINS EARNED</Typography>
                        </Box>
                      </Grid>
                    </>
                  ))
                }
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              width: isMobile ? '100%' : 500,
            }}>
              <Typography
                textAlign={'center'}
                color='white'
                padding={1}
                sx={{ background: BasicColor.blue }}>Yesterday's Class Totals</Typography>
              <Grid container spacing={1} padding={1}>

                <Grid item xs={3}>
                  <img src={question_icon} style={{ height: 45 }} />
                </Grid>
                <Grid item xs={7}>
                  <Typography textAlign={'start'} width='100%'>{'Class Question Answered'}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{20}</Typography>
                </Grid>

                <Grid item xs={3}>
                  <img src={coin} style={{ height: 45 }} />
                </Grid>
                <Grid item xs={7}>
                  <Typography textAlign={'start'} width='100%'>{'Class Coins Earned'}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{4000}</Typography>
                </Grid>

                <Grid item xs={3}>
                  <img src={target} style={{ height: 45 }} />
                </Grid>
                <Grid item xs={7}>
                  <Typography textAlign={'start'} width='100%'>{'Class Accuracy'}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{'50%'}</Typography>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography
              textAlign={'center'}
              color='white'
              padding={1}
              sx={{ background: BasicColor.blue, width: isMobile ? '100%' : 600 }}>Lifetime</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{
              background: '#F4C22233',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              height: isMobile ? 54 : 85,
              width: isMobile ? '100%' : 400,
            }}>
              <img src={coin} />
              <Typography ><span style={{ fontWeight: 'bold' }}>Coins </span>12,000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{
              background: '#1771B933',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              height: isMobile ? 54 : 85,
              width: isMobile ? '100%' : 400,
            }}>
              <img src={question_icon} />
              <Typography fontWeight={'bold'}>Questions</Typography>
              <Box >
                <Typography textAlign={'end'}>14,273/20,188</Typography>
                <Typography textAlign={'end'} fontWeight={'bold'}>70%</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </TeacherPgContainer>
  );
};
export default ClassDashboard

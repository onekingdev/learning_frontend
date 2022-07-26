import {
  FC, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import commonDictionary from 'constants/commonDictionary'
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import coin from 'views/assets/coin.svg'
import question_icon from 'views/assets/nav-icons/question.png';
import { BasicColor } from 'views/Color';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { ImageAvatar } from 'views/molecules/Avatar/DefaultAvatar';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import { doCreateDashboardData } from 'app/actions';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

const ClassDashboard: FC = () => {
  const isMobile = useSocratesMediaQuery('xs')
  const { language, token } = useSelector((state: any) => state.user)
  const { currentClassId } = useSelector((state: any) => state.teacher);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<{
    coinsToday: 0,
    goalCoinsPerDay: 0,
    correctQuestionsCountToday: 0,
    correctQuestionsCountYesterday: 0,
    coinsYesterday: 0,
    coinsAll: 0,
    questionsAll: 0,
    classLeadersYesterday: Array<{ student: any, coinsSum: number }>
  }>()

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    createData.mutate()
  }, []);

  const createData = useMutation(() => doCreateDashboardData(currentClassId, token), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        setData(data)
        enqueueSnackbar('Data is updated', { variant: 'success' })
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.class_dashboard} current='dashboard'>
      <Container maxWidth={'lg'}>
        {
          loading ? <LoadingSpinner /> :
            data &&
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
                  <Typography ><span style={{ fontWeight: 'bold' }}>Today Coins </span>{data.coinsToday}/{data.goalCoinsPerDay}</Typography>
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
                  <Typography fontWeight={'bold'}>Today Correct Questions</Typography>
                  <Box >
                    <Typography textAlign={'end'}>{data.correctQuestionsCountToday}</Typography>
                    {/* <Typography textAlign={'end'} fontWeight={'bold'}>{+(data.correctQuestionsCountToday / questionsCountToday)}%</Typography> */}
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
                      data.classLeadersYesterday.length === 0 ?
                        <Typography>{'No Leaders yet!'}</Typography> :
                        data.classLeadersYesterday.map(item => (
                          <>
                            <Grid item xs={3}>
                              <Box display='flex' gap={2} width='100%' justifyContent='space-evenly'>
                                <ImageAvatar
                                  name={item.student?.firstName || 'So'}
                                  accessory={item.student?.currentAvatarAccessories}
                                  head={item.student?.currentAvatarHead}
                                  clothes={item.student?.currentAvatarClothes}
                                  // skinTone={null}
                                  size={50}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={3}>
                              <Box display='flex' gap={2} width='100%' justifyContent='space-evenly'>
                                <Typography>{item.student.name}</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <Box display='flex' gap={2} width='100%' justifyContent='space-evenly'>
                                <Typography>{item.coinsSum} COINS EARNED</Typography>
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
                      <Typography>{data.coinsYesterday}</Typography>
                    </Grid>
                    {/*
                    <Grid item xs={3}>
                      <img src={target} style={{ height: 45 }} />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography textAlign={'start'} width='100%'>{'Class Accuracy'}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{'50%'}</Typography>
                    </Grid> */}

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
                  <Typography ><span style={{ fontWeight: 'bold' }}>Coins </span>{data.coinsAll}</Typography>
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
                    <Typography textAlign={'end'}>{data.questionsAll}</Typography>
                    {/* <Typography textAlign={'end'} fontWeight={'bold'}>70%</Typography> */}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
        }
      </Container>
    </TeacherPgContainer>
  );
};
export default ClassDashboard

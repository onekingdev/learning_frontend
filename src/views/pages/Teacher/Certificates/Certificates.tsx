import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { TeacherSettingPgContainer } from 'views/molecules/TeacherPgContainer/TeacherSettingPgContainer';
import { Container, Grid, Paper, Box } from '@mui/material';
import { TypoTitle } from 'views/atoms/Text';
import certPic from 'views/assets/others/certificado-kids11.svg'
import { ImageUploader } from 'views/molecules/TeacherCertificates/ImageUploader';
import { fetchTeacherCertificateFilesFromFirebase } from 'app/firebase';

const Certificates: FC = () => {
  let language: string = useSelector((state: any) => state.user.language);
  const reLoadImgs: boolean = useSelector((state: any) => state.teacher.reLoadImgs);
  const [certImgs, setCertImgs] = useState<Array<any>>([])
  const [selectedId, setSelectedId] = useState<any>(null)

  const handleImageSelect = (id: number) => {
    setSelectedId(id)
  }

  language = language ? language.toUpperCase() : 'EN_US'
  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    fetchTeacherCertificateFilesFromFirebase(setCertImgs)
  }, []);

  useEffect(() => {
    fetchTeacherCertificateFilesFromFirebase(setCertImgs)
  }, [reLoadImgs]);

  return (
    <TeacherSettingPgContainer onlyLogoImgNav={true} title={dictionary[language]?.certificates}>
      <Container maxWidth={false} sx={{ marginTop: 5, marginBottom: 5, display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent={'center'} spacing={5}>
          <Grid item>
            <Box sx={{ maxWidth: 900 }}>
              <Grid container spacing={6} >
                {certImgs ?
                  certImgs.map((certimg, index) => (
                    <Grid item key={index}>
                      <Box
                        sx={{
                          filter: index === selectedId ? 'drop-shadow(0 0 0.75rem gold)' : 'none'
                        }}
                        onClick={() => { handleImageSelect(index) }}
                      >
                        <img src={certimg}
                          style={{
                            borderRadius: 'inherit',
                            height: 275,
                            width: 383,
                            objectFit: 'cover'
                          }} />
                      </Box>
                    </Grid>
                  )) : null
                }
                <Grid item>
                  <ImageUploader />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Paper sx={{ width: 383, minHeight: 300, height: '100%', background: '#22BAAF33' }} />
          </Grid>
        </Grid>
      </Container >
    </TeacherSettingPgContainer >
  );
};
export default Certificates

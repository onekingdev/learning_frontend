import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dictionary } from './dictionary'
import { Container, Grid, Box } from '@mui/material';
import { ImageUploader } from 'views/molecules/TeacherCertificates/ImageUploader';
import { fetchTeacherCertificateFilesFromFirebase } from 'app/firebase';
import { StudentChkboxList } from 'views/molecules/TeacherCertificates/StudentChkboxList';
import * as TYPES from 'app/types'
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';
import { LANGUAGES } from 'constants/common';

const mockStudents = [
  {
    id: 1,
    name: 'boris',
  },
  {
    id: 2,
    name: 'timon',
  },
  {
    id: 3,
    name: 'pumba',
  },
  {
    id: 4,
    name: 'simba',
  },
]

const Certificates: FC = () => {
  const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;
  const [certImgs, setCertImgs] = useState<Array<any>>([])
  const [selectedId, setSelectedId] = useState<any>(null)

  const dispatch = useDispatch()
  const reLoadImgs: boolean = useSelector((state: any) => state.certificate.reLoadImgs);


  const handleImageSelect = (id: number) => {
    setSelectedId(id)
    dispatch({ type: TYPES.CERTIFICATE_SELECT_IMAGE, payload: certImgs[id] })
  }

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    fetchTeacherCertificateFilesFromFirebase(setCertImgs)
  }, []);

  useEffect(() => {
    fetchTeacherCertificateFilesFromFirebase(setCertImgs)
  }, [reLoadImgs]);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.certificates} current='certificates'>
      <Container maxWidth={false} sx={{ marginBottom: 5 }}>
        <Grid container mt={1} justifyContent={'center'} spacing={5}>
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
            <StudentChkboxList students={mockStudents} />
          </Grid>
        </Grid>
      </Container >
    </TeacherPgContainer >
  );
};
export default Certificates

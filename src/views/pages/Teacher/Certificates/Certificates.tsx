import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dictionary } from './dictionary'
import { Container, Grid, Box, Button } from '@mui/material';
import { ImageUploader } from 'views/molecules/TeacherCertificates/ImageUploader';
import { doFetchTeacherCertificateImages, fetchTeacherCertificateFilesFromFirebase } from 'app/firebase';
import * as TYPES from 'app/types'
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { StudentsCheckbox } from 'views/organisms/Classroom/StudentsCheckbox';
import { useQuery } from '@tanstack/react-query';
import { doFetchClassroomStudents } from 'app/actions';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { SentCertDgContent } from 'views/molecules/TeacherCertificates/SendCertDgContent';
import { CreateCertificationDgContent } from 'views/molecules/TeacherCertificates/CreateCertificationDgContent';


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
  const { language, token } = useSelector((state: any) => state.user);
  const [certImgs, setCertImgs] = useState<Array<any>>([])
  const [selectedId, setSelectedId] = useState<any>(null)
  const { currentClassId } = useSelector((state: any) => state.teacher);

  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isSendOpen, seIsSendOpen] = useState(false)
  const [selected, setSelected] = useState<Array<any>>([])

  const [selectedImgUrl, setSelectedImgUrl] = useState<null | string>(null)

  const dispatch = useDispatch()
  const reLoadImgs: boolean = useSelector((state: any) => state.certificate.reLoadImgs);

  const { data: students } = useQuery(
    ['classroom-students', currentClassId],
    () => doFetchClassroomStudents(currentClassId, token),
    { refetchIntervalInBackground: false, initialData: [] }
  )

  const { data: images } = useQuery(
    ['certificate-images'], () => doFetchTeacherCertificateImages(),
    { refetchIntervalInBackground: false }
  )

  console.log({ images, certImgs, selectedImgUrl })

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
                {certImgs &&
                  certImgs.map((imgUrl, index) => (
                    <Grid item key={index}>
                      <Box
                        sx={{
                          filter: selectedImgUrl === imgUrl ? 'drop-shadow(0 0 0.75rem gold)' : 'none'
                        }}
                        onClick={() => { setSelectedImgUrl(imgUrl) }}
                      >
                        <img src={imgUrl}
                          style={{
                            borderRadius: 'inherit',
                            height: 275,
                            width: 383,
                            objectFit: 'cover'
                          }} />
                      </Box>
                    </Grid>
                  ))
                }
                <Grid item>
                  <ImageUploader />
                </Grid>
              </Grid>
              <Button variant='contained' onClick={() => setIsCreateOpen(true)}>Create</Button>
            </Box>
          </Grid>
          <Grid item>
            {
              students && <Box>

                <StudentsCheckbox students={students} onChange={setSelected} />
                <Button variant='contained' onClick={() => seIsSendOpen(true)}>send</Button>
              </Box>
            }
          </Grid>
        </Grid>
        <LSDialog
          isOpen={isSendOpen}
          open={() => seIsSendOpen(false)}
          title='Send Certificate'
          children={<SentCertDgContent />}
        />
        {
          selectedImgUrl &&
          <LSDialog
            isOpen={isCreateOpen}
            open={() => setIsCreateOpen(false)}
            title='Create Certification'
            children={<CreateCertificationDgContent imgUrl={selectedImgUrl} />}
          />
        }
      </Container >
    </TeacherPgContainer >
  );
};
export default Certificates

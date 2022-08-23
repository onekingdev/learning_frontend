import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { ImageUploader } from 'views/molecules/TeacherCertificates/ImageUploader';
import { doFetchTeacherCertificateImages } from 'app/firebase';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { StudentsCheckbox } from 'views/organisms/Classroom/StudentsCheckbox';
import { useQuery } from '@tanstack/react-query';
import { doFetchClassroomStudents } from 'app/actions';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { SentCertDgContent } from 'views/molecules/TeacherCertificates/SendCertDgContent';
import { CreateCertificationDgContent } from 'views/molecules/TeacherCertificates/CreateCertificationDgContent';
import { useSnackbar } from 'notistack';

const Certificates: FC = () => {
  const { language, token } = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const { currentClassId } = useSelector((state: any) => state.teacher);

  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isSendOpen, seIsSendOpen] = useState(false)
  const [selected, setSelected] = useState<Array<any>>([])

  const [selectedImgUrl, setSelectedImgUrl] = useState<null | string>(null)

  const { data: students } = useQuery(
    ['classroom-students', currentClassId],
    () => doFetchClassroomStudents(currentClassId, token),
    { refetchIntervalInBackground: false, initialData: [] }
  )

  const { data: images, isLoading } = useQuery(
    ['certificate-images'], () => doFetchTeacherCertificateImages(),
    { refetchIntervalInBackground: false, initialData: [] }
  )

  const openCreate = () => {
    if (!selectedImgUrl) enqueueSnackbar('Select image to be used as certificate image', { variant: 'error' })
    else
      setIsCreateOpen(true)
  }

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);


  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.certificates} current='certificates'>
      <Container maxWidth={false} sx={{ marginBottom: 5 }}>
        <Grid container mt={1} justifyContent={'center'} spacing={5}>
          <Grid item>
            <Box sx={{ maxWidth: 900 }}>
              <Grid container spacing={6} >
                {
                  isLoading ? <Typography>Loading...</Typography> :
                    images &&
                    images.map((image: any, index) => (
                      <Grid item key={index}>
                        <Box
                          sx={{
                            filter: selectedImgUrl === image.value ? 'drop-shadow(0 0 0.75rem gold)' : 'none'
                          }}
                          onClick={() => { setSelectedImgUrl(image.value) }}
                        >
                          <img src={image.value}
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
              <Button variant='contained' onClick={openCreate}>Create</Button>
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
          open={isSendOpen}
          close={() => seIsSendOpen(false)}
          title='Send Certificate'
          dialogContent={<SentCertDgContent />}
        />
        {
          selectedImgUrl &&
          <LSDialog
            open={isCreateOpen}
            close={() => setIsCreateOpen(false)}
            title='Create Certification'
            dialogContent={<CreateCertificationDgContent imgUrl={selectedImgUrl} />}
            fullWidth
          />
        }
      </Container >
    </TeacherPgContainer >
  );
};
export default Certificates

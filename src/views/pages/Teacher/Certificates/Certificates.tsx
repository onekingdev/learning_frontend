import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { Container, Grid, Box, Button, Typography, Divider } from '@mui/material';
import { ImageUploader } from 'views/molecules/TeacherCertificates/ImageUploader';
import { doFetchTeacherCertificateImages } from 'app/firebase';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { useQuery } from '@tanstack/react-query';
import { doFetchCertificates, doFetchClassroomStudents } from 'app/actions';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { useSnackbar } from 'notistack';
import { CreateCertificationDgContent } from 'views/molecules/TeacherCertificates/CreateCertificationDgContent';
import { SendCertificationDgContent } from 'views/molecules/TeacherCertificates/SendCertificationDgContent';

const Certificates: FC = () => {
  const { language, token } = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const { currentClassId } = useSelector((state: any) => state.teacher);

  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isSendOpen, seIsSendOpen] = useState(false)

  const [selectedCertId, setSelectedCertId] = useState<null | string>(null)

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

  const { data: certificates } = useQuery(
    ['certificates'], () => doFetchCertificates(token),
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
        <Typography variant='h6'>Certificate images</Typography>
        <Grid container spacing={2} justifyContent={'start'} alignItems='start'>
          {
            isLoading ? <Typography>Loading...</Typography> :
              images &&
              images.map((image: any, index) => (
                <Grid item key={index} xs={6} md={2}>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      filter: selectedImgUrl === image.value ? 'drop-shadow(0 0 0.75rem gold)' : 'none'
                    }}
                    onClick={() => { setSelectedImgUrl(image.value) }}
                  >
                    <img src={image.value}
                      style={{
                        borderRadius: 'inherit',
                        height: 120,
                        width: 150,
                        objectFit: 'cover'
                      }} />
                  </Box>
                </Grid>
              ))
          }
          <Grid item xs={6} md={2}>
            <ImageUploader />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 2 }} />
        <Typography variant='h6'>Certificates</Typography>

        <Grid container>
          <Grid container spacing={6} >
            {
              certificates &&
              certificates.map((certificate: any) => (
                <Grid item key={certificate.id}>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      filter: selectedCertId === certificate.id ? 'drop-shadow(0 0 0.75rem gold)' : 'none',
                    }}
                    onClick={() => { setSelectedCertId(certificate.id) }}
                  >
                    <img src={certificate.image}
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
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item>
            <Button variant='contained' onClick={openCreate}>Create New Certificate</Button>
          </Grid>

          <Grid item>
            <Button variant='contained' onClick={() => seIsSendOpen(true)} color='aqua'>Send Certificate to Students</Button>
          </Grid>
        </Grid>
        {
          selectedCertId && students &&
          <LSDialog
            open={isSendOpen}
            close={() => seIsSendOpen(false)}
            title='Send Certificate'
            fullWidth
            dialogContent={<SendCertificationDgContent certificateId={selectedCertId} students={students} />}
          />
        }
        {
          selectedImgUrl &&
          <LSDialog
            open={isCreateOpen}
            close={() => setIsCreateOpen(false)}
            title='Create Certification'
            dialogContent={<CreateCertificationDgContent imgUrl={selectedImgUrl} close={() => setIsCreateOpen(false)} />}
            fullWidth
          />
        }
      </Container >
    </TeacherPgContainer >
  );
};
export default Certificates

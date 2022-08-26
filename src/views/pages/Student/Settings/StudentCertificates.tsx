
import { FC, useContext, useEffect, useState } from 'react';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { LoadingContext } from 'react-router-loading';
import { Container, Stack, Grid, Typography } from '@mui/material';
import { PageTitle } from 'views/molecules/PageTitle';
import { AvatarSet } from 'views/molecules/Avatar/AvatarSet';
import { useSelector } from 'react-redux';
import { ProfileMobileTitle } from 'views/molecules/StudentProfile/ProfileMobileTitle'
import useMediaQuery from '@mui/material/useMediaQuery';
import { ScreenSize } from 'constants/screenSize';
import { Wrapper } from '../Bank/Styles';
import { useQuery } from '@tanstack/react-query'
import { doFetchStudentCertificates, doFetchUserBadges } from 'app/actions';
import { getMessage } from 'views/utils';
import { useHistory } from 'react-router-dom';
import { CertificationThumbnailPreview } from 'views/organisms/Certificates/CertificationThumbnailPreview';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { ViewCertificate } from 'views/organisms/Certificates/ViewCertificate';

export const StudentCertificates: FC = () => {
  const isMobile = useMediaQuery(`(max-width:${ScreenSize.phone})`);
  const loadingContext = useContext(LoadingContext);
  const avatar = useSelector((state: any) => state.avatar)

  const { id: studentId } = useSelector((state: any) => state.student);
  const { language, token } = useSelector((state: any) => state.user);
  const { data: certificates, error, isLoading } = useQuery(['student-certificates', studentId], () => doFetchStudentCertificates(studentId, token))

  const [showCertificate, setShowCertificate] = useState(false)
  const [selectedCert, setSelectedCert] = useState<any | null>(null)

  useEffect(() => {
    !isLoading && loadingContext.done();
  }, [isLoading]);
  return (
    <Wrapper>
      <StudentMenu>
        {
          <Container >
            <div style={{ display: isMobile ? 'none' : 'block' }}>
              <PageTitle title={'Your certificates'} />
            </div>
            <ProfileMobileTitle title={'Your certificates'} />
            <Grid container justifyContent={'start'}>
              {
                certificates &&
                  certificates.length ? <>
                  {
                    certificates.map((certificate: any) => (
                      <Grid item xs={4} sm={3} md={2} key={certificate.id}
                        onClick={() => {
                          setSelectedCert(certificate)
                          setShowCertificate(true)
                        }}
                        sx={{
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      >
                        <CertificationThumbnailPreview title={certificate.title} certificate={certificate.certificate}
                        />

                      </Grid>
                    ))
                  }
                </> : <Typography>
                  No certificates yet
                </Typography>
              }
            </Grid>
            {
              selectedCert &&
              <LSDialog
                open={showCertificate}
                close={() => setShowCertificate(false)}
                fullWidth
                dialogContent={
                  <ViewCertificate
                    {...selectedCert}
                    image={selectedCert.certificate?.image}
                  />}
              />
            }
          </Container>
        }
      </StudentMenu>
    </Wrapper>
  );
};

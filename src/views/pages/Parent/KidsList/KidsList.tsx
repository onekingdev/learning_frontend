import { FC, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { dictionary } from './dictionary';

import {
  Title,
} from './Style';
import { Box, Link, Typography } from '@mui/material';
import KidsListItem from 'views/organisms/Parent/KidsList/KidsListItem';

const KidsList: FC = () => {
  const loadingContext = useContext(LoadingContext)
  const guardian = useSelector((state: any) => state.guardian)
  const user = useSelector((state: any) => state.user)
  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    loadingContext.done();

  }, []);

  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
        <Title>{dictionary[language]?.yourChildren}</Title>
        {guardian.guardianstudentplanSet.map((child: any, index: number) => (
          child.student &&
          <KidsListItem {...child.student} index={index} key={child.id} language={language} parentName={user.username} dateJoined={user.dateJoined} />
        ))}
        {
          guardian.availableGuardianstudentplan.length > 0 &&
          <Typography variant='h6'>
            Please finish registration for your children_privacy
            <Link href='/kids/new'> here</Link>
            .
          </Typography>
        }
      </Box>
    </ParentPgContainer>
  );
};

export default KidsList;

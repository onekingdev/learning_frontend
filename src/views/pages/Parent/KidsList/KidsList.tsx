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
import { useQuery } from 'react-query'
import { doFetchGuardianStudents } from 'app/actions/guardianActions';

const KidsList: FC = () => {

  const loadingContext = useContext(LoadingContext)
  const guardian = useSelector((state: any) => state.guardian)
  const user = useSelector((state: any) => state.user)
  const language = user.language || 'en-us'
  const plans = useQuery(['fetch-kids-list', guardian.id, user.token], () => doFetchGuardianStudents(guardian.id, user.token))
  if (!plans.isLoading) loadingContext.done()
  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    // loadingContext.done();
  }, []);

  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
        <Title>{dictionary[language]?.yourChildren}</Title>
        {
          plans.data && plans.data.guardianstudentplanSet.some((item: any) => {
            item.student === null
          }) &&
          <Typography variant='h6'>
            Please finish registration for your children
            <Link href='/kids/new'> here</Link>
            .
          </Typography>
        }
        {plans.data && plans.data.guardianstudentplanSet.map((child: any, index: number) => (
          child.student &&
          <KidsListItem {...child.student} index={index} key={child.id} language={language} parentName={user.username} dateJoined={user.dateJoined} />
        ))}
      </Box>
    </ParentPgContainer>
  );
};

export default KidsList;

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
import { isNull } from 'lodash';

const KidsList: FC = () => {

  const loadingContext = useContext(LoadingContext)
  const guardian = useSelector((state: any) => state.guardian)
  const user = useSelector((state: any) => state.user)
  const language = user.language || 'en-us'
  const plans = useQuery(['fetch-kids-list', guardian.id, user.token], () => doFetchGuardianStudents(guardian.id, user.token))

  useEffect(() => {
    if (!plans.isLoading) loadingContext.done()
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);

  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      {
        plans.data &&
        <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
          <Title>{dictionary[language]?.yourChildren}</Title>
          {plans.data.guardianstudentplanSet.some((item: any) => isNull(item.student)) &&
            <Typography variant='h6'>
              Please finish registration for your children
              <Link href='/kids/new'> here</Link>
              .
            </Typography>
          }
          {plans.data.guardianstudentplanSet.map((child: any, index: number) => (
            child.student &&
            <KidsListItem {...child.student} index={index} key={child.id} language={language} parentName={user.username} dateJoined={user.dateJoined} />
          ))}
        </Box>
      }
    </ParentPgContainer>
  );
};

export default KidsList;

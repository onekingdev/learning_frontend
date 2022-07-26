import { FC, useEffect, useState, useContext }    from 'react';
import { useSelector }          from 'react-redux';
import { LoadingContext }       from 'react-router-loading';
import { useSnackbar }          from 'notistack';
import { TeacherPgContainer }   from 'views/molecules/PgContainers/TeacherPgContainer';
import ContentForm              from 'views/molecules/Notes/ContentForm'
import StudentLists             from 'views/molecules/Notes/StudentLists'
import { dictionary }           from './dictionary'
import { Box } from '@mui/material';
import { LANGUAGES } from 'constants/common';

const test_data = [
  {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  }, {
    name: 'aaron',
    isChecked: false
  },
]

const Notes: FC = () => {
  // const loadingContext    = useContext(LoadingContext);
  // const {enqueueSnackbar} = useSnackbar();
  // const user              = useSelector((state: any) => state.user);
  // const guardian          = useSelector((state: any) => state.guardian);
  const language:string     = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;

  const [data, setData]   = useState<any>(test_data);


  useEffect(() => {

    if(window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.notes} current='notes'>
      <Box display='flex' justifyContent={'center'}>
        <ContentForm />
        <StudentLists data={data} setData={setData} />
      </Box>
    </TeacherPgContainer>
  );
};
export default Notes

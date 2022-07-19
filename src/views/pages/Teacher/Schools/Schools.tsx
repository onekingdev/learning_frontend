import {
  FC, useEffect, useState,
  // useContext
} from 'react';
import { useSelector } from 'react-redux';
import commonDictionary from 'constants/commonDictionary'
import { useHistory } from 'react-router-dom';
import { SchoolPageContainer } from 'views/molecules/PgContainers/SchoolPgContainer';

const Schools: FC = () => {
  const history = useHistory();
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <SchoolPageContainer onlyLogoImgNav={false} title={commonDictionary[language]?.classrooms}>
      <p>Schools</p>
    </SchoolPageContainer>
  );
};
export default Schools

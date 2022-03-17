import { FC, useEffect, useContext } from 'react';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { BarChart } from 'views/molecules/Chart/BarChart';
import MarkTable from 'views/molecules/Table/MarkTable';
import { LoadingContext } from 'react-router-loading';

export const ParentReporting: FC = () => {
  const loadingContext = useContext(LoadingContext);
  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <div style={{
      }}>
        <BarChart />
        <MarkTable />
      </div>
    </ParentPgContainer>
  );
};

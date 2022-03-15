import { FC } from 'react';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { BarChart } from 'views/molecules/Chart/BarChart';
import MarkTable from 'views/molecules/Table/MarkTable';

export const ParentReport: FC = () => {
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <div>
        <BarChart />
        <MarkTable />
      </div>
    </ParentPgContainer>
  );
};

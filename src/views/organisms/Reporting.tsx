import { FC } from 'react';
import { BarChart } from 'views/molecules/Chart/BarChart';
import MarkTable from 'views/molecules/Table/MarkTable';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Box } from '@mui/material';
import { AvatarTitle } from 'views/molecules/PageTitle';

interface ReportingProps {
  student: any,
  studentId: string | number,
  isLoading: boolean,
  data: any,
  activeSubjectId: number,
  setActiveSubjectId: (id: number) => void,
  areasOfKnowledge: Array<any>
  language: string
  token: string
}

export const KidReporting: FC<ReportingProps> = ({
  student, isLoading, data, activeSubjectId, setActiveSubjectId, studentId, areasOfKnowledge, language, token
}) => {

  return (
    <Box>
      {student &&
        <div style={{
          width: '100%'
        }}>
          <AvatarTitle
            currentAvatarAccessories={student.currentAvatarAccessories}
            currentAvatarHead={student.currentAvatarHead}
            currentAvatarClothes={student.currentAvatarClothes}
            fullName={student.fullName}
          />
          <BarChart
            studentId={studentId}
            token={token}
            language={language}
          />
          {
            isLoading ? <LoadingSpinner /> :
              <MarkTable
                areasOfKnowledge={areasOfKnowledge}
                data={data}
                activeSubjectId={activeSubjectId}
                onChangeActiveIdHandler={setActiveSubjectId}
              />
          }
        </div>
      }
    </Box>
  );
};

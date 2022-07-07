import { FC } from 'react';
import { BarChart } from 'views/molecules/Chart/BarChart';
import MarkTable from 'views/molecules/Table/MarkTable';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Box } from '@mui/material';

interface ReportingProps {
  student: any,
  isLoading: boolean,
  data: any,
  activeSubjectId: number,
  setActiveSubjectId: (id: number) => void
}

export const KidReporting: FC<ReportingProps> = ({
  student, isLoading, data, activeSubjectId, setActiveSubjectId
}) => {

  return (
    <Box>
      {student &&
        <div style={{
          width: '100%'
        }}>
          <BarChart student={student} studentId={student.id} />
          {
            isLoading ? <LoadingSpinner /> :

              <MarkTable
                areasOfKnowledge={student.guardianstudentplan?.subject || []}
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

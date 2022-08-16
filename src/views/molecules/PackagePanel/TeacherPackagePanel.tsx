import { FC, useEffect, useState } from 'react';
import classroomMark from 'views/assets/packageIcons/classroomMark.svg'
import schoolMark from 'views/assets/packageIcons/schoolMark.svg'
import Button from 'views/molecules/MuiButton'
import ButtonGroup from '@mui/material/ButtonGroup';
import { BasicColor } from 'views/Color';
import { dictionary } from './dictionary'
import cDictionary, { commonDictionary } from 'constants/commonDictionary';
import {
  TeacherContainer,
  TeacherHeader,
  Avatar,
  TeacherBody,
  Mask,
  TeacherBtnContainer
} from './Style'
import { Typography } from '@mui/material';

type PackagePanelProps = {
  plan: any
  type: 'School' | 'Classroom';
  price: any;
  disabled?: boolean;
  isSpecialCode: boolean;
  onChange: (childrenCount: number, plan: string, sponsorEmail: string) => void;
  language: string
  minCount: number
};
const TeacherPackagePanel: FC<PackagePanelProps> = ({ type, isSpecialCode, disabled = false, onChange, language, minCount }) => {

  const [childrenCount, setChildrenCount] = useState(0);
  const [period, setPeriod] = useState('month');

  const increaseChildrenCount = () => {
    setChildrenCount(childrenCount + 1)
  }

  const decreaseChildrenCount = () => {

    if (childrenCount > minCount)
      setChildrenCount(childrenCount - 1)
  }

  useEffect(() => {
    onChange(childrenCount, period, 'sponsorEmail');
  }, [childrenCount, period]);

  useEffect(() => {
    setChildrenCount(minCount)

  }, [minCount])
  return (
    <TeacherContainer>
      {disabled && (<Mask />)}
      <TeacherHeader>
        <Avatar src={type === 'School' ? schoolMark : classroomMark} />
        <Typography variant='h5' color='white'>{type}</Typography>
      </TeacherHeader>
      <TeacherBody>
        {
          type === 'Classroom' &&
          <Typography>
            <span style={{ fontWeight: 'bold' }}>{commonDictionary[language]?.classroom_plan_includes}</span>
            {commonDictionary[language]?.classroom_plan_description}
          </Typography>
        }
        {
          type === 'School' &&
          <Typography>
            <span style={{ fontWeight: 'bold' }}>{commonDictionary[language]?.school_plan_includes}</span>
            {commonDictionary[language]?.school_plan_description}
          </Typography>
        }
        <TeacherBtnContainer>
          {!isSpecialCode &&
            <div className="flex flex-col p-t-10 p-b-15 font-s-20 font-w-7 w-250">
              <b>{cDictionary[language]?.choose_your_plan}</b>
              <br />
              <div className="flex flex-row" style={{ flexWrap: 'unset' }}>
                <Button
                  bgColor={period === 'month' ? BasicColor.blue : 'white'}
                  color={period === 'month' ? 'white' : BasicColor.blue}
                  zIndex={period === 'month' ? 2 : 0}
                  fontSize={16}
                  height={40}
                  value={dictionary[language]?.monthly}
                  onClick={() => { setPeriod('month') }} />
                <Button
                  bgColor={period === 'year' ? BasicColor.blue : 'white'}
                  fontSize={16}
                  height={40}
                  zIndex={1}
                  // variant="outlined"
                  color={period === 'year' ? 'white' : BasicColor.blue}
                  // borderColor="black"
                  value={dictionary[language]?.yearly}
                  margin="0 0 0 -50px"
                  onClick={() => { setPeriod('year') }} />
              </div>
            </div>
          }
          <div className="flex flex-col p-t-10 p-b-15 font-s-20 font-w-7 w-250">
            <b>{
              type === 'School' ?
                cDictionary[language]?.number_of_teachers :
                cDictionary[language]?.number_of_classrooms}</b>
            <br />
            <div className="flex flex-row">
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value="-" onClick={decreaseChildrenCount} />
                <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value={'' + (childrenCount - minCount)} />
                <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value="+" onClick={increaseChildrenCount} />
              </ButtonGroup>
            </div>
          </div>
        </TeacherBtnContainer>
        {/* <Typography>${price}/{period}, up to 40 students</Typography> */}
      </TeacherBody>
    </TeacherContainer>
  );
};
export default TeacherPackagePanel;

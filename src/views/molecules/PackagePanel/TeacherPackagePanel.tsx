import { FC, useEffect, useState } from 'react';
import classroomMark from 'views/assets/packageIcons/classroomMark.svg'
import schoolMark from 'views/assets/packageIcons/schoolMark.svg'
import Button from 'views/molecules/MuiButton'
import ButtonGroup from '@mui/material/ButtonGroup';
import { BasicColor } from 'views/Color';
import { dictionary } from './dictionary'
import cDictionary from 'constants/commonDictionary';
import {
  TeacherContainer,
  TeacherHeader,
  Avatar,
  TeacherBody,
  Mask,
  Tip,
  TeacherBtnContainer
} from './Style'

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
const TeacherPackagePanel: FC<PackagePanelProps> = ({ type, price, isSpecialCode, disabled = false, onChange, language, plan, minCount }) => {

  const [childrenCount, setChildrenCount] = useState(0);
  const [sponsorEmail, setSponsorEmail] = useState('')
  const [period, setPeriod] = useState('month');
  //   let temp:any = [];
  //   temp = [...paths];
  //   if(isChecked) temp.push(path)
  //   else temp.pop(path)
  //   setPaths(temp)
  // }

  const increaseChildrenCount = () => {
    setChildrenCount(childrenCount + 1)
  }

  const decreaseChildrenCount = () => {

    if (childrenCount > minCount)
      setChildrenCount(childrenCount - 1)
  }

  useEffect(() => {
    onChange(childrenCount, period, sponsorEmail);
  }, [childrenCount, period, sponsorEmail]);

  useEffect(() => {
    setChildrenCount(minCount)

  }, [minCount])
  return (
    <TeacherContainer>
      {disabled && (<Mask />)}
      <TeacherHeader>
        <Avatar src={type === 'School' ? schoolMark : classroomMark} />
        <b className="font-c-white">{type}</b>
      </TeacherHeader>
      <TeacherBody>
        <Tip>
          <b>{dictionary[language]?.classroomPlanInclude} : </b>
          {dictionary[language]?.classroomPlanDescription}
          <br />
          {type === 'School' ? 'Default plan has 30 teachers, you have to pay $4/month for each additional teacher' : ''}
        </Tip>
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
                <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value={'' + childrenCount} />
                <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value="+" onClick={increaseChildrenCount} />
              </ButtonGroup>
            </div>
          </div>
        </TeacherBtnContainer>
        {/* <div className="flex flex-row justify-space-around w-100">
          <TextField
            label={dictionary[language]?.requestFromSponsor}
            onChange={(e: any) => {
              setSponsorEmail(e.target.value);
            }}
            value={sponsorEmail}
            disabled={true}
          />
        </div> */}
        {/* {!isSpecialCode &&
          <PriceContainer>
            <Price> $ {(price * childrenCount).toFixed(2)}</Price>
            <Plan>/{plan}</Plan>
          </PriceContainer>
        } */}
      </TeacherBody>
    </TeacherContainer>
  );
};
export default TeacherPackagePanel;

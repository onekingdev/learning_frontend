import { FC, useEffect, useState, useContext } from 'react';
import { ParentPgContainer }                   from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { useHistory }                          from 'react-router-dom';
import { useDispatch, useSelector }            from 'react-redux';
import Grid                                    from '@mui/material/Grid';
import Paper                                   from '@mui/material/Paper';
import { useStyles, Subjects,
  Subject, SubjectIcon, SubjectTitle }         from './Style';
import {
  Title, Tip, Container, Welcome, PaperContainer,
} from './Style';
import welcome                   from 'views/assets/welcome-kid-new.svg';
import InputLabel                from '@mui/material/InputLabel';
import MenuItem                  from '@mui/material/MenuItem';
import FormControl               from '@mui/material/FormControl';
import Select                    from '@mui/material/Select';
import Checkbox                  from '@mui/material/Checkbox';
import Radio                     from '@mui/material/Radio';
import Button                    from 'views/molecules/MuiButton';
import TextField                 from 'views/molecules/MuiTextField';
import {ButtonColor, BasicColor} from 'views/Color';
import math_gold                 from 'views/assets/packageIcons/math_gold.svg';
import ela_gold                  from 'views/assets/packageIcons/ela_gold.svg';
import science_gold              from 'views/assets/packageIcons/science_gold.svg';
import financial_gold            from 'views/assets/packageIcons/financial_gold.svg';
import health_gold               from 'views/assets/packageIcons/health_gold.svg';
import math_combo                from 'views/assets/packageIcons/math_combo.svg';
import ela_combo                 from 'views/assets/packageIcons/ela_combo.svg';
import science_combo             from 'views/assets/packageIcons/science_combo.svg';
import financial_combo           from 'views/assets/packageIcons/financial_combo.svg';
import health_combo              from 'views/assets/packageIcons/health_combo.svg';
import math_sole                 from 'views/assets/packageIcons/math_sole.svg';
import ela_sole                  from 'views/assets/packageIcons/ela_sole.svg';
import science_sole              from 'views/assets/packageIcons/science_sole.svg';
import financial_sole            from 'views/assets/packageIcons/financial_sole.svg';
import health_sole               from 'views/assets/packageIcons/health_sole.svg';
import {LoadingContext}          from 'react-router-loading';
import { createStudent }         from 'views/../app/actions/studentActions'
import { getGrades }             from 'views/../app/actions/gradeActions'
import { getAudiencesWithGrades} from 'app/actions/audienceActions'

import { useSnackbar } from 'notistack';

const NewKids: FC = () => {
  const loadingContext = useContext(LoadingContext);

  const history =              useHistory();
  const dispatch =             useDispatch();
  const classes =              useStyles();
  const guardian =             useSelector((state:any) => state.guardian)
  const user =                 useSelector((state: any) => state.user)
  // const grades = useSelector((state: any) => state.grade)
  const { enqueueSnackbar } =  useSnackbar();

  const [availablePackages, setAvailablePackages] = useState<any[]>([]);
  const [audiences, setAudiences]           = useState([]);
  const [grades, setGrades]                 = useState([]);
  const [currentPackage, setCurrentPackage] = useState<any>();
  const [firstName, setFirstName]           = useState('');
  const [lastName, setLastName]         = useState('');
  const [userId, setUserId]             = useState('');
  const [password, setPassword]         = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [audience, setAudience]         = useState<any>();
  const [grade, setGrade]               = useState<any>();
  const [childNum, setChildNum]         = useState(0);
  const [childIdx, setChildIdx]         = useState(1);
  const [childs, setChilds]             = useState([{}]);
  const [paths, setPaths]               = useState<any>([]);
  const [loading, setLoading]           = useState(false);

  const subjectIcons:any = {
    Gold: {
      MATH      : math_gold,
      ELA       : ela_gold,
      SCIENCE   : science_gold,
      FINANCIAL : financial_gold,
      HEALTH    : health_gold
    },
    Combo: {
      MATH      : math_combo,
      ELA       : ela_combo,
      SCIENCE   : science_combo,
      FINANCIAL : financial_combo,
      HEALTH    : health_combo
    },
    Sole: {
      MATH      : math_sole,
      ELA       : ela_sole,
      SCIENCE   : science_sole,
      FINANCIAL : financial_sole,
      HEALTH    : health_sole
    }
  }

  const handleCheckPath = (path: string, isChecked: boolean) => {
    let temp: any = [];
    temp          = [...paths];
    if (isChecked) {
      temp.push(path);
      if (temp.length > 2) temp.shift();
    } else temp.splice(temp.indexOf(path), 1);
    setPaths(temp);
  };

  const [validateMsg, setValidateMsg] = useState<{[key: string]: any}>({
    packageName  : null,
    firstName    : null,
    lastName     : null,
    userId       : null,
    password     : null,
    confPassword : null,
    audience     : null,
    grade        : null,
  });

  const handleFormChange = (field: string, errMsg: string) => {
    setValidateMsg({...validateMsg, [field]: errMsg});
  };

  const handlePrev = () => {};
  console.log('child num is ', childNum )

  const handleNext = async () => {
    if (!formValidation()) return;
    console.log(childIdx)
    // return;
    // if (childIdx === childNum) {
    //   saveChild(childs[childIdx]);
    //   return;
    // }
    console.log('paths is ', paths)
    setLoading(true)
    if(!await saveChild()) {
      setLoading(false)
      return;
    }
    if(childIdx === childNum) history.push('/kids/list');
    const temp = [...availablePackages];
    const inex = temp.indexOf(currentPackage);
    delete temp[inex];
    setAvailablePackages(temp);

    setChildIdx(childIdx + 1);
    setValidateMsg({
      firstName    : null,
      lastName     : null,
      userId       : null,
      password     : null,
      confPassword : null,
      grade        : null,
    });
    setCurrentPackage(temp[0]);
    setFirstName('');
    setLastName('');
    setUserId('');
    setPassword('');
    setConfPassword('');
    setGrade({});
    setLoading(false)
  };

  const saveChild = async () => {
    console.log(currentPackage, paths)
    const listSubjectId: number[] = [];
    const studentPlan = 1;
    for(const path of paths)
      listSubjectId.push(parseInt(path.id));
    const result:any = await createStudent(
      audience?.id,
      firstName,
      lastName,
      userId,
      password,
      currentPackage.id,
      listSubjectId,
      studentPlan,
      grade.id,
      user.token,
      dispatch
    );
    if(!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return false;
    }
    setChilds([
      ...childs,
      {
        package           : currentPackage,
        firstName         : firstName,
        lastName          : lastName,
        userId            : userId,
        password          : password,
        grade             : grade,
        currentPackage_id : currentPackage.id,
        listSubjectId     : listSubjectId,
        studentPlan       : studentPlan,
      },
    ]);
    return true;
  };

  const formValidation = () => {
    const validateMsgTemp = {...validateMsg};
    let valiResult        = true;
    for (const key in validateMsg) {
      console.log('key is ', key, validateMsgTemp[key])
      if (validateMsg[key] === null) {
        validateMsgTemp[key] = 'Field is required';
      }
      if (validateMsgTemp[key]) valiResult = false;
    }
    setValidateMsg(validateMsgTemp);
    return valiResult;
  };

  const setAudienceData = async () => {
    const result:any = await getAudiencesWithGrades(
      // user.token,
      // dispatch
    );
    if(!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return false;
    }
    setAudiences(result.data);
    return true;
  }
  const setGradeData = async () => {
    const result:any = await getGrades(
      user.token,
      dispatch
    );
    if(!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return false;
    }
    return true;
  }

  const onPageInit = async () => {
    const guardianStudentPlans  = guardian.guardianstudentplanSet;
    const temp_availblePlans    = [];

    for(const guardianStudentPlan of guardianStudentPlans) {
      temp_availblePlans.push(guardianStudentPlan?.plan)
    }

    setAvailablePackages(guardianStudentPlans);
    setChildNum(guardianStudentPlans.length);
    await setGradeData();
    await setAudienceData();
    loadingContext.done();

  }
  useEffect(() => {
    onPageInit();
  }, []);

  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Container>
        <PaperContainer>
          <Paper elevation={3} className={classes.paper}>
            <Title>Adding a New Child</Title>
            <Tip>Please complete the following to get your child started</Tip>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <TextField label='Select Your Package' variant='outlined' fullWidth sx={{backgroundColor: 'white'}} value={packageName}
                                onChange={(e) => {
                                    setPackageName(e.target.value);
                                    handleFormChange('packageName',e.target.value.length === 0 ? 'Field is required' : '');
                                }}
                                error={!!validateMsg.packageName}
                                helperText={validateMsg.packageName}
                            /> */}
                <FormControl fullWidth>
                  <InputLabel id='select-package-label'>
                    Select Your Package
                  </InputLabel>
                  <Select
                    labelId='select-package-label'
                    id='select-package'
                    value={currentPackage ? currentPackage : ''}
                    label='Select Your Package'
                    className={`${classes.select} ${
                      currentPackage?.plan?.name === 'Gold'
                        ? classes.goldInput
                        : currentPackage?.plan?.name === 'Combo'
                        ? classes.comboInput
                        : classes.soleInput
                    } err-border`}
                    onChange={e => {
                      console.log('target', e.target.value, e.target.value.length)
                      setCurrentPackage(e.target.value);
                      console.log('target is ', e.target.value);
                      console.log('set path like that', e.target.value?.plan?.subjects)
                      console.log('set path like name is ',e.target.value?.plan?.name)

                      if(e.target.value?.plan?.name === 'Gold') setPaths(e.target.value?.plan?.subjects)
                      else setPaths([]);
                      handleFormChange(
                        'packageName',
                        e.target.value.length === 0 ? 'Field is required' : ''
                      );
                    }}
                    sx={
                      validateMsg.packageName
                        ? {
                            '& fieldset': {
                              borderColor: `${BasicColor.red} !important`,
                            },
                          }
                        : {}
                    }
                    displayEmpty={true}
                  >
                    {availablePackages.map((value, index) => (
                      <MenuItem value={value} key={index}>
                        {value?.plan?.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className='err-text'>{validateMsg.packageName}</div>
                </FormControl>
              </Grid>
              <Grid item xs={12} className='font-s-20'>
                {currentPackage?.plan?.name === 'Gold' && ''}
                {currentPackage?.plan?.name === 'Combo' && 'Pick Two'}
                {currentPackage?.plan?.name === 'Sole' && 'Pick One'}
              </Grid>
              {currentPackage && (
                <Grid item xs={12}>
                  <Subjects color={currentPackage?.plan?.name}>
                    {currentPackage?.plan?.subjects.map((subject:any, index:number) => (
                        <Subject key={index}>
                          {currentPackage?.plan?.name === 'Gold' && (
                            <SubjectIcon src={subjectIcons.Gold[subject?.name.split(' ')[0].toUpperCase()]} />
                          )}
                          {currentPackage?.plan?.name === 'Combo' && (
                            <>
                              <Checkbox
                                sx={{
                                  color: BasicColor.aqua,
                                  '&.Mui-checked': {color: BasicColor.aqua},
                                  padding: '0px',
                                  paddingLeft: '9px',
                                  paddingRight: '9px',
                                }}
                                onChange={e =>
                                  handleCheckPath(subject, e.target.checked)
                                }
                                checked={paths.indexOf(subject) !== -1}
                              />
                              <SubjectIcon src={subjectIcons.Combo[subject?.name.split(' ')[0].toUpperCase()]} />
                            </>
                          )}
                          {currentPackage?.plan?.name === 'Sole' && (
                            <>
                              <Radio
                                value={subject}
                                onClick={() => setPaths([subject])}
                                checked={paths[0] === subject}
                                sx={{
                                  color: BasicColor.greenSoft,
                                  '&.Mui-checked': {color: BasicColor.greenSoft},
                                  padding: '0px',
                                  paddingLeft: '9px',
                                  paddingRight: '9px',
                                }}
                              />
                              <SubjectIcon src={subjectIcons.Sole[subject?.name.split(' ')[0].toUpperCase()]} />
                            </>
                          )}
                          <SubjectTitle>{subject.name}</SubjectTitle>
                        </Subject>
                        ))}
                  </Subjects>
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  label='Child First NAME'
                  onChange=   {e => {
                    setFirstName(e.target.value);
                    handleFormChange(
                      'firstName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error=      {!!validateMsg.firstName}
                  helperText= {validateMsg.firstName}
                  value=      {firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label      ='Child LAST NAME'
                  onChange   ={e => {
                    setLastName(e.target.value);
                    handleFormChange(
                      'lastName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error      ={!!validateMsg.lastName}
                  helperText ={validateMsg.lastName}
                  value      ={lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label      ='USER ID OR CHOOSE A NICK NAME'
                  onChange   ={e => {
                    setUserId(e.target.value);
                    handleFormChange(
                      'userId',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error      ={!!validateMsg.userId}
                  helperText ={validateMsg.userId}
                  value      ={userId}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label      ='PASSWORD'
                  onChange   ={e => {
                    setPassword(e.target.value);
                    handleFormChange(
                      'password',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error      ={!!validateMsg.password}
                  helperText ={validateMsg.password}
                  value      ={password}
                  type       ='password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='CONFIRM PASSWORD'
                  onChange={e => {
                    setConfPassword(e.target.value);
                    handleFormChange(
                      'confPassword',
                      e.target.value.length === 0
                        ? 'Field is required'
                        : e.target.value !== password
                        ? 'Confirm password in not matched with password'
                        : ''
                    );
                  }}
                  error={!!validateMsg.confPassword}
                  helperText={validateMsg.confPassword}
                  value={confPassword}
                  type='password'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='select-audience-label'>
                    Select Your curriculum
                  </InputLabel>
                  <Select
                    labelId   ='select-audience-label'
                    id        ='select-audience'
                    value     ={audience ? audience : {}}
                    label     ='Select Your Audience'
                    className ={`${classes.select} err-border`}
                    onChange  ={(e: any) => {
                      setAudience(e.target.value);
                      setGrades(e.target.value.gradeSet)
                      setGrade({})
                      validateMsg.grade = null
                      validateMsg.audience = '';
                      setValidateMsg({...validateMsg});
                    }}
                    sx={
                      validateMsg.audience
                        ? {
                            '& fieldset': {
                              borderColor: `${BasicColor.red} !important`,
                            },
                          }
                        : {}
                    }
                    displayEmpty={true}
                  >
                    {audiences?.length > 0 && audiences.map((value: any, index: number) => (
                      <MenuItem value={value} key={index}>
                        {value.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className='err-text'>{validateMsg.audience}</div>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='select-grade-label'>
                    Select Your Grade
                  </InputLabel>
                  <Select
                    labelId   ='select-grade-label'
                    id        ='select-grade'
                    value     ={grade ? grade : ''}
                    label     ='Select Your Grade'
                    className ={`${classes.select} err-border`}
                    onChange  ={e => {
                      setGrade(e.target.value);
                      console.log(e.target.value === undefined ? 'Field is required' : '')
                      handleFormChange(
                        'grade',
                        ''
                      );
                    }}
                    sx={
                      validateMsg.grade
                        ? {
                            '& fieldset': {
                              borderColor: `${BasicColor.red} !important`,
                            },
                          }
                        : {}
                    }
                    displayEmpty={true}
                  >
                    {grades?.length > 0 && grades.map((value: any, index: number) => (
                      <MenuItem value={value} key={index}>
                        {value.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className='err-text'>{validateMsg.grade}</div>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                {childIdx > 0 && (
                  <Button
                    value   ='Previous Kid'
                    bgColor ={ButtonColor.create}
                    onClick ={handlePrev}
                    disabled={true}
                  />
                )}
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Button
                  value    ={childNum !== childIdx ? 'Next Kid' : 'Finish'}
                  bgColor  ={
                    childNum !== childIdx
                      ? ButtonColor.nextKid
                      : ButtonColor.create
                  }
                  onClick  ={handleNext}
                  disabled ={availablePackages.length < 1 ? true : false}
                  align    ='right'
                  loading  ={loading}
                />
              </Grid>
            </Grid>
          </Paper>
        </PaperContainer>
        <Welcome src={welcome}></Welcome>
      </Container>
    </ParentPgContainer>
  );
};

export default NewKids;

import { FC, useEffect, useState, useContext } from 'react';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useStyles, Subjects, Subject, SubjectIcon, SubjectTitle } from './Style';
import {
  Title,
  Tip,
  Container,
  Welcome,
  PaperContainer,
} from './Style';
import welcome from 'views/assets/welcome-kid-new.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Button from 'views/molecules/MuiButton';
import TextField from 'views/molecules/MuiTextField';
import { ButtonColor, BasicColor } from 'views/Color';
import math_gold from 'views/assets/packageIcons/math_gold.svg';
import ela_gold from 'views/assets/packageIcons/ela_gold.svg';
import science_gold from 'views/assets/packageIcons/science_gold.svg';
import financial_gold from 'views/assets/packageIcons/financial_gold.svg';
import health_gold from 'views/assets/packageIcons/health_gold.svg';
import math_combo from 'views/assets/packageIcons/math_combo.svg';
import ela_combo from 'views/assets/packageIcons/ela_combo.svg';
import science_combo from 'views/assets/packageIcons/science_combo.svg';
import financial_combo from 'views/assets/packageIcons/financial_combo.svg';
import health_combo from 'views/assets/packageIcons/health_combo.svg';
import math_sole from 'views/assets/packageIcons/math_sole.svg';
import ela_sole from 'views/assets/packageIcons/ela_sole.svg';
import science_sole from 'views/assets/packageIcons/science_sole.svg';
import financial_sole from 'views/assets/packageIcons/financial_sole.svg';
import health_sole from 'views/assets/packageIcons/health_sole.svg';
import { LoadingContext } from 'react-router-loading';

const NewKids: FC = () => {
  const loadingContext = useContext(LoadingContext);

  const history = useHistory();
  const dispatch = useDispatch();
  const language = 'en';
  const classes = useStyles();

  const [availablePackages, setAvailablePackages] = useState<string[]>([]);
  const [packageName, setPackageName] = useState<string>('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [childNum, setChildNum] = useState(0);
  const [childIdx, setChildIdx] = useState(0);
  const [childs, setChilds] = useState([{}]);
  const [paths, setPaths] = useState<any>([]);

  const handleCheckPath = (path: string, isChecked: boolean) => {
    console.log(path, isChecked);
    let temp: any = [];
    temp = [...paths];
    if (isChecked) {
      temp.push(path);
      if (temp.length > 2) temp.shift();
    } else temp.splice(temp.indexOf(path), 1);
    setPaths(temp);
  };

  const [validateMsg, setValidateMsg] = useState<{[key: string]: any}>({
    packageName: null,
    firstName: null,
    lastName: null,
    userId: null,
    password: null,
    confPassword: null,
    grade: null,
  });

  const handleFormChange = (field: string, errMsg: string) => {
    setValidateMsg({...validateMsg, [field]: errMsg});
  };

  const handlePrev = () => {};
  const handleNext = () => {
    if (!formValidation()) return;
    if (childIdx === childNum) {
      saveChild();
      return;
    }

    const temp = [...availablePackages];
    const inex = temp.indexOf(packageName);
    delete temp[inex];
    setAvailablePackages(temp);
    setChilds([
      ...childs,
      {
        package: packageName,
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        password: password,
        grade: grade,
      },
    ]);
    setChildIdx(childIdx + 1);
    setValidateMsg({
      firstName: null,
      lastName: null,
      userId: null,
      password: null,
      confPassword: null,
      grade: null,
    });
    setPackageName(temp[0]);
    setFirstName('');
    setLastName('');
    setUserId('');
    setPassword('');
    setConfPassword('');
    setGrade('');
  };

  const saveChild = () => {
    history.push('/kids/list');
  };

  const formValidation = () => {
    const validateMsgTemp = {...validateMsg};
    let valiResult = true;
    for (const key in validateMsg) {
      if (validateMsg[key] === null) {
        validateMsgTemp[key] = 'Field is required';
      }
      if (validateMsgTemp[key]) valiResult = false;
    }
    setValidateMsg(validateMsgTemp);
    return valiResult;
  };
  useEffect(() => {
    setAvailablePackages(['Gold', 'Sole', 'Combo']);
    setPackageName(availablePackages[0]);
    setChildNum(2);
    loadingContext.done();
  }, []);

  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Container>
        <PaperContainer>
          <Paper elevation={3} className={classes.paper}>
            <Title>Adding a New Kid</Title>
            <Tip>Please introduce the next information</Tip>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <TextField label="Select Your Package" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={packageName}
                                onChange={(e) => {
                                    setPackageName(e.target.value);
                                    handleFormChange("packageName",e.target.value.length === 0 ? "Field is required" : "");
                                }}
                                error={!!validateMsg.packageName}
                                helperText={validateMsg.packageName}
                            /> */}
                <FormControl fullWidth>
                  <InputLabel id="select-package-label">
                    Select Your Package
                  </InputLabel>
                  <Select
                    labelId="select-package-label"
                    id="select-package"
                    value={packageName ? packageName : ''}
                    label="Select Your Package"
                    className={`${classes.select} ${
                      packageName === 'Gold'
                        ? classes.goldInput
                        : packageName === 'Combo'
                        ? classes.comboInput
                        : classes.soleInput
                    } err-border`}
                    onChange={e => {
                      setPackageName(e.target.value);
                      setPaths([]);
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
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className="err-text">{validateMsg.packageName}</div>
                </FormControl>
              </Grid>
              <Grid item xs={12} className="font-s-20">
                {packageName === 'Gold' && ''}
                {packageName === 'Combo' && 'Pick Two'}
                {packageName === 'Sole' && 'Pick One'}
              </Grid>
              {packageName && (
                <Grid item xs={12}>
                  <Subjects color={packageName}>
                    <Subject>
                      {packageName === 'Gold' && (
                        <SubjectIcon src={math_gold} />
                      )}
                      {packageName === 'Combo' && (
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
                              handleCheckPath('Math', e.target.checked)
                            }
                            checked={paths.indexOf('Math') !== -1}
                          />
                          <SubjectIcon src={math_combo} />
                        </>
                      )}
                      {packageName === 'Sole' && (
                        <>
                          <Radio
                            value={'Math'}
                            onClick={() => setPaths(['Math'])}
                            checked={paths[0] === 'Math'}
                            sx={{
                              color: BasicColor.greenSoft,
                              '&.Mui-checked': {color: BasicColor.greenSoft},
                              padding: '0px',
                              paddingLeft: '9px',
                              paddingRight: '9px',
                            }}
                          />
                          <SubjectIcon src={math_sole} />
                        </>
                      )}
                      <SubjectTitle>MATH</SubjectTitle>
                    </Subject>
                    <Subject>
                      {packageName === 'Gold' && <SubjectIcon src={ela_gold} />}
                      {packageName === 'Combo' && (
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
                              handleCheckPath('Ela', e.target.checked)
                            }
                            checked={paths.indexOf('Ela') !== -1}
                          />
                          <SubjectIcon src={ela_combo} />
                        </>
                      )}
                      {packageName === 'Sole' && (
                        <>
                          <Radio
                            value={'Ela'}
                            onClick={() => setPaths(['Ela'])}
                            checked={paths[0] === 'Ela'}
                            sx={{
                              color: BasicColor.greenSoft,
                              '&.Mui-checked': {color: BasicColor.greenSoft},
                              padding: '0px',
                              paddingLeft: '9px',
                              paddingRight: '9px',
                            }}
                          />
                          <SubjectIcon src={ela_sole} />
                        </>
                      )}
                      <SubjectTitle>ELA + SIGHT WORDS</SubjectTitle>
                    </Subject>
                    <Subject>
                      {packageName === 'Gold' && (
                        <SubjectIcon src={science_gold} />
                      )}
                      {packageName === 'Combo' && (
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
                              handleCheckPath('Science', e.target.checked)
                            }
                            checked={paths.indexOf('Science') !== -1}
                          />
                          <SubjectIcon src={science_combo} />
                        </>
                      )}
                      {packageName === 'Sole' && (
                        <>
                          <Radio
                            value={'Science'}
                            onClick={() => setPaths(['Science'])}
                            checked={paths[0] === 'Science'}
                            sx={{
                              color: BasicColor.greenSoft,
                              '&.Mui-checked': {color: BasicColor.greenSoft},
                              padding: '0px',
                              paddingLeft: '9px',
                              paddingRight: '9px',
                            }}
                          />
                          <SubjectIcon src={science_sole} />
                        </>
                      )}
                      <SubjectTitle>SCIENCE</SubjectTitle>
                    </Subject>
                    <Subject>
                      {packageName === 'Gold' && (
                        <SubjectIcon src={financial_gold} />
                      )}
                      {packageName === 'Combo' && (
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
                              handleCheckPath('Financial', e.target.checked)
                            }
                            checked={paths.indexOf('Financial') !== -1}
                          />
                          <SubjectIcon src={financial_combo} />
                        </>
                      )}
                      {packageName === 'Sole' && (
                        <>
                          <Radio
                            value={'Financial'}
                            onClick={() => setPaths(['Financial'])}
                            checked={paths[0] === 'Financial'}
                            sx={{
                              color: BasicColor.greenSoft,
                              '&.Mui-checked': {color: BasicColor.greenSoft},
                              padding: '0px',
                              paddingLeft: '9px',
                              paddingRight: '9px',
                            }}
                          />
                          <SubjectIcon src={financial_sole} />
                        </>
                      )}
                      <SubjectTitle>FINANCIAL LITERACY</SubjectTitle>
                    </Subject>
                    <Subject>
                      {packageName === 'Gold' && (
                        <SubjectIcon src={health_gold} />
                      )}
                      {packageName === 'Combo' && (
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
                              handleCheckPath('Health', e.target.checked)
                            }
                            checked={paths.indexOf('Health') !== -1}
                          />
                          <SubjectIcon src={health_combo} />
                        </>
                      )}
                      {packageName === 'Sole' && (
                        <>
                          <Radio
                            value={'Health'}
                            onClick={() => setPaths(['Health'])}
                            checked={paths[0] === 'Health'}
                            sx={{
                              color: BasicColor.greenSoft,
                              '&.Mui-checked': {color: BasicColor.greenSoft},
                              padding: '0px',
                              paddingLeft: '9px',
                              paddingRight: '9px',
                            }}
                          />
                          <SubjectIcon src={health_sole} />
                        </>
                      )}
                      <SubjectTitle>HEALTH & SAFETY</SubjectTitle>
                    </Subject>
                  </Subjects>
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  label="Child First NAME"
                  onChange={e => {
                    setFirstName(e.target.value);
                    handleFormChange(
                      'firstName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.firstName}
                  helperText={validateMsg.firstName}
                  value={firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Child LAST NAME"
                  onChange={e => {
                    setLastName(e.target.value);
                    handleFormChange(
                      'lastName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.lastName}
                  helperText={validateMsg.lastName}
                  value={lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="USER ID OR CHOOSE A NICK NAME"
                  onChange={e => {
                    setUserId(e.target.value);
                    handleFormChange(
                      'userId',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.userId}
                  helperText={validateMsg.userId}
                  value={userId}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="PASSWORD"
                  onChange={e => {
                    setPassword(e.target.value);
                    handleFormChange(
                      'password',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.password}
                  helperText={validateMsg.password}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="CONFIRM PASSWORD"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="GRADE"
                  onChange={e => {
                    setGrade(e.target.value);
                    handleFormChange(
                      'grade',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.grade}
                  helperText={validateMsg.grade}
                  value={grade}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                {childIdx > 0 && (
                  <Button
                    value="Previous Kid"
                    bgColor={ButtonColor.create}
                    onClick={handlePrev}
                  />
                )}
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Button
                  value={childNum !== childIdx ? 'Next Kid' : 'Finish'}
                  bgColor={
                    childNum !== childIdx
                      ? ButtonColor.nextKid
                      : ButtonColor.create
                  }
                  onClick={handleNext}
                  align="right"
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

import { FC, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import kidA from 'views/assets/avatars/kid-1.svg';
import kidB from 'views/assets/avatars/kid-2.svg';
import kidC from 'views/assets/avatars/kid-3.svg';
import { changeStudentGrade } from 'app/actions/studentActions'
import license from 'views/assets/student-license.svg';
import Grid from '@mui/material/Grid';
import TextField from 'views/molecules/MuiTextField';
import Button from 'views/molecules/MuiButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { BasicColor } from 'views/Color';
import { Store } from 'app/configureStore';
import {
  Title,
  Avatar,
  LicenseButton,
  useStyles
} from './Style';

import License from 'views/molecules/KidLicense/KidLicense';
import { LoadingContext } from 'react-router-loading';
import { toPng } from 'html-to-image'
import { saveAs} from 'file-saver'

import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import { parseTwoDigitYear } from 'moment';
import { changeStudentPassword } from 'app/actions/studentActions'


interface kid {
  username: string;
  password: string;
  grade: string;
  avatar: string;
}

const KidsList: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const classes = useStyles();

  // const dispatch = useDispatch();
  // const language = 'en';
  const user = useSelector((state: Store) => state.user);
  const guardian = useSelector((state: any) => state.guardian)
  const grades = useSelector((state: any) => state.grade)
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();

  const kidAvatars = [kidA, kidB, kidC];
  const langs = [
    {
      name: "English",
      value: "EN_US"
    }
  ]

  const [children, setChildren] = useState<kid[]>([]);

  // const handleDelete = (index: number) => {
  //   const temp: any = [...children];
  //   temp.pop(temp[index]);
  //   setChildren(temp);
  // };

  // const handleNew = (index: number) => {};

  // const handleChgPwd = (index: number, password: string) => {
  //   const temp: any = [...children];
  //   temp[index].password = password;
  //   setChildren(temp);
  // };

  const handleSave = () => {
    // Do something ...

    console.log('Save button clicked!');
  };
  const Kid = (props: any) => {
    console.log('props is', props)
    const userName = props.user.username;
    const language = props.user.language
    const parentName = user.username
    const fullName = props.fullName;
    const studentId = props.id;
    const [grade, setGrade] = useState(props.grade.grade);
    const [newPwd, setNewPwd] = useState("");
    // Open or close dialog state
    const [openLicense, setOpenLicense] = useState(false);
    const [openChangePwd, setOpenChangePwd] = useState(false)
    const [loading, setLoading] = useState(false)
    console.log("kid info is", props)
    console.log("language is ",language)
    const openLicenseDlg = () => {
      setOpenLicense(!openLicense);
    };
    const openChangePwdDlg = () => {
      setOpenChangePwd(!openChangePwd);
    };
    const handleDownloadBtnClicked = () => {
      // Do something ...
      setLoading(true)
      const licenseElm: any = document.querySelector('#license');
      console.log(licenseElm);
      toPng(licenseElm).then(function (dataUrl) {
        saveAs(dataUrl, `${userName}-license`);
        setLoading(false)
      });

      // open()
    };
    const handleChangePwdBtnClicked = async() => {
      // Do something ...
      if (newPwd.length < 1) return;

      setLoading(true);
      const result: any = await changeStudentPassword(newPwd, studentId, user.token, dispatch)
      setLoading(false);

      if(!result.success) {
        enqueueSnackbar(result.msg, { variant: 'error' });
        return;
      }
      // open()
    };
    const handleCancelBtnClicked = () => {
      // Do something ...
      console.log(children);
      setOpenLicense(false);
      setOpenChangePwd(false)
    };

    // const updateUsername = (value: any) => {
    //   setUsername(value);
    //   children[props.index].username = value;
    //   setChildren(children);
    // };

    // const updatePassword = (value: any) => {
    //   setPassword(value);
    //   children[props.index].password = value;
    //   setChildren(children);
    // };

    const updateGrade = (value: any) => {
      setGrade(value);
      children[props.index].grade = value;
      setChildren(children);
    };

    useEffect(() => {

      loadingContext.done();
    }, []);

    return (
      <KidContainer>
        <LSDialog
          isOpen={openLicense}
          open={openLicenseDlg}
          title="Your Child License"
          fullWidth="true"
          dialogContent={
            <>
              {/* {openLicense && ( */}
                <License
                  parentName={user.username}
                  // username={username}
                  username={userName}
                  membership={new Date(props?.guardianstudentplanSet[0]?.expiredAt)}
                />
               {/* )} */}
              <GridContainer container>
                <GridItem item md={6} xs={12}>
                  <Button
                    bgColor={BasicColor.green}
                    onClick={handleDownloadBtnClicked}
                    loading={loading}
                    value="Download"
                  />
                </GridItem>
                <GridItem item md={6} xs={12}>
                  <Button
                    bgColor={BasicColor.gray60}
                    onClick={() => handleCancelBtnClicked()}
                    value="Return"
                  />
                </GridItem>
              </GridContainer>
            </>
          }
        />
        <LSDialog
          isOpen={openChangePwd}
          open={openChangePwdDlg}
          title="Change Your Password"
          fullWidth="true"
          dialogContent={
            <>
              <GridContainer container>
                <GridItem item md={12} xs={12}>
                  <TextField
                    label="Password"
                    onChange={e => {
                      setNewPwd(e.target.value);
                    }}
                    error={newPwd.length > 0 ? false : true}
                    helperText={"Password field is required"}
                    // value={firstName}
                  />
                </GridItem>
                <GridItem item md={6} xs={12}>
                  <Button
                    bgColor={BasicColor.green}
                    onClick={handleChangePwdBtnClicked}
                    loading={loading}
                    value="Change"
                  />
                </GridItem>
                <GridItem item md={6} xs={12}>
                  <Button
                    bgColor={BasicColor.gray60}
                    onClick={() => handleCancelBtnClicked()}
                    value="Return"
                  />
                </GridItem>
              </GridContainer>
            </>
          }
        />

        <GridContainer container className="align-center">
          <GridItem item xs={6} md={2}>
            <Avatar src={props.avatar} />
          </GridItem>
          <GridItem item xs={6} md={2}>
            <LicenseButton src={license} onClick={() => setOpenLicense(true)} />
          </GridItem>
          <GridItem item xs={12} md={2}>
            <TextField
              label="User Name"
              value={userName}
            />
          </GridItem>
          <GridItem item xs={12} md={2.5}>
            <FormControl fullWidth>
              <InputLabel id="select-grade-label">
                Select Your Grade
              </InputLabel>
              <Select
                labelId="select-grade-label"
                id="select-grade"
                value={grades?.length > 0 ? grades[grades.findIndex((item:any) => item.id === grade.id)] : ""}
                label="Select Your Grade"
                className={`${classes.select} err-border`}
                onChange={async (e) => {
                  setGrade(e.target.value);
                  console.log(props)
                  const res = await changeStudentGrade(e.target.value.id, props.id, user.token, dispatch)
                  if(!res.success) {
                    enqueueSnackbar(res.msg, { variant: 'error' });
                  }
                }}
                displayEmpty={true}
              >
                {grades?.length > 0 && grades.map((value: any, index: number) => (
                  <MenuItem value={value} key={index}>
                    {value?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem item xs={12} md={1.5}>
            <FormControl fullWidth>
              <InputLabel id="select-lang-label">
                Select Your Language
              </InputLabel>
              <Select
                labelId="select-lang-label"
                id="select-lang"
                value={langs[langs.findIndex((item:any) => item.value === language)]}
                label="Select Your Language"
                className={`${classes.select} err-border`}
                onChange={async (e) => {
                  // setGrade(e.target.value);
                  // console.log(props)
                  // const res = await changeStudentGrade(e.target.value.id, props.id, user.token, dispatch)
                  // if(!res.success) {
                  //   enqueueSnackbar(res.msg, { variant: 'error' });
                  // }
                }}
                displayEmpty={true}
              >
                {langs?.length && langs.length > 0 && langs.map((value: any, index: number) => (
                  <MenuItem value={value} key={index}>
                    {value.name}
                  </MenuItem>
                ))}
              </Select>
              {/* <div className="err-text">{validateMsg.grade}</div> */}
            </FormControl>
          </GridItem>
          <GridItem item xs={12} md={2}>
            <Button
              bgColor={BasicColor.shadeBrown}
              onClick={ (e: any) => setOpenChangePwd(true) }
              value="Change Password"
            />
          </GridItem>
        </GridContainer>
      </KidContainer>
    );
  };

  useEffect(() => {

    const guardianStudents = guardian.guardianstudentSet
    const students = [];

    for(const guardianStudent of guardianStudents) {
      students.push(guardianStudent?.student)
    }

    // for(const student of students) {
      // setChildren([...children, guardianStudent.student])
    // }
    setChildren(students)

    // setChildren([
    //   {
    //     username: 'armin',
    //     password: '123456',
    //     grade: '1',
    //     avatar: kidAvatars[0],
    //   },
    //   {
    //     username: 'armin',
    //     password: '123456',
    //     grade: '1',
    //     avatar: kidAvatars[1],
    //   },
    //   {
    //     username: 'armin',
    //     password: '123456',
    //     grade: '1',
    //     avatar: kidAvatars[2],
    //   },
    //   {
    //     username: 'armin',
    //     password: '123456',
    //     grade: '1',
    //     avatar: kidAvatars[0],
    //   },
    // ]);
    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Container>
        <Title>Your kids</Title>
        {children.map((child, index) => (
            <Kid {...child} index={index} key={index}></Kid>
        ))}
        <Button
          bgColor={BasicColor.green}
          onClick={() => handleSave()}
          value="Save"
          fontSize={25}
        />
      </Container>
    </ParentPgContainer>
  );
};

export default KidsList;

const Container = styled.div`
  z-index: 10;
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KidContainer = styled.div`
  margin: 0 5vw 5vh 5vw;
  width: 100%;
  @media screen and (max-width: 540px) {
    background: linear-gradient(
        0deg,
        rgba(23, 113, 185, 0.2),
        rgba(23, 113, 185, 0.2)
      ),
      linear-gradient(0deg, #ffffff, #ffffff);
  }
`;

const GridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  &.MuiGrid-root {
    padding: 25px;
  }
`;
const GridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 10px;
  &.MuiGrid-root {
    padding-top: 5px;
  }
`;

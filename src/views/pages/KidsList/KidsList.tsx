import { FC, useEffect, useState, useContext }  from 'react';
import { useSelector, useDispatch }             from 'react-redux';

import { LoadingContext } from 'react-router-loading';
import { useSnackbar }    from 'notistack';
import styled             from 'styled-components';
import { toPng }          from 'html-to-image'
import { saveAs}          from 'file-saver'
import { useHistory }     from 'react-router-dom';

import Grid           from '@mui/material/Grid';
import InputLabel     from '@mui/material/InputLabel';
import MenuItem       from '@mui/material/MenuItem';
import FormControl    from '@mui/material/FormControl';
import Select         from '@mui/material/Select';

import kidA       from 'views/assets/avatars/kid-1.svg';
import kidB       from 'views/assets/avatars/kid-2.svg';
import kidC       from 'views/assets/avatars/kid-3.svg';
import license    from 'views/assets/student-license.svg';

import License                from 'views/molecules/KidLicense/KidLicense';
import TextField              from 'views/molecules/MuiTextField';
import Button                 from 'views/molecules/MuiButton';
import { ParentPgContainer }  from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { LSDialog }           from 'views/molecules/Setting/LSDialog';
import { BasicColor }         from 'views/Color';

import { Store }              from 'app/configureStore';
import { changeStudentGrade } from 'app/actions/studentActions'
import { changeStudentPassword } from 'app/actions/studentActions'

import {
  Title,
  Avatar,
  LicenseButton,
  useStyles
} from './Style';

interface kid {
  username: string;
  password: string;
  grade:    string;
  avatar:   string;
}

const KidsList: FC = () => {
  const loadingContext      = useContext(LoadingContext);
  const { enqueueSnackbar } = useSnackbar();
  const classes   = useStyles();
  const user      = useSelector((state: Store) => state.user);
  const guardian  = useSelector((state: any) => state.guardian)
  const grades    = useSelector((state: any) => state.grade)
  const history   = useHistory();
  const dispatch  = useDispatch()

  const [children, setChildren] = useState<kid[]>([]);

  const language    = 'en';
  const langs       = [{
                          name:   "English",
                          value:  "EN_US"
                      }]

  const Kid = (props: any) => {

    const userName    = props.user.username;
    const language    = props.user.language;
    const parentName  = user.username;
    const fullName    = props.fullName;
    const studentId   = props.id;

    const [grade,         setGrade]         = useState(props.grade.grade);
    const [newPwd,        setNewPwd]        = useState("");
    const [loading,       setLoading]       = useState(false);
    const [openLicense,   setOpenLicense]   = useState(false);
    const [openChangePwd, setOpenChangePwd] = useState(false);

    const openLicenseDlg    = () => {
      setOpenLicense(!openLicense);
    };

    const openChangePwdDlg  = () => {
      setOpenChangePwd(!openChangePwd);
    };

    const handleDownloadBtnClicked  = () => {
      setLoading(true)
      const licenseElm: any = document.querySelector('#license');
      toPng(licenseElm).then(function (dataUrl) {
        saveAs(dataUrl, `${userName}-license`);
        setLoading(false)
      });
    };

    const handleChangePwdBtnClicked = async() => {
      if (newPwd.length < 1) return;

      setLoading(true);
      const result: any = await changeStudentPassword(newPwd, studentId, user.token, dispatch)
      setLoading(false);

      if(!result.success) {
        enqueueSnackbar(result.msg, { variant: 'error' });
        return;
      }
    };

    const handleCancelBtnClicked    = () => {
      setOpenLicense(false);
      setOpenChangePwd(false)
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
                <License
                  parentName={user.username}
                  username={userName}
                  membership={props?.guardianstudentplanSet?.legnth > 0 ? new Date(props?.guardianstudentplanSet[0]?.expiredAt) : ""}
                />
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
          <GridItem item xs={6} md={0.7}>
            <Avatar src={props.avatar} onClick={() => history.push("/parent/reporting")}/>
          </GridItem>
          <GridItem item xs={6} md={1.3}>
            <LicenseButton src={license} onClick={() => setOpenLicense(true)} />
          </GridItem>
          <GridItem item xs={12} md={2}>
            <TextField
              label="User Name"
              value={userName}
            />
          </GridItem>
          <GridItem item xs={12} md={2}>
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
          <GridItem item xs={12} md={2}>
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
            </FormControl>
          </GridItem>
          <GridItem item xs={12} md={1.5}>
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
    const guardianStudents  = guardian.guardianstudentSet
    const students          = [];

    for(const guardianStudent of guardianStudents) {
      students.push(guardianStudent?.student)
    }
    setChildren(students)

    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Container>
        <Title>Your kids</Title>
        {children.map((child, index) => (
            <Kid {...child} index={index} key={index}></Kid>
        ))}
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

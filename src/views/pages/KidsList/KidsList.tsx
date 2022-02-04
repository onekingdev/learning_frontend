import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import { MockStore } from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import avatar from '../../assets/avatars/avatar1.svg'
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import kidA from '../../assets/avatars/kid-1.svg'
import kidB from '../../assets/avatars/kid-2.svg'
import kidC from '../../assets/avatars/kid-3.svg'
import license from '../../assets/student-license.svg'
import logo from '../../assets/logo-learn-white.svg'
import socrates from '../../assets/socrates.svg'
import Grid from '@mui/material/Grid';
import TextField from '../../molecules/MuiTextField'
import Button from '../../molecules/MuiButton'
import { LSDialog } from '../../molecules/Setting/LSDialog';
import { ButtonColor, BasicColor } from '../../Color';
import { Store } from '../../../app/configureStore';
import { Title, Avatar, LicenseButton, LicenseHeader, LicenseBody, LicenseBottom, LicenseUsername } from './Style'
import { toPng, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver'
import QRCode from "react-qr-code";
import License from '../../molecules/KidLicense/KidLicense'
interface kid {
  username: string;
  password: string;
  grade: string;
  avatar: string
}

const KidsList: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const classes = useStyles();
  const user = useSelector((state: Store) => state.user)
  const kidAvatars = [kidA, kidB, kidC]

  const [children, setChildren] = useState<kid[]>([]);

  const handleDelete = (index: number) => {
    const temp: any = [...children];
    temp.pop(temp[index]);
    setChildren(temp)
  }

  const handleNew = (index: number) => {

  }

  const handleChgPwd = (index: number, password: string) => {
    const temp: any = [...children];
    temp[index].password = password
    setChildren(temp)
  }


  const handleSave = () => {
    // Do something ...

    console.log('Save button clicked!')
  }
  const Kid = (props: any) => {

    const [username, setUsername] = useState(props.username);
    const [password, setPassword] = useState(props.password);
    const [grade, setGrade] = useState(props.grade)

    // Open or close dialog state
    const [openLicense, setOpenLicense] = useState(false)
    const open = () => {
      setOpenLicense(!openLicense)
    }

    const handleDownloadBtnClicked = () => {
      // Do something ...
      console.log(children);
      const licenseElm: any = document.querySelector("#license")
      console.log(licenseElm)
      toPng(licenseElm).then(function (dataUrl) {
        saveAs(dataUrl, `${username}-license`);
      });

      // open()
    }
    const handleCancelBtnClicked = () => {
      // Do something ...
      console.log(children);

      // close dialog
      open()
    }
    const updateUsername = (value: any) => {
      setUsername(value);
      children[props.index].username = value;
      setChildren(children)
    }

    const updatePassword = (value: any) => {
      setPassword(value);
      children[props.index].password = value;
      setChildren(children)
    }

    const updateGrade = (value: any) => {
      setGrade(value);
      children[props.index].grade = value;
      setChildren(children)
    }

    return (
      <KidContainer >
        <LSDialog
          isOpen={openLicense}
          open={open}
          title='Your Child License'
          fullWidth='true'
          dialogContent={
            <>
              {openLicense && <License parentName={user.username} username={username} membership={new Date()} />}
              <GridContainer container>
                <GridItem item md={6} xs={12}>
                  <Button
                    bgColor={BasicColor.green}
                    onClick={(e: any) => handleDownloadBtnClicked()}
                    value="Download"
                  />
                </GridItem>
                <GridItem item md={6} xs={12}>
                  <Button
                    bgColor={BasicColor.gray60}
                    onClick={(e: any) => handleCancelBtnClicked()}
                    value="Return"
                  />
                </GridItem>
              </GridContainer>
            </>
          }
        />

        <GridContainer container className="align-center" >
          <GridItem item xs={6} md={2} >
            <Avatar src={props.avatar} />
          </GridItem>
          <GridItem item xs={6} md={2.5}>
            <LicenseButton src={license} onClick={() => setOpenLicense(true)} />
          </GridItem>
          <GridItem item xs={12} md={2}>
            <TextField
              label="User Name"
              value={username}
            // onChange={(e) => updateUsername(e.target.value)}
            />
          </GridItem>
          <GridItem item xs={12} md={3}>
            <TextField
              label="Grade"
              value={grade} onChange={(e) => { updateGrade(e.target.value) }}
            />
          </GridItem>
          <GridItem item xs={12} md={2.5} >
            <Button
              bgColor={BasicColor.shadeBrown}
              // onClick={(e:any) => handleChgPwd(props.index, password)}
              value="Change Password"
            />
          </GridItem>

        </GridContainer>
      </KidContainer>
    )
  };

  useEffect(() => {
    setChildren([
      {
        username: "armin",
        password: '123456',
        grade: '1',
        avatar: kidAvatars[0]
      }, {
        username: "armin",
        password: '123456',
        grade: '1',
        avatar: kidAvatars[1]
      }, {
        username: "armin",
        password: '123456',
        grade: '1',
        avatar: kidAvatars[2]
      }, {
        username: "armin",
        password: '123456',
        grade: '1',
        avatar: kidAvatars[0]
      },
    ])
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <Container>
        <Title>Your kids</Title>
        {children.map((child, index) => (
          <>
            <Kid {...child} index={index} key={index}></Kid>
          </>
        ))}
        <Button
          bgColor={BasicColor.green}
          onClick={(e: any) => handleSave()}
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
`

const KidContainer = styled.div`
margin: 0 5vw 5vh 5vw;
width: 100%;
@media screen and (max-width: 540px) {
  background: linear-gradient(0deg, rgba(23, 113, 185, 0.2), rgba(23, 113, 185, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF);
}
`

const GridContainer = styled(Grid)`
display: flex;
justify-content: center;
&.MuiGrid-root {
  padding: 25px;
}
`
const GridItem = styled(Grid)`
display: flex;
justify-content: center;
padding: 10px;
&.MuiGrid-root {
  padding-top: 5px;
}
`

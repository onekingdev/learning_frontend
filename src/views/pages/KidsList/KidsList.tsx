import {FC, useEffect, useState} from 'react';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import avatar from '../../assets/avatars/avatar1.svg'
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
import {ButtonColor, BasicColor} from '../../Color';
import { Title, Avatar, Container, LicenseButton, LicenseHeader, LicenseBody, LicenseBottom, LicenseUsername} from './Style'
import QRCode from "react-qr-code";
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
  const kidAvatars = [kidA, kidB, kidC]

  const [children, setChildren] = useState<kid[]>([]);

  const handleDelete = (index: number) => {
    const temp:any = [...children];
    temp.pop(temp[index]);
    setChildren(temp)
  }

  const handleNew = (index: number) => {

  }

  const handleChgPwd = (index: number, password: string) => {
    const temp:any = [...children];
    temp[index].password = password
    setChildren(temp)
  }

  const handleBring = () => {

  }

  const handleSave = () => {
    console.log(children);
  }

  const License = (props: any) => {
    return (
      <div className="flex flex-col w-600 h-400">
        <LicenseHeader>
          <img src={ logo } className='p-b-15'/>
          LEARNING LICESNE
        </LicenseHeader>
        <LicenseBody>
          <div className="flex justify-space-between align-center">
            <img src={socrates} />
            <div className="flex flex-col h-full justify-space-around">
              <TextField
                label="Member Since"
                value={`${props.membership.getFullYear()} - ${props.membership.getMonth() + 1} - ${props.membership.getDate()}`}
                // onChange={(e) => updateUsername(e.target.value)}
              />
              <TextField
                label="User Name"
                value={props.username}
                // onChange={(e) => updateUsername(e.target.value)}
              />
            </div>
            <div className="flex align-center justify-center">
              <QRCode value={props.username} size={150} style={{padding: "10px"}}/>
            </div>
          </div>
          <div className="flex align-center">
            <LicenseUsername>{props.parentName}</LicenseUsername>
            <div className="flex justify-center align-center">
              www.learnwithsocrates.com
            </div>
          </div>
        </LicenseBody>
      </div>
    )
  }

  const Kid = (props:any) => {

    const [username, setUsername] = useState(props.username);
    const [password, setPassword]=  useState(props.password);
    const [grade, setGrade] = useState(props.grade)
    const [openLicense, setOpenLicense] = useState(false)

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
    <div className="flex justify-center align-center p-b-50 w-100">
      <LSDialog
        isOpen = {openLicense}
        open = {() => {}}
        title = 'Your Child License'
        dialogContent = {
          <>
          <License parentName={props.parentName} username={username} membership={new Date()} />
          <div className="flex justify-space-between p-t-30">
            <Button
              bgColor={BasicColor.green}
              onClick={(e:any) => handleSave()}
              value="Download"
            />
            <Button
              bgColor={BasicColor.gray60}
              onClick={(e:any) => handleSave()}
              value="Return"
            />
          </div>
          </>
        }
      />
      <Avatar src={props.avatar} />
      <Grid container spacing={5} className="align-center">
          <Grid item xs={12} md={4}>
            <TextField
              label="User Name"
              value={username}
              // onChange={(e) => updateUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Grade"
              value={grade} onChange={(e)=>{updateGrade(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Button
                bgColor={BasicColor.shadeBrown}
                // onClick={(e:any) => handleChgPwd(props.index, password)}
                value="Change Password"
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            {/* {props.isNew === true ? (
              <Button
                bgColor={BasicColor.shadeBrown}
                onClick={(e:any) => handleNew(props.index)}
                value="New"
              />
              ) : (
              <Button
                bgColor={BasicColor.red}
                onClick={(e:any) => handleDelete(props.index)}
                value="Delete"
              />
              )} */}
              {/* <Button
                onClick={(e:any) => handleBring()}
                value="Bring"
              /> */}
              <LicenseButton src={license} onClick={() => setOpenLicense(true)}/>
          </Grid>
      </Grid>
    </div>
  )};

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
              onClick={(e:any) => handleSave()}
              value="Save"
              fontSize={25}
            />
          </Container>
        </ParentPgContainer>
  );
};

export default KidsList;

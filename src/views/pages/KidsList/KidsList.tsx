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
import Grid from '@mui/material/Grid';
import TextField from '../../molecules/MuiTextField'
import Button from '../../molecules/MuiButton'
import {ButtonColor, BasicColor} from '../../Color';
import { Title, Avatar, Container} from './Style'
const KidsList: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const classes = useStyles();
  const kidAvatars = [kidA, kidB, kidC]

  const [children, setChildren] = useState([{}]);

  const handleDelete = (index: number) => {
    console.log(index)
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

  const Kid = (props:any) => {

    const [userName, setUserName] = useState(props.userName);
    const [password, setPassword]=  useState(props.password);
    const [grade, setGrade] = useState(props.grade)

    return (
    <div className="flex justify-center align-center p-b-50 w-100">
      <Avatar src={props.avatar} />
      <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <TextField
              label="User Name"
              value={userName} onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Grade"
              value={grade} onChange={(e)=>{setGrade(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Button
                bgColor={BasicColor.shadeBrown}
                onClick={(e:any) => handleChgPwd(props.index, password)}
                value="Change Password"
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            {props.isNew === true ? (
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
              )}
          </Grid>
      </Grid>
    </div>
  )};

  useEffect(() => {
    setChildren([
      {
        userName: "armin",
        password: '123456',
        grade: '1',
        avatar: kidAvatars[0]
      }, {
        userName: "armin",
        password: '123456',
        grade: '1',
          avatar: kidAvatars[1]
      }, {
        userName: "armin",
        password: '123456',
        grade: '1',
        avatar: kidAvatars[2]
      }, {
        userName: "armin",
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
              <Kid {...child} index={index} key={index}></Kid>
            ))}
          </Container>
        </ParentPgContainer>
  );
};

export default KidsList;

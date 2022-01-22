import {FC, useEffect, useState} from 'react';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import avatar from '../../assets/avatars/avatar1.svg'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Title, Avatar, Container} from './Style'
const KidsList: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const classes = useStyles();

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
    const [password, setPassword]=  useState(props.password)
    return (
    <div className="flex justify-center align-center p-b-50 w-100">
      <Avatar src={avatar} />
      <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
              <TextField label="User Name" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={props.userName}/>
          </Grid>
          <Grid item xs={12} md={3}>
              <TextField label="Password" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Button
                variant="contained"
                className={classes.chPwdButton}
                color="warning"
                onClick={(e:any) => handleChgPwd(props.index, password)}
                fullWidth
            >
                Change Password
            </Button>
          </Grid>
          <Grid item xs={12} md={2.5}>
            {props.isNew === true ? (
              <Button
                variant="contained"
                className={classes.addButton}
                color="success"
                onClick={()=>{handleNew(props.index)}}
                fullWidth
              >
                New
              </Button>
              ) : (
              <Button
                  variant="contained"
                  className={classes.deleteButton}
                  color="error"
                  onClick={()=>{handleDelete(props.index)}}
                  fullWidth
              >
                  Delete
              </Button>)}
          </Grid>
      </Grid>
    </div>
  )};

  useEffect(() => {
    setChildren([
      {
        userName: "armin",
        password: '123456',
        avatar: avatar
      }, {
        userName: "armin",
        password: '123456',
        avatar: avatar
      }, {
        userName: "armin",
        password: '123456',
        avatar: avatar
      }, {
        userName: "armin",
        password: '123456',
        avatar: avatar
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

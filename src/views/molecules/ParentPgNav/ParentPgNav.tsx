import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import QuestionMarkIcon from '@mui/icons-material/QuestionMarkRounded';
import Stack from '@mui/material/Stack';
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import logoTitle from '../../assets/logo-learn.svg'
import home from '../../assets/home_pc.svg'
import avatar from '../../assets/avatars/avatar1.svg'
import {
  Container,
  LogoContainer,
  LogoImg,
  LogoTitle,
  Home,
  NameAvatarGroup,
  SupportBtnContainer,
  AvatarContainer,
} from './Style'

type ParentPgNavProps = {
  onlyLogoImg: boolean;
};

export const ParentPgNav: FC<ParentPgNavProps> = ({onlyLogoImg}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const handleChange = (event:any) => {
    console.log(event.target.value)
    switch(event.target.value) {
      case "Settings" :
        history.push("/parent/setting")
        break;
      case "ManageKids" :
        history.push("/kids/list")
        break;
      case "SignOut" :
        history.push("/")
        break;
    }
  };
  const onSupport = () => {

  }
  useEffect(() => {
  }, []);

  if(onlyLogoImg) return(
    <Container>
      <LogoImg  src={logoTitle} />
    </Container>
  )
  else return (
    <Container>
      <Home src={home} />
      <SupportBtnContainer>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={(
            <Avatar className={classes.questionMark}>
              <QuestionMarkIcon />
            </Avatar>
          )}
          color="success"
          onClick={onSupport}
        >
          Support
        </Button>
        <Avatar className={classes.questionMarkButton} id="questionMarkButton">
          <QuestionMarkIcon />
        </Avatar>
      </SupportBtnContainer>
      <LogoContainer>
        <LogoImg  src={logoTitle} />
        <LogoTitle><u>Parents Center</u></LogoTitle>
      </LogoContainer>
      <NameAvatarGroup>
        <FormControl className={classes.formControl}>
          <InputLabel id="menu">Menu</InputLabel>
          <Select
            labelId="menu"
            id="menu-select"
            label="Menu"
            onChange={handleChange}
            sx={{backgroundColor: 'white'}}
          >
            <MenuItem value={"Settings"}>Settings</MenuItem>
            <MenuItem value={"ManageKids"}>Manage Kids</MenuItem>
            <MenuItem value={"SignOut"}>Sign Out</MenuItem>
          </Select>
        </FormControl>
        <AvatarContainer>
          <Avatar sx={{ bgcolor: '#22BAAF', height:'60px', width:'60px', marginLeft: '15px'}} alt="Remy Sharp" src={avatar} />
        </AvatarContainer>
      </NameAvatarGroup>
    </Container>
  );
};

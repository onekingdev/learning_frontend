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

// import { Button } from '../../molecules/Button'
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
} from './Style'

type ParentPgNavProps = {
  onlyLogoImg: boolean;
};

export const ParentPgNav: FC<ParentPgNavProps> = ({onlyLogoImg}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [age, setAge] = useState('');
  const classes = useStyles();
  const handleChange = (event:any) => {
    setAge(event.target.value);
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
      <div style={{width: '200px', height: '50px'}}>
        {/* <Button
            value={'Support'}
            darkText={false}
            color={ButtonColor.support}
            onClick={onSupport}
          /> */}
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
      </div>
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
            value={age}
            label="Menu"
            onChange={handleChange}
          >
            <MenuItem value={"settings"}>Settings</MenuItem>
            <MenuItem value={"manageKids"}>Manage Kids</MenuItem>
            <MenuItem value={"signOut"}>Sign Out</MenuItem>
          </Select>
        </FormControl>
        <Avatar sx={{ bgcolor: '#22BAAF', height:'60px', width:'60px', marginLeft: '15px'}} alt="Remy Sharp" src={avatar} />
      </NameAvatarGroup>
    </Container>
  );
};

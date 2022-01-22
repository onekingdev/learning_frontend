import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useStyles } from './Style';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import {ButtonColor} from '../../Color';
import {Button as ButtonText} from '../../atoms/Text/Button';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import { PackagePanel } from '../../molecules/PackagePanel/PackagePanel'
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { ParentPgStepper } from '../../molecules/ParentPgStepper/ParentPgStepper';
import SocratesImg from '../../assets/socrates.svg'
import { Container, FormContainer, ContactContainer, Title, ContactHeader, ContactBody } from './Style'
const NewAccount: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const language = 'en';

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
      userName: null,
      password: null,
      confPassword: null
  });

  const handleFormChange = (field: string, errMsg: string) => {
    setValidateMsg({...validateMsg, [field]: errMsg})
  }

  const handleCreate = () => {
    if(!formValidation()) return;
    console.log("validation ok")
  }

  const formValidation = () => {
      const validateMsgTemp = {...validateMsg}
      let valiResult = true;
      for(const key in validateMsg) {
        if(validateMsg[key] === null) {
            validateMsgTemp[key] = "Field is required";
        }
        if(validateMsgTemp[key]) valiResult = false;
      }
      setValidateMsg(validateMsgTemp);
      return valiResult;
  }

  useEffect(() => {
  }, []);

  return (
        <ParentPgContainer onlyLogoImgNav={true}>
          <>
            <ParentPgStepper step={2}/>
            <Container>
                <FormContainer>
                    <Title>Choose your name and password</Title>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField label="User Name" variant="outlined" fullWidth value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                    handleFormChange("userName",e.target.value.length === 0 ? "Field is required" : "");
                                }}
                                error={!!validateMsg.userName}
                                helperText={validateMsg.userName}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Password" variant="outlined" fullWidth value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    handleFormChange("password",e.target.value.length === 0 ? "Field is required" : "");
                                }}
                                error={!!validateMsg.password}
                                helperText={validateMsg.password}
                                className={classes.input}

                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField label="Confirm Password" variant="outlined" fullWidth value={confPassword}
                                onChange={(e) => {
                                    setConfPassword(e.target.value);
                                    handleFormChange("confPassword",e.target.value.length === 0 ? "Field is required" : password !== e.target.value ? "Password is not matched with confirm password" : "");
                                }}
                                error={!!validateMsg.confPassword}
                                helperText={validateMsg.confPassword}
                                className={classes.input}
                            />
                        </Grid>
                    </Grid>
                    <div className="flex">
                        <Button
                            variant="contained"
                            className={classes.createButton}
                            color="success"
                            onClick={handleCreate}
                        >
                            Create Account
                        </Button>
                    </div>
                    <div className="p-b-95 p-t-30 font-s-15 inline">By clicking Create Account, you aggree to Learn With Socrates’s <div className="font-w-9 inline">User Agreement, Privacy Policy,</div> and  <div className="font-w-9 inline">Cookie Policy</div></div>
                </FormContainer>
                <ContactContainer>
                    <ContactHeader>
                        <img src={SocratesImg} className="p-l-20 p-r-10"/>
                        <div className="font-s-60 line-h-75 font-w-6 text-center p-r-25">Welcome <br />to Socrates</div>
                    </ContactHeader>
                    <ContactBody>
                        <div className="font-w-8 font-s-30 line-h-35 p-b-25">Contact Us</div>
                        <div className="font-w-5 font-s-20 line-h-25 p-b-50">You have any question about your plan?</div>
                        <div className="flex-col">
                            <div className="font-w-7 font-s-35 p-b-20">We're happy to help you</div>
                            <div className="flex justify-space-between">
                                <div className="p-l-10"><u>Contact Us</u></div>
                                <div><u>FAQ</u></div>
                                <div className="p-r-10"><u>Plans</u></div>
                            </div>
                        </div>
                    </ContactBody>
                </ContactContainer>
            </Container>
          </>
        </ParentPgContainer>
  );
};
export default NewAccount;

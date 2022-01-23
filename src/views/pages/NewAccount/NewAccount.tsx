import {FC, useEffect} from 'react';

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
  const language = 'en';
  const classes = useStyles();

  useEffect(() => {
  }, []);
  return (
        <ParentPgContainer onlyLogoImgNav={true}>
          <>
            <ParentPgStepper step={2}/>
            <Container>
                <FormContainer>
                    <Title>Choose your name and password</Title>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField label="User Name" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Password" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField label="Confirm Password" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                        </Grid>
                    </Grid>
                    <div>
                    <Button
                        variant="contained"
                        className={classes.createButton}
                        color="success"
                        onClick={()=>{}}
                    >
                        Create Account
                    </Button>
                    </div>
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

import {FC, useEffect} from 'react';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import {ButtonColor} from '../../Color';
import {Button as ButtonText} from '../../atoms/Text/Button';
import { ParentPgContainer } from '../../../views/molecules/ParentPgContainer/ParentPgContainer'
import { PackagePanel } from '../../../views/molecules/PackagePanel/PackagePanel'


// import {} from './Style';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { ParentPgStepper } from '../../molecules/ParentPgStepper/ParentPgStepper';
import { Container, FormContainer, ContactContainer, Title, ContactHeader, ContactBody } from './Style'
import SocratesImg from '../../assets/socrates.svg'
export const Create: FC = () => {
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
                    <Grid container spacing={5}>
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
                        <img src={SocratesImg} style={{paddingLeft:20, paddingRight: 10}}/>
                        <div style={{fontSize:'60px', lineHeight: '75px', fontWeight: 600, textAlign: 'center', paddingRight: 25}}>Welcome <br />to Socrates</div>
                    </ContactHeader>
                    <ContactBody>
                        <div style={{fontWeight: 800, fontSize: 30, lineHeight: "36px", paddingBottom: '25px'}}>Contact Us</div>
                        <div style={{fontWeight: 500, fontSize:21, lineHeight: "25px", paddingBottom: '50px'}}>You have any question about your plan?</div>
                        <div style={{display: 'flex', flexDirection:'column'}}>
                            <div style={{fontWeight: 700, fontSize:35, paddingBottom: '20px'}}>We're happy to help you</div>
                            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                <div style={{paddingLeft: '10px'}}><u>Contact Us</u></div>
                                <div><u>FAQ</u></div>
                                <div style={{paddingRight: '10px'}}><u>Plans</u></div>
                            </div>
                        </div>
                    </ContactBody>
                </ContactContainer>
            </Container>
          </>
        </ParentPgContainer>
  );
};

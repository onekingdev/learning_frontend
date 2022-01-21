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
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import Avatar from '@mui/material/Avatar';
import { ParentPgStepper } from '../../molecules/ParentPgStepper/ParentPgStepper';
import { Container, FormContainer, ContactContainer, Title, ContactHeader, ContactBody } from './Style'
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
                    </ContactHeader>
                    <ContactBody>
                    </ContactBody>
                </ContactContainer>
            </Container>
          </>
        </ParentPgContainer>
  );
};

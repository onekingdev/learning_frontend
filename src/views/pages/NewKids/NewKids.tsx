import {FC, useEffect} from 'react';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { Title, Tip, Container} from './Style'

const NewKids: FC = () => {

  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const classes = useStyles();

  useEffect(() => {
  }, []);

  return (
        <ParentPgContainer onlyLogoImgNav={false}>
          <Container>
            <Paper elevation={3} className={classes.paper} >
                <Title>Adding a New Kid</Title>
                <Tip>Please introduce the next information</Tip>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField label="KID NAME" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="LAST NAME" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="USER ID OR CHOOSE A NICK NAME" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="PASSWORD" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="CONFIRM PASSWORD" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="GRADE" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            className={classes.createKidButton}
                            color="info"
                            onClick={()=>{}}
                            fullWidth
                        >
                            Create Kid
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            className={classes.nextKidButton}
                            color="warning"
                            onClick={()=>{}}
                            fullWidth
                        >
                            Next Kid
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
          </Container>
        </ParentPgContainer>
  );
};

export default NewKids;

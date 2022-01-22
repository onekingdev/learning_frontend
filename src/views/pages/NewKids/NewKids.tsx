import {FC, useEffect, useState} from 'react';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper'
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { Title, Tip, Container, Welcome, Socrates} from './Style'
import welcome from '../../assets/welcome-kid-new.svg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import socrates from '../../assets/socrates.svg'
import Button from '../../molecules/MuiButton'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';

const NewKids: FC = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const language = 'en';
    const classes = useStyles();

    const [packageName, setPackageName] = useState("Gold")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [grade, setGrade] = useState("");

    const [validateMsg, setValidateMsg] = useState({
        firstName: null,
        lastName: null,
        userId: null,
        password: null,
        confPassword: null,
        grade: null,
    });

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateMsg({...validateMsg, [field]: errMsg})
    }

    const handleCreate = () => {

    }

    const handleNext = () => {
        setValidateMsg({
            firstName: null,
            lastName: null,
            userId: null,
            password: null,
            confPassword: null,
            grade: null,
        })
        setPackageName("Gold")
        setFirstName("")
        setLastName("")
        setUserId("")
        setPassword("")
        setConfPassword("")
        setGrade("")
    }

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
                        {/* <TextField label="Select Your Package" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={packageName}
                            onChange={(e) => {
                                setPackageName(e.target.value);
                                handleFormChange("packageName",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.packageName}
                            helperText={validateMsg.packageName}
                        /> */}
                        <FormControl fullWidth>
                            <InputLabel id="select-package-label">Select Your Package</InputLabel>
                            <Select
                                labelId="select-package-label"
                                id="select-package"
                                value={packageName}
                                label="Select Your Package"
                                onChange={(e) => {
                                    setPackageName(e.target.value);
                                }}
                            >
                                <MenuItem value={"Gold"}>Gold</MenuItem>
                                <MenuItem value={"Combo"}>Combo</MenuItem>
                                <MenuItem value={"Sole"}>Sole</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Child First NAME" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                handleFormChange("firstName",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.firstName}
                            helperText={validateMsg.firstName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Child LAST NAME" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                handleFormChange("lastName",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.lastName}
                            helperText={validateMsg.lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="USER ID OR CHOOSE A NICK NAME" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={userId}
                            onChange={(e) => {
                                setUserId(e.target.value);
                                handleFormChange("userId",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.userId}
                            helperText={validateMsg.userId}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="PASSWORD" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleFormChange("password",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.password}
                            helperText={validateMsg.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="CONFIRM PASSWORD" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={confPassword}
                            onChange={(e) => {
                                setConfPassword(e.target.value);
                                handleFormChange("confPassword",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.confPassword}
                            helperText={validateMsg.confPassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="GRADE" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} value={grade}
                            onChange={(e) => {
                                setGrade(e.target.value);
                                handleFormChange("grade",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.grade}
                            helperText={validateMsg.grade}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Button value="Create Kid" bgColor={ButtonColor.create} onClick={handleCreate}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Button value="Next Kid" bgColor={ButtonColor.nextKid} onClick={handleNext} align="right" />
                    </Grid>
                </Grid>
            </Paper>
            <Welcome src={welcome}></Welcome>
          </Container>
        </ParentPgContainer>
  );
};

export default NewKids;

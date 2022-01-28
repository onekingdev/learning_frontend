import {FC, useEffect, useState} from 'react';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
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
import TextField from '../../molecules/MuiTextField'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
import { HistoryRounded } from '@mui/icons-material';

const NewKids: FC = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const language = 'en';
    const classes = useStyles();

    const [availablePackages, setAvailablePackages] = useState<string[]>([]);
    const [packageName, setPackageName] = useState<string>("Gold");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [grade, setGrade] = useState("");
    const [childNum, setChildNum] = useState(0);
    const [childIdx, setChildIdx] = useState(1)
    const [childs, setChilds] = useState([{}])

    const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
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

    const handlePrev = () => {

    }
    const handleNext = () => {
        if(!formValidation()) return;
        if(childIdx === childNum) {
            saveChild();
            return;
        }

        const temp = [...availablePackages];
        const inex = temp.indexOf(packageName)
        delete temp[inex];
        setAvailablePackages(temp);
        setChilds([...childs, {
            package: packageName,
            firstName: firstName,
            lastName: lastName,
            userId: userId,
            password: password,
            grade: grade,
        }])
        setChildIdx(childIdx+1);
        setValidateMsg({
            firstName: null,
            lastName: null,
            userId: null,
            password: null,
            confPassword: null,
            grade: null,
        })
        setPackageName(temp[0])
        setFirstName("")
        setLastName("")
        setUserId("")
        setPassword("")
        setConfPassword("")
        setGrade("")
    }

    const saveChild = () => {
        history.push('/kids/list')
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
    setAvailablePackages(["Gold","Sole","Combo"])
    setChildNum(2);
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
                                className={classes.select}
                                onChange={(e) => {
                                    setPackageName(e.target.value);
                                }}
                            >
                                {availablePackages.map((value, index) => (
                                    <MenuItem value={value} key={index}>{value}</MenuItem>

                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Child First NAME"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                handleFormChange("firstName",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.firstName}
                            helperText={validateMsg.firstName}
                            value={firstName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Child LAST NAME"
                            onChange={(e) => {
                                setLastName(e.target.value);
                                handleFormChange("lastName",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.lastName}
                            helperText={validateMsg.lastName}
                            value={lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="USER ID OR CHOOSE A NICK NAME"
                            onChange={(e) => {
                                setUserId(e.target.value);
                                handleFormChange("userId",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.userId}
                            helperText={validateMsg.userId}
                            value={userId}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="PASSWORD"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleFormChange("password",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.password}
                            helperText={validateMsg.password}
                            value={password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="CONFIRM PASSWORD"
                            onChange={(e) => {
                                setConfPassword(e.target.value);
                                handleFormChange("confPassword",e.target.value.length === 0 ? "Field is required" : e.target.value !== password ? "Confirm password in not matched with password":"");
                            }}
                            error={!!validateMsg.confPassword}
                            helperText={validateMsg.confPassword}
                            value={confPassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="GRADE"
                            onChange={(e) => {
                                setGrade(e.target.value);
                                handleFormChange("grade",e.target.value.length === 0 ? "Field is required" : "");
                            }}
                            error={!!validateMsg.grade}
                            helperText={validateMsg.grade}
                            value={grade}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        {childIdx > 1 &&(<Button value="Previous Kid" bgColor={ButtonColor.create} onClick={handlePrev}/>)}
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Button value={childNum !== childIdx ? "Next Kid" : "Finish"} bgColor={childNum !== childIdx ? ButtonColor.nextKid : ButtonColor.create} onClick={handleNext} align="right" />
                    </Grid>
                </Grid>
            </Paper>
            <Welcome src={welcome}></Welcome>
          </Container>
        </ParentPgContainer>
  );
};

export default NewKids;

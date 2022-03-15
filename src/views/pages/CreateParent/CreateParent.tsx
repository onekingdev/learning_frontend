import { FC, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'views/molecules/MuiButton';
import TextField from 'views/molecules/MuiTextField';
import Grid from '@mui/material/Grid';
import { BasicColor } from 'views/Color';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import * as TYPES from 'app/types';
import { ParentPgStepper } from 'views/molecules/ParentPgStepper/ParentPgStepper';
import SocratesImg from 'views/assets/socrates.svg';
import {
  Container,
  FormContainer,
  ContactContainer,
  Title,
  ContactHeader,
  ContactBody,
} from './Style';
import mutationFetch from '../../../api/mutations/get';
import { CREATE_GUARDIAN } from '../../../api/mutations/guardians';
import { createGuardian } from '../../../app/actions/guardianActions'
import { useSnackbar } from 'notistack';
import { LoadingContext } from 'react-router-loading';

const CreateParent: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  const language = 'en';

  useEffect(() => {
    console.log('use effect')
    loadingContext.done()
  }, [])

  //   const handleClickVariant = (variant: VariantType) => () => {
  //     // variant could be success, error, warning, info, or default
  //   };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [validateMsg, setValidateMsg] = useState<{[key: string]: any}>({
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    password: null,
    confPassword: null,
  });
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  function validateEmail (email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleFormChange = (field: string, errMsg: string) => {
    setValidateMsg({...validateMsg, [field]: errMsg});
  };

  const handleCreate = async () => {
    if (!formValidation()) return;

    setLoading(true);
    const result: any = await createGuardian(email, firstName, lastName, userName, password,couponCode, dispatch)
    setLoading(false);

    if(!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return;
    }
    history.push('/parent/payment');

  };

  const formValidation = () => {
    const validateMsgTemp = {...validateMsg};
    let valiResult = true;
    for (const key in validateMsg) {
      if (validateMsg[key] === null) {
        validateMsgTemp[key] = 'Field is required';
      }
      if (validateMsgTemp[key]) valiResult = false;
    }
    setValidateMsg(validateMsgTemp);
    return valiResult;
  };

  useEffect(() => {
    if (!errMsg) return;
  }, [errMsg]);

  return (
    <ParentPgContainer onlyLogoImgNav={true}>
      <>
        <ParentPgStepper step={2} />
        <Container>
          <FormContainer>
            <Title>Choose your name and password</Title>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  onChange={e => {
                    setEmail(e.target.value);
                    handleFormChange(
                      'email',
                      e.target.value.length === 0 ? 'Field is required' : !validateEmail(e.target.value) ? 'This is not email address' : ''
                    );
                  }}
                  error={!!validateMsg.email}
                  helperText={validateMsg.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  onChange={e => {
                    setUserName(e.target.value);
                    handleFormChange(
                      'firstName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.firstName}
                  helperText={validateMsg.firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  onChange={e => {
                    setUserName(e.target.value);
                    handleFormChange(
                      'lastName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.lastName}
                  helperText={validateMsg.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="User Name"
                  onChange={e => {
                    setUserName(e.target.value);
                    handleFormChange(
                      'userName',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.userName}
                  helperText={validateMsg.userName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  onChange={e => {
                    setPassword(e.target.value);
                    handleFormChange(
                      'password',
                      e.target.value.length === 0 ? 'Field is required' : ''
                    );
                  }}
                  error={!!validateMsg.password}
                  helperText={validateMsg.password}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  onChange={e => {
                    setConfPassword(e.target.value);
                    handleFormChange(
                      'confPassword',
                      e.target.value.length === 0
                        ? 'Field is required'
                        : password !== e.target.value
                        ? 'Password is not matched with confirm password'
                        : ''
                    );
                  }}
                  error={!!validateMsg.confPassword}
                  helperText={validateMsg.confPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="COUPON CODE"
                  onChange={e => {
                    setCouponCode(e.target.value);
                  }}
                  value={couponCode}
                  type="special code"
                />
              </Grid>
            </Grid>
            <div className="flex">
              <Button
                bgColor={BasicColor.green}
                onClick={handleCreate}
                value="Create Account"
                margin="45px 0 0 0"
                loading={loading}
              />
            </div>
            <div className="p-b-95 p-t-30 font-s-15 inline">
              By clicking Create Account, you aggree to Learn With Socrates’s{' '}
              <div className="font-w-9 inline">
                User Agreement, Privacy Policy,
              </div>{' '}
              and <div className="font-w-9 inline">Cookie Policy</div>
            </div>
          </FormContainer>
          <ContactContainer>
            <ContactHeader>
              <img src={SocratesImg} className="p-l-20 p-r-10" />
              <div className="font-s-60 line-h-75 font-w-6 text-center p-r-25">
                Welcome <br />
                to Socrates
              </div>
            </ContactHeader>
            <ContactBody>
              <div className="font-w-8 font-s-30 line-h-35 p-b-25">
                Contact Us
              </div>
              <div className="font-w-5 font-s-20 line-h-25 p-b-50">
                You have any question about your plan?
              </div>
              <div className="flex-col">
                <div className="font-w-7 font-s-35 p-b-20">
                  We're happy to help you
                </div>
                <div className="flex justify-space-between">
                  <div className="p-l-10">
                    <u>Contact Us</u>
                  </div>
                  <div>
                    <u>FAQ</u>
                  </div>
                  <div className="p-r-10">
                    <u>Plans</u>
                  </div>
                </div>
              </div>
            </ContactBody>
          </ContactContainer>
        </Container>
      </>
    </ParentPgContainer>
  );
};
export default CreateParent;

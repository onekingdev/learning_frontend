import { FC, useEffect, useState, useContext } from 'react';
import { LoadingContext } from 'react-router-loading';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import TextField from 'views/molecules/MuiTextField';
import { BasicColor } from 'views/Color';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { Country } from 'country-state-city';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import commonDictionary from 'constants/commonDictionary'
import { Box, Typography } from '@mui/material';
import ContactBox from 'views/organisms/ContactBox';
import FormContainer from 'views/atoms/FormContainer';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import LoadingButton from '@mui/lab/LoadingButton';
import FormBottomDescription from 'views/organisms/FormBottomDescription';
import {
  useMutation,
} from '@tanstack/react-query'
import { SCHOOL_TYPES } from 'constants/common';
import { doAddSchool } from 'app/actions';
import { makeStyles } from '@mui/styles'
import { SCHOOL_SET_DATA } from 'app/types';

export const styles = makeStyles({
  select: {
    '&.MuiOutlinedInput-root': {
      borderRadius: '25px',
      backgroundColor: BasicColor.white,
    },
    '& fieldset': {
      borderColor: BasicColor.brightBlue,
      borderWidth: '2px'
    }
  },
});

interface MutationProps {
  country: string,
  district: string,
  schoolName: string,
  schoolType: string,
  zip: string,
  couponCode: string,
  token: string
}

const AddSchool: FC = () => {
  const isMobile = useSocratesMediaQuery('xs')
  const countries = Country.getAllCountries()
  const classes = styles();
  const dispatch = useDispatch();

  const loadingContext = useContext(LoadingContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [schoolType, setSchoolType] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState(countries[232])
  const [district, setDistrict] = useState('')
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState('')

  const { language, token } = useSelector((state: any) => state.user);

  const addSchool = useMutation(({ country, district, schoolType, zip, couponCode, schoolName, token }: MutationProps) => doAddSchool(
    country, district, schoolName, schoolType, zip, couponCode, token
  ), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      } else {
        dispatch({
          type: SCHOOL_SET_DATA,
          payload: data.school
        })
        history.push('/teacher/payment/School')
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })


  // const [confPassword, setConfPassword] = useState('');
  const [validateMsg, setValidateMsg] = useState<{ [key: string]: any }>({
    schoolName: null,
    district: null,
    schoolType: null,
    zip: null,
    Country: '',
  });


  useEffect(() => {
    onPageInit();
  }, [])

  const onPageInit = async () => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    loadingContext.done();

  }

  const handleFormChange = (field: string, errMsg: string) => {
    setValidateMsg({ ...validateMsg, [field]: errMsg });
  };

  const handleCreate = async () => {
    if (!formValidation()) return;

    setLoading(true)
    addSchool.mutate({
      country: country.name,
      couponCode,
      schoolName,
      schoolType,
      zip,
      token,
      district
    })
  };

  const formValidation = () => {
    const validateMsgTemp = { ...validateMsg };
    let valiResult = true;
    for (const key in validateMsg) {
      if (validateMsg[key] === null) {
        validateMsgTemp[key] = commonDictionary[language]?.fieldIsRequired;
      }
      if (validateMsgTemp[key]) valiResult = false;
    }
    setValidateMsg(validateMsgTemp);
    return valiResult;
  };

  return (
    <TeacherPgContainer onlyLogoImgNav={true}>
      <Box
        display='flex'
        justifyContent={'center'}
      >
        <FormContainer isMobile={isMobile}>
          <Typography variant='h4'>{'Add School'}</Typography>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12}>
              <TextField
                label={commonDictionary[language]?.school}
                onChange={e => {
                  setSchoolName(e.target.value);
                  handleFormChange(
                    'schoolName',
                    e.target.value?.length === 0 ? commonDictionary[language]?.fieldIsRequired : ''
                  );

                }}
                error={!!validateMsg.schoolName}
                helperText={validateMsg.schoolName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'district'}
                onChange={e => {
                  setDistrict(e.target.value);
                  handleFormChange(
                    'district',
                    e.target.value?.length === 0 ? commonDictionary[language]?.fieldIsRequired : ''
                  );

                }}
                error={!!validateMsg.district}
                helperText={validateMsg.district}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="select-schoolType-label">
                  {'School Type'}
                </InputLabel>
                <Select
                  labelId="select-schoolType-label"
                  id="select-schoolType"
                  // value={countries[countries.findIndex((item: any) => item.name === schoolType.name)]}
                  label={'School Type'}
                  className={`${classes.select} err-border`}
                  // className={`${classes.select} err-border`}
                  onChange={async (e: any) => {
                    setSchoolType(e.target.value);
                    handleFormChange('schoolType', e.target.value?.length === 0 ? commonDictionary[language]?.fieldIsRequired : '');
                  }}
                  value={schoolType || ''}
                  sx={
                    validateMsg.schoolType
                      ? {
                        '& fieldset': {
                          borderColor: `${BasicColor.red} !important`,
                        },
                      }
                      : {}
                  }
                  displayEmpty={true}
                >
                  {SCHOOL_TYPES.map((value: any) => (
                    <MenuItem value={value} key={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                <div className="err-text">{validateMsg.schoolType}</div>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={'Zip/Postal Code'}
                onChange={e => {
                  setZip(e.target.value);
                  handleFormChange(
                    'zip',
                    e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : ''
                  );
                }}
                error={!!validateMsg.zip}
                helperText={validateMsg.zip}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="select-country-label">
                  {'Select a Country'}
                </InputLabel>
                <Select
                  labelId="select-country-label"
                  id="select-country"
                  value={countries[countries.findIndex((item: any) => item.name === country.name)]}
                  label={'Select a Country'}
                  className={`${classes.select} err-border`}
                  // className={`${classes.select} err-border`}
                  onChange={async (e: any) => {
                    handleFormChange('country', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '');
                    setCountry(e.target.value)
                  }}
                  sx={
                    validateMsg.country
                      ? {
                        '& fieldset': {
                          borderColor: `${BasicColor.red} !important`,
                        },
                      }
                      : {}
                  }
                  displayEmpty={true}
                >
                  {countries.map((value: any, index: number) => (
                    <MenuItem value={value} key={index}>
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
                <div className="err-text">{validateMsg.country}</div>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Coupon Code'}
                onChange={e => {
                  setCouponCode((e.target.value).toUpperCase());
                }}
                value={couponCode}
                type="special code"
              />
            </Grid>
          </Grid>
          <LoadingButton
            sx={{ marginTop: 5 }}
            variant='contained'
            color='aqua'
            onClick={handleCreate}
            loading={loading}
          > {commonDictionary[language]?.submit}</LoadingButton>
          <FormBottomDescription language={language} />
        </FormContainer>
        <ContactBox language={language} />
      </Box>
    </TeacherPgContainer>
  );
};
export default AddSchool;

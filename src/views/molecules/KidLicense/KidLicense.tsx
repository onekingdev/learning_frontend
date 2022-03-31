import logo                           from 'views/assets/logo-learn-white.svg'
import styled                         from 'styled-components';
import socrates                       from 'views/assets/socrates.svg'
import TextField                      from 'views/molecules/MuiTextField'
import { LicenseHeader, LicenseBody } from './Style'
import QRCode                         from 'react-qr-code';
import { LSGridRow, LSText }          from 'views/molecules/Setting/utils/Style';
import { Grid }             from '@mui/material';
import { TypoGeneralText }  from 'views/atoms/Text';
import { BasicColor}        from 'views/Color';
import { ScreenSize }       from 'constants/screenSize';

const License = (props: any) => {
    return (
      <ResponsiveLicense id="license">
        <LicenseHeader>
          <Img src={ logo } />
          <LSText fontSize={25} >
            LEARNING LICENSE
          </LSText>
        </LicenseHeader>
        <LicenseBody>
          <div className="flex justify-space-between align-center">
            <Img src={socrates} />
            <div className="flex flex-col h-full justify-space-between">
              <DialogTextField
                label="Member Since"
                value={typeof(props?.membership) === 'object' ? `${props.membership.getFullYear()}-${props.membership.getMonth() + 1}-${props.membership.getDate()}` : ''}
                // onChange={(e) => updateUsername(e.target.value)}
              />
              <DialogTextField
                label="User Name"
                value={props?.username}
                // onChange={(e) => updateUsername(e.target.value)}
              />
            </div>
            <div >
              <QRCode value={props?.username} size={100} />
            </div>
          </div>
          <div className="flex align-center">
            <Grid container>
              <LSGridRow item md={4} xs={12}>
                {/* <LicenseUsername> */}
                <Username >
                  {props?.parentName}
                </Username>
                {/* </LicenseUsername> */}
              </LSGridRow>
              <LSGridRow item md={8} xs={12} justifyContent='center'>
                <TypoGeneralText style={{ textAlign:'center'}}>
                  www.learnwithsocrates.com
                </TypoGeneralText>
              </LSGridRow>
            </Grid>
          </div>
        </LicenseBody>
      </ResponsiveLicense>
    )
}

export default License

const ResponsiveLicense = styled.div`
width: 100%;
heigth: 100%;
display: flex;
flex-direction: column;
@media screen and (max-width: 540px) {
  font-size: 1em;
  padding: 0;
  margin: 0;
}
`

const Img = styled.img`
@media screen and (max-width: 540px) {
  width: 40%;
}
`
const Username = styled(TypoGeneralText)`
  color: white;
  text-align: center;
  background: ${BasicColor.green};
  padding: 3px 6px;
  border-radius: 5px;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 60vw;
  }
`
const DialogTextField = styled(TextField)`
&.MuiTextField-root {
  margin-top: 10px;
}
@media screen and (max-width: 540px) {
  width: 30%;
}
`

import logo from '../../assets/logo-learn-white.svg'
import styled from 'styled-components';
import socrates from '../../assets/socrates.svg'
import TextField from '../MuiTextField'
import { LicenseHeader, LicenseBody, LicenseUsername} from './Style'
import QRCode from "react-qr-code";
import { LSText } from '../Setting/utils/Style';

const License = (props: any) => {
    return (
      <ResponsiveLicense id="license">
        <LicenseHeader>
          <Img src={ logo } />
          <LSText fontSize={13}>
          LEARNING LICENSE
          </LSText>
        </LicenseHeader>
        <LicenseBody>
          <div className="flex justify-space-between align-center">
            <Img src={socrates} />
            <div className="flex flex-col h-full justify-space-between">
              <DialogTextField
                label="Member Since"
                value={`${props.membership.getFullYear()}-${props.membership.getMonth() + 1}-${props.membership.getDate()}`}
                // onChange={(e) => updateUsername(e.target.value)}
              />
              <DialogTextField
                label="User Name"
                value={props.username}
                // onChange={(e) => updateUsername(e.target.value)}
              />
            </div>
            <div >
              <QRCode value={props.username} size={100} />
            </div>
          </div>
          <div className="flex align-center">
            <LicenseUsername>{props.parentName}</LicenseUsername>
            <div>
              www.learnwithsocrates.com
            </div>
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
const DialogTextField = styled(TextField)`
&.MuiTextField-root {
  margin-top: 10px;
}
@media screen and (max-width: 540px) {
  width: 30%;
}
`

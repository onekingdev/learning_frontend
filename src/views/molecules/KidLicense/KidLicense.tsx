import logo from '../../assets/logo-learn-white.svg'
import socrates from '../../assets/socrates.svg'
import TextField from '../MuiTextField'
import { LicenseHeader, LicenseBody, LicenseUsername} from './Style'
import QRCode from "react-qr-code";

const License = (props: any) => {
    return (
      <div className="flex flex-col w-600 h-400" id="license">
        <LicenseHeader>
          <img src={ logo } className='p-b-15'/>
          LEARNING LICESNE
        </LicenseHeader>
        <LicenseBody>
          <div className="flex justify-space-between align-center">
            <img src={socrates} />
            <div className="flex flex-col h-full justify-space-around">
              <TextField
                label="Member Since"
                value={`${props.membership.getFullYear()} - ${props.membership.getMonth() + 1} - ${props.membership.getDate()}`}
                // onChange={(e) => updateUsername(e.target.value)}
              />
              <TextField
                label="User Name"
                value={props.username}
                // onChange={(e) => updateUsername(e.target.value)}
              />
            </div>
            <div className="flex align-center justify-center">
              <QRCode value={props.username} size={150} style={{padding: "10px"}}/>
            </div>
          </div>
          <div className="flex align-center">
            <LicenseUsername>{props.parentName}</LicenseUsername>
            <div className="flex justify-center align-center">
              www.learnwithsocrates.com
            </div>
          </div>
        </LicenseBody>
      </div>
    )
}

export default License

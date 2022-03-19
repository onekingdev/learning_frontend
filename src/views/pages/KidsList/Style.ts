import styled from 'styled-components';
import { makeStyles } from '@mui/styles'
import titleBg from 'views/assets/title-kids-background.png'
import { BasicColor } from 'views/Color';

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 45vw;
  justify-content:space-between;
  padding-top:80px;
  font-size:30px;
`;

export const Avatar = styled.img`
  cursor: pointer;
  width: 85px;
  height: 95px;
`;

export const LicenseButton = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const LicenseHeader = styled.div`
  background-color: ${BasicColor.blue};
  color: ${BasicColor.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 33px;
  padding: 25px;
  border-radius: 10px 10px 0px 0px;
`;

export const LicenseBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color:${BasicColor.gray20};
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  padding: 35px;
`;

export const LicenseBottom = styled.div`
`;

export const LicenseUsername = styled.div`
  font-size: 25px;
  weight: 600;
  line-height: 31px;
  background-color: ${BasicColor.green};
  color: ${BasicColor.white};
  padding: 5px 11px 5px 11px;
  margin-right: 45px;
  margin-top: 10px;
  border-radius: 5px;
  width: 110px;
  min-height: 35px;
`

export const Title = styled.div`
  font-Size: 40px;
  line-height: 50px;
  font-family: Montserrat;
  font-weight: 700;
  color: white;
  width: 385px;
  height: 81px;
  background: url(${titleBg}) no-repeat center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  margin-bottom: 3vh;
  @media screen and (max-width: 540px) {
    width: 60%;
    font-size: 32px;
  }
`
export const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;
  z-index: 10;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const useStyles = makeStyles({
  select: {
    '&.MuiOutlinedInput-root' : {
      borderRadius: '25px',
    },
    '& fieldset' : {
      borderColor: BasicColor.brightBlue,
      borderWidth: '2px'
    }
  },
});

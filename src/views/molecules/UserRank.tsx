import { FC }           from 'react';
import styled           from 'styled-components';
import { Button }       from 'views/atoms/Text/Button';
import { UserIcon }     from 'views/atoms/UserIcon';
import { ScreenSize }   from 'constants/screenSize';
import { ImageAvatar }   from 'views/molecules/Avatar/DefaultAvatar';

type UserRankProps = {
  userRank: number;
  userName: string;
  userHead?: string;
  userAccessory?: string;
  userIcon?: string;
  userClothes?: string;
};

interface UserRankTreasureTrackProps extends UserRankProps {
  active?: boolean;
  coinsEarned?: string | number;
  additionalPl?: string;
}

export const UserRank: FC<UserRankProps> = ({userRank, userName, userIcon}) => {
  return (
    <>
      <UserRankStyles>
        <Button isDark={true}>#{userRank}</Button>
        {/* <UserIcon src={userIcon} /> */}
        <Button isDark={true}>{userName}</Button>
      </UserRankStyles>
    </>
  );
};

export const UserRankTreasureTrack: FC<UserRankTreasureTrackProps> = ({userRank, userName, userHead, userAccessory, userClothes, active=false, coinsEarned='0', additionalPl='' }) => {
  return (
    <tr>
      <td>
        #{ userRank }
      </td>
      <td>
        <div style={{
          width: 70,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1000px",
          border: "1px solid gray",
          fontSize: "1.5rem",
          overflow: "hidden"
        }}>
        { userHead ? <ImageAvatar
          firstName={""}
          lastName={userName}
          head={{
            image: userHead || ""
          }}
          accessory={{
            image: userAccessory || ""
          }}
          clothes={{
            image: userClothes || ""
          }}
          size={70}
        /> : userName[0].toUpperCase()
        }
        </div>
      </td>
      <td style={{}}>
      { active ? <div>You</div> : <div>{ userName }</div> }
      </td>
      <td style={{
        fontSize: "0.8rem"
      }}>
      { coinsEarned } COINS <br />EARNED
      </td>
    </tr>
  )
  // return active ? (
  //   <>
  //     <UserRankTreasureTrackStyles1
  //       pl={"10px"}
  //     >
  //       <Button style={{
  //         width: "20px"
  //       }} isDark={true}>#{userRank}</Button>
  //       { userHead ? <ImageAvatar
  //         firstName={""}
  //         lastName={userName}
  //         head={{
  //           image: userHead || ""
  //         }}
  //         accessory={{
  //           image: userAccessory || ""
  //         }}
  //         size={70}
  //       /> : <div style={{
  //         width: 70,
  //         height: 70,
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         borderRadius: "1000px",
  //         border: "1px solid gray",
  //         fontSize: "1.5rem"
  //       }}>
  //         { userName[0].toUpperCase() }
  //       </div> }
  //       <Button style={{
  //         width: "120px",
  //         textAlign: "center",
  //       }} fontSize='24px' isDark={true}>YOU</Button>
  //       <Button fontSize='12px' isDark={true}>{coinsEarned} COINS <br />EARNED</Button>
  //     </UserRankTreasureTrackStyles1>
  //   </>
  // ) : (
  //   <>
  //     <UserRankTreasureTrackStyles1
  //       pl={"10px"}
  //     >
  //       <Button style={{
  //         width: "20px"
  //       }} isDark={true}>#{userRank}</Button>
  //       { userHead ?
  //       <ImageAvatar
  //         firstName={""}
  //         lastName={userName}
  //         head={{
  //           image: userHead || ""
  //         }}
  //         accessory={{
  //           image: userAccessory || ""
  //         }}
  //         size={70}
  //       /> : <div style={{
  //         width: 70,
  //         height: 70,
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         borderRadius: "1000px",
  //         border: "1px solid gray",
  //         fontSize: "1.5rem"
  //       }}>
  //         { userName[0].toUpperCase() }
  //       </div> }
  //       <Button style={{
  //         width: "120px",
  //         textAlign: "center",
  //       }} isDark={true}>{userName}</Button>
  //       <Button fontSize='12px' isDark={true}>{coinsEarned} COINS <br />EARNED</Button>
  //     </UserRankTreasureTrackStyles1>
  //   </>
  // );
};

const UserRankStyles = styled.div`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding: 3px 0;
  display: grid;
  grid-template-columns: 40px 1fr 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`;

type IUserRankTreasureTrackStyles = {
  pl?: string;
}

const UserRankTreasureTrackStyles1 = styled(UserRankStyles)<IUserRankTreasureTrackStyles>`
  display: flex;
  justify-content: center;
  margin-left: 0px;
  width: 100%;
  @media (max-width: ${ScreenSize.desktop}) {
    padding-left: 0px;
    width: 100%;
  }
  @media (max-width: ${ScreenSize.phone}) {
  }
`;

const UserRankTreasureTrackStyles = styled(UserRankStyles)<IUserRankTreasureTrackStyles>`
  grid-template-columns: 40px 1fr 1fr 4fr;
  margin-left: 16px;
  padding-left: ${ props => props.pl ? props.pl : '0px'};
  width: ${ props => props.pl ? `calc(100% - ${parseInt(props.pl.slice(0,-2)) + 16}px)` : 'calc(100% - 16px)'};
  @media (max-width: ${ScreenSize.desktop}) {
    padding-left: 0px;
    width: 100%;
  }
  @media (max-width: ${ScreenSize.phone}) {
    margin-left: 5px;
    grid-template-columns: 35px 1fr 1fr 4fr;
  }
`;

const UserRankTreasureTrackStylesActive = styled(UserRankStyles)`
  grid-template-columns: 40px 1fr 1fr 4fr;
  padding-left: 6px;
  background: #21B95C33;
  width: calc(100% - 6px);
  @media (max-width: ${ScreenSize.desktop}) {
    padding-left: 16px;
    width: 100%;
  }
  @media (max-width: ${ScreenSize.phone}) {
    padding-left: 5px;
    grid-template-columns: 35px 1fr 1fr 4fr;
  }
`;

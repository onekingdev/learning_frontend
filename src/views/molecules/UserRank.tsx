import { FC }           from 'react';
import styled           from 'styled-components';
import { Button }       from 'views/atoms/Text/Button';
import { UserIcon }     from 'views/atoms/UserIcon';
import { ScreenSize }   from 'constants/screenSize';
import { ImageAvatar }   from 'views/molecules/Avatar/DefaultAvatar';

type UserRankProps = {
  userRank: number;
  userName: string;
  userIcon: string;
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
        <UserIcon src={userIcon} />
        <Button isDark={true}>{userName}</Button>
      </UserRankStyles>
    </>
  );
};

export const UserRankTreasureTrack: FC<UserRankTreasureTrackProps> = ({userRank, userName, userIcon, active=false, coinsEarned='0', additionalPl='' }) => {
  return active ? (
    <>
      <UserRankTreasureTrackStyles1
        pl={"10px"}
      >
        <Button isDark={true}>#{userRank}</Button>
        { userIcon ? <ImageAvatar
          firstName={""}
          lastName={userName}
          head={{
            image: userIcon || ""
          }}
          size={70}
        /> : <div style={{
          width: 70,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1000px",
          border: "1px solid gray",
          fontSize: "1.5rem"
        }}>
          { userName[0].toUpperCase() }
        </div> }
        <Button fontSize='24px' isDark={true}>YOU</Button>
        <Button fontSize='12px' isDark={true}>{coinsEarned} COINS EARNED</Button>
      </UserRankTreasureTrackStyles1>
    </>
  ) : (
    <>
      <UserRankTreasureTrackStyles1
        pl={"10px"}
      >
        <Button isDark={true}>#{userRank}</Button>
        { userIcon ?
        <ImageAvatar
          firstName={""}
          lastName={userName}
          head={{
            image: userIcon || ""
          }}
          size={70}
        /> : <div style={{
          width: 70,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1000px",
          border: "1px solid gray",
          fontSize: "1.5rem"
        }}>
          { userName[0].toUpperCase() }
        </div> }
        <Button isDark={true}>{userName}</Button>
        <Button fontSize='12px' isDark={true}>{coinsEarned} COINS EARNED</Button>
      </UserRankTreasureTrackStyles1>
    </>
  );
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
  grid-template-columns: 40px 70px calc(50% - 68px) calc(50% - 68px);
  margin-left: 0px;
  width: 100%;
  @media (max-width: ${ScreenSize.desktop}) {
    padding-left: 0px;
    width: 100%;
  }
  @media (max-width: ${ScreenSize.phone}) {
    grid-template-columns: 35px 70px calc(50% - 50px) calc(50% - 50px);
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

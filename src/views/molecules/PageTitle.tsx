import { FC }         from 'react';
import styled         from 'styled-components';
import ribbon         from 'views/assets/ribbon.svg';
import { ScreenSize } from 'constants/screenSize';
import { TypoHeader } from 'views/atoms/Text';
import dark_green_ribbon_sharp from 'views/assets/others/dark_green_ribbon_sharp.svg'
import blue_ribbon from 'views/assets/title-kids-background.png';
import { BasicColor } from 'views/Color';

export const PageTitle: FC<{title: string}> = ({title}) => {
  return (
    <CardTitle>
      <TypoHeader style={{margin: 0}}>{title}</TypoHeader>
    </CardTitle>
  );
};
export const ParentPageTitle: FC<{title: string}> = ({title}) => {
  return (
    <ParentTitleContainer>
      <TypoHeader style={{margin: 0, color: 'white'}}>{title}</TypoHeader>
    </ParentTitleContainer>
  );
};
export const TeacherPageTitle: FC<{title: string}> = ({title}) => {
  return (
    <TeacherTitleContainer>
      <TypoHeader style={{margin: 0, color: 'white'}}>{title}</TypoHeader>
    </TeacherTitleContainer>
  );
};

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 25px 50px;
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 10px 0 10px 0;
    background-image: none;
    background-color: orange;
  }
`;

const TeacherTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${dark_green_ribbon_sharp});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
    background-image: none;
    background-color: ${BasicColor.darkGreen};
  }
`;

const ParentTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${blue_ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
    background-image: none;
    background-color: ${BasicColor.blue};
  }
`;

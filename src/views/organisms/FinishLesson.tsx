import {FC} from 'react';
import styled from 'styled-components';
import {GeneralText} from '../atoms/Text/GeneralText';
import finishLesson from '../assets/finish-lesson.svg';
import {BasicColor, ButtonColor} from '../Color';
import {Icon} from '../atoms/Icon/Icon';
import energyIcon from '../assets/lightning.svg';
import {IconSize} from '../atoms/Icon/Size';
import {ButtonWrapper} from '../atoms/ButtonWrapper';
import {Button} from '../atoms/Text/Button';
import {ScreenSize} from '../screenSize';

type FinishLessonProps = {
  tokens: number;
  energy: number;
};

export const FinishLesson: FC<FinishLessonProps> = ({tokens, energy}) => {
  return (
    <>
      <FinishLessonStyle>
        <GeneralText isDark={true}>You finish your lessons!</GeneralText>
        <FinishLessonImage src={finishLesson} />
        <FinishLessonTextContainer>
          <GeneralText isDark={true}>Lesson Complete</GeneralText>
          <GeneralText>
            <GreenText>+{tokens} token</GreenText>
          </GeneralText>
        </FinishLessonTextContainer>
        <FinishLessonTextContainer>
          <GeneralText isDark={true}>Bonus</GeneralText>
          <GeneralText>
            <GreenText>+{energy}</GreenText>
          </GeneralText>
          <Icon image={energyIcon} size={IconSize.small} />
          <GeneralText>
            <GreenText>of energy</GreenText>
          </GeneralText>
        </FinishLessonTextContainer>
        <FinishLessonButtonContainer>
          <ButtonWrapper bgColor={ButtonColor.next}>
            <Button>Next Lesson</Button>
          </ButtonWrapper>
        </FinishLessonButtonContainer>
      </FinishLessonStyle>
    </>
  );
};

const FinishLessonStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;

  background-color: ${BasicColor.white};
  @media screen and (min-width: ${ScreenSize.tablet}) {
    border-radius: 75px;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
    width: 530px;
    padding: 10px;
  }
`;
const FinishLessonImage = styled.img`
  width: 190px;
  margin: 10px 0;
`;
const GreenText = styled.div`
  color: ${BasicColor.greenSoft};
  margin-left: 3px;
`;
const FinishLessonTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const FinishLessonButtonContainer = styled.div`
  width: 50%;
  margin: 10px auto;
`;

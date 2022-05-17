import { FC } from 'react';
import { Question } from 'views/atoms/Text/Question';
import playQuestionSound from 'views/assets/play-sound.svg'
import { Box, Container } from '@mui/material';
import { QuestionEquation } from './QuestionEquation';


interface QuestionBoxTitleProps {
  title: string
  audioFile: string
}

export const QuestionBoxTitle: FC<QuestionBoxTitleProps> = ({
  title,
  audioFile,
}) => {
  const readQuestionAudioAsset = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  const extractQuestion = (str: string) => {

    const firstBracketIndex = str.indexOf('$')
    return str.slice(1, firstBracketIndex)
  }

  const extractMathjaxText = (str: string) => {
    const regex = /(?<=\$).+?(?=\$)/g
    const matches = str.match(regex)
    return matches ? matches[0] : ''
  }

  return (
    <Container sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
        <Question>
          {title.charAt(0) === '@' ? extractQuestion(title) : title}
        </Question>
        {
          audioFile ?
            <img
              src={playQuestionSound}
              onClick={() => {
                readQuestionAudioAsset();
              }}
              style={{
                cursor: 'pointer'
              }}
            /> : null
        }
      </Box>
      {
        title.charAt(0) === '@' && <QuestionEquation tex={extractMathjaxText(title)} />
      }
    </Container>
  );
};

import { FC } from 'react';
import playQuestionSound from 'views/assets/play-sound.svg'
import { Box, Container, Typography } from '@mui/material';
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
    // const regex = /(?:\$).+?(?=\$)/g    //changed because of IPAD, Need to test
    const matches = str.match(regex)
    return matches ? matches[0] : ''
  }

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: 200,
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: 5, width: '100%' }}>
        <Typography variant='h4' sx={{ color: 'white' }}>
          {title.charAt(0) === '@' ? extractQuestion(title) : title}
        </Typography>
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

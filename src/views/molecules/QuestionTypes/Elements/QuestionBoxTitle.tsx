import { FC } from 'react';
import playQuestionSound from 'views/assets/play-sound.svg'
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { QuestionEquation } from './QuestionEquation';
import { ScreenSize } from 'constants/screenSize';
import he from 'he'
import { extractMathjaxText, extractQuestion } from 'views/utils';


interface QuestionBoxTitleProps {
  title: string
  audioFile: string
}

export const QuestionBoxTitle: FC<QuestionBoxTitleProps> = ({
  title,
  audioFile,
}) => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const readQuestionAudioAsset = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };
  console.log({ title })

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 5, width: '100%' }}>
        <Typography variant='h5' sx={{ color: 'white' }}>
          {title.charAt(0) === '@' ? extractQuestion(title) : he.decode(title)}
        </Typography>
        {
          audioFile ?
            <img
              src={playQuestionSound}
              onClick={() => {
                readQuestionAudioAsset();
              }}
              style={{
                cursor: 'pointer',
                height: isMobile ? 60 : 'auto',
              }}
            /> : null
        }
      </Box>
      {title.charAt(0) === '@' && title.slice(0, 5) !== '@TYPE' && <QuestionEquation tex={extractMathjaxText(title)} />}
    </Container>
  );
};

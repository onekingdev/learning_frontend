import { FC } from 'react';
import { Question } from 'views/atoms/Text/Question';
import playQuestionSound from 'views/assets/play-sound.svg'
import { Box } from '@mui/material';


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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
      <Question>{title}</Question>
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
  );
};

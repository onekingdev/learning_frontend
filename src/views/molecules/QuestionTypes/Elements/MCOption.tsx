import { FC, useEffect, useState } from 'react';
import { BasicColor } from 'views/Color';
import { ScreenSize } from 'constants/screenSize';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { isValidUrl } from 'views/utils';

interface BlockQuestionInput {
  question: number;
  answerOption: number;
  isCorrect: boolean;
}

type MCOptionProps = {
  answer: any;
  onClick: (result: BlockQuestionInput) => void
}

export const MCOption: FC<MCOptionProps> = ({ answer, onClick }) => {
  const isTablet = useMediaQuery(`(max-width: ${ScreenSize.tablet})`)

  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setIsAnswered(false);
  }, [answer])

  const handleAnswer = () => {
    setIsAnswered(true);
    const inputAnswer: BlockQuestionInput = {
      question: -1,
      answerOption: answer.id,
      isCorrect: answer.isCorrect
    };
    onClick(inputAnswer)
  }

  return (
    <>
      {answer &&
        <Box
          sx={{
            cursor: 'pointer',
            pointerEvents: isAnswered ? 'none' : 'auto',
            '&:hover': {
              boxShadow: '1px 4px 3px 2px black'
            }
          }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          onClick={() => handleAnswer()}
          margin={1}
          padding={1}
          borderRadius={2}
          bgcolor={
            isAnswered ?
              answer?.isCorrect ? BasicColor.greenSoft :
                BasicColor.red
              : 'white'}
        >
          {
            isValidUrl(answer?.answerText) ?
              <img
                style={{
                  margin: isTablet ? 2 : 10,
                  minWidth: isTablet ? '10vw' : 100,
                  height: isTablet ? '40vw' : 200
                }}
                alt={answer.id}
                src={answer.answerText}
              /> :
              <Typography variant='h5' style={{ margin: 0, textAlign: 'center', width: '60vw' }}>{answer?.answerText || 'EMPTY'}</Typography>
          }
        </Box>}
    </>
  )
}

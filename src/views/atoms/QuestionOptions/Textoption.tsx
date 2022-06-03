// import { Typography } from '../Text/typography';
import { FC, useEffect, useState } from 'react';
// import styled from 'styled-components';
import { BasicColor } from 'views/Color';
import { ScreenSize } from 'constants/screenSize';
import { TypoGeneralText } from '../Text';
import { Box, useMediaQuery } from '@mui/material';
import { isValidUrl } from 'views/utils';

interface BlockQuestionInput {
  question: number;
  answerOption: number;
  isCorrect: boolean;
}

type TextOptionProps = {
  answer: any;
  onClick: (result: BlockQuestionInput) => void
}

export const TextOption: FC<TextOptionProps> = ({ answer, onClick }) => {
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
                  minWidth: isTablet ? '20vw' : 100,
                  // minHeight: isTablet ? '20vw' : 200,
                  height: isTablet ? '20vw' : 200
                }}
                src={answer.answerText}
              /> :
              <TypoGeneralText style={{ margin: 0, textAlign: 'center', width: '60vw' }}>{answer?.answerText || 'EMPTY'}</TypoGeneralText>
          }
        </Box>}
    </>
    // <>
    //   {answer &&
    //     <TextOptionStyles
    //       onClick={() => handleAnswer()}
    //       isCorrect={isAnswered && answer?.isCorrect}
    //       isAnswered={isAnswered}
    //     >
    //       {
    //         answer.answerText &&
    //         <TypoGeneralText style={{ margin: 0 }}>{answer?.answerText}</TypoGeneralText>
    //       }
    //       {answer.image &&
    //         <img
    //           style={{
    //             margin: 10,
    //             maxHeight: 200,
    //             maxWidth: 200
    //           }}
    //           src={'https://firebasestorage.googleapis.com/v0/b/learningwithsocrates-frontend.appspot.com/o/assets%2Fquestions%2FELA%2Fa%20good%20jump_01.png?alt=media&token=49a8526c-bd55-4da2-ab1a-04897ceb9e39'} />
    //       }
    //     </TextOptionStyles>}
    // </>
  )
}

// const TextOptionStyles = styled.div<{
//   isCorrect?: boolean;
//   isAnswered?: boolean;
// }>`
//     width: 90%;
//     margin: 20px auto;
//     font-family: ${Typography.secondary};
//     font-weight:300;
//     padding:2px;

//     background-color: ${props => props.isAnswered ?
//     props.isCorrect ? BasicColor.greenSoft :
//       BasicColor.red
//     :
//     BasicColor.white20};
//     pointer-events: ${props => props.isAnswered ? 'none' : 'auto'};
//     cursor: pointer;
//     line-height: 30px;
//     border-radius: 5px;
//     &:hover{
//       box-shadow: 1px 4px 3px 2px ${BasicColor.black};
//     }
//     @media screen and (min-width: ${ScreenSize.tablet}) {
//       height: 100%;
//       line-height: 35px;
//       padding: 10px;

//     }
//     @media screen and (min-width: ${ScreenSize.desktop}) {
//       height: 100%;
//       line-height: 40px;
//     }
//   `;

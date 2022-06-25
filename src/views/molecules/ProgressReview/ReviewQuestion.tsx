import {
    Box, Grid, Typography,
} from '@mui/material';
import { FC } from 'react';
import { BasicColor } from 'views/Color';
import { ReviewMCOption } from './ReviewMCOption';
import { ReviewQuestionTitle } from './ReviewQuestionTitle';

interface ReviewQuestionProps {
    questionText: string
    questionType: string
    answerOptions: any[]
    index: number
    chosenAnswer: any[]
    status: string
    typedAnswer?: string
    subject: string
    topic: string
}

export const ReviewQuestion: FC<ReviewQuestionProps> = ({
    questionText,
    questionType,
    answerOptions,
    index,
    chosenAnswer,
    status,
    typedAnswer,
    topic,
    subject
}) => {
    return (
        <Box id='question-details'>
            <Typography>Subject: {subject}</Typography>
            <Typography>Topic: {topic}</Typography>
            <ReviewQuestionTitle questionText={questionText} index={index} />
            <Box
                display='flex'
                flexDirection={'column'}
                justifyContent='space-evenly'
            >
                {
                    questionType === 'MC' &&
                    <>
                        <Grid container justifyContent={'center'} spacing={2}
                        >
                            {answerOptions.map(option => (
                                <Grid item>
                                    <ReviewMCOption value={option.answerText} />
                                </Grid>
                            ))}
                        </Grid>
                        <Box>
                            <Typography>Your answer was</Typography>
                            <ReviewMCOption value={chosenAnswer[0]?.answerText} />
                        </Box>
                        <Typography variant='h6' textAlign={'center'}>
                            {status}
                        </Typography>
                        <Typography>The Correct Answer is: </Typography>
                        <ReviewMCOption value={answerOptions.find(element => element.isCorrect === true)?.answerText} />
                    </>
                }
                {
                    questionType === 'T' &&
                    <>
                        <Typography>Your Answer was : {typedAnswer}</Typography>
                        <Typography variant='h6' textAlign={'center'}>
                            {status}
                        </Typography>
                        <Typography>The Correct Answer is: {
                            answerOptions.find(element => element.isCorrect === true)?.answerText
                        }</Typography>
                    </>
                }
                {
                    questionType === 'R' &&
                    <>
                        <Box
                            id='question-container'
                            display='flex'
                            flexDirection={'column'}
                            justifyContent='center'
                            alignItems='center'
                            sx={{
                                backgroundColor: '#12121212'
                            }}
                        >
                            {chosenAnswer.map(option => (
                                <Typography color={BasicColor.greenShadow}>
                                    {option.key}:
                                    <span style={{ color: 'darkmagenta' }}>
                                        {option.value}
                                    </span>
                                </Typography>
                            ))}
                        </Box>
                        <Typography>Your Answer was : </Typography>
                        <Box
                            id='user-answer-container'
                            display='flex'
                            flexDirection={'column'}
                            justifyContent='center'
                            alignItems='center'
                            sx={{
                                backgroundColor: '#21212112'
                            }}
                        >
                            {answerOptions.map(option => (
                                <Typography color={BasicColor.blue}>{option.key}:{option.value}</Typography>
                            ))}
                        </Box>
                        <Typography variant='h6' textAlign={'center'}>
                            {status}
                        </Typography>
                        <Typography>Correct answer is the same as question</Typography>
                    </>
                }
                {
                    questionType === 'O' &&
                    <>
                        <Typography>Your Answer was : </Typography>
                        <Box
                            id='user-answer-container'
                            display='flex'
                            justifyContent='space-evenly'
                            alignItems='center'
                            sx={{
                                backgroundColor: '#21212112'
                            }}
                        >
                            {chosenAnswer.sort((a, b) => { return a.order - b.order }).map(option => (
                                <Typography color={BasicColor.darkBrown}>{option.answerText}</Typography>
                            ))}
                        </Box>
                        <Typography variant='h6' textAlign={'center'}>
                            {status}
                        </Typography>
                        <Typography>Correct answer is</Typography>
                        <Box
                            id='user-answer-container'
                            display='flex'
                            justifyContent='space-evenly'
                            alignItems='center'
                            sx={{
                                backgroundColor: '#21212112'
                            }}
                        >
                            {answerOptions.sort((a, b) => { return a.order - b.order }).map(option => (
                                <Typography color={BasicColor.blue}>{option.answerText}</Typography>
                            ))}
                        </Box>
                    </>
                }
            </Box>
        </Box>
    )
}

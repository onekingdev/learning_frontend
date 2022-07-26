import {
    Box, Typography,
} from '@mui/material';
import { FC } from 'react';
import { BasicColor } from 'views/Color';

interface ReviewQuestionProps {
    questionText: string
    questionType: string
    answerOptions: any[]
}

export const ReviewQuestion: FC<ReviewQuestionProps> = ({
    questionText,
    questionType,
    answerOptions
}) => {

    return (
        <Box>
            <Box>
                <Typography color={BasicColor.darkBrown}><span style={{ color: BasicColor.black, fontWeight: 'bold' }}>Question:</span> {questionText}</Typography>
            </Box>
            {
                questionType === 'MC' &&
                <Box
                    display='flex'
                    flexDirection={'column'}
                    justifyContent='space-evenly'
                >
                    <Box
                        display='flex'
                        flexDirection={'column'}
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            backgroundColor: '#12121212'
                        }}
                    >
                        {answerOptions.map(option => (
                            <Typography color={BasicColor.blue}>{option.answerText}</Typography>
                        ))}
                    </Box>
                    <Typography>Your Answer was :</Typography>
                    <Typography variant='h6' color='red' textAlign={'center'}>is INCORRECT</Typography>
                    <Typography>The Correct Answer is: {
                        answerOptions.find(element => element.isCorrect === true)?.answerText
                    }</Typography>
                </Box>
            }
            {
                questionType === 'R' &&
                <Box
                    display='flex'
                    flexDirection={'column'}
                    height='100%'
                >
                    <Typography
                        variant='h6'
                    >Your Answer was :</Typography>
                    <Box
                        display='flex'
                        flexDirection={'column'}
                        alignItems='center'
                        sx={{
                            backgroundColor: '#12121212'
                        }}
                    >
                        {answerOptions.map(option => (<>
                            <Typography color={BasicColor.blue}>{option.key}:
                                <span
                                    style={{
                                        color: BasicColor.aqua
                                    }}
                                >
                                    {option.value}
                                </span>
                            </Typography>
                        </>
                        ))}
                    </Box>
                    <Typography variant='h6' color='red' textAlign={'center'}>is INCORRECT</Typography>
                    <Typography variant='h6' >Correct Answer:</Typography>
                    <Box
                        display='flex'
                        flexDirection={'column'}
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            backgroundColor: '#12121212'
                        }}
                    >
                        {answerOptions.map(option => (<>
                            <Typography color={BasicColor.blue}>{option.key}:
                                <span
                                    style={{
                                        color: BasicColor.aqua
                                    }}
                                >
                                    {option.value}
                                </span>
                            </Typography>
                        </>
                        ))}
                    </Box>
                </Box>
            }
        </Box>

    )
}

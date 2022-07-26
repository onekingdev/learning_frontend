import {
    Paper, Typography,
} from '@mui/material';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel'
import { BasicColor } from 'views/Color';
import { ReviewQuestion } from './ReviewQuestion';

export const ReviewBox: FC<{ block: any }> = ({ block }) => {
    return (block &&
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                padding: 1,
                height: '100%',
            }}
        >
            <Typography variant='h6' textAlign={'center'}>Answer {block.blockQuestionPresentation[0]?.blockPresentation?.createTimestamp.slice(0, 10)}</Typography>
            <Typography variant='h5'>Subject: <span style={{ fontWeight: 'bold' }}>{block.blockQuestionPresentation[0].topic?.areaOfKnowledge?.name}</span></Typography>
            <Typography variant='h6'>Topic:{block.blockQuestionPresentation[0].topic?.name}</Typography>
            <Carousel
                navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                    style: {
                        bottom: '0',
                        top: 'unset',
                        height: 'unset'
                    }
                }}
                autoPlay={false}
                indicators={false}
                animation='slide'
                cycleNavigation={false}
                navButtonsAlwaysVisible
                duration={500}
                height={300}
            >
                {
                    block.blockQuestionPresentation[0]?.blockPresentation?.block?.questions &&
                    block.blockQuestionPresentation[0]?.blockPresentation?.block?.questions.map((question: any) => (
                        <Paper
                            key={question.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                // justifyContent: 'space-around',
                                height: '100%',
                                backgroundColor: BasicColor.greenSoft + '30'
                            }}
                        >
                            <ReviewQuestion
                                questionText={question.questionText}
                                questionType={question.questionType}
                                answerOptions={question.answerOptions}
                            />
                        </Paper>
                    ))

                }
            </Carousel>
        </Paper>

    )
}


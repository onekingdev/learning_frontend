import {
    Typography,
} from '@mui/material';
import { FC } from 'react';
import { BasicColor } from 'views/Color';
import { extractMathjaxText, extractQuestion } from 'views/utils';
import he from 'he'
import MathJax from 'react-mathjax';

interface ReviewQuestionTitleProps {
    questionText: string
    index: number
}

export const ReviewQuestionTitle: FC<ReviewQuestionTitleProps> = ({
    questionText,
    index
}) => {
    const questionString = questionText.charAt(0) === '@' ? extractQuestion(questionText) : he.decode(questionText)

    return (
        questionText.charAt(0) === '@' ?
            <>
                <Typography>{index + 1}. {questionString}</Typography>
                <MathJax.Provider>
                    <MathJax.Node
                        formula={he.decode(extractMathjaxText(questionText))}
                    />
                </MathJax.Provider>
            </> :
            <Typography color={BasicColor.darkBrown} fontWeight='bold'>
                {index + 1}. {questionText}
            </Typography>
    )
}

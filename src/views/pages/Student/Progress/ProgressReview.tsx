import { useEffect, useContext, useState } from 'react';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { dictionary } from './dictionary'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import background from 'views/assets/colored-shapes-bg.svg';
import { LoadingContext } from 'react-router-loading';
import { PageTitle } from 'views/molecules/PageTitle';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Grid
} from '@mui/material';
import { BasicColor } from 'views/Color';
import { ReviewBox } from 'views/molecules/ProgressReview/ReviewBox';
import {
    useQuery,
    useQueryClient,
    useMutation,
} from 'react-query'
import { LoadingSpinner } from 'views/atoms/Spinner';
import { doFetchStudentAnswerHistory } from 'app/actions/blockActions';
import { getMessage } from 'views/utils';
import { ReviewBlocks } from 'views/molecules/ProgressReview/ReviewBlocks';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { PeriodSelect } from 'views/molecules/ProgressReview/PeriodSelect';

const Wrapper = styled.div`
    background-image  : url(${background});
    background-repeat: repeat-y;
    background-size: cover;
    min-height: 100vh;
`;

// const mockup = {
//     subject: 'Math',
//     topic: 'Add',
//     isCorrect: false,
// }

export const ProgressReview = () => {
    const token = useSelector((state: any) => state.user.token);
    const studentId = useSelector((state: any) => state.student.id);
    let language: string = useSelector((state: any) => state.user.language);
    language = language ? language : 'en-us'
    const loadingContext = useContext(LoadingContext);
    const { data: blocks, isLoading, error } = useQuery(['fetch-answer-history', studentId, token], () => doFetchStudentAnswerHistory(studentId, token))
    const history = useHistory();

    console.log({ isLoading, blocks })
    useEffect(() => {
        !isLoading && loadingContext.done();
    }, [isLoading]);
    return (
        <Wrapper>
            <StudentMenu>
                <PageTitle title={dictionary[language]?.title} />
                <Container>
                    <Box
                    display='flex'
                    justifyContent={'space-between'}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{ borderRadius: 5 }}
                            startIcon={<ArrowLeftIcon />}
                            onClick={() => {
                                history.goBack()
                            }}
                        >
                            return
                        </Button>
                        <PeriodSelect />
                    </Box>
                    {
                        error ? <p>{getMessage(error)}</p> :
                            <Box
                                sx={{
                                    backgroundColor: BasicColor.greenSoft + 'A0',
                                    minHeight: '90vh',
                                    padding: 5,
                                    marginBottom: 5,
                                }}
                            >
                                {
                                    blocks && <ReviewBlocks blocks={blocks} />
                                }
                            </Box>
                    }
                </Container>
            </StudentMenu>
        </Wrapper>
    )
}

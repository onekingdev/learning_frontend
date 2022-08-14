import { useEffect, useContext, useState } from 'react';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { PageTitle } from 'views/molecules/PageTitle';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';
import { BasicColor } from 'views/Color';
import {
    useQuery,
} from '@tanstack/react-query'
import { doFetchStudentAnswerHistory } from 'app/actions/blockActions';
import { getMessage } from 'views/utils';
import { ReviewBlocks } from 'views/molecules/ProgressReview/ReviewBlocks';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { PeriodSelect } from 'views/molecules/ProgressReview/PeriodSelect';
import { Wrapper } from './Style';
import { LoadingSpinner } from 'views/atoms/Spinner';
import commonDictionary from 'constants/commonDictionary';


export const ProgressReview = () => {
    const { language, token } = useSelector((state: any) => state.user);
    const studentId = useSelector((state: any) => state.student.id);
    const [args, setArgs] = useState<any>({ period: 1, status: 'ALL' })
    const loadingContext = useContext(LoadingContext);
    const { data: blocks, isLoading, error } = useQuery(['fetch-answer-history', studentId, args.period, args.status, token], () => doFetchStudentAnswerHistory(studentId, args.period, args.status, token))
    const history = useHistory();

    useEffect(() => {
        !isLoading && loadingContext.done();
    }, [isLoading]);
    return (
        <Wrapper>
            <StudentMenu>
                <PageTitle title={commonDictionary[language]?.review} />
            </StudentMenu>
            <Container sx={{ pb: 5 }}>
                <Box
                    id='button-container'
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
                    <PeriodSelect update={setArgs} />
                </Box>
                {isLoading ? <LoadingSpinner /> :
                    error ? <Typography color='red'>{getMessage(error)}</Typography> :
                        <Box
                            id='blocks-container'
                            sx={{
                                backgroundColor: BasicColor.greenSoft + 'A0', //Transparent background
                                // minHeight: '90vh',
                                padding: 5,
                            }}
                            mb={5}
                        >
                            {
                                blocks && <ReviewBlocks blocks={blocks} />
                            }
                        </Box>
                }
            </Container>
        </Wrapper>
    )
}

import { useEffect, useContext } from 'react';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { dictionary } from './dictionary'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import background from 'views/assets/colored-shapes-bg.svg';
import { LoadingContext } from 'react-router-loading';
import { PageTitle } from 'views/molecules/PageTitle';
import {
    Box,
    Container,
    Grid
} from '@mui/material';
import { BasicColor } from 'views/Color';
import { ReviewBox } from 'views/molecules/ProgressReview/ReviewBox';

const Wrapper = styled.div`
    background-image  : url(${background});
    background-repeat: repeat-y;
    background-size: cover;
`;

// const mockup = {
//     subject: 'Math',
//     topic: 'Add',
//     isCorrect: false,
// }

export const ProgressReview = () => {
    // const user = useSelector((state: any) => state.user);
    // const student = useSelector((state: any) => state.student);
    let language: string = useSelector((state: any) => state.user.language);
    language = language ? language : 'en-us'
    const loadingContext = useContext(LoadingContext);

    useEffect(() => {
        loadingContext.done();
    }, []);
    return (
        <Wrapper>
            <StudentMenu>
                <PageTitle title={dictionary[language]?.title} />
                <Container>
                    <Box
                        sx={{
                            backgroundColor: BasicColor.greenSoft,
                            opacity: 0.4,
                            minHeight: '90vh',
                            paddingBottom: 5,
                            marginBottom: 5,
                        }}
                    >
                        <Grid container columnSpacing={3} rowSpacing={4} justifyContent='center'>
                            {[1, 2, 3, 4, 5].map(() => (
                                <Grid item>
                                    <ReviewBox />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </StudentMenu>
        </Wrapper>
    )
}

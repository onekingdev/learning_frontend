import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { dictionary } from './dictionary'
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
// import { BasicColor } from 'views/Color';
import questionMarkInCircle from 'views/assets/questionmark-in-circle.svg'
import { LANGUAGES } from 'constants/common';
import { Button, Grid } from '@mui/material';
const AddClassroomForm = (props: any) => {
    const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;

    const handleCreateNewAccount = () => {
        props.openNewAccountDlg();
        props.close();
    }
    const handleCreateExistAccount = () => {
        props.openExistingNewAccountDlg();
        props.close();
    }

    useEffect(() => {
    }, [])
    return (
        <CardDialog
            isOpen={props.isOpen}
            open={props.close}
            dialogContent={
                <div className="flex-col p-l-50 p-r-50 p-t-10 p-b-50 justify-center align-center">
                    <img src={questionMarkInCircle} style={{ maxWidth: '210px' }} />
                    <h1 className="p-b-20">{dictionary[language]?.newStudent + ' ?'}</h1>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={handleCreateNewAccount}
                                variant='contained'
                                color='info'
                            >
                                {dictionary[language]?.createNewAccount}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={handleCreateExistAccount}
                                variant='contained'
                            >
                                {dictionary[language]?.createExistAccount}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            }
        />
    )
}

export default AddClassroomForm

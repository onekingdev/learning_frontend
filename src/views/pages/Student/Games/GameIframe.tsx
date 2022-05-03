import { FC, useContext, useEffect } from 'react';
import { LoadingContext } from 'react-router-loading';
import { Title } from 'views/atoms/Text/Title';
import { GameMainMenu } from 'views/organisms/GameMainMenu';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { dictionary } from './dictionary';
import { GamesContainer, GamesTitle, Wrapper } from './Style';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useHistory }     from 'react-router-dom';


interface GameIframeParams {
  token: string
  gamePath: string
}

export const GameIframe: FC = () => {
  const { token, gamePath } = useParams<GameIframeParams>();
  const loadingContext = useContext(LoadingContext);
  const history = useHistory();

  return (
    <Box
      sx={{
        height: '100vh',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
      id='game-iframe-container'
    >
      <Button
        variant='contained'
        sx={{ position: 'absolute', top: '5%', left: '10%' }}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <iframe
        style={{
          width: '95%',
          height: '95%',
        }}
        onLoad={() => { loadingContext.done() }}
        src={process.env.REACT_APP_SERVER_URL + 'media/games/' + gamePath + '/gamePlay?token=' + token} />
    </Box>
  );
};

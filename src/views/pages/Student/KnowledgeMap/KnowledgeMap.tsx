import { FC, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { useHistory } from 'react-router-dom';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import boat_sound from 'views/assets/audios/boat.mp3';
import boat from 'views/assets/islands/fillers/boat.svg';
import barrell from 'views/assets/islands/fillers/barril.svg';
import dragon from 'views/assets/islands/fillers/dragon.svg';
import isle from 'views/assets/islands/fillers/island.svg';
import rock from 'views/assets/islands/fillers/rock.svg';
import rock2 from 'views/assets/islands/fillers/rock-2.svg';
import boulder from 'views/assets/islands/fillers/rocxk.svg';
import {
  Wrapper,
  Boat,
  Ocean,
  Island,
  Filler,
  Subject
} from './Styles';
import { Box, Typography } from '@mui/material';

export const KnowledgeMap: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const history = useHistory();
  const areasOfKnowledge: Array<any> = useSelector((state: any) => state.student.guardianstudentplan.subject);
  const [loadedImgNum, setLoadedImgNum] = useState(0)
  const [boatX, setBoatX] = useState(window.innerWidth / 2)
  const [boatY, setBoatY] = useState(window.innerHeight / 2)

  const onImgLoad = () => {

    setLoadedImgNum(loadedImgNum + 1)
    if (loadedImgNum >= areasOfKnowledge.length - 1)
      loadingContext.done();

  }

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

  const animateBoat = (e: any, route: string) => {

    const audio = new Audio(boat_sound);
    audio.play();

    setBoatX(e.clientX)
    setBoatY(e.clientY + window.pageYOffset)

    setTimeout(() => {
      history.push(route);
    }, 3300);

  };

  const randRange = (max: number, min: number) => Math.round(Math.random() * (max - min)) + min;

  const getFiller = () => {

    const uniqueFillers = [boat, barrell, dragon];
    const fillers = [isle, rock, boulder, rock2];
    if (getRandomNumber(8) === 8) {
      return uniqueFillers[getRandomNumber(2)];
    }
    return fillers[getRandomNumber(3)];

  };

  const dragonNum = randRange(0, areasOfKnowledge.length);
  return (
    <Wrapper>
      <StudentMenu>
        <Boat src={boat} style={{ position: 'absolute', left: boatX - 100, top: boatY - 100 }} />
        <Ocean >
          {areasOfKnowledge.map(
            (
              areaOfKnowledge: {
                id: number;
                islandImage: string;
                isActive: boolean;
                name: string
              },
              i
            ) => {
              const fill = getFiller();

              return (
                <Subject key={i}
                >
                  <Box
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.1)'
                      },
                      position: 'relative',
                      height: 300,
                      width: 600
                    }}
                    onClick={e => {
                      animateBoat(e, `/question/AI/${areaOfKnowledge.id}`);
                    }}
                  >
                    <Island
                      src={`${process.env.REACT_APP_SERVER_URL}media/${areaOfKnowledge.islandImage}`}
                      isActive={areaOfKnowledge.isActive}
                      onLoad={onImgLoad}
                      onError={onImgLoad}
                    />
                    <Typography
                      variant='h3'
                      sx={{
                        maxWidth: 210,
                        position: 'absolute',
                        top: '50%',
                        // transform: 'translateY(-10%)',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        fontFamily: 'Quicksand',
                        textShadow: '0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1 1px 1px 0.4em #c11a2b',
                        color: 'white',
                        fontWeight: '700',
                        textAlign: 'center',
                        fontSize: 30,
                        cursor: 'pointer',
                        background: '#FB8500',
                        // WebkitTextStroke: '1px #' + Math.floor(Math.random() * 16777215).toString(16),

                      }}>{areaOfKnowledge.name}
                    </Typography>
                  </Box>
                  <Box>
                    {i === dragonNum && <Filler src={dragon} />}
                    {i % 2 === 0 && <Filler src={fill} />}
                    {i % 5 === 0 && <Filler src={fill} />}
                  </Box>
                </Subject>
              );
            }
          )}
        </Ocean>
      </StudentMenu>
    </Wrapper>
  );
};

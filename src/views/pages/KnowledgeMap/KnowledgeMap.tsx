import { FC, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { LoadingContext } from 'react-router-loading';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StudentMenu } from 'views/templates/StudentMenu';
import boat_sound from 'views/assets/audios/boat.mp3';
import ocean from 'views/assets/islands/ocean.svg';
import boat from 'views/assets/islands/fillers/boat.svg';
import barrell from 'views/assets/islands/fillers/barril.svg';
import dragon from 'views/assets/islands/fillers/dragon.svg';
import isle from 'views/assets/islands/fillers/island.svg';
import rock from 'views/assets/islands/fillers/rock.svg';
import rock2 from 'views/assets/islands/fillers/rock-2.svg';
import boulder from 'views/assets/islands/fillers/rocxk.svg';
import background from 'views/assets/colored-shapes-bg.svg';

import { ScreenSize } from 'constants/screenSize';
import { get } from 'api/queries/get';
import * as TYPE from 'app/types';
import { AUDIENCES_QUERY } from 'api/queries/people';

export const KnowledgeMap: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const [areasOfKnowledge, setAreasOfKnowledge] = useState([]);
  const [loadedImgNum,  setLoadedImgNum] = useState(0)

  const handleData = (data: any) => {
    setAreasOfKnowledge(data.data.audienceById.areaofknowledgeSet);
    dispatch({
      type: TYPE.SET_AOK,
      payload: data.data.audienceById.areaofknowledgeSet,
    });
  };

  const handleError = (error: any) => {
    loadingContext.done();
    console.error(error);
  };

  const onImgLoad = (e: any) => {
    setLoadedImgNum(loadedImgNum+1)
    if(loadedImgNum >= areasOfKnowledge.length - 1)
      loadingContext.done();
  }

  useEffect(() => {
    get(
      'audienceById(id:"2")',
      `{${AUDIENCES_QUERY}}`,
      handleData,
      handleError
    );
    console.log(areasOfKnowledge);
  }, []);

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const animateBoat = (e: any, route?: string) => {
    const audio = new Audio(boat_sound);
    audio.play();
    const boat = document.getElementById('boat');
    boat!.style.top = `${e.clientY - 140}px`;
    boat!.style.left = `${e.clientX - 140}px`;
    setTimeout(() => {
      history.push('/question/presentation_1');
    }, 3300);
  };

  const randRange = (max: number, min: number) =>
    Math.round(Math.random() * (max - min)) + min;

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
        <Boat id="boat" src={boat} />
        <Ocean>
          {areasOfKnowledge.map(
            (
              areaOfKnowledge: {
                islandImage: string;
                isActive: boolean;
              },
              i
            ) => {
              const fill = getFiller();

              return i % 2 === 0 ? (
                <Subject key={i}>
                  <Island
                    src={`${process.env.REACT_APP_SERVER_URL}media/${areaOfKnowledge.islandImage}`}
                    onClick={e => {
                      animateBoat(e);
                    }}
                    isActive={areaOfKnowledge.isActive}
                    onLoad={onImgLoad}
                    onError={onImgLoad}
                  />
                  <>
                    {i === dragonNum ? <Filler src={dragon} /> : null}
                    <Filler src={fill} />
                    {i % 3 === 0 ? <Filler src={fill} /> : null}
                  </>
                </Subject>
              ) : (
                <div key={i}>
                  {i === dragonNum ? <Filler src={dragon} /> : null}
                  <Island
                    src={`${process.env.REACT_APP_SERVER_URL}media/${areaOfKnowledge.islandImage}`}
                    onClick={e => {
                      animateBoat(e);
                    }}
                    isActive={areaOfKnowledge.isActive}
                    onLoad={onImgLoad}
                    onError={onImgLoad}
                  />
                  {i % 5 === 0 ? <Filler src={fill} /> : null}
                </div>
              );
            }
          )}
        </Ocean>
      </StudentMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Boat = styled.img`
  z-index: 1;
  position: absolute;
  top: ${window.innerHeight / 2}px;
  left: ${window.innerWidth / 2}px;
  height: 140px;
  transition: top 6s, left 4s;
  @media (min-width: ${ScreenSize.desktop}) {
    height: 280px;
  }
`;

const Ocean = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 60% 40%;
  min-height: 100vh;
  background-image: url(${ocean});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.desktop}) {
    min-height: unset;
    margin-top: 65px;
    margin-left: 100px;
    margin-right: 100px;
    padding: 2rem;
    padding-top: 3em;
    padding-bottom: 3em;
    display: grid;
    grid-template-columns: 60% 40%;
  }
`;

const Island = styled.img<{
  isActive: boolean;
}>`
  width: 100%;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  pointer-events: ${props => (props.isActive ? 'all' : 'none')};
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: ${ScreenSize.tablet}) {
    width: 30vw;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    width: unset;
  }
`;

const Filler = styled.img`
  width: 60%;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 15vw;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    width: unset;
  }
`;

const Subject = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;

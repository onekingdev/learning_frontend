import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {StudentMenu} from '../../templates/StudentMenu';
import ocean from '../../assets/islands/ocean.svg';
import boatIcon from '../../assets/boat.svg';
import boat from '../../assets/islands/fillers/boat.svg';
import boat_sound from '../../assets/audios/boat.mp3';

import barrell from '../../assets/islands/fillers/barril.svg';
import dragon from '../../assets/islands/fillers/dragon.svg';

import isle from '../../assets/islands/fillers/island.svg';
import rock from '../../assets/islands/fillers/rock.svg';
import rock2 from '../../assets/islands/fillers/rock-2.svg';
import boulder from '../../assets/islands/fillers/rocxk.svg';
import {ScreenSize} from '../../screenSize';
import {useHistory} from 'react-router-dom';
import {AREA_OF_KNOWLEDGE} from '../../../api/fragments/questionFragments';
import {get} from '../../../api/queries/get';
import {useDispatch} from 'react-redux';
import * as TYPE from '../../../app/types';
import background from '../../assets/colored-shapes-bg.svg';
import {AUDIENCES_QUERY} from '../../../api/queries/people';

export const KnowledgeMap: FC = () => {
  const dispatch = useDispatch();
  const [areasOfKnowledge, setAreasOfKnowledge] = useState([]);
  const handleData = (data: any) => {
    setAreasOfKnowledge(data.data.audienceById.areaofknowledgeSet);
    dispatch({
      type: TYPE.SET_AOK,
      payload: data.data.audienceById.areaofknowledgeSet,
    });
  };
  const handleError = (error: any) => {
    console.error(error);
  };
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

  useEffect(() => {
    console.log(getRandomNumber(3));
  }, []);

  const [coords, setCoords] = useState({
    y: window.innerHeight / 2,
    x: window.innerWidth / 2,
  });

  const animateBoat = (e: any, route?: string) => {
    console.log(e.clientX, e.clientY, e);
    const audio = new Audio(boat_sound);
    audio.play();
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
    setTimeout(() => {
      // history.push(`/question/presentation_${route || ""}`);
    }, 3300);
  };

  const getFiller = () => {
    const uniqueFillers = [boat, barrell, dragon];
    const fillers = [isle, rock, boulder, rock2];
    if (getRandomNumber(8) === 8) {
      return uniqueFillers[getRandomNumber(2)];
    }
    return fillers[getRandomNumber(3)];
  };
  const history = useHistory();
  return (
    <Wrapper>
      <StudentMenu>
        <Ocean>
          <Boat id="boat" src={boat} coords={coords} />
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
                <SubjectEven>
                  <Island
                    src={`https://api.withsocrates.com/media/${areaOfKnowledge.islandImage}`}
                    onClick={e => {
                      animateBoat(e);
                    }}
                    isActive={areaOfKnowledge.isActive}
                  />
                  <Filler src={fill} />
                </SubjectEven>
              ) : (
                <SubjectOdd>
                  <Filler src={fill} />
                  <Island
                    src={`https://api.withsocrates.com/media/${areaOfKnowledge.islandImage}`}
                    onClick={() => history.push('/question')}
                    isActive={areaOfKnowledge.isActive}
                  />
                </SubjectOdd>
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

type Coords = {
  x: number;
  y: number;
};

type BoatCoords = {
  coords: Coords;
};

const Boat = styled.img<BoatCoords>`
  z-index: 1;
  position: absolute;
  top: ${props => props.coords.y - 70}px;
  left: ${props => props.coords.x - 70}px;
  height: 140px;
  transition: top 6s, left 4s;
  @media (min-width: ${ScreenSize.desktop}) {
    height: 280px;
    top: ${props => props.coords.y - 140}px;
    left: ${props => props.coords.x - 140}px;
  }
`;

const Ocean = styled.div`
  min-height: 100vh;
  background-image: url(${ocean});
  background-repeat: no-repeat;
  background-size: cover;
  /* max-width: 1600px; */
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.desktop}) {
    min-height: unset;
    margin-top: 65px;
    margin-left: 100px;
    margin-right: 100px;
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
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: ${ScreenSize.tablet}) {
    width: 80%;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    width: 45%;
  }
`;

const Filler = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 80%;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    margin-top: 30%;
    width: 75%;
  }
`;

const Subject = styled.div`
  display: grid;
  padding: 2rem;
`;

const SubjectEven = styled(Subject)`
  grid-template-columns: 70% 30%;
`;

const SubjectOdd = styled(Subject)`
  grid-template-columns: 30% 70%;
`;

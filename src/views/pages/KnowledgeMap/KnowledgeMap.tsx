import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {StudentMenu} from '../../templates/StudentMenu';
import ocean from '../../assets/islands/ocean.svg';
import boatIcon from '../../assets/boat.svg';
import boat from '../../assets/islands/fillers/boat.svg';

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

export const KnowledgeMap: FC = () => {
  const [areasOfKnowledge, setAreasOfKnowledge] = useState([]);
  const handleData = (data: any) => {
    setAreasOfKnowledge(data.data.areasOfKnowledge);
  };
  const handleError = (error: any) => {
    console.error(error);
  };
  useEffect(() => {
    get('areasOfKnowledge', `{${AREA_OF_KNOWLEDGE}}`, handleData, handleError);
    console.log(areasOfKnowledge);
  }, []);

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    console.log(getRandomNumber(3));
  }, []);

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
    <StudentMenu>
      <Ocean>
        {areasOfKnowledge.map(
          (
            areaOfKnowledge: {
              islandImage: string;
            },
            i
          ) => {
            const fill = getFiller();
            return i % 2 === 0 ? (
              <SubjectEven>
                <Island
                  src={areaOfKnowledge.islandImage}
                  onClick={() => history.push('/question')}
                />
                <Filler src={fill} />
              </SubjectEven>
            ) : (
              <SubjectOdd>
                <Filler src={fill} />
                <Island
                  src={areaOfKnowledge.islandImage}
                  onClick={() => history.push('/question')}
                />
              </SubjectOdd>
            );
          }
        )}
      </Ocean>
    </StudentMenu>
  );
};

const Ocean = styled.div`
  min-height: 100vh;
  background-image: url(${ocean});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  cursor: url(${boatIcon}), auto;
  @media (min-width: ${ScreenSize.desktop}) {
    min-height: unset;
    margin-top: 75px;
  }
`;

const Island = styled.img`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  &: hover {
    transform: scale(1.1);
  }
`;

const Filler = styled.img`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.desktop}) {
    margin-top: 30%;
    width: 40%;
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

import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {StudentMenu} from '../../templates/StudentMenu';

import ocean from '../../assets/islands/ocean.svg';
import math from '../../assets/islands/math-island.svg';
import science from '../../assets/islands/science-island.svg';
import sight from '../../assets/islands/sigh-island.svg';
import ela from '../../assets/islands/ela-island.svg';

import boat from '../../assets/islands/fillers/boat.svg';

import barrell from '../../assets/islands/fillers/barril.svg';
import dragon from '../../assets/islands/fillers/dragon.svg';

import isle from '../../assets/islands/fillers/island.svg';
import rock from '../../assets/islands/fillers/rock.svg';
import rock2 from '../../assets/islands/fillers/rock-2.svg';
import boulder from '../../assets/islands/fillers/rocxk.svg';

// type KnowledgeMapProps = {
//   image: string;
//   route: string;
// };

export const KnowledgeMap: FC = () => {
  const subjects = [
    {image: math},
    {image: science},
    {image: sight},
    {image: ela},
  ];

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

  return (
    <StudentMenu>
      <Ocean>
        {subjects.map((s, i) => {
          const fill = getFiller();
          return i % 2 === 0 ? (
            <SubjectEven>
              <Island src={s.image} />
              <Filler src={fill} />
            </SubjectEven>
          ) : (
            <SubjectOdd>
              <Filler src={fill} />
              <Island src={s.image} />
            </SubjectOdd>
          );
        })}
      </Ocean>
    </StudentMenu>
  );
};

const Ocean = styled.div`
  min-height: 100vh;
  background-image: url(${ocean});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Island = styled.img`
  width: 60vw;
`;

const Filler = styled.img`
  width: 30vw;
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

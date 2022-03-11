import { FC } from 'react';
import { CongratsDgContainer } from 'views/pages/Question/Style';
import { useSelector } from 'react-redux';

import img_congats from 'views/assets/level-up-congrats.png';
import ParticlesBg from 'particles-bg';
import styled, { keyframes } from 'styled-components';
import useSound from 'use-sound';
import fireworkSfx from 'views/assets/audios/mixkit-fireworks-bang-in-sky-2989.wav';

import { bounceInUp } from 'react-animations';
import { flip } from 'react-animations'

interface Props {
  token: number;
  energy: number;
  close: () => (void)
}
export const LevelUpDgContent: FC<Props> = ({token, energy, close}) => {
  const [play] = useSound(fireworkSfx);

  const earning = useSelector((state: any) => state.earning);


  const config = {
    num: [1, 10],
    rps: 0.1,
    radius: [10, 30],
    life: [-2, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.9, 0],
    scale: [0.1, 0.4],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 15,
    g: 1,
  };
  return (
    <div onLoad={() => play}>
      <CongratsDgContainer>
        <div className="background">
          <ParticlesBg type="custom" config={config} />
        </div>
        <div className="background">
          <ParticlesBg type="polygon" />
        </div>
        <Flip>
          <img src={img_congats} />
        </Flip>
        <BounceIn>
        <h1>LEVEL UP!</h1>
        <h5> Your level is now: {earning.level}</h5>
        </BounceIn>
        <button onClick={close}>Continue</button>
        {/* <div className="icons-container">
          <div className="icons">
            <img src={coin} alt={'coin'} />
            <p>{token} Tokens</p>
          </div>
          <div className="icons">
            <img src={lightening} alt={'lightening'} />
            <p>{energy} energy</p>
          </div>
        </div> */}
      </CongratsDgContainer>
    </div>
  );
};

const Flip = styled.div`
  animation: 2s ${keyframes`${flip}`} ;
`;

const BounceIn = styled.div`
  animation: 2s ${keyframes`${bounceInUp}`} ;
`;

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
import { Header, TypoTitle, TypoBtn } from 'views/atoms/Text';

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
    radius: [2, 10],
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
    <div onLoad={() => play} style={{display:'flex', justifyContent:'center'}}>
      <CongratsDgContainer>
        <div className="background">
          <ParticlesBg type="custom" config={config} />
        </div>
        <div className="background">
          <ParticlesBg type="polygon" config={config} />
        </div>
        <Flip>
          <img src={img_congats} />
        </Flip>
        <BounceIn>
        <Header style={{textAlign: 'center'}}>LEVEL UP!</Header>
        <TypoTitle style={{textAlign: 'center'}}> Your level is now: {earning.level}</TypoTitle>
        </BounceIn>
        <button onClick={close}><TypoBtn>Continue</TypoBtn></button>
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

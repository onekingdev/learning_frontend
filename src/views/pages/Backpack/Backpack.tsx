import {FC} from 'react';
import {
  AvatarButtonContainer,
  BackpackBase,
  BackpackButtonsContainer,
  BackpackContainer,
  BackpackFace,
  BackpackHook,
  BackpackLogo,
  BackpackLogoContainer,
  BackpackDecorationLeft,
  BackpackDecorationRight,
  BackPackStyles,
  ControlButtonContainer,
  HookBracket,
} from './Styles';
import backpackHook from '../../assets/backpack-hook.png';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import learnLogo from '../../assets/logo-learn.svg';
import {BackpackButton} from '../../atoms/BackpackButton';
import avatarButton from '../../assets/avatar-button.png';
import cardsButton from '../../assets/cards-button.png';
import controlButton from '../../assets/control-button.png';
import backpackFace from '../../assets/backpack-face.png';
import backpackLeft from '../../assets/backpack-left.png';
import backpackRight from '../../assets/backpack-right.png';

export const Backpack: FC = () => {
  return (
    <>
      <BackpackContainer>
        <BackPackStyles>
          <BackpackDecorationLeft src={backpackLeft} />
          <HookBracket>
            <BackpackHook src={backpackHook} />
          </HookBracket>
          <BackpackDecorationRight src={backpackRight} />
          <BackpackBase>
            <BackpackLogoContainer>
              <BackpackLogo src={learnLogo} />
            </BackpackLogoContainer>
            <BackpackButtonsContainer>
              <AvatarButtonContainer>
                <BackpackButton
                  onClick={() => console.log('Hella yes')}
                  image={avatarButton}
                  width={60}
                  height={130}
                />
              </AvatarButtonContainer>
              <BackpackButton
                onClick={() => console.log('Hella yes')}
                image={cardsButton}
                width={100}
                height={70}
              />
              <ControlButtonContainer>
                <BackpackButton
                  onClick={() => console.log('Hella yes')}
                  image={controlButton}
                  width={100}
                  height={70}
                />
              </ControlButtonContainer>
            </BackpackButtonsContainer>

            <BackpackFace src={backpackFace} />
          </BackpackBase>
        </BackPackStyles>
      </BackpackContainer>
      <MobileMenu />
    </>
  );
};

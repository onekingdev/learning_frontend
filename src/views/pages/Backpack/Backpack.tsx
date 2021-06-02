import {FC} from 'react';
import {
  BackpackBase,
  BackpackButtonsContainer,
  BackpackContainer,
  BackpackHook,
  BackpackLogo,
  BackpackLogoContainer,
  BackPackStyles,
  HookBracket,
} from './Styles';
import backpackHook from '../../assets/backpack-hook.png';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import learnLogo from '../../assets/logo-learn.svg';

export const Backpack: FC = () => {
  return (
    <>
      <BackpackContainer>
        <BackPackStyles>
          <HookBracket>
            <BackpackHook src={backpackHook} />
          </HookBracket>
          <BackpackBase>
            <BackpackLogoContainer>
              <BackpackLogo src={learnLogo} />
            </BackpackLogoContainer>
            <BackpackButtonsContainer></BackpackButtonsContainer>
          </BackpackBase>
        </BackPackStyles>
      </BackpackContainer>
      <MobileMenu />
    </>
  );
};

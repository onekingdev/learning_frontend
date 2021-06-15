import {FC} from 'react';
import {
  AvatarButtonContainer,
  BackpackBase,
  BackpackButtonsContainer,
  BackpackContainer,
  BackpackFace,
  BackpackHook,
  BackpackDecorationLeft,
  BackpackDecorationRight,
  BackPackStyles,
  ControlButtonContainer,
  HookBracket,
} from './Styles';
import backpackHook from '../../assets/backpack-hook.svg';
import {BackpackButton} from '../../atoms/BackpackButton';
import avatarButton from '../../assets/avatar-button.svg';
import cardsButton from '../../assets/cards-button.svg';
import controlButton from '../../assets/control-button.svg';
import backpackFace from '../../assets/backpack-face.svg';
import backpackLeft from '../../assets/backpack-left.svg';
import backpackRight from '../../assets/backpack-right.svg';
import {StudentMenu} from '../../templates/StudentMenu';

export const Backpack: FC = () => {
  return (
    <>
      <StudentMenu>
        <BackpackContainer>
          <BackPackStyles>
            <BackpackDecorationLeft src={backpackLeft} />
            <HookBracket>
              <BackpackHook src={backpackHook} />
            </HookBracket>
            <BackpackDecorationRight src={backpackRight} />
            <BackpackBase>
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
      </StudentMenu>
    </>
  );
};

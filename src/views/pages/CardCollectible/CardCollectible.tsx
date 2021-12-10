import {FC, useEffect, useState} from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
  ModalContent,
  ModalStyles,
  ModalImage,
  ModalTextContainer,
  ModalText,
  ModalTitle,
  CloseButton,
} from './Style';
import {CardCollectibleTitle} from '../../molecules/CardCollectible/CardCollectibleTitle';
import {CardsStore} from '../../molecules/CardCollectible/CardsStore';
import {CardCollectibleCarrousel} from '../../molecules/CardCollectible/CardCollectibleCarrousel';
import {StudentMenu} from '../../templates/StudentMenu';
import {Modal} from '../../atoms/Modal';
import mythology from '../../assets/mythology.svg';

export const CardCollectible: FC = () => {
  const [isModalClose, setIsModalClose] = useState(true);
  const closeModal = () => {
    setIsModalClose(!isModalClose);
  };

  return (
    <Wrapper>
      <StudentMenu>
        {isModalClose ? null : (
          <Modal>
            <ModalContent>
              <ModalStyles>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <ModalImage src={mythology} />
                <ModalTextContainer>
                  <ModalTitle>Cronos</ModalTitle>
                  <ModalText isDark={true}>Roman Name: Saturn</ModalText>
                  <ModalText isDark={true}>Job: Titan of the Harvest</ModalText>
                  <ModalText isDark={true}>
                    Symbol(s): Sickle, Grain Snak
                  </ModalText>
                  <ModalText isDark={true}>
                    Family: Rhea(wife), Zeus, Hera, Poseidon, Hades, Hestia,
                    Chiron (Children)
                  </ModalText>
                  <ModalText isDark={true}>Fact 1: Leader of Titans</ModalText>
                  <ModalText isDark={true}>
                    Fact 2: There is a start named after him
                  </ModalText>
                </ModalTextContainer>
              </ModalStyles>
            </ModalContent>
          </Modal>
        )}
        <CardCollectibleContainer>
          <CardCollectibleTitle></CardCollectibleTitle>
          <CardsStore></CardsStore>
          <CardCollectibleCarrousel
            onClick={closeModal}
          ></CardCollectibleCarrousel>
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};

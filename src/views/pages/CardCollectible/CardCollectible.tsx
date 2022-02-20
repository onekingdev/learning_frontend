import {FC, useEffect, useState, useContext} from 'react';
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
import {useParams, useHistory} from 'react-router-dom';
import {get} from '../../../api/queries/get';
import {COLLECTIBLE_QUERY} from '../../../api/queries/progress';
import {LoadingContext} from 'react-router-loading';

interface RouteCollectibleParams {
  collectibleId: string;
  categoryId: string;
}

interface collectibleProps {
  image: string;
  description: string;
  name: string;
}

export const CardCollectible: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const history = useHistory();
  const {collectibleId, categoryId} = useParams<RouteCollectibleParams>();
  const [collectible, setCollectible] = useState<collectibleProps>();

  const closeModal = () => {
    history.push(`/collectibles/category_${categoryId}`);
  };
  const handleData = (data: any) => {
    setCollectible(data.data.collectibleById);
    loadingContext.done();
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get(
      `collectibleById(id:"${collectibleId}")`,
      COLLECTIBLE_QUERY,
      handleData,
      handleError
    );
  }, [collectibleId]);

  return (
    <Wrapper>
      <StudentMenu>
        {!collectible ? null : (
          <Modal>
            <ModalContent>
              <ModalStyles>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <ModalImage
                  src={`https://api.withsocrates.com/media/${collectible.image}`}
                />
                <ModalTextContainer>
                  <ModalTitle>{collectible.name}</ModalTitle>
                  <ModalText isDark={true}>{collectible.description}</ModalText>
                </ModalTextContainer>
              </ModalStyles>
            </ModalContent>
          </Modal>
        )}
        <CardCollectibleContainer>
          <CardCollectibleTitle></CardCollectibleTitle>
          <CardsStore></CardsStore>
          <CardCollectibleCarrousel></CardCollectibleCarrousel>
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};

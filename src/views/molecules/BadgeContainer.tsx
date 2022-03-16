import {FC} from 'react';
import styled from 'styled-components';
import {BadgeWrapper, LockedBadgeWrapper} from '../atoms/BadgeWrapper';
import question from '../assets/question-mark.svg';
import {RibbonText} from './RibbonText';

export const BadgeContainer: FC = () => {
  const badges = [
    'https://i.pravatar.cc/300',
    'https://i.pravatar.cc/300',
    'https://i.pravatar.cc/300',
    'https://i.pravatar.cc/300',
    'https://i.pravatar.cc/300',
    undefined,
    undefined,
    undefined,
  ];

  return (
    <>
      <RibbonWrapper>
        <RibbonText body={'Badges'} />
      </RibbonWrapper>
      <Container>
        {badges.map(badge => {
          return badge ? (
            <BadgeWrapper src={badge} />
          ) : (
            <LockedBadgeWrapper src={question} />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 19px;
  padding: 8px;
  margin-bottom: 39px;
  justify-content: center;
`;

const RibbonWrapper = styled.div`
  width: 50%;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

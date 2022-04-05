import { FC }         from 'react';
import styled         from 'styled-components';
import ribbon         from 'views/assets/ribbon.svg';
import { ScreenSize } from 'constants/screenSize';
import { TypoHeader } from 'views/atoms/Text';

export const PageTitle: FC<{title: string}> = ({title}) => {
  return (
    <CardTitle>
      <TypoHeader style={{margin: 0}}>{title}</TypoHeader>
    </CardTitle>
  );
};

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;

  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 10px 0 10px 0;
    background-image: none;
    background-color: orange;
  }
`;

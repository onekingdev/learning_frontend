import { FC } from 'react';
import styled from 'styled-components';
import ribbon from 'views/assets/ribbon.svg';
import { TypoHeader } from 'views/atoms/Text';

export const ProfileTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <CardTitle>
      <TypoHeader style={{ padding: 30, margin: 0 }}>{title}</TypoHeader>
    </CardTitle>
  );
};

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;
`;

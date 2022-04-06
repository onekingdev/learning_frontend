import { FC } from 'react';
import styled from 'styled-components';
import question from 'views/assets/question-mark.svg';
import { ProfileTitle } from 'views/molecules/ProfileTitle';
import creon_img from 'views/assets/badges/creon.svg';
import flask_img from 'views/assets/badges/flask.svg';
import notebook_img from 'views/assets/badges/notebook.svg';
import picture_img from 'views/assets/badges/picture.svg';
import sharpener_img from 'views/assets/badges/sharpener.svg';
import { Avatar, Grid } from '@mui/material';

export const BadgeContainer: FC = () => {
  const badges = [
    creon_img,
    flask_img,
    notebook_img,
    picture_img,
    sharpener_img,
    question,
    question,
    question,
  ];

  return (
    <>
      <ProfileTitle title='Badges' />
      <Grid container spacing={2} sx={{marginBottom: 5, width: '90%'}} >
        {
          badges.map(badge => (
            <Grid item >
              <Avatar sx={{ width: 120, height: 120, background: 'white', border: 'gray dashed' }}>
                <img style={{ height: 90 }} src={badge} />
              </Avatar>
            </Grid>)
          )
        }
      </Grid>
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

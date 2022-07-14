import { FC, useEffect, useState, useContext, useCallback } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { SUBJECT_COLORS } from 'constants/common';
import { SubjectCard } from 'views/atoms/SubjectCard';

interface SlideProps {
  subjects: any[]
}

// breakpoint: number;
// settings: {
//     slidesToShow: number;
//     slidesToScroll: number;
// };
export const SlideShowSubjects: FC<SlideProps> = ({ subjects }) => {

  return (
    <Slide
      // slidesToShow={4}
      autoplay={false}
      transitionDuration={500}
      infinite={false}
      // slidesToScroll={3}
      responsive={[{
        breakpoint: 1366,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 5
        }
      }]}
    >
      {
        subjects.map((p: any, index: number) => (
          <SubjectCard
            isChecked={true}
            imgUrl={`https://api.withsocrates.com/media/${p.image}`}
            text={p.name}
            bgColor={SUBJECT_COLORS[index % 6]}
          />
        ))
      }
    </Slide>
  );
};

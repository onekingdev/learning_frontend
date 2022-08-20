import { FC, useRef, useState } from 'react';
import { SUBJECT_COLORS } from 'constants/common';
import { SubjectCard } from 'views/atoms/SubjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'
import "swiper/css/pagination"
import { Box } from '@mui/material';

interface SlideProps {
  subjects: any[]
  onSlideClick: (id: string) => void
}

export const SlideShowSubjects: FC<SlideProps> = ({ subjects, onSlideClick }) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const [checkedIndex, setCheckedIndex] = useState(-1)
  return (
    <Box position={'relative'}>
      <Swiper
        style={{
          padding: '15px 20px'
        }}
        slidesPerView={3}
        spaceBetween={10}
        onClick={(swiper) => {
          if (swiper.clickedIndex > -1) {
            setCheckedIndex(swiper.clickedIndex)
            onSlideClick(subjects[swiper.clickedIndex].id)
          }
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={
          {
            // when window width is >= 1366px
            1366: {
              slidesPerView: 6,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            450: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 5
            },
          }
        }
      >
        {
          subjects

            .map((p: any, index: number) => (
              <SwiperSlide key={p.id}>
                <SubjectCard
                  key={p.id}
                  imgUrl={`https://api.withsocrates.com/media/${p.image}`}
                  text={p.name}
                  bgColor={p.hexColor || '#22BAAF'}
                  isChecked={checkedIndex === index}
                />
              </SwiperSlide>
            ))
        }
        <div ref={navigationPrevRef} className='swiper-button-prev' style={{ left: 0, }} />
        <div ref={navigationNextRef} className='swiper-button-next' style={{ right: 0 }} />
      </Swiper >
    </Box>
  );
};

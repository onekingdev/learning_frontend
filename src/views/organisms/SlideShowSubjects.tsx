import { FC, useRef, useState } from 'react';
import { SUBJECT_COLORS } from 'constants/common';
import { SubjectCard } from 'views/atoms/SubjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'
import "swiper/css/pagination"
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
        slidesPerView={3}
        spaceBetween={10}
        onClick={(swiper) => {
          if (swiper.clickedIndex > -1) {
            setCheckedIndex(swiper.clickedIndex)
            onSlideClick(subjects[swiper.clickedIndex].id)
          }
        }}
        pagination={{
          clickable: true,
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
              spaceBetween: 25
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20
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
                  bgColor={SUBJECT_COLORS[index % 7]}
                  isChecked={checkedIndex === index}
                />
              </SwiperSlide>
            ))
        }
      </Swiper >
      {/* <Box display='flex' justifyContent={'space-between'} position='absolute' bottom={0} left={-20} right={-20} zIndex={1}> */}
      <IconButton ref={navigationPrevRef}
        sx={{
          position: 'absolute',
          bottom: 'calc(50% - 25px)',
          left: -20,
          zIndex: 1
        }}
      > <ChevronLeftIcon /></IconButton>
      <IconButton ref={navigationNextRef}
        sx={{
          position: 'absolute',
          bottom: 'calc(50% - 25px)',
          right: -20,
          zIndex: 1
        }}
      ><ChevronRightIcon /></IconButton>
      {/* </Box> */}
    </Box>
  );
};

import { FC, useState } from 'react';
import { SUBJECT_COLORS } from 'constants/common';
import { SubjectCard } from 'views/atoms/SubjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'
import "swiper/css/pagination"

interface SlideProps {
  subjects: any[]
  onSlideClick: (id: string) => void
}

export const SlideShowSubjects: FC<SlideProps> = ({ subjects, onSlideClick }) => {

  const [checkedIndex, setCheckedIndex] = useState(-1)
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      onClick={(swiper) => {
        if (swiper.clickedIndex) {
          setCheckedIndex(swiper.clickedIndex)
          onSlideClick(subjects[swiper.clickedIndex].id)
        }
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
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
        subjects.map((p: any, index: number) => (
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
  );
};

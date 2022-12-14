import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useActiveCategory } from '../../../context/CarContext';
import { CAR_CATEGORY } from '../../../utils/carAttribute';
import Category from '../Category/Category';
import CardList from './CardList';

const CardSlide = () => {
  const [swiper, setSwiper] = useState(null);
  const { changeCategory } = useActiveCategory();

  return (
    <div>
      <Category swiper={swiper} />
      <Swiper
        className="swiper-container"
        onSwiper={setSwiper}
        onActiveIndexChange={({ realIndex }) => {
          changeCategory(realIndex);
        }}
      >
        {CAR_CATEGORY.map((category, index) => {
          return (
            <SwiperSlide key={`swiper-slide-${index}`}>
              <StCardWrapper>
                <CardList category={category} />
              </StCardWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlide;

const StCardWrapper = styled.div`
  min-height: calc(100vh - 100px);
`;

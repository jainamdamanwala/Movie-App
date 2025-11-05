import React from 'react';
import './movieSwiper.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MovieSwiper({ slides = [], slideChange = () => {} }) {
  const handleSlideChange = (swiper) => {
    const idx = swiper?.realIndex ?? 0;
    const id = slides[idx]?._id;
    if (id) slideChange(id);
  };

  const handleInit = (swiper) => {
    // fire once for the initially visible slide
    handleSlideChange(swiper);
  };

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
      loop
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
      onInit={handleInit}
      onSlideChange={handleSlideChange}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <img src={slide.previewImg} alt={slide.title || 'Preview'} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;

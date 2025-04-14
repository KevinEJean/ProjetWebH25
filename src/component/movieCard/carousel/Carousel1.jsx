import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel1.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import MovieCard from '../MovieCard';
import { useNavigate } from 'react-router-dom';
import useUtils from '../../utils/useUtils';

// à renommer
export default function Carousel1({ movieCarousel = [null], type = null }) {

  const {handleDetail} = useUtils();

  return (
    <>
      <Swiper
        pagination={{
          clickable: 'fraction',
        }}
        slidesPerView={8}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          movieCarousel && 
          movieCarousel.map((movie, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => handleDetail(type, movie.id ,movie.title) }>
                <MovieCard url={movie.image || `https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} />
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}

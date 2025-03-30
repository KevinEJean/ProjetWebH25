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
export default function Carousel1({ movieCarousel = [null], actorCarousel = [null] }) {

  const {handleDetail} = useUtils();

      function actorImg(actor) {
        var allImg = document.getElementsByTagName("img");
        for (let i = 0; i < allImg.length; i++) {
            if (actor.profile_path == null) {
                return "/src/assets/stockAvatar.jpg";
            } else {
                return `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
            }
        }
    }

  return (
    <>
      <Swiper
        pagination={{
          clickable: 'fraction',
        }}
        slidesPerView={6}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          movieCarousel && 
          movieCarousel.map((movie, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => handleDetail(movie.id ,movie.title) }>
                <MovieCard url={movie.image || `https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} />
              </div>
            </SwiperSlide>
          ))
        }
        {
          actorCarousel && actorCarousel.map((actor, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => handleDetail(movie.id ,movie.title) }>
                        <div className='card-actor'>
                        <img 
                        src={actorImg(actor)}
                        alt={actor.name} 
                        />
                        <strong>{actor.name}</strong>
                        <p>{actor.character}</p>
                        </div>
              </div>
            </SwiperSlide>
          )) 
        } 
      </Swiper>
    </>
  );
}

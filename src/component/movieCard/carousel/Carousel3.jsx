import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import MovieAvatar from "/src/assets/avatar.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Carousel3.css';

// Import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

export default function Carousel3({ movieRecent = [] }) {
    console.log("Movie-Recent récupéré: ", movieRecent)
  return (
    <div className="container-cube">
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }} // ✅ Ajout autoplay
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
            >
            {movieRecent.map((movie, key) => (
                
                <SwiperSlide key={key}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={`Nature ${movie.title}`}
                    // loading="lazy"
                />
                </SwiperSlide>
            ))}
            </Swiper>
    </div>
  );
}

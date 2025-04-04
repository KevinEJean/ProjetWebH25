import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import movieAvatar from "/src/assets/avatar.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';

import './Carousel2.css';   

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import useUtils from '../../utils/useUtils';

export default function Carousel2({ movieRecent = [] }) {

  const {handleDetail} = useUtils();
  
  return (
    <div className='content-main'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          // border:"2px solid",
          // height:"500px",
        //   backgroundImage:'url(https://swiperjs.com/demos/images/nature-1.jpg)'
        }}
        spaceBetween={30}
        speed={1000}
        parallax={true}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        // autoplay={{ delay: 10000 }}
        // loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // ✅ Ajout de autoplay

        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
            movieRecent.map((movie, key) => (
              <SwiperSlide
                      // style={{
                      // backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.poster_path}` || 'https://swiperjs.com/demos/images/nature-1.jpg'})`,
                      // backgroundRepeat:"no-repeat",
                      // backgroundPosition:"center",
                      // backgroundSize:"cover"
                      // }}
                      >
                    <figure>
                          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Description de l'image" />
                            
                          <figcaption>
                            <div className="movie-info" data-swiper-parallax="-500">
                              <h2>{movie.title}</h2>
                                  <h4>{movie.release_date.split('-')[0]} ⭐{movie.vote_average.toFixed(1)}</h4>
                              <hr />
                              <h6>{movie.overview}</h6>
                              <button onClick={() => handleDetail(movie.id ,movie.title)} key={key}>Info</button>
                            </div>
                            
                        </figcaption> 
                    </figure>
                         
                  {/* <div className="title" data-swiper-parallax="-500">
                      <h1>{movie.title}</h1>
                  </div>

                  <div className="subtitle" data-swiper-parallax="-2000">
                      <h3>{movie.release_date.split('-')[0]}</h3>
                  </div>
                  <div className="text" data-swiper-parallax="-5000">
                      {movie.overview}
                  </div> */}
              </SwiperSlide>
            ))
        }
        
     
      </Swiper>
    </div>
  );
}



// backgroundImage: `url(${`https://image.tmdb.org/t/p/w200/${movie.poster_path}` || 'https://swiperjs.com/demos/images/nature-1.jpg'})`,

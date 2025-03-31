import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
          border:"2px solid",
          height:"500px",
        //   backgroundImage:'url(https://swiperjs.com/demos/images/nature-1.jpg)'
        }}
        spaceBetween={30}
        speed={1000}
        parallax={true}
        // direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        // autoplay={{ delay: 10000 }}
        // loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }} // ✅ Ajout de autoplay

        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
            movieRecent.map((movie, key) => (
                <div>
                    <SwiperSlide onClick={() => handleDetail(movie.id ,movie.title)} key={key}
                            style={{
                            backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.poster_path}` || 'https://swiperjs.com/demos/images/nature-1.jpg'})`,
                            // backgroundSize: "cover",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center",
                            // backgroundAttachment:"fixed",
                            // placeContent:"center",
                            backgroundSize:"cover"
                            }}>
                               
                        <div className="title" data-swiper-parallax="-500">
                            <h1>{movie.title}</h1>
                        </div>

                        <div className="subtitle" data-swiper-parallax="-2000">
                            {/* Subtitle */}
                            <h3>{movie.release_date.split('-')[0]}</h3>
                        </div>
                        <div className="text" data-swiper-parallax="-5000">
                            {movie.overview}
                        </div>
                    </SwiperSlide>
                </div>
            ))
        }
        
     
      </Swiper>
    </div>
  );
}



// backgroundImage: `url(${`https://image.tmdb.org/t/p/w200/${movie.poster_path}` || 'https://swiperjs.com/demos/images/nature-1.jpg'})`,

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaInfoCircle } from "react-icons/fa";

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
        }}
        spaceBetween={30}
        speed={1000}
        parallax={true}
        // direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // ✅ Ajout de autoplay

        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
            movieRecent.map((movie, key) => (
              <SwiperSlide>
                    <figure>
                          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Description de l'image" />
                            
                          <figcaption>
                            <div className="movie-info" data-swiper-parallax="-500">
                              <h2>{movie.title}</h2>
                              
                              {/* <h2>{movie.title}</h2> */}
                                  <h4>{movie.release_date.split('-')[0]} ⭐{movie.vote_average.toFixed(1)}</h4>
                              <hr />
                              <h6>{movie.overview}</h6>
                              <hr />
                              <button onClick={() => handleDetail(movie.id ,movie.title)} key={key}><FaInfoCircle/>Info</button>
                            </div>
                            
                        </figcaption> 
                    </figure>
              </SwiperSlide>
            ))
        }
      </Swiper>

    </div>
  );
}
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel1.css';
import './Carousel3.css';

import { Navigation } from 'swiper/modules';


export default function Carousel3({ actorCarousel = [null]}) {


    function actorImg(actor) {
        var allImg = document.getElementsByTagName("img");
        for (let i = 0; i < allImg.length; i++) {
            if (actor.profile_path == null) {
                return "/src/assets/stockAvatar.jpg";
            } else {
                return `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
            }
        }
    }

    return (
        <>
            {
                actorCarousel &&
                <Swiper
                    pagination={{
                        clickable: 'fraction',
                    }}
                    slidesPerView={5}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        actorCarousel &&
                        actorCarousel.map((actor) => (
                            <SwiperSlide key={actor.id}>
                                <div className='card-actor'>
                                    <div className='actor-image' style={{ backgroundImage: `url(${actorImg(actor)})` }}></div>
            
                                    <strong>{actor.name}</strong>
                                    <p>{actor.character}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }
        </>
    );
}

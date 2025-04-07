import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel1.css';
import './Carousel3.css';

// import required modules
import { Navigation } from 'swiper/modules';

// régler le problème des poster,vide,backdrops qui arrive pas à affcier l'image

// à renommer
export default function Carousel3({ actorCarousel = [null], poster = [null] }) {


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
    // backgroundImage: actorImg(actor),
    return (
        <>
            {
                actorCarousel && poster == null &&
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
                        actorCarousel.map((actor, key) => (
                            <SwiperSlide>
                                <div className='card-actor' key={key}>
                                    <div className='actor-image' style={{ backgroundImage: `url(${actorImg(actor)})` }}></div>
                                    {/* <img 
                                    src={actorImg(actor)}
                                    alt={actor.name} 
                                    /> */}
                                    <strong>{actor.name}</strong>
                                    <p>{actor.character}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }


            {/* {
                poster && actorCarousel == null &&
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
                        poster && 
                        poster.posters.map((image, key) => (
                            <img key={key} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />                        
                        )) 
                    }
                    
                </Swiper>
            } */}

            {/* {
                actorCarousel && poster == null &&
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
                        actorCarousel.map((actor, key) => (
                            <SwiperSlide>
                                <div className='card-actor' key={key}>
                                    <img 
                                    src={actorImg(actor)}
                                    alt={actor.name} 
                                    />
                                    <strong>{actor.name}</strong>
                                    <p>{actor.character}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            } */}


        </>
    );
}

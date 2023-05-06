import React from 'react'
import Title from './Title' 
import { FaUserFriends } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Movies } from '../Data/MovieData';



function MovieCast() {
  return (
    <div className="my-12">
      <Title title="Cast" Icon={FaUserFriends}/>
      <div className="mt-10">
        <Swiper autoplay={{ 
          delay: 1000,
        disabledOnInteraction: false,
      }}  loop= {true}
      spaceBetween={10}
      speed={1000}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}>
        {
          Movies.map((movie) => (
            <SwiperSlide key={movie?.id}>
              <div className="w-full p-3 italics text-xs text-txt rounded flex-col bg-dyr border border-gray-800">
                <img src={`/images/movies/${movie?.image}`} alt={movie?.name} className="w-full h-48 object-cover rounded mb-2"/>
                <h2 className="font-bold text-sm">{movie?.name}</h2>
                </div>
                </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  );
}

export default MovieCast
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Movies } from './../../Data/MovieData';

function Banner() {
  return (
    <div className="relative w-full">
        <Swiper 
        direction="vertical"
        spaceBetween={0} 
        slidesPerView={1}
        loop={true} 
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false}}
        className=" w-full xl:h-96 bg-dyr lg:h-64 h-48">      
         
         { Movies.slice(0,6).map((movie, index) => (
    <SwiperSlide key={index} className="relative rounded overflow-hidden">
      <img src={movie.image}
      alt={movie.title} className="w-full h-full object-cover" />
      <div className=" absolute  liner-bg xl:pl-52 sm:pl-32 pl-8 top-0 right-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">

      </div>
       </SwiperSlide>
       ))
       }

         </Swiper>
    </div>
  );
}

export default Banner
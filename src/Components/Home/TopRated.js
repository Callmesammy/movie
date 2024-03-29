
import React, {useState} from 'react'
import Title from '../Title'
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation } from 'swiper';
import { Movies } from './../../Data/MovieData';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Stars';


function TopRated() {

  const [nextE, setNextE1] = useState(null);
  const [prevE, setPrevE1] = useState(null);

  const clasName = 
  'hover:bg-dyr transitions bg-maint rounded w-8 h-8 flex-colo text-sm bg-sub text-white';
return (
<div className="my-16">
      <Title title = "Top Rated " Icon = {BsBookmarkStarFill}/>
      <div className="mt-10">
      <Swiper
         navigation = {{nextE, prevE}}
        slidesPerView={4}
        spaceBetween={40} 
        autoplay={true} 
        speed={1000} 
        loop={true}
        modules={[Navigation, Autoplay]}>
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className=" p-4 h-rate hovered border border-brd bg-dyr rounded-lg overflow-hidden">
                 <img src={movie.titleImage} alt={movie.titleImage} 
                 className="w-full h-full object-cover rounded-lg"/>
                <div className="px-4 hoveres text-center absolute bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0">
                  <button className="  w-12 h-12 flex-colo transitions hover:bg-sub rounded-full bg-opacity-30 text-white">
                    <FaHeart/>             
                     </button> 
                    <Link className="font-semibold text-xl trancuted line-clamp-2" to={movie.id}>
                      {movie.name}
                      </Link> 
                  <div className="flex gap-2 text-str">
                    <Rating value={movie.rate}/>
                 
                  </div>
               </div>
                </div> </SwiperSlide>
         )) }
        </Swiper>
        
      </div>   
</div>
    );
}

export default TopRated
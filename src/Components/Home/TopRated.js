
import React, {useState} from 'react'
import Title from '../Title'
import { BsCollectionFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Movies } from './../../Data/MovieData';
import { Autoplay } from 'swiper';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';




function TopRated() {

  const [nextE1, setnextE1] = useState(null);
  const [prevE1, setprevE1] = useState(null);
return (
<div className="my-16">
      <Title title = "Top Rated " Icon = {BsCollectionFill}/>
      <div className="mt-10">
      <Swiper navigation={{nextE1, prevE1}} 
        slidesPerView={4}
         spaceBetween={40} 
        autoplay={true} 
        speed={1000} 
        loop={true}
        modules={[Navigation, Autoplay]}>
          {
            Movies.map((movie, index) => (
                <SwiperSlide key={index}>
                <div className=" p-4 h-rate border border-brd bg-dyr rounded-lg overflow-hidden">
                  <img src={movie.titleImage} alt={movie.titleImage} 
                  className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div className="px-4 flex-colo text-center absolute bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0">
                  <button className="  w-12 h-12 flex-colo transitions hover:bg-sub rounded-full bg-opacity-30 text-white">
                    <FaHeart/>                  </button>

                    <Link className=" font-semibold text-xl trancuted line-clamp-2" to={`/movie/${movie.id}`}>
                      {movie.name}
                      </Link>
                  <div className="flex gap-2 text-str">
                  </div>

                </div>
                </SwiperSlide>
         )) }
        </Swiper>
      </div>
</div>
    );
}

export default TopRated
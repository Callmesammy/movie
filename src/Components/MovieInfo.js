import React from 'react'
import FlexMovieItem from './FlexMovieItem'
import { FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'



function MovieInfo({movie}) {
  return (
<div className="w-full xl:h-sreen relative text-white">
    <img src={`/images/movies/${movie?.image}`} 
    alt={movie?.name} 
    className="w-full h-full xl:inline-block object-cover"/>
    <div className=" xl:bg-maint bg-dyr flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
    <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:-py-20 gap-8">
        <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dyr border-gray-800 rounder-lg overflow-hidden">
          <img src={`/images/movies/${movie?.titleImage}`} alt={movie?.name} className="w-full h-full object-cover"/>
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className=" col-span-3 flex flex-col gap-10">
              {/* Title */}
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold tracking-wider">{movie?.name}</h1>
        {/* flex items */}
        <div className="flex items-center gap-4 font-medium text-dyd">
          <div className="flex-colo bg-sub text-xs px-2 py-1">HD 4K
          </div>
          <FlexMovieItem movie={movie && movie} />
        </div>
        {/* description */}
         <p className="text-sm text-txt leading-7">{movie?.desc}</p>
         <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-maint border border-gray-800 rounded-lg">
          {/* share */}
          <div className="col-span-1 flex-colo border-r border-brd">
            <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
              <FaShareAlt />

            </button>
          </div>
          {/* languages */}
          <div className="col-span-2 flex-colo font-medium text-sm">
            <p>Language : {' '}<span className="ml-2 truncate">{movie?.language}</span></p>
          </div>
          {/* watch button */}
          <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
            <Link to={`/watch/${movie?.name}`} className="bg-dyr hover:bg-sub transitions border-2 border-sub rounded-full flex-rows gap-4 w-full sm:py-3">
            <FaPlay className="w-3 h-3"/>Watch
          </Link>
          </div>
          </div>
          </div>
          <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
            <button className=" md:w-1/4 w-full relative flex-colo bg-sub hover:bg-transparent border-2 border-sub transitions md:h-64 h-20 rounded font-medium">
              <div className="flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                Download <FiLogIn className="w-4 h-4"/>
                </div>            
                </button>
                </div>
          </div>
          </div>
    </div>
</div>
    );
}

export default MovieInfo
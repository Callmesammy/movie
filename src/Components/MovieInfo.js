import React from 'react'


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
          </div>
    </div>
</div>
    )
}

export default MovieInfo
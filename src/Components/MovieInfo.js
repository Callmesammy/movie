import React from 'react'

function MovieInfo({movie}) {
  return (
<div className="w-full xl:h-sreen relative text-white">
    <imag src={movie?.image} 
    alt={movie?.name} 
    className="w-full h-full xl:inline object-cover"/>

</div>
    )
}

export default MovieInfo
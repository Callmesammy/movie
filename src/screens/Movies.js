import React from 'react'
import Layout from '../Layout/Layout'
import Filter from '../Components/Filter';
import Movie from '../Components/Movie';
import { Movies } from './../Data/MovieData';


function MoviePage() {
  return (
    <Layout>

    
    <div className="min-height-screen container mx-auto px-2 my-6">
    <Filter/>
    <p className="text-lg font-medium my-6">Total 
    <span className="font-bold text-sub"> {Movies?.length} </span>
    </p>
    <div className="grid sm:mt-10 mt-5 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {
        Movies?.map((movie, index) => (
          <Movie key={index} movie={movie}/>
        ))
      }
    </div>
    </div>
 </Layout> 
 )
}

export default MoviePage
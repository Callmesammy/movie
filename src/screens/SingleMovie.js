
import React from 'react'
import { useParams } from 'react-router-dom';

import { Movies } from './../Data/MovieData';
import Layout from '../Layout/Layout';
import MovieInfo from '../Components/MovieInfo';
import MovieCast from '../Components/MovieCast';
import MovieRates from './../Components/MovieRates';


function SingleMovie() {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
 
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className="container mx-auto px-2my-6 2xl:px-32">
       <MovieCast/> 
       {/* ratings */}
       <MovieRates movie={movie}/>
        </div>
   </Layout>
  );
}

export default SingleMovie
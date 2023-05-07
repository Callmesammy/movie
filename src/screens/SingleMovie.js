
import React from 'react'
import { useParams } from 'react-router-dom';

import { Movies } from './../Data/MovieData';
import Layout from '../Layout/Layout';
import MovieInfo from '../Components/MovieInfo';
import MovieCast from '../Components/MovieCast';
import MovieRates from './../Components/MovieRates';
import { BsCollectionFill } from 'react-icons/bs';
import Titles from '../Components/Title';
import Movie from '../Components/Movie';



function SingleMovie() {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovie = Movies.filter((m) => m.category === movie.category);
 
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className="container mx-auto px-2my-6 2xl:px-32">
       <MovieCast/> 
       {/* ratings */}
       <MovieRates movie={movie}/>
       {/* related */}
       <div className="my-16">
        <Titles title="Related Movies" Icon={BsCollectionFill}/>
        <div className="grid sm:mt-10 mt-5 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {
        RelatedMovie.map((movie, index) => (
        <Movie key={index} movie={movie}/>
        ))
      }
      </div>
        </div>
      </div>
   </Layout>
  );
}

export default SingleMovie

import React from 'react'
import { useParams } from 'react-router-dom';

import { Movies } from './../Data/MovieData';
import Layout from '../Layout/Layout';

function SingleMovie() {
  const { id } = useParams();
  const film = Movies.find((movie) => movie.name === id);
 
  return (
    <Layout>
   <h1>{film?.name}</h1>
   </Layout>
  );
}

export default SingleMovie
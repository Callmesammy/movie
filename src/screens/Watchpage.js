import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { Movies } from './../Data/MovieData';
import { useState } from 'react';


function Watchpage() {
    let { id } = useParams();
    const movie = Movies.find((movie) => movie.name === id);
    const [play, setPlay] = useState(false);
 
    return (
    <Layout>
    <div className="container mx-auto bg-dyr p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-maint rounded border border-gray-800 p-6">
        <Link to = {`/shows/${movie?.name}`} className="md:text-xl text-sm flex gap-3 text-center font-bold text-dyd">
        <BiArrowBack/> {movie?.name}
        </Link>
        
    </div>
    </div>
    </Layout>

  )
}
export default Watchpage
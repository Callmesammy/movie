import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner';
import PopularMovies from '../Components/Home/PopularMovies';
import Promos from '../Components/Home/Promos';
import TopRated from '../Components/Home/TopRated';


function Homepage() {
  return (
    <Layout>
    <div className=" container mx-auto min-h-screen px-2">
        <Banner/>
        <PopularMovies/>
        <Promos/>
        <TopRated/>
    </div>
    </Layout>
  );
}

export default Homepage
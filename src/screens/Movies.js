import React from 'react'
import Layout from '../Layout/Layout'
import Filter from '../Components/Filter';

function Movies() {
  return (
    <Layout>

    
    <div className="min-height-screen container mx-auto px-2 my-6">
    <Filter/>
    </div>
 </Layout> 
 )
}

export default Movies
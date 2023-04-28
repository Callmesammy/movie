import React from 'react'
import Layout from '../Layout/Layout'
import Head from './Dashboard/Admin/Head';

function Aboutus() {
  return (
   <Layout>
    <div className="container min-height-screen mx-auto px-2 my-6">
      <Head title ="About Us"/>
      <div className="xl:py-20 py-10 px-4">
        <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
          <div>
          <h3 className="text-xl lg:text-3xl mb-4 font-semibold"> Welcome to Netflix</h3>
          <div className="mt-3 text-sm leading-8 text-txt">
            <p>
            It is a long established fact that a reader will 
            be distracted by the readable content of a page when 
            looking at its layout. The point of using Lorem Ipsum 
            is that it has a more-or-less normal distribution of letters,
             as opposed to using 'Content here, content here', making it look
              like readable English. Many desktop publishing packages and web
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of using 
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', 
              making it look like readable English. Many desktop publishing packages and web
            </p> 
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-dyr rounded-lg">
                <span className="text-3xl block  font-extrabold mt-4">10K</span>
                <h4 className='text-lg  font-semibold mb-0'>Movies Listed</h4>
                <p className="mb-0 text-txt font-semibold leading-7 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div> 
              <div className="p-8 bg-dyr rounded-lg">
                <span className="text-3xl block  font-extrabold mt-4">4K</span>
                <h4 className='text-lg  font-semibold mb-0'>Movies Listed</h4>
                <p className="mb-0 text-txt font-semibold leading-7 text-sm">Lorem ipsum  elit</p>
              </div> 
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img src="bg2.jpg" alt="about" className="w-full h-header rounded-lg object-cover" />
            </div>
           </div>
    </div> 
     </div>
   </Layout>
  );
}

export default Aboutus
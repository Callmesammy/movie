import React from 'react'
import Layout from '../Layout/Layout'
import Head from './Dashboard/Admin/Head';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';



function Contactus() {
    const contactDate = [
    {
        id: 1,
        title: 'Email us',
        info: 'You can contact me for all your projacts',
        icon: FiMail,
        contact: 'callmesammy@yahoo.com'
    },
    {
        id: 2,
        title: 'Call us',
        info: 'Building a website or an app? You can contact me for all your projacts',
        icon: FiPhoneCall,
        contact: '+234 803 000 0000'
    },

    {
        id: 3,
        title: 'Location',
        info: 'Location: 123, Main Street, Your City, NY, USA',
        icon: FiMapPin,
        contact: '105102 Lagos Island'
    },


    ]
  return (
    <Layout>
    <div className="container min-height-screen mx-auto px-2 my-6">
      <Head title ="About Us"/>
      <div className="grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
        {
            contactDate.map((item) => (
            <div key={item.id} className="border border-brd flex-colo p-10 bg-dyr rounded-lg text-center">
        <span className="flex-colo w-20 h-20 mt-4 rounded-full bg-maint text-sub text-2xl">
            <item.icon />
        </span>
        <h5 className="text-xl font-semibold mt-6 mb-2">{item.title}</h5>
        <p className="text-txt leading-7 mb-0 text-sm">
        <a href={`mailto:${item.contact}` } className=" text-blue-500 px-2 mb-0 underline font-bold tracking-wider">{item.contact}</a>
        {item.info}
        </p>
        </div>
 ))
        }
          
    </div> 
           
     </div>
   </Layout>
  )
}

export default Contactus
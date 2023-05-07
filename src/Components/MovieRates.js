import React from 'react'
import Title from './Title';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Message, Select } from './UsedInputes';
import { useState } from 'react';
import Stars from './Home/Stars';
import { Movies } from './../Data/MovieData';

function MovieRates({movie}) {
  const [rate, setRating] = useState();
const Ratings = [
    {
      title: "0 - Poor",
      value:0,
    },

    {
      title: "1 - Fair",
      value:1,
    },
    {
      title: "2 - Average",
      value:2,
    },
    {
    title: "3 - Good",
    value:3,
    },

    {
      title: "4 - Very Good",
      value:4,
    },

    {
      title: "5 - Excellent",
      value:5,
    }
];


  return (
    <div className=" my-12">
    <Title title = "Reviews" Icon={BsBookmarkStarFill}/>
    <div className="mt-8 xl:grid flex-colo grid-cols-4 gap-12 bg-dyr xs:p-10 py-10 px-2 sm:p-20 rounded-lg ">
      {/* Write review */}
      <div className=" xl:col-span-2 flex w-full flex-col gap-8">
        <h3 className="text-xl text-txt font-semibold"> Review "{movie?.name}"</h3>
        <p className=" text-sm text-brd leading-7 text-justify font-medium text-border">
          Your email address will not be published. Required fields are marked
          Lorem ipasum dolor sit amet, consectetur adipiscing elit, sed do
          Your email address will not be published. Required fields are marked
          Lorem ipasum dolor sit amet, consectetur adipiscing elit, sed do  Your email address will not be published. Required fields are marked
          Lorem ipasum dolor sit amet, consectetur adipiscing elit, sed do
           *</p>
          <div className="text-sm w-full">
          <Select label="Select Rating" 
          options={Ratings}
          onChange={(e) => setRating(e.target.value)}/>
          <div className=" flex mt-4 text-lg gap-2 text-str">
          <Stars value={rate}/>
          </div>
          </div>
          {/* Message */}
          
          <Message label="Message" placeholder="Write your review here..."/>
          {/* Submit */}
          <button className="bg-sub hover:bg-transparent tracking-wider border-2 border-sub rounded-full flex-colos gap-4 w-full py-3">SUBMIT</button>
        
    </div>
    {/* Reviewers */}
    <div className="col-span-2 flex-col gap-6">
      <h3 className="text-xl text-txt font-semibold"> Reviewers  (56)</h3>
      <div className="w-full flex flex-col bg-maint gap-6 runded-lg p-6 md:p-12 h-header overflow-y-scroll">
        {
          Movies.map((user, i) => (
            <div className="md:grid flex flex-col w-full grid-cols-12 bg-dyr p-4 border border-gray-800 rounded-lg">
            <div className="col-span-2  bg-maint hidden md:block">
              <img src={`/images/movies/${user ? user.titleImage : "user.jpg"}`} 
              alt={user?.fullName}
               className="w-24 h-full object-cover rounded-lg"/>
              </div>
              <div className="col-span-7 px-3 w-full flex flex-col gap-2">
              <h2>{user?.fullName}</h2>
              <p className="text-xs leading-6  font-normal text-txt">{user?.desc}</p>
              </div>
              {/* Rates */}
              <div className="col-span-3 flex flex-rows border-l border-brd text-xs gap-1 text-str">
                <Stars value={user?.rate}/>
                </div>
              </div>
          ))


        }
  </div>
    </div>
    </div>
    </div>
  );
}

export default MovieRates
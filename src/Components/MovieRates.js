import React from 'react'
import Title from './Title';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Select } from './UsedInputes';
import { useState } from 'react';


function MovieRates({movie}) {
  const [rating, setRating] = useState();
const Ratatings = [
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
    <div className="mt-8 xl:grid flex-colo grid-cols-3 gap-12 bg-dyr xs:p-10 py-10 px-2 sm:p-20 rounded-lg ">
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
          <Select label="Select Rating" options={Ratatings} onChange={(e) => setRating(e.target.value)}/>
          </div>
    </div>
    </div>
    </div>
  );
}

export default MovieRates
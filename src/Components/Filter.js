import React from 'react'
import { useState } from 'react'
import { categoriesData } from './../Data/CategoriesData';
import { Listbox } from '@headlessui/react';


const YearData = [
{title: "Sort By Year"},
{title: "1960-1970"},
{title: "1970-1980"},
{title: "1990-2000"},
{title: "2000-2010"},
{title: "2010-2020"},
{title: "2020-2021"},

]

const TimteDate =[
{title: "Sort By Time"},
{title: "1-3 Hours"},
{title: "3-5 Hours"},
{title: "5-7 Hours"},
{title: "7-9 Hours"},
{title: "9-11 Hours"},
{title: "11-13 Hours"},
]

const RateDate =[
{title: "Sort By Rate"},
{title: "1 star"},
{title: "2 star"},
{title: "3 star"},
{title: "4 star"},
{title: "5 star"},
{title: "6 star"},
]

function Filter() {
const [category, setCategory] = useState({title: "Category"});
const [year, setYear] = useState(YearData[0]);
const [time, setTime] = useState(TimteDate[0]);
const [rate, setRate] = useState(RateDate[0]);


const Filters = [
  {
    value: "Category",
    onchange:setCategory,
    items:categoriesData
  },

  {
    value: "year",
    onchange:setYear,
    items:YearData
  },

  {
    value: "time",
    onchange:setTime,
    items:TimteDate
  },

{
  value: "rate", 
  onChange:setRate,
  items:RateDate
}
]

  return (
    <div className=" my-6 bg-dyr text-dyd border-gray- grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filters.map((item, index) => (
      <Listbox key={index} value={item.value} onChange={item.onchange}>  
      <div className="relative">
      <Listbox.Button Classname= " relative border border-gray-800 w-full text-white bg-maint rounded-lg cursor-default py-4 pr-10 text-left tex-xs">
        <span className="block truncate">{item.value.title}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
        </span>
      </Listbox.Button>
      </div>
      </Listbox>
      ))}
      
      
    </div>
  )
}

export default Filter;
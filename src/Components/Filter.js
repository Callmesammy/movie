import React from "react";
import { useState } from "react";
import { categoriesData } from "../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


const YearData = [
  { title: "Sort By Year" },
  { title: "1960-1970" },
  { title: "1970-1980" },
  { title: "1990-2000" },
  { title: "2000-2010" },
  { title: "2010-2020" },
  { title: "2020-2021" },
];

const TimeDate = [
  { title: "Sort By Time" },
  { title: "1-3 Hours" },
  { title: "3-5 Hours" },
  { title: "5-7 Hours" },
  { title: "7-9 Hours" },
  { title: "9-11 Hours" },
  { title: "11-13 Hours" },
];

const RateDate = [
  { title: "Sort By Rate" },
  { title: "1 star" },
  { title: "2 star" },
  { title: "3 star" },
  { title: "4 star" },
  { title: "5 star" },
  { title: "6 star" },
];

function Filter() {
  const [Category, setCategory] = useState({ title: "Category" });
  const [Year, setYear] = useState(YearData[0]);
  const [Time, setTime] = useState(TimeDate[0]);
  const [Rate, setRate] = useState(RateDate[0]);

  const Filter = [
    {
      value: Category,
      onChange: setCategory,
      items: categoriesData,
    },

    {
      value: Year,
      onChange: setYear,
      items: YearData,
    },

    {
      value: Time,
      onChange: setTime,
      items: TimeDate,
    },

    {
      value: Rate,
      onChange: setRate,
      items: RateDate,
    },
  ];

  return (
    <div className="my-6 bg-dyr  border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-left text-white bg-maint rounded-lg cursor-default py-4 pl-6 pr-10 text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                <FaChevronDown className="w-3 h-3" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60  w-full bg-maint rounded-md shadow-lg py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({
                      active,
                    }) => `relative cursor-default select-none py-2 pl-10 pr-4'} cursor-default select-none relative py-2 pl-10 pr-4
             ${active ? " bg-sub text-white" : "text-white"}`}
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={` block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>

                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <MdKeyboardArrowDown
                              className="w-5 h-5"
                              aria-aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filter;

import React from 'react'
import { FiUser } from 'react-icons/fi'

function Promos() {
  return (
    <div className=" my-20 py-10 md:px-20 px-8 bg-dyr">
      <div className=" lg:grid lg:grid-cols-2 lg:gap-10 items-center">
      <div className=" flex lg:gap-10 gap-6 flex-col">
        <h1 className=" xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
          Download Your Movies  and watch them offline <br/> Enjoy on your mobile device
        </h1>
        <p className="text-txt text-sm xl:text-base leading-6 xl:leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex gap-4 md:text-lg text-sm">
          <div className=" flex-colo bg-black text-sub px-6 py-3 rounded font-bold">
            HD 4K
          </div>
          <div className=" flex-rows gap-4  bg-black text-sub px-6 py-3 rounded font-bold">
          <FiUser/> 2K
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Promos
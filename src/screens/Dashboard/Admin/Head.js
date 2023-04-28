import React from 'react'

function Head({title}) {
  return (
    <div className=" w-full linear-bg bg-deepGray lg:h-64 relative overflow-hidden rounded-md">
        <img src="bg.jpg" alt="background" className="w-full h-full object-cover" />
        <div className="absolute lg:top-24 top-16 tracking-wider shadow bg-grey-600 w-full flex-colo">
            <h1  className="text-2xl lg:text-h1 text-txt-5  text-center  font-bold">
                {title && title}
            </h1>
        </div>
    </div>
    
  );
}

export default Head
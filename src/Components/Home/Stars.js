import React from 'react'




function Stars ({value}) {
  return (
    <>
   
    <span>
        {
            value >= 5 ? (
                <FaStar/>
            ) : value >= 4.5 ? 
            (<FaStarHalfAlt/>
            ) : (<FaRegStar/>)
          
            }  
    </span>
    </>
    )
}

export default Stars
import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { CgUser } from 'react-icons/cg'
import { FaHeart } from 'react-icons/fa'

function Navbar() {
    const hover = 'hover:text-sub  transitions text-white'
    const Hover = ({isActive}) => (isActive ? "text-sub" : hover ); 
    
    return (
    <>
    <div className=" bg-maint  shadow-md sticky top-0 z-0">
        <div className="container mx-auto lg:grid gap-10 grid-cols-7 justify-between items-center py-2 px-4">
        <div className=" my-5 col-span-1 lg:block hidden"> 
        <Link to="/">
            <img src="/loo.png" alt="loogo" border="0" className="w-full h-12 object-contain"/>
        </Link>
        </div>
        {/* { Search Form} */}
        <div className=" col-span-3">
            <form className="w-full text-sm bg-dyd rounded flex-btn gap-4">
                <button type="submit" className="bg-sub w-12 flex-colo h-12 rounded text-white">
                    <FaSearch/>
                </button>
                <input type="text" placeholder="Search Movie Name from here"
                className=" font-medium placeholder:text-brd text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black">
                    
                </input>
            </form>
        </div>
        {/* {Menus} */}
        <div className='col-span-3 font-medium hidden xl:gap-14 2xl:gap-20 justify-between lg:flex  xl:justify-end items-center'>
            <NavLink to="/movies" className={Hover}>
                Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
                About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
                Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
                <CgUser className="w-8 h-8"/>
                </NavLink>
                <NavLink to="/favorite" className={'${Hover} relative'}>
                <FaHeart className= "w-6 h-6"/>
                <div className=" w-5 h-5 flex-colo rounded-full text-xs bg-sub text-white absolute -top-5 right-1">
                    3</div>
            </NavLink>
        </div>

           </div> 
           
        </div>
    </>
  )
}

export default Navbar
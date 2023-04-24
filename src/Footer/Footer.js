import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const Links = [
        {
            title: "Company",
            Links:[

                {
                name: 'Home',
                link: "/"
                },
                
                {
                    name: 'About Us',
                    link: "/about-us"
                },
                {
                    name: 'Contact Us',
                    link: "/contact-us"
                },
                {
                    name: 'Movies',
                    link: "/movies"
                }
            ]
        },
        {
            title: "Top Categories",
            Links:[

                {
                name: 'Action',
                link: "#"
                },
                
                {
                    name: 'Adventure',
                    link: "#"
                },
                {
                    name: 'Fantasy',
                    link: "#"
                },
                {
                    name: 'Horror',
                    link: "#"
                }
            ]
        },
        {
            title: "My Account",
            Links:[

                {
                name: 'Dashboard',
                link: "/dashboard"
                },
                
                {
                    name: 'My Favorite',
                    link: "/favorite"
                },
                {
                    name: 'Profile',
                    link: "/profile"
                },
                {
                    name: 'Change Password',
                    link: "/password"
                }
            ]
        },
    ]
  return (
    <div className=" bg-dyr py-4 border t-2 border-black">
        <div className="container mx-auto px-2">
            <div className=" grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
            {Links.map((link, index) => (
              <div key={index} className=" col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
                
              </div>  
            ))}
            </div>
        </div>
    </div>
  )
}

export default Footer
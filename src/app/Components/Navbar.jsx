"use client"
import { FaBars } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { UpdateFollower } from "react-mouse-follower";
import {motion} from "framer-motion"
import { useState } from "react";
const Navbar = () => {
  const [open,setOpen]=useState(false)
  console.log(open);
    // Navbar Component Code Here
    const navbarMenu = [
        {
            id: 1,
            label: 'Home',
            href: '/'
        },
        {
            id: 2,
            label: 'Catagries',
            href: '/'
        },
        {
            id: 3,
            label: 'Blog',
            href: '/'
        },
        {
            id: 4,
            label: 'About',
            href: '/'
        },
        {
            id: 5,
            label: 'Contact',
            href: '/'
        },
    ]
  return (
    <div className=" bg-black">
        <motion.nav 
         key={navbarMenu.id}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1,delay: 0.5 }}
        className="flex justify-between items-center px-[80px] py-[32px] text-white">
          <h1 className="text-xl font-bold text color pr-4">Headphone/<span className='text-[#B9BABA]'>Store</span></h1>
          <UpdateFollower mouseOptions={{
            backgroundColor:"white",
            zIndex:999,
            followSpeed:1.5,
            scale:5,
            mixBlendMode:"difference",
          }}>

          <ul className={`space-x-4 text-[16px] gap-x-6 font-[400] hidden md:flex`}>
            {
                navbarMenu.map(item => (
                  <li key={item.id}>
                    <a href={item.href} className="hover:text-gray-300">{item.label}</a>
                  </li>
                ))
            }
          <div className="flex text-2xl">
            <IoHeadset/>

          </div>
          </ul>
            <FaBars className="block md:hidden"onClick={()=>{
              setOpen(!open)
            }}/>
          </UpdateFollower>
        </motion.nav>

    </div>
  )
}

export default Navbar
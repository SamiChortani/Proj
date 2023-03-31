import React from "react";
import { Link, NavLink } from "react-router-dom";
import {ImSearch} from 'react-icons/im'
import {CgUser} from 'react-icons/cg'
import {FaHeart} from 'react-icons/fa'


import BL from '../../logo1.jpg'




const NavBar = () => {

    const hover = 'hover:text-star transitions text-white';
    const Hover = ({isActive})=>(isActive?'text-star':hover);
    const hov = 'hover:text-subMain transitions text-white'
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20 ">
        <div className="container  mx-auto py-6  lg:grid gap-10 grid-cols-8 justify-between items-center ">
          {/* logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src={BL}
                alt="logo"
                className="w-full h-12 object-contain "
              />
            </Link>
          </div>
          {/* search */}
          <div className="col-span-3" >
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
                <button type="submit" className="bg-black w-12 flex-colo h-12 rounded text-white">
                <ImSearch/>
                </button>
                <input type="text" placeholder="Search..."
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black "/>
            </form>

          </div>
          {/* menu */}
          <div className="col-span-3 font-medium  text-lg hidden xl:gap-14 2xl:gap-21 justify-between lg:flex xl:justify-end items-center ">
            <NavLink to="/movies" className={Hover}>
                Movies
            </NavLink>
            <NavLink to="/aboutus" className={Hover}>
                About Us
            </NavLink>
            <NavLink to="/contactus" className={Hover}>
                Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
                <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorite" className={`${hov} relative  `}>
                <FaHeart className="w-6 h-6"/>
                <div className="w-5 h-5 flex-colo rounded-full text-xs bg-dryGray text-white absolute -top-5 -right-1" >10</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

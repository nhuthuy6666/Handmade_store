import React from 'react';
import logo from '../assets/logo.jpg';
import { scrollToTop } from '../../../frontend/src/helpers/scrollToTop';
import { NavLink } from 'react-router-dom';
import { MdToys } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

const Header = () => {

    const active = 'flex items-center justify-center gap-1 font-bold text-customText';
    const notActive = 'flex items-center justify-center gap-1 font-bold text-gray-900 hover:text-customText';

  return (
    <div className='fixed top-0 z-20 w-full'>
        <div className='flex items-center justify-between px-10 max-xs:px-2 bg-customColor relative max-sm:px-3'>
            <div>
                <img src={logo} alt="" width={60} height={60} />
            </div>
            <div className='flex items-center justify-between gap-6'>
            <NavLink to='/products' className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><MdToys />Products</NavLink>
            <NavLink to='/accounts' className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><FaUserGroup />Accounts</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header

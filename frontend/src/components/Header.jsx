import React, { useContext, useState } from 'react';
import logo from '../assets/logo.jpg';
import { RiPictureInPictureFill } from "react-icons/ri";
import { PiChairFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";
import { GiMagicLamp } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../helpers/scrollToTop';
import { ShopContext } from '../Context/ShopContext';
import { CiLogout } from "react-icons/ci";

const Header = () => {

    const [menu, setMenu] = useState(false);
    const {GetTotalCartItem} = useContext(ShopContext);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const active = 'flex items-center justify-center gap-1 font-bold text-customText';
    const notActive = 'flex items-center justify-center gap-1 font-bold text-gray-900 hover:text-customText';

  return (
    <div className='w-full fixed top-0 z-50'>
        <div className='flex items-center justify-between px-10 max-xs:px-2 bg-customColor relative max-sm:px-3'>
            <NavLink to="/" onClick={scrollToTop}>
                <img src={logo} alt="" width={60} height={60}/>
            </NavLink>
            <div className='hidden lg:flex items-center justify-between gap-6'>
                <NavLink to="/wallart" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><RiPictureInPictureFill />Wall Art</NavLink>
                <NavLink to="/furniture" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><PiChairFill />Furniture</NavLink>
                <NavLink to="/plants" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><RiPlantFill />Plants</NavLink>
                <NavLink to="/accessories" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><GiMagicLamp />Accessories</NavLink>
            </div>
            <div className='lg:hidden'>
                {!menu?<div className='font-bold text-gray-900 ring-2 ring-gray-900 p-1 rounded-full hover:text-customText hover:ring-customText' onClick={handleMenu}><IoIosMenu /></div>:<div className='font-bold text-gray-900 ring-2 ring-gray-900 p-1 rounded-full hover:text-customText hover:ring-customText' onClick={handleMenu}><IoCloseSharp /></div>}
            </div>
            <div className='relative'>
                <NavLink to='/cart'>
                <button onClick={scrollToTop} className='flex items-center justify-center gap-1 font-bold text-white ring-2 ring-customText px-5 py-2 rounded-xl bg-customText hover:bg-yellow-100 hover:text-customText'>
                    <FaShoppingCart />Cart
                </button>
                </NavLink>
                <div className='ring-2 ring-customText text-white px-2 py-0 rounded-full bg-customText font-bold absolute top-0 left-[105px] cursor-default'>
                    <p>{GetTotalCartItem()}</p>
                </div>
            </div>
            {localStorage.getItem('auth-token')?
            <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}} className='flex items-center justify-center gap-1 font-bold text-white ring-2 ring-customText px-5 py-2 rounded-xl bg-customText hover:bg-yellow-100 hover:text-customText ml-8'>
                 <CiLogout />Log out
            </button>
            :<NavLink to='/login'>
            <button onClick={scrollToTop} className='flex items-center justify-center gap-1 font-bold text-white ring-2 ring-customText px-5 py-2 rounded-xl bg-customText hover:bg-yellow-100 hover:text-customText ml-8'>
                <IoPerson />Login
            </button>
            </NavLink>}
        </div>
        <div>
            {!menu?"":<div className='ring-2 ring-customText rounded-xl w-[150px] h-[170px] flex flex-col gap-5 items-center absolute top-15 left-[140px] z-5 lg:hidden bg-customColor'>
                <NavLink to="/wallart" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><RiPictureInPictureFill />Wall Art</NavLink>
                <NavLink to="/furniture" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><PiChairFill />Furniture</NavLink>
                <NavLink to="/plants" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><RiPlantFill />Plants</NavLink>
                <NavLink to="/accessories" className={({isActive}) => isActive?active:notActive} onClick={scrollToTop}><GiMagicLamp />Accessories</NavLink>
        </div>}
        </div>
    </div>
  )
}

export default Header

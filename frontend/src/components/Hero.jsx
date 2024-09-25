import React from 'react';
import hero from '../assets/hero.jpg';
import { FaStar } from "react-icons/fa";
import { scrollToTop } from '../helpers/scrollToTop';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${hero})`}} className='bg-cover bg-center md:h-screen'>
        <style>{`
        .text-with-border{
           color: black;
           text-shadow: 
           -1px -1px 0 #fff,  
           1px -1px 0 #fff,
          -1px  1px 0 #fff,
           1px  1px 0 #fff;
           cursor: default;
           }
        `}
        </style>
        <div className='relative z-20 flex flex-col items-start justify-center p-20 w-1/2 gap-10 max-md:w-full max-md:p-10'>
            <p className='text-5xl font-bold leading-loose max-xl:text-2xl max-md:text-base cursor-default text-with-border'>"Gives your living space a special nuance."</p>
            <div className='flex flex-col items-start justify-center gap-5'>
                <div className='flex gap-5 text-2xl items-start justify-center text-customText'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='font-bold cursor-default text-with-border'>
                    <p>64k people rated excellent</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <NavLink to='/shop'>
                <button className='bg-customText text-white font-bold px-10 py-2 rounded-xl ring-2 ring-customText hover:bg-yellow-100 hover:text-customText' onClick={scrollToTop}>
                    Go to Store
                </button>
                </NavLink>
                <button className='bg-customText text-white font-bold px-10 py-2 rounded-xl ring-2 ring-customText hover:bg-yellow-100 hover:text-customText'onClick={scrollToBottom}>
                    About Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero

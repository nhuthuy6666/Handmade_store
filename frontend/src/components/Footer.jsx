import React from 'react';
import logo from '../assets/logo.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-customColor grid grid-cols-4 px-10 py-5 max-sm:grid-cols-1 max-sm:gap-10'>
      <div>
        <p className='text-customText text-xl font-bold cursor-default'>Info</p>
        <ul className='mt-5 text-sm cursor-pointer'>
          <li className='mt-3'>Formats</li>
          <li className='mt-3'>Compression</li>
          <li className='mt-3'>FAQ</li>
          <li className='mt-3'>Status</li>
          <li className='mt-3'>Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-customText text-xl font-bold cursor-default'>Usefull Links</p>
        <ul className='mt-5 text-sm cursor-pointer'>
          <li className='mt-3'>Blogs</li>
          <li className='mt-3'>Sales</li>
          <li className='mt-3'>Pricing</li>
          <li className='mt-3'>Tickets</li>
          <li className='mt-3'>Customer Service</li>
        </ul>
      </div>
      <div>
        <p className='text-customText text-xl font-bold cursor-default'>Address</p>
        <ul className='mt-5 text-sm cursor-default'>
          <li className='mt-3'>124, Steiner</li>
          <li className='mt-3'>LonDon, US</li>
        </ul>
      </div>
      <div className='flex flex-col items-start justify-start'>
       <div className='flex items-center justify-center gap-3'>
            <img src={logo} alt="" width={60} height={60} />
            <p className='text-customText text-xl font-bold cursor-default'>Handmade Store</p>
       </div>
       <p className='text-sm mt-5 cursor-default'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est eaque omnis ea sit placeat provident dolor animi ipsa nulla!</p>
       <div className='flex text-3xl gap-5 mt-5 cursor-pointer'><FaLinkedin /><FaInstagramSquare /><FaFacebookSquare /><FaTwitterSquare /></div>
      </div>
    </div>
  )
}

export default Footer

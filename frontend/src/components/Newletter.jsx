import React, { useRef } from 'react';
import banner from '../assets/banner.jpg';

const Newletter = () => {

  const inputRef = useRef(null);
  const Subcribe = () => {
    if(!inputRef.current.checkValidity()){
      alert("Invalid email!");
    }
    else{
      alert("Thanks, we will update via your email");
    }
  }

  return (
    <div style={{backgroundImage: `url(${banner})`}} className='bg-cover bg-center h-screen flex flex-col items-center justify-center gap-10'>
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
        <h2 className='text-5xl font-bold leading-loose text-with-border max-lg:text-3xl max-sm:pl-5'>Follow us to update more information:</h2>
        <input type="email" placeholder='Your email' className='ring-1 ring-black w-1/3 h-[50px] px-5 rounded-xl' ref={inputRef} />
        <button className='ring-2 ring-customText bg-customText text-white font-bold px-6 py-3 hover:bg-backgroudColor hover:text-customText rounded-xl' onClick={Subcribe}>Subcribe!</button>
    </div>
  )
}

export default Newletter

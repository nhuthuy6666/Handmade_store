import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { scrollToTop } from '../helpers/scrollToTop';
import { FaCartPlus } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';

const Card = ({id, img, name, current_price, old_price}) => {

     const {AddToCart, AddQuantity} = useContext(ShopContext);

     const [quantity, setQuantity] = useState(0);

     const PlusQuantity = () => {
          setQuantity((prevQuantity) => prevQuantity + 1);
     }

     const MinusQuantity = () => {
          setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
     }

     const AddNow = (id) => {
          AddToCart(id);
          scrollToTop();
     }

  return (
    <div className='bg-white w-[300px] h-[480px] m-5 inline-block p-5 ring-0 ring-customText rounded-xl'>
      <div className='relative'>
        <div className=' bg-white px-3 py-3 rounded-full absolute top-[110px] left-[110px] hover:shadow-lg transform hover:scale-125 transition-transform duration-300'>
            <Link to = {`/product/${id}`} onClick={scrollToTop}><IoSearch /></Link>
        </div>
        <img src={img} alt="" width={260} height={260} className='rounded-xl' />
        {old_price === 0? (""):(<p className='cursor-default absolute top-2 right-2 ring-2 ring-customText text-customText bg-backgroudColor px-2 py-1 font-bold rounded-lg'>Sale!</p>)}
      </div>
      <div className='mt-4'>
           <div className=''>
                <p className='font-bold cursor-default'>{name}</p>
           </div>
           <div className='mt-2 flex gap-5 cursor-default'>
                <p className='font-bold'>{current_price}$</p>
                <p className='line-through'>{old_price === 0?"":`${old_price}$`}</p>
           </div>
           <div className='flex gap-5 mt-2'>
                <FaSquareMinus className='text-2xl cursor-pointer' onClick={MinusQuantity} />
                <input type="text" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='w-[50px] ring-2 ring-black rounded-sm text-sm px-5 font-bold'/>
                <FaSquarePlus className='text-2xl cursor-pointer' onClick={PlusQuantity} />
           </div>
          <div className='flex items-start justify-start gap-5 mt-6 text-sm'>
          <button onClick={() => {AddQuantity(id, quantity)}} className='bg-customText text-white ring-2 ring-customText font-bold px-2 py-1 rounded-xl hover:bg-backgroudColor hover:text-customText flex gap-2 items-center justify-center'>
          <FaCartPlus /> Add to card
           </button>
           <NavLink to='/cart'>
           <button onClick={() => {AddNow(id)}} className='bg-customText text-white ring-2 ring-customText font-bold px-2 py-1 rounded-xl hover:bg-backgroudColor hover:text-customText'>
                Buy now
           </button>
           </NavLink>
          </div>
      </div>
    </div>
  )
}

export default Card

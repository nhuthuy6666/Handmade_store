import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../helpers/scrollToTop';

const ProductDisplay = (props) => {

    const {productdetail} = props;
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
    <div className='m-10 bg-white p-3 max-sm:m-2 rounded-xl'>
      <div className='lg:flex'>
       <div className='max-lg:flex items-center justify-center'>
            <img src={productdetail.img} alt="" className='w-[53rem] h-[25rem] max-sm:w-[20rem] max-sm:h-[20rem] max-lg:w-[25rem] rounded-xl' />
       </div>
        <div className='ml-10 flex flex-col items-start justify-center max-lg:ml-2 max-lg:mt-5'>
            <p className='text-2xl font-bold cursor-default'>{productdetail.name}</p>
            <p className='flex items-center justify-start gap-1 mt-5 text-customText cursor-default'> 4,5 <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> | 640 Evaluate | 1,4K Sold</p>
            <div className='flex gap-5 items-center justify-start mt-5 cursor-default'>
                <p className='text-xl font-bold'>{productdetail.current_price}$</p>
                <p className='line-through'>{productdetail.old_price === 0? "": `${productdetail.old_price}$`}</p>
                {productdetail.old_price === 0? (""):(<p className='cursor-default ring-2 ring-customText text-customText bg-backgroudColor px-1 font-bold rounded-lg'>Sale!</p>)}
            </div>
            <div className='mt-5 cursor-default'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, voluptate earum. Nostrum nihil fugiat ad molestiae velit vero et fuga non corrupti facere. Exercitationem maiores minus quas dicta sed adipisci.</p>
            </div>
            <div className='flex gap-5 mt-8'>
                <FaSquareMinus className='text-2xl cursor-pointer' onClick={MinusQuantity} />
                <input type="text" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='w-[50px] ring-2 ring-black rounded-sm text-sm px-5'/>
                <FaSquarePlus className='text-2xl cursor-pointer' onClick={PlusQuantity} />
           </div>
           <div className='flex items-start justify-start gap-5 mt-6 text-sm'>
           <button onClick={() => {AddQuantity(productdetail.id, quantity)}} className='bg-customText text-white ring-2 ring-customText font-bold px-2 py-1 rounded-xl hover:bg-backgroudColor hover:text-customText flex gap-2 items-center justify-center'>
           <FaCartPlus /> Add to card
           </button>
           <NavLink to='/cart'>
           <button onClick={() => {AddNow(productdetail.id)}} className='bg-customText text-white ring-2 ring-customText font-bold px-2 py-1 rounded-xl hover:bg-backgroudColor hover:text-customText'>
                Buy now
           </button>
           </NavLink>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ProductDisplay;

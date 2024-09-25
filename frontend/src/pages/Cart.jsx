import React, { useContext } from 'react';
import Bill from '../components/Bill';
import { ShopContext } from '../Context/ShopContext';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Cart = () => {

  const{RemoveFromCart, AddToCart, RemoveAll, product, itemCart} = useContext(ShopContext);
  
  return (
    <div className='p-10 max-md:pl-4 bg-cardColor'>
      <div>
        <table className='w-full'>
          <thead className=''>
            <tr className=''>
              <th className='p-1 py-2 cursor-default'>Products</th>
              <th className='p-1 py-2 cursor-default'>Title</th>
              <th className='p-1 py-2 cursor-default'>Price</th>
              <th className='p-1 py-2 cursor-default'>Quantity</th>
              <th className='p-1 py-2 cursor-default'>Total</th>
              <th className='p-1 py-2 cursor-default'>Details</th>
            </tr>
          </thead>
          <tbody>
            {product.map((e) => {
              if(itemCart[e.id] >= 1){
                return(
                  <tr key={e.id}>
                    <td className='p-1 py-2 cursor-pointer'><Link to = {`/product/${e.id}`} className='flex justify-center items-center'><img src={e.img} alt="" className='w-[50px] h-[50px]' /></Link></td>
                    <td className='p-1 py-2 cursor-pointer'><Link to = {`/product/${e.id}`} className='flex justify-center items-center max-md:text-xs'>{e.name}</Link></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{e.current_price}$</div></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{itemCart[e.id]}</div></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{e.current_price * itemCart[e.id]}$</div></td>
                    <td><div className='flex justify-center items-center gap-3 text-xl max-md:text-sm cursor-pointer'><FaPlusSquare onClick={() => {AddToCart(e.id)}} /> <FaMinusSquare onClick={() => {RemoveFromCart(e.id)}} /> <FaTrashCan onClick={() => {RemoveAll(e.id)}} /></div></td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <Bill />
    </div>
  )
}

export default Cart


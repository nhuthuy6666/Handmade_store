import React from 'react';
import Card from './Card';
import NEW from '../assets/new';

const New = () => {
  return (
    <div>
      <div className='bg-cardColor p-10 pb-20 max-md:p-3'>
        <h2 className='text-3xl flex items-center justify-center font-bold text-customText py-10 cursor-default'>New Products</h2>
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:flex flex-col items-center justify-center'>
          {NEW.map((product) => (
            <Card key={product.id} id={product.id} img={product.img} name = {product.name} current_price = {product.current_price} old_price = {product.old_price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default New

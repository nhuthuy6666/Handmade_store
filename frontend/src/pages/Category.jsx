import React, { useEffect, useState } from 'react';
import Card from '../components/Card';


const Category = ({category, banner}) => {

  const [products, setProducts] = useState([]);

  const fetchInfo = async() => {
    await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => {setProducts(data)})
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='pt-10 pb-10 bg-cardColor'>
      <div className='flex items-center justify-center'>
        <img src={banner} alt=""/>
      </div>
      <div className='bg-cardColor p-3'>
        <h2 className='text-3xl flex items-center justify-center font-bold text-customText py-10 cursor-default'>Our Products</h2>
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:flex flex-col items-center justify-center'>
          {products.map((product) => {
            if(product.category === category){
              return(<Card key={product.id} id={product.id} img={product.img} name = {product.name} current_price = {product.current_price} old_price = {product.old_price} />)
            }
            return null;
          })}
        </div>
      </div>
    </div>
  )
}

export default Category;
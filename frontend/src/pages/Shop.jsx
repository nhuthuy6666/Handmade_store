import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import banner5 from '../assets/banner5.jpg';
import { IoSearch } from "react-icons/io5";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);
    const inputRef = useRef(null);

    const fetchInfo = async() => {
        await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => {setProducts(data); setSearch(data)});
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const ClickSearch = () => {
        const inputValue = inputRef.current.value.toLowerCase();
        const filtered = products.filter((product) => (product.name.toLowerCase().includes(inputValue.toLowerCase())));
        setSearch(filtered);
    }

  return (
    <div className='pt-10 pb-10 bg-cardColor'>
      <div className='flex items-center justify-center'>
        <img src={banner5} alt="" />
      </div>
      <div className='bg-cardColor p-3'>
        <h2 className='text-3xl flex items-center justify-center font-bold text-customText py-10 cursor-default'>Handmade Store</h2>
        <div className='flex items-start justify-end mr-10 gap-2 max-sm:mr-5'>
            <input type="text" placeholder='Product' className='w-[20rem] h-[40px] pl-5 rounded-xl' ref={inputRef} />
            <button className='ring-2 ring-customText bg-customText text-white hover:bg-backgroudColor hover:text-customText p-3 rounded-xl' onClick={ClickSearch}>
               <IoSearch />
            </button>
      </div>
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:flex flex-col items-center justify-center'>
          {search.map((product) => {
              return(<Card key={product.id} id={product.id} img={product.img} name = {product.name} current_price = {product.current_price} old_price = {product.old_price} />)
          })}
        </div>
      </div>
    </div>
  )
}

export default Shop

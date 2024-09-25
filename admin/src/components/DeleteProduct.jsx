import React, { useEffect, useState, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

const DeleteProduct = () => {

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
        const inputValue = inputRef.current.value;
        const filtered = products.filter((product) => (product.id.toString().includes(inputValue)));
        setSearch(filtered);
    }

    const DeleteProduct = async(productId) => {
        let responseData;
        await fetch('http://localhost:4000/deleteproduct', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: productId}),
        }).then((data) => data.json()).then((data) => responseData = data);
        fetchInfo();
    }

  return (
    <div className='mt-10'>
        <div className='flex gap-3'>
            <input type="text" placeholder='ID' className='w-[30rem] h-[38px] rounded-xl ring-1 ring-black pl-3' ref={inputRef} />
            <button onClick={ClickSearch} className='bg-customColor text-black px-3 py-3 ring-1 ring-black rounded-xl font-bold hover:text-customText'>
            <IoSearch />
            </button>
        </div>
          <table className='w-full mt-20 max-sm:mt-10'>
            <thead>
                <tr>
                    <th className='p-1 py-2 cursor-default'>ID</th>
                    <th className='p-1 py-2 cursor-default'>Product</th>
                    <th className='p-1 py-2 cursor-default'>Name</th>
                    <th className='p-1 py-2 cursor-default'>Delete</th>
                    
                </tr>
            </thead>
            <tbody className='gap-3'>
                {search.map((product) => (
                <tr key={product.id}>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{product.id}</div></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'><img src={product.img} alt="" width={60} height={60} className='max-sm:w-[50px] max-sm:h-[50px]' /></div></td>
                    <th className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{product.name}</div></th>
                    <th className='p-1 py-2 cursor-pointer'><div className='flex justify-center items-center max-md:text-sm'><FaTrashAlt onClick={() => DeleteProduct(product.id)} /></div></th>
                </tr>
                ))}
            </tbody>
          </table>
    </div>
  )
}

export default DeleteProduct

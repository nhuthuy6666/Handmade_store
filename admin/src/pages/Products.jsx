import React, { useState } from 'react';
import AllProducts from '../components/AllProducts';
import DeleteProduct from '../components/DeleteProduct';
import AddProduct from '../components/AddProduct';

const Products = () => {

  const [state, setState] = useState("All Products");

  const State = (e) => {
    setState(e.target.value);
  }

  return (
    <div className='p-20 max-sm:px-5'>
      <div>
        <select name="state" onChange={State} id="" className='bg-customColor font-bold text-black ring-1 ring-black rounded-xl px-4 py-2 hover:text-customText'>
          <option value="All Products">All Product</option>
          <option value="Add Product">Add Product</option>
          <option value="Delete Product">Delete Product</option>
        </select>
      </div>
      {state === "All Products"?(
        <AllProducts />
      ):state === "Delete Product"?(
        <DeleteProduct />
      ):(<AddProduct />)}
    </div>
  )
}

export default Products

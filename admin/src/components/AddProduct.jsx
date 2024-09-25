import React, { useState } from 'react';
import upload from '../assets/upload.jpg';

const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: "",
        img: "",
        current_price: "",
        old_price: 0,
        category: "furniture",
    })

    const uploadImg = (e) =>{
        setImage(e.target.files[0]);
    }

    const uploadProduct = (e) =>{
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }

    const AddProduct = async() => {
        let responseData;
        let product = newProduct;
        let formData = new FormData();
        formData.append("product", image);

        await fetch('http://localhost:4000/upload',{
            method: "POST",
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((data) => data.json()).then((data) => responseData = data);

        if(responseData.success){
            product.img = responseData.image_url;
            await fetch('http://localhost:4000/addproduct',{
                method: "POST",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }).then((data) => data.json()).then((data) => {
                data.success?alert("Product Added"):alert("Upload failed")
            })
        }
    }

  return (
    <div className='flex justify-center items-center'>
      <div className='ring-1 ring-black rounded-xl mt-10 p-10 inline-block bg-customColor max-md:w-full'>
        <div className='flex flex-col gap-10'>
            <h2 className='text-2xl font-bold'>New Product</h2>
            <div className='flex flex-col gap-5'>
                <label htmlFor="name" className='text-xl font-bold'>Name: </label>
                <input onChange={uploadProduct} value={newProduct.name} type="text" placeholder='Product name'name='name' className='w-[30rem] h-[40px] pl-5 ring-1 ring-black rounded-xl max-md:w-[25rem] max-sm:w-[20rem]' />
                <label htmlFor="current_price" className='text-xl font-bold'>Current price: </label>
                <input onChange={uploadProduct} value={newProduct.current_price} type="text" placeholder='Product price'name='current_price' className='w-[30rem] h-[40px] pl-5 ring-1 ring-black rounded-xl max-md:w-[25rem] max-sm:w-[20rem]' />
                <label htmlFor="old_price" className='text-xl font-bold'>Old price: </label>
                <input onChange={uploadProduct} value={newProduct.old_price} type="text" placeholder='Product price'name='old_price' className='w-[30rem] h-[40px] pl-5 ring-1 ring-black rounded-xl max-md:w-[25rem] max-sm:w-[20rem]' />
                <label htmlFor="category" className='text-xl font-bold'>Category: </label>
                <select onChange={uploadProduct} value={newProduct.category} name='category' className='w-[30rem] h-[40px] pl-5 ring-1 ring-black rounded-xl max-md:w-[25rem] max-sm:w-[20rem]'>
                    <option value="furniture">furniture</option>
                    <option value="wallart">wallart</option>
                    <option value="accessories">accessories</option>
                    <option value="plants">plants</option>
                </select>
               <div className='mt-3'>
               <label htmlFor="picture">
                    <img src={image?URL.createObjectURL(image):upload} alt="" width={120} height={120} className='rounded-xl inline-block ring-1 ring-black' />
                </label>
                <input onChange={uploadImg} type="file" name='img' id='picture' hidden className='max-w-80 w-full py-3 px-4' />
               </div>
            </div>
            <button onClick={AddProduct} className='bg-customText text-white ring-2 ring-customText rounded-xl px-4 py-2 font-bold mt-5 hover:text-customText hover:bg-backgroudColor'>
                Submit
            </button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct

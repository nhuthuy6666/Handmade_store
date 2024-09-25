import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';
import New from '../components/New';

const Product = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState([]);

    const fetchInfo = async() => {
        await fetch('http://localhost:4000/allproducts').then((data) => data.json()).then((data) => {setProduct(data)});
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const detailproduct = product.find((e) => e.id === Number(productId));

    if(!detailproduct){
        return(
            <div>Product not found</div>
        )
    }
  return (
    <div className='p-5 pt-20 bg-cardColor max-md:p-2 max-md:pt-10'>
      <ProductHd productdetail = {detailproduct} />
      <ProductDisplay productdetail = {detailproduct} />
      <New />
    </div>
  )
}

export default Product

import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ProductHd = (props) => {

const {productdetail} = props;

  return (
    <div className='flex items-center justify-start gap-3 font-bold capitalize cursor-default max-sm:text-xs'>
      Home <IoIosArrowForward /> Store <IoIosArrowForward /> {productdetail.category} <IoIosArrowForward /> {productdetail.name}
    </div>
  )
}

export default ProductHd

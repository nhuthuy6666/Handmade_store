import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const Bill = () => {

    const {GetTotalAmount} = useContext(ShopContext);

  return (
    <div>
        <div className='p-10 max-md:pl-4 flex gap-40 ring-1 ring-black rounded-xl mt-10 max-md:gap-20 bg-white'>
            <div className='flex flex-col gap-10 font-bold'>
                <p className='cursor-default'>Total Amount:</p>
                <p className='cursor-default'>Shipping Fee:</p>
                <p className='cursor-default'>Discount:</p>
                <p className='cursor-default'>Payment:</p>
                <p className='cursor-default'>Address:</p>
            </div>
            <div className='flex flex-col gap-10'>
                <p className='cursor-default'>{GetTotalAmount() === 0?"":`${GetTotalAmount()}$`}</p>
                <p className='cursor-default'>{GetTotalAmount() === 0?"": "10$"}</p>
                <p className='cursor-default'>{GetTotalAmount() === 0?"": "0$"}</p>
                <p className='font-bold cursor-default'>{GetTotalAmount() === 0?"":`${GetTotalAmount() + 10}$`}</p>
                {GetTotalAmount() === 0?(""):(<div>
                    <input type="text" placeholder='Your Address' className='w-[30rem] h-[2rem] pl-2 ring-1 ring-black rounded-lg max-lg:w-[20rem] max-sm:w-[8rem]' />
                </div>)}
            </div>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <button className='bg-customText text-white ring-2 ring-customText px-8 py-4 font-bold rounded-xl hover:bg-backgroudColor hover:text-customText'>
                Send
            </button>
        </div>
    </div>
  )
}

export default Bill

import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='w-[65%] h-[60vh] flex m-auto py-[0px] px-[140px] mb-[150px] bg-[#f5aef784]'>
        <div className='flex-1 flex flex-col justify-center'>
            <h1 className='text-[80px] font-light text-[#171717]'>EXCLUSIVE</h1>
            <h1 className='text-[60px] font-light text-[#171717]'>Offers for you</h1>
            <p className='text-[22px] font-extralight text-[#171717]'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-normal mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className='flex-1 flex items-center justify-end pt-[50px ]'>
            <img className='w-[335px]' src={exclusive_image} alt=""/>
        </div>
    </div>
  )
}

export default Offers
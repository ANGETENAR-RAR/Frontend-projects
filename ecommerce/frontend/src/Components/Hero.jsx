import React from 'react'
import hand_icon from '../Components/Assets/hand_icon.png'
import arrow_icon from '../Components/Assets/arrow.png'
import hero_image from '../Components/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-screen bg-red-200 flex'>
        <div className='flex flex-1 flex-col gap-[20px] justify-center pl-[120px] leading-[1.1]'>
            <h2 className='text-black text-[26px] font-normal'>
                NEW ARRIVALS ONLY
            </h2>
            <div>
                <div className='flex items-center gap-[20px]'>
                    <p className='text-black font-light text-[100px]'>new</p>
                    <img className='w-[105px]' src={hand_icon} alt='' />
                </div>
                <p className='text-black font-light text-[100px]'>Collections</p>
                <p className='text-black font-light text-[90px]'>for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] text-white bg-[#ff4141] text-[22px] font-light'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img className='w-[500px]' src={hero_image} alt='' />
        </div>
    </div>
  )
}

export default Hero
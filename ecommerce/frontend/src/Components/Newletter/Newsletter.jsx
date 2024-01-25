import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[65%] bg-[#f5aef784] h-[40vh] flex flex-col justify-center items-center m-auto mb-[150px] gap-[30px] px-[140px] py-[0px]'>
        <h1 className='text-[#454545] text-[50px] font-medium'>Get exclusive offers on your Email!</h1>
        <p className='text-[#454545] text-[20px]'>Subscribe to our newletter to stay updated.</p>
        <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-solid border-[#e3e3e3]'>
            <input className='w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px]' type='email' placeholder='Your Email id' />
            <button className='w-[210px] h-[70px] bg-black text-white text-[16px] rounded-[80px] cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
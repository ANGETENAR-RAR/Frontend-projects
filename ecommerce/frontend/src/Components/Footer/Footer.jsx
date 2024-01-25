import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
        <div className='flex items-center gap-[20px]'>
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-[46px] font-light'>SHOPPER</p>
        </div>
        <ul className='flex gap-[50px] text-[#252525] font-extralight list-none text-[18px] '>
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
        <div className='flex gap-[20px]'>
            <div className='p-[10px] pb-[2px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]'>
                <img src={insta_icon} alt="" />
            </div>
            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]'>
                <img src={pinterest_icon} alt="" />
            </div>
            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]'>
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-center font-extralight gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[15px]'>
            <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
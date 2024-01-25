import React, { useState } from 'react'
import logo from '../logo.png'
import cart_icon from '../cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")

  return (
    <div className="flex font-Pokemon justify-between shadow-[0_1px_3px_-2px_rgba(0,0,0)] p-[25px]">
        <div className="flex items-center gap-[10px]">
            <img src={logo} alt='' />
            <p className="font-light text-[38px]">SHOPPER</p>
        </div>
        
            <ul className="flex items-center gap-[50px]  text-[20px] font-light text-[#626262]">
                <li onClick={()=>{setMenu("shop")}} className="flex items-center flex-col gap-[3px] cursor-pointer"><Link to='/' style={{textDecoration:'none'}} >Shop</Link>{menu==="shop"?<hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-red-500"/>:<></>}</li>
                
                <li onClick={()=>{setMenu("men")}} className="flex items-center flex-col gap-[3px] cursor-pointer"><Link style={{textDecoration:'none'}}  to='/men'>Men</Link>{menu==="men"?<hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-red-500"/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}} className="flex items-center flex-col gap-[3px] cursor-pointer"><Link style={{textDecoration:'none'}}  to='/women'>Women</Link>{menu==="women"?<hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-red-500"/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}} className="flex items-center flex-col gap-[3px] cursor-pointer"><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="kids"?<hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-red-500"/>:<></>}</li>
            </ul>
        
        <div className="flex gap-[45px] items-center">
            <Link to='/login'><button className="w-[157px] h-[58px] outline-none border-[1px]  border-[#7a7a7a] border-solid rounded-[75px] text-[#515151] cursor-pointer text-[20px] font-light bg-white active:bg-[#f3f3f3]">Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className="w-[22px] h-[22px] flex justify-center items-center ml-[-55px] mt-[-35px] rounded-[11px] bg-red-500 text-white">0</div>
        </div>
    </div>
  )
}

export default Navbar
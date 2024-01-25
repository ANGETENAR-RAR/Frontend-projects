import React from 'react'
import data_product from '../Assets/data'
import Item from '../items/Item'
const Popular = () => {
  return (
    <div className='flex flex-col h-[90vh]  items-center gap-[10px]'>
        <h1 className='text-[50px] text-[#171717] font-light'>Popular in Women</h1>
        <hr className='w-[300px] h-[3px] rounded-[12px] bg-[#252525]'/>
        <div className='mt-[50px] w-[90%]  flex justify-center gap-[10px]'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular
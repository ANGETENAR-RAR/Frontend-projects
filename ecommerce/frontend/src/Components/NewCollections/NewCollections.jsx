import React from 'react'
import new_collection from '../Assets/new_collections';
import Item from '../items/Item'

const NewCollections = () => {
  return (
    <div className='flex mb-[600px] flex-col h-[90vh]  items-center gap-[10px]'>
        <h1 className='text-[50px] text-[#171717] font-light'>New Collections</h1>
        <hr className='w-[300px] h-[3px] rounded-[12px] bg-[#252525]'/>
        <div className="grid grid-cols-4 mt-[50px] gap-[30px]">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections
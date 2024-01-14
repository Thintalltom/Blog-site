import React from 'react'
import { FaHeart, FaRegCircleUser } from "react-icons/fa6";
const Nabar = () => {
    
  return (
    <div>
        <div className='flex p-4 gap-[20px] items-center justify-center bg-zinc-500'>
        <p>Logo</p>
        <p>Home</p>
        <p>Create</p>
        <input type='text' placeholder='search' className='bg-zinc-200 w-[900px] p-[5px] rounded' />
        <div className='flex justify-center items-center gap-[30px]'>
        <FaHeart className='text-2xl' />
        <FaRegCircleUser className='text-2xl' />
        </div>
       
        </div>
    </div>
  )
}

export default Nabar
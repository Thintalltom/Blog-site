import React from 'react'
import { FaHeart, FaRegCircleUser } from "react-icons/fa6";
import logo from '../../assets/logo.png'
const Nabar = () => {

    
  return (
    <div>
        <div className='flex p-4 gap-[20px] items-center justify-center'>
        <img src={logo} className='w-[50px]' />
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
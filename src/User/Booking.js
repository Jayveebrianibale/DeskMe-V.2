import React from 'react'
import Logo from '../assets/Logo.png'
import { MdOutlineDashboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { RiBookLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Booking() {
  return (
    <div className='bg-gray-100'>
        <div className='border-l-2 border-black w-72 h-[650px] bg-white'>
            <div>
                <img className='w-52 pb-10 ml-8' src={Logo}/>
            </div>

            <div className='flex font-bold text-2xl pb-8 pl-10'>
                <button className='text-2xl flex gap-3'>
                <p className='text-4xl'><MdOutlineDashboard /></p>
                <h1>Dashboard</h1>
                </button>
            </div>

            <div className='flex font-bold text-2xl pb-8 pl-10'>
                <button className='text-2xl flex gap-3'>
                <p className='text-4xl'><RiBookLine /></p>
                <h1>Booking</h1>
                </button>
              
            </div>

            <div className='flex font-bold text-2xl pb-8 pl-10'>
                <button className='text-2xl flex gap-3'>
                <p className='text-4xl pt-4'><IoBookOutline /></p>
                <h1>Manage<br/>Booking</h1>
                </button>
            </div>

            <div className='flex font-bold text-2xl pb-8 pl-10 '>
                <button className='flex text-2xl gap-3 mt-48'>
                    <p className='text-4xl'><RiLogoutCircleRLine /></p>
                    <h1>Sign-out</h1>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Booking

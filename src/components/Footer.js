import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiQuestionMark } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { PiFigmaLogoBold } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";

import Logo from '../assets/Logo.png'




export default function Footer() {
  return (
    <div>
      <div className='ml-40 pt-8'>
        <h1 className='text-5xl font-black pb-4'>Frequently asked questions</h1>
        <p className='text-2xl pb-6'>Got questions? Weve got answers! Check out our FAQ's for quick <br/>solutions and breeze through any uncertainties.</p>
      </div>

        <div> 
            <div className='flex justify-center font-medium pl-96 text-xl pb-3'>
                <button>View All</button>
            </div>
            <div className=' h-[1px] bg-gray-300 w-[55%] ml-40'></div>

            <div className='flex'>
                <div className='flex-col'>
                    <div className='flex ml-40 gap-32'>
                        <h1 className='text-2xl pt-4 pb-4'>How do I make a reservation using the booking system?</h1>
                        <button className='text-2xl pt-2'><IoIosArrowDown /></button>
                    </div>

                    <div className=' h-[1px] bg-gray-300 w-[82%] ml-40'></div> 

                    <div className='flex ml-40 gap-10'>
                        <h1 className='text-2xl pt-4 pb-4'>What happens if i encounter issues during the booking process?</h1>
                        <button className='text-2xl pt-2'><IoIosArrowDown /></button>
                    </div>
                    <div className=' h-[1px] bg-gray-300 w-[82%] ml-40'></div> 

                    <div className='flex ml-40 gap-32'>
                        <h1 className='text-2xl pt-4 pb-4'>Can I make changes to my booking after it's confirmed?</h1>
                        <button className='text-2xl pt-2'><IoIosArrowDown /></button>
                    </div>
                    <div className=' h-[1px] bg-gray-300 w-[82%] ml-40'></div> 
                </div>
                <div className='text-9xl ml-40'><RiQuestionMark /></div>

            </div>
        </div>

        <div className="flex justify-center pt-20 pb-16 gap-2">
            <div>
             <input className='border-2 border-black rounded-full p-2 w-[700px]' placeholder='Enter your email:'></input>
            </div>
           <button className=' text-white bg-black font-semibold rounded-full text-sm px-5 p-2 w-[10%]'>Submit</button>
        </div> 

        <div className='flex justify-center gap-20 pt-10 bg-gray-100'>
            <div className='pb-10'>
                <img className='w-48' src={Logo}/>
                <h1 className='text-xl font-light'>Hotdesk Booking System</h1>
                <h1 className='text-xl font-light'>BSIS 3 | Team 6</h1>
            </div>

             <div>
                 <h1 className='text-2xl font-black pb-5'>Quick links</h1>
                 <h1 className='text-lg'>Home</h1>
                 <h1 className='text-lg'>About Us</h1>
                 <h1 className='text-lg'>Services</h1>
                 <h1 className='text-lg'>Contact Us</h1>
             </div>

             <div>
                 <h1 className='text-2xl font-black pb-5'>Company</h1>
                 <h1 className='text-lg'>Terms & Condition</h1>
                 <h1 className='text-lg'>Privacy Policy</h1>
             </div>

             <div>
                 <h1 className='text-2xl font-black pb-5'>Get in touch</h1>
                 <div className='flex justify-center gap-2'>
                    <h1 className='text-3xl'><FaFacebook/></h1>
                    <h1 className='text-3xl'><RiLinkedinLine /></h1> 
                 </div>
             </div>

             <div>
                 <h1 className='text-2xl font-black pb-5'>Special thanks to</h1>
                 <div className='flex justify-center gap-2'>
                    <h1 className='text-3xl'><PiFigmaLogoBold /></h1>
                    <h1 className='text-3xl'><SiTailwindcss /></h1> 
                 </div>
                    <div className='flex justify-center gap-2'>
                        <h1 className='text-3xl'><BiLogoTypescript /></h1>
                        <h1 className='text-3xl'><FaGithubSquare /></h1>
                    </div>
             </div>

        </div>

    </div>
  )
}

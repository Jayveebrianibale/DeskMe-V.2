import React from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";

function Login() {
  return (
    <div className='flex justify-center items-center mt-40 mb-40'>
      <div className='box-border border-2 w-[500px] h-[600px] border-black rounded-xl'>
        <div>
            <div className='ml-12 pb-16'>
                <button className='ml-[415px] text-2xl pt-3'><HiOutlineXMark /></button>
                <h1 className='text-4xl font-black'>Sign-in</h1>
                <p>Stay updated on your bookings.</p>
            </div>
            
            <div className='text-center'>
                <div className='pb-5'>
                    <input className='border border-black rounded-lg py-3 px-2 w-[80%]' name='email' placeholder='Username or email:'/>
                </div>

                <div>
                    <input className='border border-black rounded-lg py-3 px-2 w-[80%]' name='password' placeholder='Password:'/>
                </div>
            </div>

            <div className='list-none ml-12 pt-2'>
                <li className='font-medium'><a href='#'>Forgot password?</a></li>
            </div>

            <div className='text-center pt-10 pb-5'>
                <button className=' text-white bg-black font-semibold rounded-full text-xl py-3 w-[80%] '>Sign in</button>
            </div>

            <div className='flex justify-center gap-5'>
                <div className='border-b border-gray-500 w-[35%] '></div>
                <h1 className='text-xl font-light'>or</h1>
                <div className='border-b border-gray-500 w-[35%] '></div>
            </div>
           
            <div className='text-center pt-10 pb-5'>
                <button className=' text-bold border-black border font-semibold rounded-full text-xl py-3 w-[80%] '>
                <div className='flex justify-center gap-2'>
                    <h1 className='pt-1'><FcGoogle /></h1>
                    <h1>Sign in with Google</h1>
                </div>
                </button>
            </div>




        </div>




      </div>
    </div>
  )
}

export default Login

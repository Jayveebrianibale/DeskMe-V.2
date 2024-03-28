import React, { useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex-col flex justify-center items-center mt-40 mb-40'>
      <div className='box-border border-2 w-[500px] h-[620px] border-black rounded-xl'>
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

                <div className='relative'>
                    <input className='border border-black rounded-lg py-3 px-2 w-[80%]' type={showPassword ? 'text' : 'password'}
                     id='password' value={password} onChange={handleChange} placeholder='Password:'/>
                    <button className='absolute top-1/2 transform -translate-y-1/2 right-4 focus:outline-none pr-12' onClick={togglePasswordVisibility}>
                      {showPassword ? <BsEye />:<BsEyeSlash /> } 
                    </button>
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
                <button className=' text-bold border-black bg-gray-200 border font-semibold rounded-full text-xl py-3 w-[80%] '>
                <div className='flex justify-center gap-2'>
                    <h1 className='pt-1'><FcGoogle /></h1>
                    <h1>Sign in with Google</h1>
                </div>
                </button>
            </div>
        </div>
      </div>
        <div className='text-center text-xl font-light pt-3'>
            <h1><span>&#169;</span>2023 DeskMe, All right reserved. Privacy Policy <br/> and Terms & Conditions.</h1>
        </div>
    </div>
  )
}

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineXMark } from "react-icons/hi2";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.status === 200) {
        navigate('/authenticate');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
        console.error('Error logging in:', error);
      }
    }
  };

  return (
    <div className='flex-col flex justify-center items-center mt-12'>
      <div className='box-border border-2 w-[500px] h-[500px] border-black rounded-xl'>
        <div>
            <div className='ml-12 pb-16'>
                <button className='ml-[415px] text-2xl pt-3'><HiOutlineXMark /></button>
                <h1 className='text-4xl font-black'>Sign-in</h1>
                <p>Stay updated on your bookings.</p>
            </div>
            
            <div className='text-center'>
                <div className='pb-5'>
                    <input className='border border-black rounded-lg py-3 px-2 w-[80%]' name='email' value={email} onChange={handleChangeEmail} placeholder='Username or email:'/>
                </div>

                <div className='relative'>
                    <input className='border border-black rounded-lg py-3 px-2 w-[80%]' type={showPassword ? 'text' : 'password'} value={password} onChange={handleChangePassword} placeholder='Password:'/>
                    <button className='absolute top-1/2 transform -translate-y-1/2 right-4 focus:outline-none pr-12' onClick={togglePasswordVisibility}>
                      {showPassword ? <BsEye />:<BsEyeSlash /> } 
                    </button>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>

            <div className='list-none ml-12 pt-2'>
                <li className='font-medium'><a href='/'>Forgot password?</a></li>
            </div>

            <div className='text-center pt-10 pb-5'>
                <button onClick={handleClick} className=' text-white bg-black font-semibold rounded-full text-xl py-3 w-[80%] '>Sign in</button>
            </div>
        </div>
      </div>
        <div className='text-center font-light pt-3'>
            <h1><span>&#169;</span>2023 DeskMe, All right reserved. Privacy Policy <br/> and Terms & Conditions.</h1>
        </div>
    </div>
  );
}

export default Login;

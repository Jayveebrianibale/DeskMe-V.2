import React from 'react';
import desk1 from '../assets/desk1.avif';    
import desk2 from '../assets/desk2.avif';

function Landing() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center px-4 md:px-12 lg:px-20 xl:px-36 pt-8 md:pt-12 pb-8 md:pb-14'>
        <div className='md:w-1/2'>
          <div className=''>
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>
              <span className='text-[44px] font-bold'>Make every <i><span className='font-black'>click count.</span></i></span>
              <p className='font-normal md:text-lg lg:text-3xl mt-5'>"Book. Click. Thrive." <br/>Elevate with DeskMe where <br/>booking meets brilliance!</p>
            </h1>
            <button className='text-white mt-5 bg-black font-semibold rounded-lg text-sm px-5 py-2.5 md:px-6 md:py-3 lg:text-base lg:px-7 xl:text-lg xl:px-8 xl:py-4'>Book Now</button>
          </div>
        </div>

        <div className='md:w-1/2 md:flex hidden md:items-center md:justify-center pt-10 md:pt-0'>
          <div className='sm:flex flex-col md:flex-row md:gap-4'>
            <div className='md:pt-8 lg:pt-28'>
              <img className='h-48 md:h-64 lg:h-80 w-32 md:w-40 lg:w-48 rounded-xl border-2 border-black' src={desk1} alt="Desk 1"/>
            </div>
            <div className='md:pt-8 lg:pt-16'>
              <img className='h-48 md:h-64 lg:h-80 w-32 md:w-40 lg:w-48 rounded-xl border-2 border-black' src={desk2} alt="Desk 2"/> 
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Landing;

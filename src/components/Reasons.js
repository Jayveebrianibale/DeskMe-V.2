import React from 'react';
import { MdOnlinePrediction } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { BsCloudCheck } from "react-icons/bs";
import offer1 from '../assets/offer1.webp';
import offer2 from '../assets/offer2.webp';

function Reasons() {
  return (
    <div>
        <div className='text-center'>
            <div className='text-3xl md:text-4xl lg:text-5xl font-black pt-5 pb-2'>
              <h1>Reasons to choose DeskMe</h1>
            </div>

            <div className='text-lg md:text-xl lg:text-2xl pb-12 '>
                <h1>Where booking becomes a breeze! Your easy pass to <br/> hassle-free reservations. Swift, seamless, and stress-free!</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 justify-center items-center pb-12 '>
                <div className='box-border h-48 md:h-64 w-48 md:w-64 p-4 border-2 rounded-2xl border-black'>
                  <div className='text-5xl md:text-8xl pl-10 md:pl-16'><MdOnlinePrediction /></div>
                  <div className='text-base md:text-xl font-bold'>24/7 Online</div>
                  <div className='font-semibold text-sm md:text-base'><h1>"Round-the-clock <br/>excellence! We're here 24/7, <br/>because needs never <br/>sleep."</h1></div>
                </div>

                <div className='box-border h-48 md:h-64 w-48 md:w-64 p-4 border-2 rounded-2xl border-black'>
                  <div className='text-5xl md:text-8xl pl-10 md:pl-16'><GoBook /></div>
                  <div className='text-base md:text-xl font-bold'>Fast Booking</div>
                  <div className='font-semibold text-sm md:text-base'><h1>"Quick and easy! Fast <br/>booking, because your<br/>time matters."</h1></div>
                </div>

                <div className='box-border h-48 md:h-64 w-48 md:w-64 p-4 border-2 rounded-2xl border-black'>
                  <div className='text-5xl md:text-8xl pl-10 md:pl-16'><BsCloudCheck /></div>
                  <div className='text-base md:text-xl font-bold'>Cloud Storage</div>
                  <div className='font-semibold text-sm md:text-base'><h1>"Sky high storage, <br/>lightning-fast access<br/>your data's new home <br/>in the cloud!"</h1></div>
                </div>

            </div>

            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 pl-4 md:pl-12 xl:pl-48 pt-10'>
              <div className='h-96 w-[500px]'>
                  <img className='rounded-2xl border-2 border-black' src={offer1} alt="Offer 1"/>
              </div>

              <div className='w-full md:w-1/2 lg:w-1/3'>
                  <h1 className='text-3xl md:text-5xl font-black pt-8 pb-6'>We Offer</h1>
                  <p className='text-lg md:text-2xl'>Book with ease, experience with<br/>delight! Elevate your journey with<br/>our seamless booking - where<br/>every click sparks satisfaction.Your <br/> great adventure starts here!</p>
              </div>

            </div>

            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 md:pl-12 xl:pl-48 '>
              <div className='w-full md:w-1/2 lg:w-1/3'>
                    <h1 className='text-3xl md:text-5xl font-black pt-8 pb-6 md:pb-10'>Innovative</h1>
                    <p className='text-lg md:text-2xl'>Experience the future with our<br/>innovative system where<br/>simplicity meets sophistication.<br/>Redefining possibilities, one<br/>breakthrough at a time.</p>
              </div>

              <div className='h-96 w-[500px]'>
                  <img className='rounded-2xl border-2 border-black' src={offer2} alt="Offer 2"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons;
